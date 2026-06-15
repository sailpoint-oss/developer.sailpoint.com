"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// Create a DocumentClient that represents the query to add an item
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const promises_1 = require("node:dns/promises");
const node_net_1 = require("node:net");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const crypto_1 = require("crypto");
const hono_1 = require("hono");
const aws_lambda_1 = require("hono/aws-lambda");
const http_exception_1 = require("hono/http-exception");
const SERVICE_NAME = "mithrandir";
const MAX_JSON_BODY_BYTES = 16 * 1024;
const MAX_STATE_CHARS = 4096;
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
    "pickupSecret",
    "pickupSecretHash",
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
function generateSecret() {
    return (0, crypto_1.randomBytes)(32)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}
function hashSecret(secret) {
    return (0, crypto_1.createHash)("sha256").update(secret).digest("hex");
}
function safeEqual(a, b) {
    const left = Buffer.from(a, "hex");
    const right = Buffer.from(b, "hex");
    return left.length === right.length && (0, crypto_1.timingSafeEqual)(left, right);
}
function encodeOAuthState(state) {
    return btoa(JSON.stringify(state));
}
function hashOAuthState(state) {
    return hashSecret(state);
}
function verifyOAuthState(state, expectedHash) {
    return safeEqual(hashOAuthState(state), expectedHash);
}
function getBearerToken(authorizationHeader) {
    if (!authorizationHeader?.startsWith("Bearer ")) {
        return undefined;
    }
    const token = authorizationHeader.slice("Bearer ".length).trim();
    return token.length > 0 ? token : undefined;
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
function simplifyOAuthCodeError(error, errorDescription) {
    const err = error?.toLowerCase() ?? "";
    const desc = errorDescription?.toLowerCase() ?? "";
    if (err === "invalid_grant") {
        if (desc.includes("already") &&
            (desc.includes("used") || desc.includes("redeemed"))) {
            return "Code already used";
        }
        if (desc.includes("expired")) {
            return "Code expired";
        }
        return "Invalid authorization code";
    }
    if (err === "invalid_client") {
        return "Invalid OAuth client configuration";
    }
    if (err === "invalid_request") {
        return "Invalid OAuth request";
    }
    if (err === "unauthorized_client") {
        return "Unauthorized OAuth client";
    }
    if (err === "access_denied") {
        return "Access denied";
    }
    if (err === "unsupported_grant_type") {
        return "Unsupported grant type";
    }
    return "Code exchange failed";
}
function simplifyOAuthRefreshError(error, errorDescription) {
    const err = error?.toLowerCase() ?? "";
    const desc = errorDescription?.toLowerCase() ?? "";
    if (err === "invalid_grant") {
        if (desc.includes("expired") || desc.includes("revoked")) {
            return "Refresh token expired or revoked";
        }
        return "Invalid refresh token";
    }
    if (err === "invalid_client") {
        return "Invalid OAuth client configuration";
    }
    if (err === "invalid_request") {
        return "Invalid OAuth request";
    }
    return "Token refresh failed";
}
function simplifyOAuthInfoError(error, _errorDescription) {
    const err = error?.toLowerCase() ?? "";
    if (err === "invalid_client") {
        return "Invalid OAuth client configuration";
    }
    return "Tenant OAuth info unavailable";
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
 * Parse OAuth error responses into short, safe messages — never log raw bodies.
 */
async function parseOAuthFailureReason(response, kind) {
    try {
        const text = (await response.text()).trim();
        if (text.length === 0) {
            return { reason: defaultOAuthFailureReason(kind) };
        }
        try {
            const body = JSON.parse(text);
            const error = typeof body.error === "string" ? body.error : undefined;
            const errorDescription = typeof body.error_description === "string"
                ? body.error_description
                : undefined;
            if (kind === "authorization_code") {
                return {
                    reason: simplifyOAuthCodeError(error, errorDescription),
                };
            }
            if (kind === "refresh_token") {
                return {
                    reason: simplifyOAuthRefreshError(error, errorDescription),
                };
            }
            return { reason: simplifyOAuthInfoError(error, errorDescription) };
        }
        catch {
            return { reason: defaultOAuthFailureReason(kind) };
        }
    }
    catch (readErr) {
        log("warn", "oauth_error_body_read_failed", undefined, readErr);
        return { reason: defaultOAuthFailureReason(kind) };
    }
}
function defaultOAuthFailureReason(kind) {
    switch (kind) {
        case "authorization_code":
            return "Code exchange failed";
        case "refresh_token":
            return "Token refresh failed";
        case "info":
            return "Tenant OAuth info unavailable";
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
        const contentLengthHeader = c.req.header("content-length");
        const contentLength = contentLengthHeader
            ? Number.parseInt(contentLengthHeader, 10)
            : 0;
        if (Number.isFinite(contentLength) &&
            contentLength > MAX_JSON_BODY_BYTES) {
            throw new http_exception_1.HTTPException(413, { message: "Request body too large" });
        }
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
function isPrivateIpv4(address) {
    const parts = address.split(".").map((part) => Number.parseInt(part, 10));
    if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) {
        return true;
    }
    const [first, second] = parts;
    return (first === 0 ||
        first === 10 ||
        first === 127 ||
        first >= 224 ||
        (first === 100 && second >= 64 && second <= 127) ||
        (first === 169 && second === 254) ||
        (first === 172 && second >= 16 && second <= 31) ||
        (first === 192 && second === 168));
}
function isUnsafeIpAddress(address) {
    const ipVersion = (0, node_net_1.isIP)(address);
    if (ipVersion === 4) {
        return isPrivateIpv4(address);
    }
    if (ipVersion === 6) {
        const normalized = address.toLowerCase();
        if (normalized.startsWith("::ffff:")) {
            return isPrivateIpv4(normalized.slice("::ffff:".length));
        }
        return (normalized === "::" ||
            normalized === "::1" ||
            normalized.startsWith("fc") ||
            normalized.startsWith("fd") ||
            normalized.startsWith("fe80") ||
            normalized.startsWith("ff"));
    }
    return true;
}
async function assertPublicHttpsUrl(url, label, requestId) {
    if (url.protocol !== "https:") {
        throw new http_exception_1.HTTPException(400, { message: `${label} must use HTTPS` });
    }
    if (url.username || url.password) {
        throw new http_exception_1.HTTPException(400, { message: `${label} must not include credentials` });
    }
    const hostname = url.hostname.toLowerCase();
    if (hostname === "localhost" || hostname.endsWith(".localhost")) {
        throw new http_exception_1.HTTPException(400, { message: "Unsafe API URL" });
    }
    if ((0, node_net_1.isIP)(hostname) && isUnsafeIpAddress(hostname)) {
        throw new http_exception_1.HTTPException(400, { message: "Unsafe API URL" });
    }
    try {
        const addresses = await (0, promises_1.lookup)(hostname, { all: true });
        if (addresses.length === 0) {
            throw new http_exception_1.HTTPException(400, { message: "Unsafe API URL" });
        }
        if (addresses.some(({ address }) => isUnsafeIpAddress(address))) {
            log("warn", "unsafe_url_resolved_private_address", {
                requestId,
                baseURL: url.origin,
            });
            throw new http_exception_1.HTTPException(400, { message: "Unsafe API URL" });
        }
    }
    catch (err) {
        if (isHTTPException(err)) {
            throw err;
        }
        log("warn", "url_dns_validation_failed", { requestId, baseURL: url.origin }, err);
        throw new http_exception_1.HTTPException(400, { message: "Unsafe API URL" });
    }
}
// Helper functions
async function validateApiUrl(apiBaseURL, tenant, requestId) {
    if (!apiBaseURL && !tenant) {
        throw new http_exception_1.HTTPException(400, {
            message: "apiBaseURL or tenant must be provided",
        });
    }
    let apiURL;
    if (apiBaseURL) {
        try {
            apiURL = new URL(apiBaseURL);
        }
        catch {
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
    if (!apiURL.origin || !apiURL.hostname) {
        throw new http_exception_1.HTTPException(400, {
            message: "apiBaseURL or tenant provided is invalid",
        });
    }
    await assertPublicHttpsUrl(apiURL, "apiBaseURL", requestId);
    return apiURL.origin;
}
async function getAuthInfo(baseURL, requestId) {
    const infoUrl = `${baseURL}/oauth/info`;
    try {
        const authInfoResp = await fetch(infoUrl, { redirect: "manual" });
        if (!authInfoResp.ok) {
            const { reason } = await parseOAuthFailureReason(authInfoResp, "info");
            log("error", "oauth_info_request_failed", {
                requestId,
                baseURL,
                status: authInfoResp.status,
                reason,
            });
            throw new http_exception_1.HTTPException(400, { message: reason });
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
        try {
            await assertPublicHttpsUrl(new URL(authInfo.authorizeEndpoint), "authorizeEndpoint", requestId);
        }
        catch (err) {
            if (isHTTPException(err)) {
                throw err;
            }
            log("error", "oauth_info_invalid_authorize_endpoint", {
                requestId,
                baseURL,
            });
            throw new http_exception_1.HTTPException(400, {
                message: "Authorization endpoint must use HTTPS",
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
async function storeAuthData(uuid, baseURL, codeVerifier, redirectUri, publicKey, pickupSecretHash, stateHash, requestId) {
    try {
        // TTL 5 minutes
        const ttl = Math.floor(Date.now() / 1000) + 300;
        const objectToPut = {
            id: uuid,
            baseURL,
            codeVerifier,
            redirectUri,
            publicKey,
            pickupSecretHash,
            stateHash,
            ttl,
        };
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
async function consumeStoredToken(uuid, pickupSecret, requestId) {
    try {
        const data = await ddbDocClient.send(new lib_dynamodb_1.DeleteCommand({
            TableName: validatedTableName,
            Key: { id: uuid },
            ConditionExpression: "attribute_exists(tokenInfo) AND pickupSecretHash = :pickupSecretHash",
            ExpressionAttributeValues: {
                ":pickupSecretHash": hashSecret(pickupSecret),
            },
            ReturnValues: "ALL_OLD",
        }));
        if (!data.Attributes?.tokenInfo) {
            throw new http_exception_1.HTTPException(400, {
                message: "Token not found or pickup secret invalid",
            });
        }
        log("info", "encrypted_token_consumed", {
            requestId,
            uuid: maskUuid(uuid),
        });
        return {
            id: data.Attributes.id,
            tokenInfo: data.Attributes.tokenInfo,
            ttl: data.Attributes.ttl,
        };
    }
    catch (err) {
        if (isHTTPException(err)) {
            throw err;
        }
        if (err instanceof Error && err.name === "ConditionalCheckFailedException") {
            log("warn", "encrypted_token_consume_rejected", {
                requestId,
                uuid: maskUuid(uuid),
            });
            throw new http_exception_1.HTTPException(400, {
                message: "Token not found or pickup secret invalid",
            });
        }
        log("error", "dynamodb_consume_encrypted_token_failed", {
            requestId,
            uuid: maskUuid(uuid),
            tableName: validatedTableName,
        }, err);
        throw new http_exception_1.HTTPException(400, { message: "Error retrieving data" });
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
            redirect: "manual",
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
        const { reason } = await parseOAuthFailureReason(tokenResp, "authorization_code");
        log("error", "oauth_token_exchange_failed", {
            requestId,
            baseURL,
            status: tokenResp.status,
            redirectUri,
            reason,
        });
        throw new http_exception_1.HTTPException(400, { message: reason });
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
            redirect: "manual",
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
        const { reason } = await parseOAuthFailureReason(tokenResp, "refresh_token");
        log("error", "oauth_refresh_failed", {
            requestId,
            baseURL,
            status: tokenResp.status,
            reason,
        });
        throw new http_exception_1.HTTPException(400, { message: reason });
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
    if (state.length > MAX_STATE_CHARS) {
        log("warn", "oauth_state_too_large", { requestId });
        throw new http_exception_1.HTTPException(400, { message: "Invalid state parameter" });
    }
    try {
        const decoded = JSON.parse(atob(state));
        if (!decoded.id) {
            log("warn", "oauth_state_missing_fields", { requestId });
            throw new http_exception_1.HTTPException(400, { message: "Invalid state parameter" });
        }
        return decoded;
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
    const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant, requestId);
    const authInfo = await getAuthInfo(baseURL, requestId);
    const uuid = (0, crypto_1.randomUUID)();
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    const pickupSecret = generateSecret();
    const redirectUri = body.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl;
    const state = encodeOAuthState({ id: uuid, baseURL });
    const objectToPut = await storeAuthData(uuid, baseURL, codeVerifier, redirectUri, body.publicKey, hashSecret(pickupSecret), hashOAuthState(state), requestId);
    const authURL = new URL(authInfo.authorizeEndpoint);
    authURL.searchParams.set("client_id", validatedClientId);
    authURL.searchParams.set("response_type", "code");
    authURL.searchParams.set("redirect_uri", redirectUri);
    authURL.searchParams.set("state", state);
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
        pickupSecret,
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
    const { id: uuid } = parseOAuthState(state, requestId);
    const tableData = await getStoredData(uuid, requestId);
    if (!tableData.stateHash || !verifyOAuthState(state, tableData.stateHash)) {
        log("warn", "oauth_state_verification_failed", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(400, { message: "Invalid state parameter" });
    }
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
    if (!tableData.redirectUri) {
        log("warn", "auth_code_missing_redirect_uri", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(400, {
            message: "Invalid stored data: missing redirect URI",
        });
    }
    if (!tableData.publicKey) {
        log("warn", "auth_code_missing_public_key", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(400, {
            message: "Invalid stored data: missing public key",
        });
    }
    const tokenData = await exchangeCodeForToken(tableData.baseURL, code, tableData.redirectUri, tableData.codeVerifier, requestId);
    let encryptedToken;
    try {
        encryptedToken = encryptToken(tokenData, atob(tableData.publicKey));
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
    const pickupSecret = getBearerToken(c.req.header("authorization"));
    if (!pickupSecret) {
        log("warn", "pickup_secret_missing", {
            requestId,
            uuid: maskUuid(uuid),
        });
        throw new http_exception_1.HTTPException(401, { message: "Pickup secret required" });
    }
    const tokenData = await consumeStoredToken(uuid, pickupSecret, requestId);
    log("info", "encrypted_token_retrieved", { requestId, uuid: maskUuid(uuid) });
    return c.json(tokenData, 200);
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
    const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant, requestId);
    const tokenData = await exchangeRefreshToken(baseURL, body.refreshToken, requestId);
    return c.json(tokenData, 200);
});
exports.handler = (0, aws_lambda_1.handle)(app);
