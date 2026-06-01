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
const SERVICE_NAME = "mithrandir";
const REDACTED = "[REDACTED]";
/** Context keys that must never appear in logs (values replaced unconditionally). */
const SENSITIVE_CONTEXT_KEYS = new Set([
    "code",
    "state",
    "refreshToken",
    "access_token",
    "refresh_token",
    "id_token",
    "codeVerifier",
    "code_verifier",
    "privateKey",
    "publicKey",
    "tokenInfo",
    "encryptedToken",
    "client_secret",
    "authorization",
    "password",
]);
const SECRET_VALUE_PATTERNS = [
    {
        pattern: /eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
        replacement: "[REDACTED_JWT]",
    },
    { pattern: /Bearer\s+\S+/gi, replacement: "Bearer [REDACTED]" },
    {
        pattern: /"(access_token|refresh_token|id_token|code_verifier|code|client_secret|private_key|privateKey|publicKey|encryptedToken|tokenInfo|password)"\s*:\s*"[^"]*"/gi,
        replacement: '"$1":"[REDACTED]"',
    },
    {
        pattern: /(access_token|refresh_token|id_token|code_verifier|code|client_secret|state)=[^&\s#]*/gi,
        replacement: "$1=[REDACTED]",
    },
    {
        pattern: /-----BEGIN[A-Z ]+-----[\s\S]*?-----END[A-Z ]+-----/g,
        replacement: "[REDACTED_PEM]",
    },
    { pattern: /[A-Za-z0-9+/]{48,}={0,2}/g, replacement: "[REDACTED]" },
];
const UUID_IN_PATH = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;
function sanitizeString(value) {
    let sanitized = value;
    for (const { pattern, replacement } of SECRET_VALUE_PATTERNS) {
        sanitized = sanitized.replace(pattern, replacement);
    }
    return sanitized;
}
function maskUuid(uuid) {
    if (!uuid) {
        return undefined;
    }
    if (uuid.length <= 8) {
        return "***";
    }
    return `${uuid.slice(0, 8)}…`;
}
function sanitizeLogPath(path) {
    return path.replace(UUID_IN_PATH, (match) => maskUuid(match) ?? "***");
}
function sanitizeRedirectUri(uri) {
    try {
        const url = new URL(uri);
        return `${url.origin}${url.pathname}`;
    }
    catch {
        return "[invalid_uri]";
    }
}
function sanitizeBaseUrl(url) {
    try {
        return new URL(url).origin;
    }
    catch {
        return sanitizeString(url);
    }
}
function sanitizeLogContext(context) {
    if (!context) {
        return undefined;
    }
    const sanitized = {};
    for (const [key, value] of Object.entries(context)) {
        if (value === undefined) {
            continue;
        }
        if (SENSITIVE_CONTEXT_KEYS.has(key)) {
            sanitized[key] = REDACTED;
            continue;
        }
        if (key === "path" && typeof value === "string") {
            sanitized.path = sanitizeLogPath(value);
            continue;
        }
        if (key === "redirectUri" && typeof value === "string") {
            sanitized.redirectUri = sanitizeRedirectUri(value);
            continue;
        }
        if (key === "baseURL" && typeof value === "string") {
            sanitized.baseURL = sanitizeBaseUrl(value);
            continue;
        }
        if (typeof value === "string") {
            sanitized[key] = sanitizeString(value);
            continue;
        }
        sanitized[key] = value;
    }
    return sanitized;
}
function formatError(err) {
    if (err instanceof Error) {
        return {
            name: err.name,
            message: sanitizeString(err.message),
        };
    }
    return { name: "UnknownError", message: sanitizeString(String(err)) };
}
function isHTTPException(err) {
    return err instanceof http_exception_1.HTTPException;
}
function log(level, message, context, err) {
    const entry = {
        level,
        message,
        service: SERVICE_NAME,
        timestamp: new Date().toISOString(),
        ...sanitizeLogContext(context),
    };
    if (err !== undefined) {
        entry.error = formatError(err);
    }
    const line = JSON.stringify(entry);
    if (level === "error") {
        console.error(line);
    }
    else if (level === "warn") {
        console.warn(line);
    }
    else {
        console.info(line);
    }
}
/**
 * Extract only OAuth RFC 6749 error fields — never log raw token endpoint bodies.
 */
async function readOAuthErrorSummary(response) {
    try {
        const text = (await response.text()).trim();
        if (text.length === 0) {
            return undefined;
        }
        try {
            const body = JSON.parse(text);
            const summary = {};
            if (typeof body.error === "string") {
                summary.oauthError = sanitizeString(body.error);
            }
            if (typeof body.error_description === "string") {
                summary.oauthErrorDescription = sanitizeString(body.error_description);
            }
            if (summary.oauthError || summary.oauthErrorDescription) {
                return summary;
            }
            return { oauthError: "unknown_oauth_error" };
        }
        catch {
            return { oauthError: "non_json_error_response" };
        }
    }
    catch (readErr) {
        log("warn", "oauth_error_body_read_failed", undefined, readErr);
        return undefined;
    }
}
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
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
}
// After validation, we can safely assert these values exist
const validatedClientId = clientId;
const validatedRedirectUrl = redirectUrl;
const validatedDevRedirectUrl = devRedirectUrl;
const validatedTableName = tableName;
const app = new hono_1.Hono();
app.use("*", async (c, next) => {
    const requestId = c.req.header("x-request-id") ?? (0, crypto_1.randomUUID)();
    c.set("requestId", requestId);
    const start = Date.now();
    log("info", "request_started", {
        requestId,
        method: c.req.method,
        path: c.req.path,
    });
    try {
        await next();
    }
    finally {
        log("info", "request_completed", {
            requestId,
            method: c.req.method,
            path: c.req.path,
            status: c.res.status,
            durationMs: Date.now() - start,
        });
    }
});
app.onError((err, c) => {
    const requestId = c.get("requestId") ?? "unknown";
    if (isHTTPException(err)) {
        log("warn", "http_exception", {
            requestId,
            path: c.req.path,
            status: err.status,
        });
        return err.getResponse();
    }
    log("error", "unhandled_exception", { requestId, path: c.req.path }, err);
    return c.json({ message: "Internal server error" }, 500);
});
// Initialize DynamoDB client
const ddbClient = process.env.ENDPOINT_OVERRIDE
    ? new client_dynamodb_1.DynamoDBClient({ endpoint: process.env.ENDPOINT_OVERRIDE })
    : new client_dynamodb_1.DynamoDBClient({});
const ddbDocClient = lib_dynamodb_1.DynamoDBDocumentClient.from(ddbClient);
// PKCE helper functions (RFC 7636)
function generateCodeVerifier() {
    return (0, crypto_1.randomBytes)(32)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}
function generateCodeChallenge(verifier) {
    return (0, crypto_1.createHash)("sha256")
        .update(verifier)
        .digest("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}
// Helper functions
async function validateApiUrl(apiBaseURL, tenant) {
    if (!apiBaseURL && !tenant) {
        throw new http_exception_1.HTTPException(400, {
            message: "apiBaseURL or tenant must be provided",
        });
    }
    let apiURL;
    if (apiBaseURL) {
        apiURL = new URL(apiBaseURL);
        if (!apiURL.hostname) {
            throw new http_exception_1.HTTPException(400, {
                message: "apiBaseURL is not a valid URL",
            });
        }
    }
    else {
        apiURL = new URL(`https://${tenant}.api.identitynow.com`);
        if (!apiURL.hostname) {
            throw new http_exception_1.HTTPException(400, { message: "tenant is not valid" });
        }
    }
    if (!apiURL.origin) {
        throw new http_exception_1.HTTPException(400, {
            message: "apiBaseURL or tenant provided is invalid",
        });
    }
    return apiURL.origin;
}
async function getAuthInfo(baseURL, requestId) {
    const infoUrl = `${baseURL}/oauth/info`;
    try {
        const authInfoResp = await fetch(infoUrl);
        if (!authInfoResp.ok) {
            const oauthErrorSummary = await readOAuthErrorSummary(authInfoResp);
            log("error", "oauth_info_request_failed", {
                requestId,
                baseURL,
                status: authInfoResp.status,
                ...oauthErrorSummary,
            });
            throw new http_exception_1.HTTPException(400, {
                message: "Error retrieving tenant information",
            });
        }
        const authInfo = await authInfoResp.json();
        if (!authInfo?.authorizeEndpoint) {
            log("error", "oauth_info_missing_authorize_endpoint", {
                requestId,
                baseURL,
            });
            throw new http_exception_1.HTTPException(400, {
                message: "Error retrieving tenant information",
            });
        }
        return authInfo;
    }
    catch (err) {
        if (isHTTPException(err)) {
            throw err;
        }
        log("error", "oauth_info_request_error", { requestId, baseURL }, err);
        throw new http_exception_1.HTTPException(400, {
            message: "Error retrieving tenant information",
        });
    }
}
async function storeAuthData(uuid, baseURL, codeVerifier, requestId) {
    try {
        // TTL 5 minutes
        const ttl = Math.floor(Date.now() / 1000) + 300;
        const objectToPut = { id: uuid, baseURL, codeVerifier, ttl };
        await ddbDocClient.send(new lib_dynamodb_1.PutCommand({ TableName: validatedTableName, Item: objectToPut }));
        log("info", "auth_session_stored", {
            requestId,
            uuid: maskUuid(uuid),
            baseURL,
        });
        return objectToPut;
    }
    catch (err) {
        log("error", "dynamodb_put_auth_session_failed", {
            requestId,
            uuid: maskUuid(uuid),
            tableName: validatedTableName,
        }, err);
        throw new http_exception_1.HTTPException(400, { message: "Error creating UUID" });
    }
}
async function getStoredData(uuid, requestId) {
    try {
        const data = await ddbDocClient.send(new lib_dynamodb_1.GetCommand({ TableName: validatedTableName, Key: { id: uuid } }));
        if (!data.Item) {
            log("warn", "auth_session_not_found", {
                requestId,
                uuid: maskUuid(uuid),
            });
            throw new http_exception_1.HTTPException(400, { message: "Invalid UUID" });
        }
        return data.Item;
    }
    catch (err) {
        if (isHTTPException(err)) {
            throw err;
        }
        log("error", "dynamodb_get_auth_session_failed", {
            requestId,
            uuid: maskUuid(uuid),
            tableName: validatedTableName,
        }, err);
        throw new http_exception_1.HTTPException(400, { message: "Error retrieving data" });
    }
}
async function deleteStoredData(uuid, requestId) {
    try {
        await ddbDocClient.send(new lib_dynamodb_1.DeleteCommand({ TableName: validatedTableName, Key: { id: uuid } }));
        log("info", "auth_session_deleted", { requestId, uuid: maskUuid(uuid) });
    }
    catch (err) {
        log("error", "dynamodb_delete_auth_session_failed", {
            requestId,
            uuid: maskUuid(uuid),
            tableName: validatedTableName,
        }, err);
        throw new http_exception_1.HTTPException(500, { message: "Error deleting session data" });
    }
}
async function exchangeCodeForToken(baseURL, code, redirectUri, codeVerifier, requestId) {
    const tokenUrl = `${baseURL}/oauth/token`;
    const formData = new URLSearchParams();
    formData.set("grant_type", "authorization_code");
    formData.set("client_id", validatedClientId);
    formData.set("code", code);
    formData.set("redirect_uri", redirectUri);
    formData.set("code_verifier", codeVerifier);
    let tokenResp;
    try {
        tokenResp = await fetch(tokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });
    }
    catch (err) {
        log("error", "oauth_token_exchange_network_error", { requestId, baseURL }, err);
        throw new http_exception_1.HTTPException(400, {
            message: "Error exchanging code for token",
        });
    }
    if (!tokenResp.ok) {
        const oauthErrorSummary = await readOAuthErrorSummary(tokenResp);
        log("error", "oauth_token_exchange_failed", {
            requestId,
            baseURL,
            status: tokenResp.status,
            redirectUri,
            ...oauthErrorSummary,
        });
        throw new http_exception_1.HTTPException(400, {
            message: "Error exchanging code for token",
        });
    }
    let tokenData;
    try {
        tokenData = await tokenResp.json();
    }
    catch (err) {
        log("error", "oauth_token_exchange_invalid_json", { requestId, baseURL }, err);
        throw new http_exception_1.HTTPException(400, { message: "Invalid token response" });
    }
    if (!tokenData.access_token) {
        log("error", "oauth_token_exchange_missing_access_token", {
            requestId,
            baseURL,
        });
        throw new http_exception_1.HTTPException(400, { message: "Invalid token response" });
    }
    log("info", "oauth_token_exchange_succeeded", { requestId, baseURL });
    return tokenData;
}
async function exchangeRefreshToken(baseURL, refreshToken, requestId) {
    const tokenUrl = `${baseURL}/oauth/token`;
    const formData = new URLSearchParams();
    formData.set("grant_type", "refresh_token");
    formData.set("client_id", validatedClientId);
    formData.set("refresh_token", refreshToken);
    let tokenResp;
    try {
        tokenResp = await fetch(tokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });
    }
    catch (err) {
        log("error", "oauth_refresh_network_error", { requestId, baseURL }, err);
        throw new http_exception_1.HTTPException(400, { message: "Error exchanging refresh token" });
    }
    if (!tokenResp.ok) {
        const oauthErrorSummary = await readOAuthErrorSummary(tokenResp);
        log("error", "oauth_refresh_failed", {
            requestId,
            baseURL,
            status: tokenResp.status,
            ...oauthErrorSummary,
        });
        throw new http_exception_1.HTTPException(400, { message: "Error exchanging refresh token" });
    }
    let tokenData;
    try {
        tokenData = await tokenResp.json();
    }
    catch (err) {
        log("error", "oauth_refresh_invalid_json", { requestId, baseURL }, err);
        throw new http_exception_1.HTTPException(400, { message: "Invalid token response" });
    }
    if (!tokenData.access_token) {
        log("error", "oauth_refresh_missing_access_token", { requestId, baseURL });
        throw new http_exception_1.HTTPException(400, { message: "Invalid token response" });
    }
    log("info", "oauth_refresh_succeeded", { requestId, baseURL });
    return tokenData;
}
function encryptToken(tokenData, publicKey) {
    const tokenString = JSON.stringify(tokenData);
    const symmetricKey = (0, crypto_1.randomBytes)(32); // 256 bits
    // Encrypt the data with AES-GCM
    const iv = (0, crypto_1.randomBytes)(12);
    const cipher = (0, crypto_1.createCipheriv)("aes-256-gcm", symmetricKey, iv);
    let encryptedData = cipher.update(tokenString, "utf8", "base64");
    encryptedData += cipher.final("base64");
    const authTag = cipher.getAuthTag().toString("base64");
    // Encrypt the symmetric key with RSA
    const encryptedSymmetricKey = (0, crypto_1.publicEncrypt)({
        key: publicKey,
        padding: crypto_1.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, symmetricKey);
    const result = {
        version: "1.0",
        algorithm: {
            symmetric: "AES-256-GCM",
            asymmetric: "RSA-OAEP-SHA256",
        },
        data: {
            ciphertext: encryptedData,
            encryptedKey: encryptedSymmetricKey.toString("base64"),
            iv: iv.toString("base64"),
            authTag: authTag,
        },
    };
    return JSON.stringify(result);
}
function generateRsaKeyPair(modulusLength = 2048) {
    try {
        // Generate the key pair
        const { publicKey, privateKey } = (0, crypto_1.generateKeyPairSync)("rsa", {
            modulusLength, // Key size in bits
            publicKeyEncoding: {
                type: "spki", // SubjectPublicKeyInfo
                format: "pem", // PEM format
            },
            privateKeyEncoding: {
                type: "pkcs8", // Private key in PKCS#8 format
                format: "pem", // PEM format
            },
        });
        return {
            publicKey,
            privateKey,
            // Also return base64 encoded versions for ease of use
            publicKeyBase64: btoa(publicKey),
            privateKeyBase64: btoa(privateKey),
            algorithm: "RSA",
            modulusLength,
            format: {
                public: "spki/pem",
                private: "pkcs8/pem",
            },
        };
    }
    catch (error) {
        log("error", "rsa_key_pair_generation_failed", { modulusLength }, error);
        throw new Error("Failed to generate key pair");
    }
}
function decryptToken(encryptedTokenData, privateKey) {
    try {
        const tokenData = JSON.parse(encryptedTokenData);
        // Check token format version
        if (tokenData.version !== "1.0") {
            throw new Error("Unsupported token format version");
        }
        // Verify the encryption algorithms used
        if (tokenData.algorithm?.symmetric !== "AES-256-GCM" ||
            tokenData.algorithm?.asymmetric !== "RSA-OAEP-SHA256") {
            throw new Error("Unsupported encryption algorithm");
        }
        // Extract required data
        const { ciphertext, encryptedKey, iv, authTag } = tokenData.data;
        if (!ciphertext || !encryptedKey || !iv || !authTag) {
            throw new Error("Invalid encrypted token format");
        }
        // Decrypt the symmetric key with the private key
        const encryptedSymmetricKey = Buffer.from(encryptedKey, "base64");
        const symmetricKey = (0, crypto_1.privateDecrypt)({
            key: privateKey,
            padding: crypto_1.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        }, encryptedSymmetricKey);
        // Decrypt the data with the symmetric key
        const decipher = (0, crypto_1.createDecipheriv)("aes-256-gcm", symmetricKey, Buffer.from(iv, "base64"));
        decipher.setAuthTag(Buffer.from(authTag, "base64"));
        let decryptedData = decipher.update(ciphertext, "base64", "utf8");
        decryptedData += decipher.final("utf8");
        return JSON.parse(decryptedData);
    }
    catch (error) {
        log("error", "token_decryption_failed", undefined, error);
        throw new Error("Failed to decrypt token");
    }
}
async function storeEncryptedToken(uuid, encryptedToken, requestId) {
    try {
        // TTL 5 minutes
        const ttl = Math.floor(Date.now() / 1000) + 300;
        await ddbDocClient.send(new lib_dynamodb_1.UpdateCommand({
            TableName: validatedTableName,
            Key: { id: uuid },
            UpdateExpression: "set tokenInfo = :tokenInfo, #ttl = :ttl",
            ExpressionAttributeNames: {
                "#ttl": "ttl",
            },
            ExpressionAttributeValues: {
                ":tokenInfo": encryptedToken,
                ":ttl": ttl,
            },
        }));
        log("info", "encrypted_token_stored", { requestId, uuid: maskUuid(uuid) });
    }
    catch (err) {
        log("error", "dynamodb_update_encrypted_token_failed", {
            requestId,
            uuid: maskUuid(uuid),
            tableName: validatedTableName,
        }, err);
        throw new http_exception_1.HTTPException(400, { message: "Error storing token" });
    }
}
function parseOAuthState(state, requestId) {
    try {
        const decoded = JSON.parse(atob(state));
        if (!decoded.id || !decoded.publicKey) {
            log("warn", "oauth_state_missing_fields", { requestId });
            throw new http_exception_1.HTTPException(400, { message: "Invalid state parameter" });
        }
        return { id: decoded.id, publicKey: decoded.publicKey };
    }
    catch (err) {
        if (isHTTPException(err)) {
            throw err;
        }
        log("warn", "oauth_state_parse_failed", { requestId }, err);
        throw new http_exception_1.HTTPException(400, { message: "Invalid state parameter" });
    }
}
// Retrieve a UUID, generate a random encryption key, and return the auth URL
app.post("/Prod/sailapps/auth", async (c) => {
    const requestId = c.get("requestId");
    if (c.req.header("Content-Type") !== "application/json") {
        throw new http_exception_1.HTTPException(400, {
            message: "Content-Type must be application/json",
        });
    }
    let body;
    try {
        body = await c.req.json();
    }
    catch (err) {
        log("warn", "auth_init_invalid_json", { requestId }, err);
        throw new http_exception_1.HTTPException(400, { message: "Invalid JSON body" });
    }
    if (!body.publicKey) {
        throw new http_exception_1.HTTPException(400, { message: "publicKey is required" });
    }
    const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
    const authInfo = await getAuthInfo(baseURL, requestId);
    const uuid = (0, crypto_1.randomUUID)();
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    const objectToPut = await storeAuthData(uuid, baseURL, codeVerifier, requestId);
    const state = { id: uuid, publicKey: body.publicKey };
    const authURL = new URL(authInfo.authorizeEndpoint);
    authURL.searchParams.set("client_id", validatedClientId);
    authURL.searchParams.set("response_type", "code");
    authURL.searchParams.set("redirect_uri", body.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl);
    authURL.searchParams.set("state", btoa(JSON.stringify(state)));
    authURL.searchParams.set("code_challenge", codeChallenge);
    authURL.searchParams.set("code_challenge_method", "S256");
    log("info", "auth_flow_initiated", {
        requestId,
        uuid: maskUuid(uuid),
        baseURL,
        dev: body.dev === true,
    });
    return c.json({
        authURL: authURL.toString(),
        id: objectToPut.id,
        baseURL: objectToPut.baseURL,
        ttl: objectToPut.ttl,
    });
});
// Exchange the code for a token
app.post("/Prod/sailapps/auth/code", async (c) => {
    const requestId = c.get("requestId");
    let body;
    if (c.req.raw.body) {
        try {
            body = await c.req.json();
        }
        catch (err) {
            log("warn", "auth_code_invalid_json", { requestId }, err);
            throw new http_exception_1.HTTPException(400, { message: "Invalid JSON body" });
        }
    }
    const code = body?.code;
    const state = body?.state;
    if (!code) {
        throw new http_exception_1.HTTPException(400, { message: "Code not provided" });
    }
    if (!state) {
        throw new http_exception_1.HTTPException(400, { message: "State not provided" });
    }
    const { id: uuid, publicKey } = parseOAuthState(state, requestId);
    const tableData = await getStoredData(uuid, requestId);
    if (!tableData.baseURL) {
        log("warn", "auth_code_missing_base_url", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(400, { message: "Invalid stored data" });
    }
    if (!tableData.codeVerifier) {
        log("warn", "auth_code_missing_pkce_verifier", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(400, {
            message: "Invalid stored data: missing PKCE verifier",
        });
    }
    const tokenData = await exchangeCodeForToken(tableData.baseURL, code, body?.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl, tableData.codeVerifier, requestId);
    let encryptedToken;
    try {
        encryptedToken = encryptToken(tokenData, atob(publicKey));
    }
    catch (err) {
        log("error", "token_encryption_failed", { requestId, uuid: maskUuid(uuid) }, err);
        throw new http_exception_1.HTTPException(400, { message: "Failed to encrypt token" });
    }
    await storeEncryptedToken(uuid, encryptedToken, requestId);
    log("info", "auth_code_exchange_completed", {
        requestId,
        uuid: maskUuid(uuid),
    });
    return c.json({ message: "Token added successfully" }, 200);
});
// Retrieve stored token
app.get("/Prod/sailapps/auth/token/:uuid", async (c) => {
    const requestId = c.get("requestId");
    const uuid = c.req.param("uuid");
    if (!uuid) {
        throw new http_exception_1.HTTPException(400, { message: "UUID not provided" });
    }
    const data = await getStoredData(uuid, requestId);
    if (!data.tokenInfo) {
        log("warn", "encrypted_token_not_found", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(400, { message: "Token not found" });
    }
    await deleteStoredData(uuid, requestId);
    log("info", "encrypted_token_retrieved", { requestId, uuid: maskUuid(uuid) });
    return c.json(data, 200);
});
// Refresh token endpoint
app.post("/Prod/sailapps/auth/refresh", async (c) => {
    const requestId = c.get("requestId");
    if (c.req.header("Content-Type") !== "application/json") {
        throw new http_exception_1.HTTPException(400, {
            message: "Content-Type must be application/json",
        });
    }
    let body;
    try {
        body = await c.req.json();
    }
    catch (err) {
        log("warn", "auth_refresh_invalid_json", { requestId }, err);
        throw new http_exception_1.HTTPException(400, { message: "Invalid JSON body" });
    }
    if (!body.refreshToken) {
        throw new http_exception_1.HTTPException(400, { message: "refreshToken is required" });
    }
    const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
    const tokenData = await exchangeRefreshToken(baseURL, body.refreshToken, requestId);
    return c.json(tokenData, 200);
});
// Decrypt token endpoint
app.post("/Prod/sailapps/auth/token/decrypt", async (c) => {
    const requestId = c.get("requestId");
    if (c.req.header("Content-Type") !== "application/json") {
        throw new http_exception_1.HTTPException(400, {
            message: "Content-Type must be application/json",
        });
    }
    let body;
    try {
        body = await c.req.json();
    }
    catch (err) {
        log("warn", "token_decrypt_invalid_json", { requestId }, err);
        throw new http_exception_1.HTTPException(400, { message: "Invalid JSON body" });
    }
    // Validate required fields
    if (!body.privateKey) {
        throw new http_exception_1.HTTPException(400, { message: "privateKey is required" });
    }
    if (!body.encryptedToken) {
        throw new http_exception_1.HTTPException(400, { message: "encryptedToken is required" });
    }
    try {
        // If UUID is provided, get the encrypted token from the database
        let tokenInfo;
        if (body.uuid) {
            const data = await getStoredData(body.uuid, requestId);
            if (!data.tokenInfo) {
                log("warn", "token_decrypt_uuid_not_found", {
                    requestId,
                    uuid: maskUuid(body.uuid),
                });
                throw new http_exception_1.HTTPException(400, {
                    message: "Token not found for the provided UUID",
                });
            }
            tokenInfo = data.tokenInfo;
        }
        else {
            // Otherwise use the provided encrypted token directly
            tokenInfo = body.encryptedToken;
        }
        // Decode the private key if it's base64-encoded
        const privateKey = body.isBase64Encoded
            ? atob(body.privateKey)
            : body.privateKey;
        // Decrypt the token
        const decryptedToken = decryptToken(tokenInfo, privateKey);
        log("info", "token_decrypt_succeeded", {
            requestId,
            uuid: maskUuid(body.uuid),
        });
        return c.json({
            token: decryptedToken,
            tokenInfo: {
                expiresAt: decryptedToken.expires_in
                    ? new Date(Date.now() + decryptedToken.expires_in * 1000).toISOString()
                    : undefined,
                tokenType: decryptedToken.token_type || "Bearer",
            },
        }, 200);
    }
    catch (error) {
        if (isHTTPException(error)) {
            throw error;
        }
        log("error", "token_decrypt_endpoint_failed", {
            requestId,
            uuid: maskUuid(body.uuid),
        }, error);
        throw new http_exception_1.HTTPException(400, { message: "Failed to decrypt token" });
    }
});
// Generate RSA key pair endpoint
app.post("/Prod/sailapps/auth/keypair", async (c) => {
    const requestId = c.get("requestId");
    try {
        const keySize = 2048;
        const keyPair = generateRsaKeyPair(keySize);
        log("info", "rsa_key_pair_generated", { requestId, keySize });
        return c.json({
            message: `Successfully generated ${keySize}-bit RSA key pair`,
            ...keyPair,
        }, 200);
    }
    catch (error) {
        if (isHTTPException(error)) {
            throw error;
        }
        log("error", "rsa_key_pair_endpoint_failed", { requestId }, error);
        throw new http_exception_1.HTTPException(500, { message: "Failed to generate key pair" });
    }
});
exports.handler = (0, aws_lambda_1.handle)(app);
