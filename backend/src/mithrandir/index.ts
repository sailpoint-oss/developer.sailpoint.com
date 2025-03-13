// Create a DocumentClient that represents the query to add an item
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import crypto, {createCipheriv} from 'crypto';
import {Hono} from 'hono';
import {handle} from 'hono/aws-lambda';
import {HTTPException} from 'hono/http-exception';

const clientId = 'sailpoint-cli';
const redirectUrl = 'https://developer.sailpoint.com/sailapps';
const devRedirectUrl = 'http://localhost:4200/sailapps';

const app = new Hono();

function generateRandomString(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

//DynamoDB Endpoint
const ENDPOINT_OVERRIDE = process.env.ENDPOINT_OVERRIDE;
let ddbClient = undefined;

if (ENDPOINT_OVERRIDE) {
  ddbClient = new DynamoDBClient({endpoint: ENDPOINT_OVERRIDE});
} else {
  ddbClient = new DynamoDBClient({}); // Use default values for DynamoDB endpoint
  console.warn(
    'No value for ENDPOINT_OVERRIDE provided for DynamoDB, using default',
  );
}

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

// Retrieve a UUID, generate a random encryption key, and return the auth URL with these values pre-populated
// The state parameter is encoded as a base64 string and contains the UUID and encryption key in JSON format as {id: uuid, encryptionKey: encryptionKey}
// This state value can be overridden by the client if they wish to provide their own encryption key alongside the pre-populated UUID
app.post('/Prod/sailapps/uuid', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    throw new HTTPException(400, {
      message: 'Content-Type must be application/json',
    });
  }

  const body = await c.req.json();

  if (!body.apiBaseURL && !body.tenant) {
    throw new HTTPException(400, {
      message: 'apiBaseURL or tenant must be provided in the request body',
    });
  }

  let apiURL;

  if (body.apiBaseURL) {
    apiURL = new URL(body.apiBaseURL);
    if (!apiURL.hostname) {
      throw new HTTPException(400, {message: 'apiBaseURL is not a valid URL'});
    }
  } else {
    apiURL = new URL(`https://${body.tenant}.api.identitynow.com`);
    if (!apiURL.hostname) {
      throw new HTTPException(400, {message: 'tenant is not valid'});
    }
  }

  console.log(apiURL);
  if (!apiURL.origin) {
    throw new HTTPException(400, {
      message: 'apiBaseURL or tenant provided is invalid',
    });
  }

  const baseURL = apiURL?.origin;

  console.log('BaseAPIURL:', baseURL);

  try {
    const authInfoResp = await fetch(baseURL + `/oauth/info`);
    if (!authInfoResp.ok) {
      throw new Error('Error retrieving tenant info');
    }
    const authInfo = await authInfoResp.json();
    console.log(authInfo);

    if (!authInfo || !authInfo.authorizeEndpoint) {
      throw new Error('Error retrieving tenant info');
    }

    const uuid = crypto.randomUUID();
    const encryptionKey = generateRandomString(20);

    const objectToPut = {id: uuid, baseURL};

    const state = {id: uuid, encryptionKey};

    const authURL = new URL(authInfo.authorizeEndpoint);

    authURL.searchParams.set('client_id', clientId);
    authURL.searchParams.set('response_type', 'code');
    authURL.searchParams.set(
      'redirect_uri',
      body.dev === true ? devRedirectUrl : redirectUrl,
    );
    authURL.searchParams.set('state', btoa(JSON.stringify(state)));

    console.log('Generated Auth URL:', authURL.toString());

    const objectToRespond = {
      encryptionKey,
      authURL: authURL.toString(),
      ...objectToPut,
    };

    try {
      const data = await ddbDocClient.send(
        new PutCommand({TableName: tableName, Item: objectToPut}),
      );
      console.log(data);
      if (!data) {
        throw new HTTPException(400, {message: 'Error creating UUID'});
      }
      return c.json(objectToRespond);
    } catch (err) {
      //@ts-expect-error Unknown error shape
      console.error('Error retrieving item:', err.message);
      //@ts-expect-error Unknown error shape
      console.error('Error code:', err.code);
      //@ts-expect-error Unknown error shape
      console.error('Error name:', err.name);
      //@ts-expect-error Unknown error shape
      console.error('Error stack:', err.stack);

      throw new HTTPException(400, {message: 'Error creating UUID'});
    }
  } catch (err) {
    throw new HTTPException(400, {
      message: 'Error retrieving tenant information',
    });
  }
});

// Exchange the code for a token, which is encrypted with the encryption key, and store the token in the database
app.post('/Prod/sailapps/code/:code', async (c) => {
  const {code} = c.req.param();
  if (!code) {
    throw new HTTPException(400, {message: 'Code not provided'});
  }

  const {state} = c.req.query();

  const body = await c.req.json();

  if (!state) {
    throw new HTTPException(400, {message: 'State not provided'});
  }

  const {id: uuid, encryptionKey} = JSON.parse(atob(state));

  console.log(`Parsed State UUID: ${uuid}, Encryption Key: ${encryptionKey}`);

  let tableData;

  try {
    const data = await ddbDocClient.send(
      new GetCommand({TableName: tableName, Key: {id: uuid}}),
    );
    if (!data.Item) {
      throw new HTTPException(400, {message: 'Error retrieving table data'});
    }
    tableData = data.Item;
  } catch (err) {
    //@ts-expect-error Unknown error shape
    console.error('Error retrieving item:', err.message);
    //@ts-expect-error Unknown error shape
    console.error('Error code:', err.code);
    //@ts-expect-error Unknown error shape
    console.error('Error name:', err.name);
    //@ts-expect-error Unknown error shape
    console.error('Error stack:', err.stack);

    throw new HTTPException(400, {message: 'Error retrieving table data'});
  }

  console.log(tableData);

  console.log('Exchanging code for token');

  if (!tableData.baseURL) {
    throw new HTTPException(400, {message: 'baseURL not populated'});
  }

  const tokenExchangeURL = new URL(tableData.baseURL + `/oauth/token`);
  tokenExchangeURL.searchParams.set('grant_type', 'authorization_code');
  tokenExchangeURL.searchParams.set('client_id', clientId);
  tokenExchangeURL.searchParams.set('code', code);
  tokenExchangeURL.searchParams.set('redirect_uri', body.dev === true ? devRedirectUrl : redirectUrl);

  const tokenExchangeResp = await fetch(tokenExchangeURL, {
    method: 'POST',
  });

  if (!tokenExchangeResp.ok) {
    console.log(tokenExchangeResp);
    console.log(await tokenExchangeResp.json());
    throw new HTTPException(400, {message: 'Error exchanging code for token'});
  }

  const tokenExchangeData = await tokenExchangeResp.json();

  console.log(tokenExchangeData);

  if (!tokenExchangeData.access_token) {
    console.log(tokenExchangeResp);
    console.log(await tokenExchangeResp.json());
    throw new HTTPException(400, {message: 'Error exchanging code for token'});
  }

  const iv = crypto.randomBytes(16).toString('hex');

  const cipher = createCipheriv('aes-256-cbc', encryptionKey, iv);

  let encryptedToken = cipher.update(
    JSON.stringify(tokenExchangeData),
    'utf8',
    'hex',
  );
  encryptedToken += cipher.final('hex');

  const encryptedTokenWithIv = iv + ':' + encryptedToken;

  try {
    const data = await ddbDocClient.send(
      new UpdateCommand({
        TableName: tableName,
        Key: {id: uuid},
        UpdateExpression: 'set token = :token',
        ExpressionAttributeValues: {
          ':token': encryptedTokenWithIv,
        },
      }),
    );
    console.log(data);
    if (!data) {
      throw new HTTPException(400, {message: 'Error adding token'});
    }
    return c.json({message: 'Token added successfully'}, 200);
  } catch (err) {
    //@ts-expect-error Unknown error shape
    console.error('Error retrieving item:', err.message);
    //@ts-expect-error Unknown error shape
    console.error('Error code:', err.code);
    //@ts-expect-error Unknown error shape
    console.error('Error name:', err.name);
    //@ts-expect-error Unknown error shape
    console.error('Error stack:', err.stack);
    console.error('Full Error:', JSON.stringify(err, null, 2));

    throw new HTTPException(400, {message: 'Error adding token'});
  }
});

app.get('/Prod/sailapps/uuid/:uuid', async (c) => {
  const uuid = c.req.param('uuid');
  if (!uuid) {
    throw new HTTPException(400, {message: 'UUID not provided'});
  }
  try {
    const data = await ddbDocClient.send(
      new GetCommand({TableName: tableName, Key: {id: uuid}}),
    );
    console.log(data?.Item);
    if (!data?.Item?.token) {
      throw new HTTPException(400, {message: 'Token not populated'});
    }

    return c.json(data.Item, 200);
  } catch (err) {
    //@ts-expect-error Unknown error shape
    console.error('Error retrieving item:', err.message);
    //@ts-expect-error Unknown error shape
    console.error('Error code:', err.code);
    //@ts-expect-error Unknown error shape
    console.error('Error name:', err.name);
    //@ts-expect-error Unknown error shape
    console.error('Error stack:', err.stack);

    throw new HTTPException(400, {message: 'Error retrieving token'});
  }
});

export const handler = handle(app);
