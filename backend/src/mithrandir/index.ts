// Create a DocumentClient that represents the query to add an item
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import {createCipheriv, randomBytes, randomUUID} from 'crypto';
import {Hono} from 'hono';
import {handle} from 'hono/aws-lambda';
import {HTTPException} from 'hono/http-exception';

// Environment variables
const clientId = process.env.OAUTH_CLIENT_ID;
const redirectUrl = process.env.OAUTH_REDIRECT_URL;
const devRedirectUrl = process.env.OAUTH_DEV_REDIRECT_URL;
const tableName = process.env.AUTH_TOKENS_TABLE;

// Validate required environment variables
const requiredEnvVars = {
  OAUTH_CLIENT_ID: clientId,
  OAUTH_REDIRECT_URL: redirectUrl,
  OAUTH_DEV_REDIRECT_URL: devRedirectUrl,
  AUTH_TOKENS_TABLE: tableName,
};

const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvVars.join(', ')}`,
  );
}

// After validation, we can safely assert these values exist
const validatedClientId = clientId as string;
const validatedRedirectUrl = redirectUrl as string;
const validatedDevRedirectUrl = devRedirectUrl as string;
const validatedTableName = tableName as string;

const app = new Hono();

// Initialize DynamoDB client
const ddbClient = process.env.ENDPOINT_OVERRIDE
  ? new DynamoDBClient({endpoint: process.env.ENDPOINT_OVERRIDE})
  : new DynamoDBClient({});

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Helper functions
async function validateApiUrl(apiBaseURL?: string, tenant?: string): Promise<string> {
  if (!apiBaseURL && !tenant) {
    throw new HTTPException(400, {
      message: 'apiBaseURL or tenant must be provided',
    });
  }

  let apiURL;
  if (apiBaseURL) {
    apiURL = new URL(apiBaseURL);
    if (!apiURL.hostname) {
      throw new HTTPException(400, {message: 'apiBaseURL is not a valid URL'});
    }
  } else {
    apiURL = new URL(`https://${tenant}.api.identitynow.com`);
    if (!apiURL.hostname) {
      throw new HTTPException(400, {message: 'tenant is not valid'});
    }
  }

  if (!apiURL.origin) {
    throw new HTTPException(400, {
      message: 'apiBaseURL or tenant provided is invalid',
    });
  }

  return apiURL.origin;
}

async function getAuthInfo(baseURL: string) {
  try {
    const authInfoResp = await fetch(baseURL + `/oauth/info`);
    if (!authInfoResp.ok) {
      throw new Error('Error retrieving tenant info');
    }
    const authInfo = await authInfoResp.json();

    if (!authInfo?.authorizeEndpoint) {
      throw new Error('Error retrieving tenant info');
    }

    return authInfo;
  } catch (err) {
    throw new HTTPException(400, {
      message: 'Error retrieving tenant information',
    });
  }
}

async function storeAuthData(uuid: string, baseURL: string) {
  try {
    const objectToPut = {id: uuid, baseURL};
    await ddbDocClient.send(
      new PutCommand({TableName: validatedTableName, Item: objectToPut}),
    );
    return objectToPut;
  } catch (err) {
    console.error('Error creating item:', err);
    throw new HTTPException(400, {message: 'Error creating UUID'});
  }
}

async function getStoredData(uuid: string) {
  try {
    const data = await ddbDocClient.send(
      new GetCommand({TableName: validatedTableName, Key: {id: uuid}}),
    );
    if (!data.Item) {
      throw new HTTPException(400, {message: 'Invalid UUID'});
    }
    return data.Item;
  } catch (err) {
    console.error('Error retrieving item:', err);
    throw new HTTPException(400, {message: 'Error retrieving data'});
  }
}

async function exchangeCodeForToken(
  baseURL: string,
  code: string,
  redirectUri: string,
) {
  const tokenExchangeURL = new URL(baseURL + `/oauth/token`);
  tokenExchangeURL.searchParams.set('grant_type', 'authorization_code');
  tokenExchangeURL.searchParams.set('client_id', validatedClientId);
  tokenExchangeURL.searchParams.set('code', code);
  tokenExchangeURL.searchParams.set('redirect_uri', redirectUri);

  const tokenExchangeResp = await fetch(tokenExchangeURL, {
    method: 'POST',
  });

  if (!tokenExchangeResp.ok) {
    console.error('Token exchange failed:', await tokenExchangeResp.text());
    throw new HTTPException(400, {message: 'Error exchanging code for token'});
  }

  const tokenExchangeData = await tokenExchangeResp.json();

  if (!tokenExchangeData.access_token) {
    throw new HTTPException(400, {message: 'Invalid token response'});
  }

  return tokenExchangeData;
}

function encryptToken(tokenData: any, encryptionKey: string) {
  const iv = randomBytes(16);
  const encryptionKeyBuffer = Buffer.from(encryptionKey, 'hex');
  const cipher = createCipheriv('aes-256-cbc', encryptionKeyBuffer, iv);

  let encryptedToken = cipher.update(
    JSON.stringify(tokenData),
    'utf8',
    'hex',
  );
  encryptedToken += cipher.final('hex');

  return iv.toString('hex') + ':' + encryptedToken;
}

async function storeEncryptedToken(uuid: string, encryptedToken: string) {
  try {
    await ddbDocClient.send(
      new UpdateCommand({
        TableName: validatedTableName,
        Key: {id: uuid},
        UpdateExpression: 'set tokenInfo = :tokenInfo',
        ExpressionAttributeValues: {
          ':tokenInfo': encryptedToken,
        },
      }),
    );
  } catch (err) {
    console.error('Error updating item:', err);
    throw new HTTPException(400, {message: 'Error storing token'});
  }
}

// Retrieve a UUID, generate a random encryption key, and return the auth URL
app.post('/Prod/sailapps/uuid', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    throw new HTTPException(400, {
      message: 'Content-Type must be application/json',
    });
  }

  const body = await c.req.json();
  const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
  const authInfo = await getAuthInfo(baseURL);

  const uuid = randomUUID();
  const encryptionKey = randomBytes(32).toString('hex');
  const objectToPut = await storeAuthData(uuid, baseURL);

  const state = {id: uuid, encryptionKey};
  const authURL = new URL(authInfo.authorizeEndpoint);

  authURL.searchParams.set('client_id', validatedClientId);
  authURL.searchParams.set('response_type', 'code');
  authURL.searchParams.set(
    'redirect_uri',
    body.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl,
  );
  authURL.searchParams.set('state', btoa(JSON.stringify(state)));

  return c.json({
    encryptionKey,
    authURL: authURL.toString(),
    ...objectToPut,
  });
});

// Exchange the code for a token
app.post('/Prod/sailapps/code', async (c) => {  
  const {state, code} = c.req.query();

  if (!code) {
    throw new HTTPException(400, {message: 'Code not provided'});
  }
  if (!state) {
    throw new HTTPException(400, {message: 'State not provided'});
  }

  let body;
  if (c.req.body) {
    body = await c.req.json();
  }

  const {id: uuid, encryptionKey} = JSON.parse(atob(state));
  const tableData = await getStoredData(uuid);

  if (!tableData.baseURL) {
    throw new HTTPException(400, {message: 'Invalid stored data'});
  }

  const tokenData = await exchangeCodeForToken(
    tableData.baseURL,
    code,
    body?.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl,
  );

  const encryptedToken = encryptToken(tokenData, encryptionKey);
  await storeEncryptedToken(uuid, encryptedToken);

  return c.json({message: 'Token added successfully'}, 200);
});

// Retrieve stored token
app.get('/Prod/sailapps/uuid/:uuid', async (c) => {
  const uuid = c.req.param('uuid');
  if (!uuid) {
    throw new HTTPException(400, {message: 'UUID not provided'});
  }

  const data = await getStoredData(uuid);
  if (!data.tokenInfo) {
    throw new HTTPException(400, {message: 'Token not found'});
  }

  return c.json(data, 200);
});

export const handler = handle(app);
