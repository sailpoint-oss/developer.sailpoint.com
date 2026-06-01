"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// Create a DocumentClient that represents the query to add an item
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const crypto_1 = require("crypto");
const hono_1 = require("hono");
const aws_lambda_1 = require("hono/aws-lambda");
const http_exception_1 = require("hono/http-exception");
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
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}
// After validation, we can safely assert these values exist
const validatedClientId = clientId;
const validatedRedirectUrl = redirectUrl;
const validatedDevRedirectUrl = devRedirectUrl;
const validatedTableName = tableName;
const app = new hono_1.Hono();
// Initialize DynamoDB client
const ddbClient = process.env.ENDPOINT_OVERRIDE
    ? new client_dynamodb_1.DynamoDBClient({ endpoint: process.env.ENDPOINT_OVERRIDE })
    : new client_dynamodb_1.DynamoDBClient({});
const ddbDocClient = lib_dynamodb_1.DynamoDBDocumentClient.from(ddbClient);
// PKCE helper functions (RFC 7636)
function generateCodeVerifier() {
    return (0, crypto_1.randomBytes)(32)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
function generateCodeChallenge(verifier) {
    return (0, crypto_1.createHash)('sha256')
        .update(verifier)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
// Helper functions
async function validateApiUrl(apiBaseURL, tenant) {
    if (!apiBaseURL && !tenant) {
        throw new http_exception_1.HTTPException(400, {
            message: 'apiBaseURL or tenant must be provided',
        });
    }
    let apiURL;
    if (apiBaseURL) {
        apiURL = new URL(apiBaseURL);
        if (!apiURL.hostname) {
            throw new http_exception_1.HTTPException(400, { message: 'apiBaseURL is not a valid URL' });
        }
    }
    else {
        apiURL = new URL(`https://${tenant}.api.identitynow.com`);
        if (!apiURL.hostname) {
            throw new http_exception_1.HTTPException(400, { message: 'tenant is not valid' });
        }
    }
    if (!apiURL.origin) {
        throw new http_exception_1.HTTPException(400, {
            message: 'apiBaseURL or tenant provided is invalid',
        });
    }
    return apiURL.origin;
}
async function getAuthInfo(baseURL) {
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
    }
    catch (err) {
        throw new http_exception_1.HTTPException(400, {
            message: 'Error retrieving tenant information',
        });
    }
}
async function storeAuthData(uuid, baseURL, codeVerifier) {
    try {
        // TTL 5 minutes
        const ttl = Math.floor(Date.now() / 1000) + 300;
        const objectToPut = { id: uuid, baseURL, codeVerifier, ttl };
        await ddbDocClient.send(new lib_dynamodb_1.PutCommand({ TableName: validatedTableName, Item: objectToPut }));
        return objectToPut;
    }
    catch (err) {
        console.error('Error creating item:', err);
        throw new http_exception_1.HTTPException(400, { message: 'Error creating UUID' });
    }
}
async function getStoredData(uuid) {
    try {
        const data = await ddbDocClient.send(new lib_dynamodb_1.GetCommand({ TableName: validatedTableName, Key: { id: uuid } }));
        if (!data.Item) {
            throw new http_exception_1.HTTPException(400, { message: 'Invalid UUID' });
        }
        return data.Item;
    }
    catch (err) {
        console.error('Error retrieving item:', err);
        throw new http_exception_1.HTTPException(400, { message: 'Error retrieving data' });
    }
}
async function deleteStoredData(uuid) {
    try {
        await ddbDocClient.send(new lib_dynamodb_1.DeleteCommand({ TableName: validatedTableName, Key: { id: uuid } }));
    }
    catch (err) {
        console.error('Error deleting item:', err);
    }
}
async function exchangeCodeForToken(baseURL, code, redirectUri, codeVerifier) {
    const tokenUrl = baseURL + `/oauth/token`;
    const formData = new URLSearchParams();
    formData.set('grant_type', 'authorization_code');
    formData.set('client_id', validatedClientId);
    formData.set('code', code);
    formData.set('redirect_uri', redirectUri);
    formData.set('code_verifier', codeVerifier);
    const tokenResp = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
    });
    if (!tokenResp.ok) {
        console.error('Token request failed:', await tokenResp.text());
        throw new http_exception_1.HTTPException(400, { message: 'Error exchanging code for token' });
    }
    const tokenData = await tokenResp.json();
    if (!tokenData.access_token) {
        throw new http_exception_1.HTTPException(400, { message: 'Invalid token response' });
    }
    return tokenData;
}
async function exchangeRefreshToken(baseURL, refreshToken) {
    const tokenUrl = baseURL + `/oauth/token`;
    const formData = new URLSearchParams();
    formData.set('grant_type', 'refresh_token');
    formData.set('client_id', validatedClientId);
    formData.set('refresh_token', refreshToken);
    const tokenResp = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
    });
    if (!tokenResp.ok) {
        console.error('Refresh token request failed:', await tokenResp.text());
        throw new http_exception_1.HTTPException(400, { message: 'Error exchanging refresh token' });
    }
    const tokenData = await tokenResp.json();
    if (!tokenData.access_token) {
        throw new http_exception_1.HTTPException(400, { message: 'Invalid token response' });
    }
    return tokenData;
}
function encryptToken(tokenData, publicKey) {
    const tokenString = JSON.stringify(tokenData);
    const symmetricKey = (0, crypto_1.randomBytes)(32); // 256 bits
    // Encrypt the data with AES-GCM
    const iv = (0, crypto_1.randomBytes)(12);
    const cipher = (0, crypto_1.createCipheriv)('aes-256-gcm', symmetricKey, iv);
    let encryptedData = cipher.update(tokenString, 'utf8', 'base64');
    encryptedData += cipher.final('base64');
    const authTag = cipher.getAuthTag().toString('base64');
    // Encrypt the symmetric key with RSA
    const encryptedSymmetricKey = (0, crypto_1.publicEncrypt)({
        key: publicKey,
        padding: crypto_1.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    }, symmetricKey);
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
        const { publicKey, privateKey } = (0, crypto_1.generateKeyPairSync)('rsa', {
            modulusLength, // Key size in bits
            publicKeyEncoding: {
                type: 'spki', // SubjectPublicKeyInfo
                format: 'pem' // PEM format
            },
            privateKeyEncoding: {
                type: 'pkcs8', // Private key in PKCS#8 format
                format: 'pem' // PEM format
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
    }
    catch (error) {
        console.error('Key pair generation failed:', error);
        throw new Error('Failed to generate key pair');
    }
}
function decryptToken(encryptedTokenData, privateKey) {
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
        const symmetricKey = (0, crypto_1.privateDecrypt)({
            key: privateKey,
            padding: crypto_1.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256',
        }, encryptedSymmetricKey);
        // Decrypt the data with the symmetric key
        const decipher = (0, crypto_1.createDecipheriv)('aes-256-gcm', symmetricKey, Buffer.from(iv, 'base64'));
        decipher.setAuthTag(Buffer.from(authTag, 'base64'));
        let decryptedData = decipher.update(ciphertext, 'base64', 'utf8');
        decryptedData += decipher.final('utf8');
        return JSON.parse(decryptedData);
    }
    catch (error) {
        console.error('Token decryption failed:', error);
        throw new Error('Failed to decrypt token');
    }
}
async function storeEncryptedToken(uuid, encryptedToken) {
    try {
        // TTL 5 minutes
        const ttl = Math.floor(Date.now() / 1000) + 300;
        await ddbDocClient.send(new lib_dynamodb_1.UpdateCommand({
            TableName: validatedTableName,
            Key: { id: uuid },
            UpdateExpression: 'set tokenInfo = :tokenInfo, #ttl = :ttl',
            ExpressionAttributeNames: {
                '#ttl': 'ttl',
            },
            ExpressionAttributeValues: {
                ':tokenInfo': encryptedToken,
                ':ttl': ttl,
            },
        }));
    }
    catch (err) {
        console.error('Error updating item:', err);
        throw new http_exception_1.HTTPException(400, { message: 'Error storing token' });
    }
}
// Retrieve a UUID, generate a random encryption key, and return the auth URL
app.post('/Prod/sailapps/auth', async (c) => {
    if (c.req.header('Content-Type') !== 'application/json') {
        throw new http_exception_1.HTTPException(400, {
            message: 'Content-Type must be application/json',
        });
    }
    const body = await c.req.json();
    const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
    const publicKey = body.publicKey;
    const authInfo = await getAuthInfo(baseURL);
    const uuid = (0, crypto_1.randomUUID)();
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    const objectToPut = await storeAuthData(uuid, baseURL, codeVerifier);
    const state = { id: uuid, publicKey };
    const authURL = new URL(authInfo.authorizeEndpoint);
    authURL.searchParams.set('client_id', validatedClientId);
    authURL.searchParams.set('response_type', 'code');
    authURL.searchParams.set('redirect_uri', body.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl);
    authURL.searchParams.set('state', btoa(JSON.stringify(state)));
    authURL.searchParams.set('code_challenge', codeChallenge);
    authURL.searchParams.set('code_challenge_method', 'S256');
    return c.json({
        authURL: authURL.toString(),
        id: objectToPut.id,
        baseURL: objectToPut.baseURL,
        ttl: objectToPut.ttl,
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
        throw new http_exception_1.HTTPException(400, { message: 'Code not provided' });
    }
    if (!state) {
        throw new http_exception_1.HTTPException(400, { message: 'State not provided' });
    }
    const { id: uuid, publicKey } = JSON.parse(atob(state));
    const tableData = await getStoredData(uuid);
    if (!tableData.baseURL) {
        throw new http_exception_1.HTTPException(400, { message: 'Invalid stored data' });
    }
    if (!tableData.codeVerifier) {
        throw new http_exception_1.HTTPException(400, { message: 'Invalid stored data: missing PKCE verifier' });
    }
    const tokenData = await exchangeCodeForToken(tableData.baseURL, code, body?.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl, tableData.codeVerifier);
    const encryptedToken = encryptToken(tokenData, atob(publicKey));
    await storeEncryptedToken(uuid, encryptedToken);
    return c.json({ message: 'Token added successfully' }, 200);
});
// Retrieve stored token
app.get('/Prod/sailapps/auth/token/:uuid', async (c) => {
    const uuid = c.req.param('uuid');
    if (!uuid) {
        throw new http_exception_1.HTTPException(400, { message: 'UUID not provided' });
    }
    const data = await getStoredData(uuid);
    if (!data.tokenInfo) {
        throw new http_exception_1.HTTPException(400, { message: 'Token not found' });
    }
    await deleteStoredData(uuid);
    return c.json(data, 200);
});
// Refresh token endpoint
app.post('/Prod/sailapps/auth/refresh', async (c) => {
    if (c.req.header('Content-Type') !== 'application/json') {
        throw new http_exception_1.HTTPException(400, {
            message: 'Content-Type must be application/json',
        });
    }
    const body = await c.req.json();
    if (!body.refreshToken) {
        throw new http_exception_1.HTTPException(400, { message: 'refreshToken is required' });
    }
    const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
    try {
        const tokenData = await exchangeRefreshToken(baseURL, body.refreshToken);
        return c.json(tokenData, 200);
    }
    catch (error) {
        if (error instanceof http_exception_1.HTTPException) {
            throw error;
        }
        throw new http_exception_1.HTTPException(500, { message: 'Internal server error' });
    }
});
// Decrypt token endpoint
app.post('/Prod/sailapps/auth/token/decrypt', async (c) => {
    if (c.req.header('Content-Type') !== 'application/json') {
        throw new http_exception_1.HTTPException(400, {
            message: 'Content-Type must be application/json',
        });
    }
    const body = await c.req.json();
    // Validate required fields
    if (!body.privateKey) {
        throw new http_exception_1.HTTPException(400, { message: 'privateKey is required' });
    }
    if (!body.encryptedToken) {
        throw new http_exception_1.HTTPException(400, { message: 'encryptedToken is required' });
    }
    try {
        // If UUID is provided, get the encrypted token from the database
        let tokenInfo;
        if (body.uuid) {
            const data = await getStoredData(body.uuid);
            if (!data.tokenInfo) {
                throw new http_exception_1.HTTPException(400, { message: 'Token not found for the provided UUID' });
            }
            tokenInfo = data.tokenInfo;
        }
        else {
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
    }
    catch (error) {
        console.error('Token decryption error:', error);
        if (error instanceof http_exception_1.HTTPException) {
            throw error;
        }
        throw new http_exception_1.HTTPException(400, { message: 'Failed to decrypt token' });
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
    }
    catch (error) {
        console.error('Key pair generation error:', error);
        if (error instanceof http_exception_1.HTTPException) {
            throw error;
        }
        throw new http_exception_1.HTTPException(500, { message: 'Failed to generate key pair' });
    }
});
exports.handler = (0, aws_lambda_1.handle)(app);
