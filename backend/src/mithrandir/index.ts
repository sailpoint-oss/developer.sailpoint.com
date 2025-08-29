// Create a DocumentClient that represents the query to add an item
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import {randomBytes, createCipheriv, createDecipheriv, publicEncrypt, privateDecrypt, constants, randomUUID, generateKeyPairSync} from 'crypto';
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

async function exchangeRefreshToken(
  baseURL: string,
  refreshToken: string,
) {
  const tokenExchangeURL = new URL(baseURL + `/oauth/token`);
  tokenExchangeURL.searchParams.set('grant_type', 'refresh_token');
  tokenExchangeURL.searchParams.set('client_id', validatedClientId);
  tokenExchangeURL.searchParams.set('refresh_token', refreshToken);

  const tokenExchangeResp = await fetch(tokenExchangeURL, {
    method: 'POST',
  });

  if (!tokenExchangeResp.ok) {
    console.error('Refresh token exchange failed:', await tokenExchangeResp.text());
    throw new HTTPException(400, {message: 'Error exchanging refresh token'});
  }

  const tokenExchangeData = await tokenExchangeResp.json();

  if (!tokenExchangeData.access_token) {
    throw new HTTPException(400, {message: 'Invalid token response'});
  }

  return tokenExchangeData;
}

function encryptToken(tokenData: any, publicKey: string) {
  const tokenString = JSON.stringify(tokenData);
  const symmetricKey = randomBytes(32); // 256 bits
  
  // Encrypt the data with AES-GCM
  const iv = randomBytes(12); 
  const cipher = createCipheriv('aes-256-gcm', symmetricKey, iv);
  let encryptedData = cipher.update(tokenString, 'utf8', 'base64');
  encryptedData += cipher.final('base64');
  const authTag = cipher.getAuthTag().toString('base64');

  // Encrypt the symmetric key with RSA
  const encryptedSymmetricKey = publicEncrypt(
    {
      key: publicKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    symmetricKey
  );

  const result = {
    version: '1.0',
    algorithm: {
      symmetric: 'AES-256-GCM',
      asymmetric: 'RSA-OAEP-SHA256'
    },
    data: {
      ciphertext: encryptedData,
      encryptedKey: encryptedSymmetricKey.toString('base64'),
      iv: iv.toString('base64'),
      authTag: authTag
    }
  };

  return JSON.stringify(result);
}

function generateRsaKeyPair(modulusLength = 2048) {
  try {
    // Generate the key pair
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength,  // Key size in bits
      publicKeyEncoding: {
        type: 'spki',     // SubjectPublicKeyInfo
        format: 'pem'     // PEM format
      },
      privateKeyEncoding: {
        type: 'pkcs8',    // Private key in PKCS#8 format
        format: 'pem'     // PEM format
      }
    });
    
    return {
      publicKey,
      privateKey,
      // Also return base64 encoded versions for ease of use
      publicKeyBase64: btoa(publicKey),
      privateKeyBase64: btoa(privateKey),
      algorithm: 'RSA',
      modulusLength,
      format: {
        public: 'spki/pem',
        private: 'pkcs8/pem'
      }
    };
  } catch (error) {
    console.error('Key pair generation failed:', error);
    throw new Error('Failed to generate key pair');
  }
}

function decryptToken(encryptedTokenData: string, privateKey: string) {
  try {
    const tokenData = JSON.parse(encryptedTokenData);
    
    // Check token format version
    if (tokenData.version !== '1.0') {
      throw new Error('Unsupported token format version');
    }
    
    // Verify the encryption algorithms used
    if (tokenData.algorithm?.symmetric !== 'AES-256-GCM' || 
        tokenData.algorithm?.asymmetric !== 'RSA-OAEP-SHA256') {
      throw new Error('Unsupported encryption algorithm');
    }

    // Extract required data
    const { ciphertext, encryptedKey, iv, authTag } = tokenData.data;
    if (!ciphertext || !encryptedKey || !iv || !authTag) {
      throw new Error('Invalid encrypted token format');
    }

    // Decrypt the symmetric key with the private key
    const encryptedSymmetricKey = Buffer.from(encryptedKey, 'base64');
    const symmetricKey = privateDecrypt(
      {
        key: privateKey,
        padding: constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      encryptedSymmetricKey
    );

    // Decrypt the data with the symmetric key
    const decipher = createDecipheriv(
      'aes-256-gcm', 
      symmetricKey, 
      Buffer.from(iv, 'base64')
    );
    
    decipher.setAuthTag(Buffer.from(authTag, 'base64'));
    
    let decryptedData = decipher.update(ciphertext, 'base64', 'utf8');
    decryptedData += decipher.final('utf8');
    
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error('Token decryption failed:', error);
    throw new Error('Failed to decrypt token');
  }
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
app.post('/Prod/sailapps/auth', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    throw new HTTPException(400, {
      message: 'Content-Type must be application/json',
    });
  }

  const body = await c.req.json();
  const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
  const publicKey = body.publicKey;
  const authInfo = await getAuthInfo(baseURL);

  const uuid = randomUUID();
  const objectToPut = await storeAuthData(uuid, baseURL);

  const state = {id: uuid, publicKey};
  const authURL = new URL(authInfo.authorizeEndpoint);

  authURL.searchParams.set('client_id', validatedClientId);
  authURL.searchParams.set('response_type', 'code');
  authURL.searchParams.set(
    'redirect_uri',
    body.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl,
  );
  authURL.searchParams.set('state', btoa(JSON.stringify(state)));

  return c.json({
    authURL: authURL.toString(),
    ...objectToPut,
  });
});

// Exchange the code for a token
app.post('/Prod/sailapps/auth/code', async (c) => {  
  let body;
  if (c.req.raw.body) {
    body = await c.req.json();
  }

  const code = body?.code;
  const state = body?.state;
  
  if (!code) {
    throw new HTTPException(400, {message: 'Code not provided'});
  }
  if (!state) {
    throw new HTTPException(400, {message: 'State not provided'});
  }

  const {id: uuid, publicKey} = JSON.parse(atob(state));
  const tableData = await getStoredData(uuid);

  if (!tableData.baseURL) {
    throw new HTTPException(400, {message: 'Invalid stored data'});
  }

  const tokenData = await exchangeCodeForToken(
    tableData.baseURL,
    code,
    body?.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl,
  );

  const encryptedToken = encryptToken(tokenData, atob(publicKey));
  await storeEncryptedToken(uuid, encryptedToken);

  return c.json({message: 'Token added successfully'}, 200);
});

// Retrieve stored token
app.get('/Prod/sailapps/auth/token/:uuid', async (c) => {
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

// Refresh token endpoint
app.post('/Prod/sailapps/auth/refresh', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    throw new HTTPException(400, {
      message: 'Content-Type must be application/json',
    });
  }

  const body = await c.req.json();
  
  if (!body.refreshToken) {
    throw new HTTPException(400, {message: 'refreshToken is required'});
  }

  const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
  
  try {
    const tokenData = await exchangeRefreshToken(baseURL, body.refreshToken);
    return c.json(tokenData, 200);
  } catch (error) {
    if (error instanceof HTTPException) {
      throw error;
    }
    throw new HTTPException(500, {message: 'Internal server error'});
  }
});

// Decrypt token endpoint
app.post('/Prod/sailapps/auth/token/decrypt', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    throw new HTTPException(400, {
      message: 'Content-Type must be application/json',
    });
  }

  const body = await c.req.json();
  
  // Validate required fields
  if (!body.privateKey) {
    throw new HTTPException(400, {message: 'privateKey is required'});
  }
  
  if (!body.encryptedToken) {
    throw new HTTPException(400, {message: 'encryptedToken is required'});
  }

  try {
    // If UUID is provided, get the encrypted token from the database
    let tokenInfo;
    if (body.uuid) {
      const data = await getStoredData(body.uuid);
      if (!data.tokenInfo) {
        throw new HTTPException(400, {message: 'Token not found for the provided UUID'});
      }
      tokenInfo = data.tokenInfo;
    } else {
      // Otherwise use the provided encrypted token directly
      tokenInfo = body.encryptedToken;
    }

    // Decode the private key if it's base64-encoded
    const privateKey = body.isBase64Encoded ? 
      atob(body.privateKey) : body.privateKey;
    
    // Decrypt the token
    const decryptedToken = decryptToken(tokenInfo, privateKey);
    
    return c.json({
      token: decryptedToken,
      tokenInfo: {
        expiresAt: decryptedToken.expires_in ? 
          new Date(Date.now() + decryptedToken.expires_in * 1000).toISOString() : 
          undefined,
        tokenType: decryptedToken.token_type || 'Bearer'
      }
    }, 200);
  } catch (error) {
    console.error('Token decryption error:', error);
    if (error instanceof HTTPException) {
      throw error;
    }
    throw new HTTPException(400, {message: 'Failed to decrypt token'});
  }
});

// Generate RSA key pair endpoint
app.post('/Prod/sailapps/auth/keypair', async (c) => {
  try {
    // Parse body if it exists
    let keySize = 2048; // Default key size
    
    // Generate the key pair
    const keyPair = generateRsaKeyPair(keySize);
    
    return c.json({
      message: `Successfully generated ${keySize}-bit RSA key pair`,
      ...keyPair
    }, 200);
  } catch (error) {
    console.error('Key pair generation error:', error);
    if (error instanceof HTTPException) {
      throw error;
    }
    throw new HTTPException(500, {message: 'Failed to generate key pair'});
  }
});

export const handler = handle(app);
