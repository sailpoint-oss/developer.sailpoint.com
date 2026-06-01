# SailPoint API Authentication Flow

This document describes the complete flow for securely authenticating with SailPoint APIs using our authentication service. The flow uses asymmetric encryption to ensure that access tokens are securely transmitted and can only be decrypted by the client application.

## Authentication Flow Overview

1. Generate an RSA key pair (or use your existing keys)
2. Initiate the authentication flow with your public key
3. User completes the OAuth authentication (handled by SailPoint)
4. Token is securely encrypted with your public key
5. Retrieve and decrypt the encrypted token with your private key

## API Endpoints

### 1. Initiate Authentication Flow

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
  "baseURL": "https://your-tenant.api.identitynow.com",
  "pickupSecret": "BvvfLP_1m4u5p7UTgVk3b1U_ZvR2tiixc-3S3eCXV78",
  "ttl": 1717267200
}
```

Store `pickupSecret` in the initiating application. It is required to retrieve the encrypted token and is not sent through the browser callback.

### 2. Complete OAuth Authentication

Open the `authURL` from the previous response in a browser. The user will be prompted to log in and authorize your application.

> **Note:** This step happens in the browser and is handled by the OAuth server. After successful authentication, the user will be redirected to the configured redirect URL with a code and state parameter. The web application will handle this redirect and automatically submit the code to the next endpoint.

### 3. Exchange Code for Token (Automatic)

This endpoint is automatically called by our web application after the user completes authentication.

**Endpoint:** `POST /Prod/sailapps/auth/code`

**Request:**
```json
{
  "code": "4/0AQlEd8yZgFjQXDhE...",
  "state": "eyJpZCI6IjEyMzQ1Njc4LTkwYWItY2RlZi0xMjM0LTU2Nzg5MGFiY2RlZiJ9"
}
```

> **Note:** As an application developer, you do not need to call this endpoint directly. It's handled automatically when the user completes authentication.

### 4. Retrieve Encrypted Token

After authentication is complete, retrieve the encrypted token using the UUID and pickup secret from step 1.

**Endpoint:** `GET /Prod/sailapps/auth/token/{uuid}`

**Headers:**
```http
Authorization: Bearer BvvfLP_1m4u5p7UTgVk3b1U_ZvR2tiixc-3S3eCXV78
```

**Response:**
```json
{
  "id": "12345678-90ab-cdef-1234-567890abcdef",
  "tokenInfo": "{\"version\":\"1.0\",\"algorithm\":{\"symmetric\":\"AES-256-GCM\",\"asymmetric\":\"RSA-OAEP-SHA256\"},\"data\":{\"ciphertext\":\"...\",\"encryptedKey\":\"...\",\"iv\":\"...\",\"authTag\":\"...\"}}",
  "ttl": 1717267200
}
```

### 5. Decrypt the Token Client-Side

Decrypt the token client-side in your application. Private keys should not be sent to this service. Here's how to do it using Node.js:

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
  const response = await fetch(`https://api.example.com/Prod/sailapps/auth/token/${uuid}`, {
    headers: {
      Authorization: `Bearer ${pickupSecret}`,
    },
  });
  const data = await response.json();
  
  // Decrypt the token client-side
  const tokenInfo = data.tokenInfo;
  const decryptedToken = decryptToken(tokenInfo, privateKey);
  
  return decryptedToken;
}
```

### 6. Token Refresh (When Needed)

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

1. Generate or load an RSA key pair in your application. Store the private key securely and use the public key to initiate authentication:
   ```bash
   curl -X POST https://api.example.com/Prod/sailapps/auth \
     -H "Content-Type: application/json" \
     -d '{
       "tenant": "your-tenant-name",
       "publicKey": "LS0tLS1CRUdJTiBQVUJM..."
     }'
   ```

2. Open the returned `authURL` in a browser for the user to authenticate.

3. After authentication is complete, retrieve the encrypted token:
   ```bash
   curl -X GET https://api.example.com/Prod/sailapps/auth/token/12345678-90ab-cdef-1234-567890abcdef \
     -H "Authorization: Bearer $PICKUP_SECRET"
   ```

4. Decrypt the token client-side:
   ```typescript
   // Using the decryptToken function from the TypeScript example above
   const response = await fetch(`https://api.example.com/Prod/sailapps/auth/token/12345678-90ab-cdef-1234-567890abcdef`, {
     headers: {
       Authorization: `Bearer ${pickupSecret}`,
     },
   });
   const data = await response.json();
   const decryptedToken = decryptToken(data.tokenInfo, privateKeyPem);
   ```

5. Use the returned access token to make authenticated API calls to SailPoint.

## Security Considerations

- Always store your private key securely
- Store the pickup secret securely in the initiating application and never send it through the browser callback
- Use HTTPS for all API calls
- Refresh tokens before they expire
- Consider using a higher key size (3072 or 4096) for increased security

## PKCE (Proof Key for Code Exchange)

This service implements [PKCE (RFC 7636)](https://datatracker.ietf.org/doc/html/rfc7636) to protect the OAuth 2.0 Authorization Code flow against authorization code interception attacks. PKCE binds the authorization request to the token exchange request via a cryptographic proof, ensuring that an intercepted authorization code cannot be exchanged by an attacker.

### How it works

PKCE is handled entirely within this service — **no changes are needed by API consumers**.

1. **Auth initiation** (`POST /sailapps/auth`): The service generates a random `code_verifier` and computes a `code_challenge` using SHA-256 (S256 method). The challenge is included in the authorization URL, and the verifier is stored in DynamoDB alongside the session data. The service also returns a pickup secret to the initiating application and stores only its hash.
2. **Token exchange** (`POST /sailapps/auth/code`): The stored `code_verifier` is retrieved from DynamoDB and sent to the OAuth server along with the authorization code. The OAuth server verifies that the verifier matches the challenge from step 1 before issuing tokens.
3. **Token pickup** (`GET /sailapps/auth/token/{uuid}`): The initiating application must present the pickup secret to retrieve and consume the encrypted token.

The `code_verifier`, pickup secret hash, and token material are never exposed in logs.