# SailPoint API Authentication Flow

This document describes the complete flow for securely authenticating with SailPoint APIs using our authentication service. The flow uses asymmetric encryption to ensure that access tokens are securely transmitted and can only be decrypted by the client application.

## Authentication Flow Overview

1. Generate an RSA key pair (or use your existing keys)
2. Initiate the authentication flow with your public key
3. User completes the OAuth authentication (handled by SailPoint)
4. Token is securely encrypted with your public key
5. Retrieve and decrypt the encrypted token with your private key

## API Endpoints

### 1. Generate RSA Key Pair (Optional)

If you don't have an existing RSA key pair, you can generate one using this endpoint.

**Endpoint:** `POST /Prod/sailapps/auth/keypair`

**Request:**
```json
{}
```

**Response:**
```json
{
  "message": "Successfully generated 2048-bit RSA key pair",
  "publicKey": "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----",
  "privateKey": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----",
  "publicKeyBase64": "LS0tLS1CRUdJTiBQVUJM...",
  "privateKeyBase64": "LS0tLS1CRUdJTiBQUklW...",
  "algorithm": "RSA",
  "modulusLength": 2048,
  "format": {
    "public": "spki/pem",
    "private": "pkcs8/pem"
  }
}
```

**Important:** Store your private key securely. It should never be shared or transmitted.

### 2. Initiate Authentication Flow

Start the authentication flow by providing your tenant information and public key.

**Endpoint:** `POST /Prod/sailapps/auth`

**Request:**
```json
{
  "tenant": "your-tenant-name",  // Alternatively, use apiBaseURL
  "apiBaseURL": "https://your-tenant.api.identitynow.com",  // Optional if tenant is provided
  "publicKey": "LS0tLS1CRUdJTiBQVUJM...",  // Your public key in Base64 format
  "dev": false  // Optional: Set to true for development environment
}
```

**Response:**
```json
{
  "authURL": "https://your-tenant.identitynow.com/oauth/authorize?client_id=...",
  "id": "12345678-90ab-cdef-1234-567890abcdef",
  "baseURL": "https://your-tenant.api.identitynow.com"
}
```

### 3. Complete OAuth Authentication

Open the `authURL` from the previous response in a browser. The user will be prompted to log in and authorize your application.

> **Note:** This step happens in the browser and is handled by the OAuth server. After successful authentication, the user will be redirected to the configured redirect URL with a code and state parameter. The web application will handle this redirect and automatically submit the code to the next endpoint.

### 4. Exchange Code for Token (Automatic)

This endpoint is automatically called by our web application after the user completes authentication.

**Endpoint:** `POST /Prod/sailapps/auth/code?code={code}&state={state}`

> **Note:** As an application developer, you do not need to call this endpoint directly. It's handled automatically when the user completes authentication.

### 5. Retrieve Encrypted Token

After authentication is complete, retrieve the encrypted token using the UUID from step 2.

**Endpoint:** `GET /Prod/sailapps/auth/token/{uuid}`

**Response:**
```json
{
  "id": "12345678-90ab-cdef-1234-567890abcdef",
  "baseURL": "https://your-tenant.api.identitynow.com",
  "tokenInfo": "{\"version\":\"1.0\",\"algorithm\":{\"symmetric\":\"AES-256-GCM\",\"asymmetric\":\"RSA-OAEP-SHA256\"},\"data\":{\"ciphertext\":\"...\",\"encryptedKey\":\"...\",\"iv\":\"...\",\"authTag\":\"...\"}}"
}
```

### 6. Decrypt the Token (Optional Server-Side Approach)

The server provides an endpoint to decrypt the token using your private key. However, this is **optional** - you can also decrypt the token client-side in your application for enhanced security.

**Endpoint:** `POST /Prod/sailapps/auth/token/decrypt`

**Request:**
```json
{
  "privateKey": "LS0tLS1CRUdJTiBQUklW...",  // Your private key in Base64 format
  "isBase64Encoded": true,  // Indicate if the privateKey is Base64 encoded
  "uuid": "12345678-90ab-cdef-1234-567890abcdef"  // Optional: UUID to retrieve token from database
  // OR
  "encryptedToken": "{\"version\":\"1.0\",\"algorithm\":{...}}"  // If not using UUID
}
```

**Response:**
```json
{
  "token": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "token_type": "Bearer",
    "refresh_token": "def502...",
    "expires_in": 3600,
    "scope": "..."
  },
  "tokenInfo": {
    "expiresAt": "2023-09-30T15:30:45.123Z",
    "tokenType": "Bearer"
  }
}
```

#### Client-Side Decryption (TypeScript Example)

For enhanced security, you may prefer to decrypt the token client-side in your application rather than sending your private key to the server. Here's how to do it using Node.js:

```typescript
import * as crypto from 'crypto';

/**
 * Decrypts a token that was encrypted using the hybrid RSA/AES approach
 * @param encryptedTokenData The encrypted token data as a JSON string
 * @param privateKeyPem Your RSA private key in PEM format
 * @returns The decrypted token object
 */
function decryptToken(encryptedTokenData: string, privateKeyPem: string): any {
  try {
    // Parse the encrypted token data
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
    const symmetricKey = crypto.privateDecrypt(
      {
        key: privateKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      encryptedSymmetricKey
    );

    // Decrypt the data with the symmetric key
    const decipher = crypto.createDecipheriv(
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

// Usage example
async function fetchAndDecryptToken(uuid: string, privateKey: string): Promise<any> {
  // Fetch the encrypted token from the server
  const response = await fetch(`https://api.example.com/Prod/sailapps/auth/token/${uuid}`);
  const data = await response.json();
  
  // Decrypt the token client-side
  const tokenInfo = data.tokenInfo;
  const decryptedToken = decryptToken(tokenInfo, privateKey);
  
  return decryptedToken;
}
```

### 7. Token Refresh (When Needed)

When your access token expires, use the refresh token to obtain a new one.

**Endpoint:** `POST /Prod/sailapps/auth/refresh`

**Request:**
```json
{
  "refreshToken": "def502...",
  "tenant": "your-tenant-name",  // Alternatively, use apiBaseURL
  "apiBaseURL": "https://your-tenant.api.identitynow.com"  // Optional if tenant is provided
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "refresh_token": "def502...",  // May be a new refresh token
  "expires_in": 3600,
  "scope": "..."
}
```

## Complete Flow Example

Below is an example of how to use these endpoints to implement the complete authentication flow:

1. Generate a key pair (if you don't have one):
   ```bash
   curl -X POST https://api.example.com/Prod/sailapps/auth/keypair \
     -H "Content-Type: application/json" \
     -d '{"keySize": 2048}'
   ```

2. Store the private key securely and use the public key to initiate authentication:
   ```bash
   curl -X POST https://api.example.com/Prod/sailapps/auth \
     -H "Content-Type: application/json" \
     -d '{
       "tenant": "your-tenant-name",
       "publicKey": "LS0tLS1CRUdJTiBQVUJM..."
     }'
   ```

3. Open the returned `authURL` in a browser for the user to authenticate.

4. After authentication is complete, retrieve the encrypted token:
   ```bash
   curl -X GET https://api.example.com/Prod/sailapps/auth/token/12345678-90ab-cdef-1234-567890abcdef
   ```

5. Choose one of these methods to decrypt the token:

   **Option A: Server-side decryption** (easier but requires sending your private key to the server):
   ```bash
   curl -X POST https://api.example.com/Prod/sailapps/auth/token/decrypt \
     -H "Content-Type: application/json" \
     -d '{
       "privateKey": "LS0tLS1CRUdJTiBQUklW...",
       "isBase64Encoded": true,
       "uuid": "12345678-90ab-cdef-1234-567890abcdef"
     }'
   ```

   **Option B: Client-side decryption** (recommended for enhanced security):
   ```typescript
   // Using the decryptToken function from the TypeScript example above
   const response = await fetch(`https://api.example.com/Prod/sailapps/auth/token/12345678-90ab-cdef-1234-567890abcdef`);
   const data = await response.json();
   const decryptedToken = decryptToken(data.tokenInfo, privateKeyPem);
   ```

6. Use the returned access token to make authenticated API calls to SailPoint.

## Security Considerations

- Always store your private key securely
- Use HTTPS for all API calls
- Refresh tokens before they expire
- Consider using a higher key size (3072 or 4096) for increased security