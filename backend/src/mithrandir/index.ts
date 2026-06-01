// Create a DocumentClient that represents the query to add an item
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	DeleteCommand,
	DynamoDBDocumentClient,
	GetCommand,
	PutCommand,
	UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import {
	constants,
	createCipheriv,
	createDecipheriv,
	createHash,
	generateKeyPairSync,
	privateDecrypt,
	publicEncrypt,
	randomBytes,
	randomUUID,
} from "crypto";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { HTTPException } from "hono/http-exception";

type LogLevel = "info" | "warn" | "error";
type LogContext = Record<string, string | number | boolean | undefined>;

type AppVariables = {
	requestId: string;
};

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

const SECRET_VALUE_PATTERNS: Array<{ pattern: RegExp; replacement: string }> = [
	{
		pattern:
			/eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
		replacement: "[REDACTED_JWT]",
	},
	{ pattern: /Bearer\s+\S+/gi, replacement: "Bearer [REDACTED]" },
	{
		pattern:
			/"(access_token|refresh_token|id_token|code_verifier|code|client_secret|private_key|privateKey|publicKey|encryptedToken|tokenInfo|password)"\s*:\s*"[^"]*"/gi,
		replacement: '"$1":"[REDACTED]"',
	},
	{
		pattern:
			/(access_token|refresh_token|id_token|code_verifier|code|client_secret|state)=[^&\s#]*/gi,
		replacement: "$1=[REDACTED]",
	},
	{
		pattern: /-----BEGIN[A-Z ]+-----[\s\S]*?-----END[A-Z ]+-----/g,
		replacement: "[REDACTED_PEM]",
	},
	{ pattern: /[A-Za-z0-9+/]{48,}={0,2}/g, replacement: "[REDACTED]" },
];

const UUID_IN_PATH =
	/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;

function sanitizeString(value: string): string {
	let sanitized = value;
	for (const { pattern, replacement } of SECRET_VALUE_PATTERNS) {
		sanitized = sanitized.replace(pattern, replacement);
	}
	return sanitized;
}

function maskUuid(uuid: string | undefined): string | undefined {
	if (!uuid) {
		return undefined;
	}
	if (uuid.length <= 8) {
		return "***";
	}
	return `${uuid.slice(0, 8)}…`;
}

function sanitizeLogPath(path: string): string {
	return path.replace(UUID_IN_PATH, (match) => maskUuid(match) ?? "***");
}

function sanitizeRedirectUri(uri: string): string {
	try {
		const url = new URL(uri);
		return `${url.origin}${url.pathname}`;
	} catch {
		return "[invalid_uri]";
	}
}

function sanitizeBaseUrl(url: string): string {
	try {
		return new URL(url).origin;
	} catch {
		return sanitizeString(url);
	}
}

function sanitizeLogContext(context?: LogContext): LogContext | undefined {
	if (!context) {
		return undefined;
	}
	const sanitized: LogContext = {};
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

type OAuthFailureReason = {
	reason: string;
};

function simplifyOAuthCodeError(
	error?: string,
	errorDescription?: string,
): string {
	const err = error?.toLowerCase() ?? "";
	const desc = errorDescription?.toLowerCase() ?? "";

	if (err === "invalid_grant") {
		if (
			desc.includes("already") &&
			(desc.includes("used") || desc.includes("redeemed"))
		) {
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

function simplifyOAuthRefreshError(
	error?: string,
	errorDescription?: string,
): string {
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

function simplifyOAuthInfoError(
	error?: string,
	_errorDescription?: string,
): string {
	const err = error?.toLowerCase() ?? "";
	if (err === "invalid_client") {
		return "Invalid OAuth client configuration";
	}
	return "Tenant OAuth info unavailable";
}

function formatError(err: unknown): { name: string; message: string } {
	if (err instanceof Error) {
		return {
			name: err.name,
			message: sanitizeString(err.message),
		};
	}
	return { name: "UnknownError", message: sanitizeString(String(err)) };
}

function isHTTPException(err: unknown): err is HTTPException {
	return err instanceof HTTPException;
}

function log(
	level: LogLevel,
	message: string,
	context?: LogContext,
	err?: unknown,
): void {
	const entry: Record<string, unknown> = {
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
	} else if (level === "warn") {
		console.warn(line);
	} else {
		console.info(line);
	}
}

/**
 * Parse OAuth error responses into short, safe messages — never log raw bodies.
 */
async function parseOAuthFailureReason(
	response: Response,
	kind: "authorization_code" | "refresh_token" | "info",
): Promise<OAuthFailureReason> {
	try {
		const text = (await response.text()).trim();
		if (text.length === 0) {
			return { reason: defaultOAuthFailureReason(kind) };
		}
		try {
			const body = JSON.parse(text) as Record<string, unknown>;
			const error = typeof body.error === "string" ? body.error : undefined;
			const errorDescription =
				typeof body.error_description === "string"
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
		} catch {
			return { reason: defaultOAuthFailureReason(kind) };
		}
	} catch (readErr) {
		log("warn", "oauth_error_body_read_failed", undefined, readErr);
		return { reason: defaultOAuthFailureReason(kind) };
	}
}

function defaultOAuthFailureReason(
	kind: "authorization_code" | "refresh_token" | "info",
): string {
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
	throw new Error(
		`Missing required environment variables: ${missingEnvVars.join(", ")}`,
	);
}

// After validation, we can safely assert these values exist
const validatedClientId = clientId as string;
const validatedRedirectUrl = redirectUrl as string;
const validatedDevRedirectUrl = devRedirectUrl as string;
const validatedTableName = tableName as string;

const app = new Hono<{ Variables: AppVariables }>();

app.use("*", async (c, next) => {
	const requestId = c.req.header("x-request-id") ?? randomUUID();
	c.set("requestId", requestId);
	const start = Date.now();
	log("info", "request_started", {
		requestId,
		method: c.req.method,
		path: c.req.path,
	});
	try {
		await next();
	} finally {
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
	? new DynamoDBClient({ endpoint: process.env.ENDPOINT_OVERRIDE })
	: new DynamoDBClient({});

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// PKCE helper functions (RFC 7636)
function generateCodeVerifier(): string {
	return randomBytes(32)
		.toString("base64")
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
}

function generateCodeChallenge(verifier: string): string {
	return createHash("sha256")
		.update(verifier)
		.digest("base64")
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
}

// Helper functions
async function validateApiUrl(
	apiBaseURL?: string,
	tenant?: string,
): Promise<string> {
	if (!apiBaseURL && !tenant) {
		throw new HTTPException(400, {
			message: "apiBaseURL or tenant must be provided",
		});
	}

	let apiURL: URL;
	if (apiBaseURL) {
		apiURL = new URL(apiBaseURL);
		if (!apiURL.hostname) {
			throw new HTTPException(400, {
				message: "apiBaseURL is not a valid URL",
			});
		}
	} else {
		apiURL = new URL(`https://${tenant}.api.identitynow.com`);
		if (!apiURL.hostname) {
			throw new HTTPException(400, { message: "tenant is not valid" });
		}
	}

	if (!apiURL.origin) {
		throw new HTTPException(400, {
			message: "apiBaseURL or tenant provided is invalid",
		});
	}

	return apiURL.origin;
}

async function getAuthInfo(baseURL: string, requestId?: string) {
	const infoUrl = `${baseURL}/oauth/info`;
	try {
		const authInfoResp = await fetch(infoUrl);
		if (!authInfoResp.ok) {
			const { reason } = await parseOAuthFailureReason(authInfoResp, "info");
			log("error", "oauth_info_request_failed", {
				requestId,
				baseURL,
				status: authInfoResp.status,
				reason,
			});
			throw new HTTPException(400, { message: reason });
		}
		const authInfo = await authInfoResp.json();

		if (!authInfo?.authorizeEndpoint) {
			log("error", "oauth_info_missing_authorize_endpoint", {
				requestId,
				baseURL,
			});
			throw new HTTPException(400, {
				message: "Error retrieving tenant information",
			});
		}

		return authInfo;
	} catch (err) {
		if (isHTTPException(err)) {
			throw err;
		}
		log("error", "oauth_info_request_error", { requestId, baseURL }, err);
		throw new HTTPException(400, {
			message: "Error retrieving tenant information",
		});
	}
}

async function storeAuthData(
	uuid: string,
	baseURL: string,
	codeVerifier: string,
	redirectUri: string,
	requestId?: string,
) {
	try {
		// TTL 5 minutes
		const ttl = Math.floor(Date.now() / 1000) + 300;
		const objectToPut = { id: uuid, baseURL, codeVerifier, redirectUri, ttl };
		await ddbDocClient.send(
			new PutCommand({ TableName: validatedTableName, Item: objectToPut }),
		);
		log("info", "auth_session_stored", {
			requestId,
			uuid: maskUuid(uuid),
			baseURL,
		});
		return objectToPut;
	} catch (err) {
		log(
			"error",
			"dynamodb_put_auth_session_failed",
			{
				requestId,
				uuid: maskUuid(uuid),
				tableName: validatedTableName,
			},
			err,
		);
		throw new HTTPException(400, { message: "Error creating UUID" });
	}
}

async function getStoredData(uuid: string, requestId?: string) {
	try {
		const data = await ddbDocClient.send(
			new GetCommand({ TableName: validatedTableName, Key: { id: uuid } }),
		);
		if (!data.Item) {
			log("warn", "auth_session_not_found", {
				requestId,
				uuid: maskUuid(uuid),
			});
			throw new HTTPException(400, { message: "Invalid UUID" });
		}
		return data.Item;
	} catch (err) {
		if (isHTTPException(err)) {
			throw err;
		}
		log(
			"error",
			"dynamodb_get_auth_session_failed",
			{
				requestId,
				uuid: maskUuid(uuid),
				tableName: validatedTableName,
			},
			err,
		);
		throw new HTTPException(400, { message: "Error retrieving data" });
	}
}

async function deleteStoredData(uuid: string, requestId?: string) {
	try {
		await ddbDocClient.send(
			new DeleteCommand({ TableName: validatedTableName, Key: { id: uuid } }),
		);
		log("info", "auth_session_deleted", { requestId, uuid: maskUuid(uuid) });
	} catch (err) {
		log(
			"error",
			"dynamodb_delete_auth_session_failed",
			{
				requestId,
				uuid: maskUuid(uuid),
				tableName: validatedTableName,
			},
			err,
		);
		throw new HTTPException(500, { message: "Error deleting session data" });
	}
}

async function exchangeCodeForToken(
	baseURL: string,
	code: string,
	redirectUri: string,
	codeVerifier: string,
	requestId?: string,
) {
	const tokenUrl = `${baseURL}/oauth/token`;
	const formData = new URLSearchParams();
	formData.set("grant_type", "authorization_code");
	formData.set("client_id", validatedClientId);
	formData.set("code", code);
	formData.set("redirect_uri", redirectUri);
	formData.set("code_verifier", codeVerifier);

	let tokenResp: Response;
	try {
		tokenResp = await fetch(tokenUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formData.toString(),
		});
	} catch (err) {
		log(
			"error",
			"oauth_token_exchange_network_error",
			{ requestId, baseURL },
			err,
		);
		throw new HTTPException(400, {
			message: "Error exchanging code for token",
		});
	}

	if (!tokenResp.ok) {
		const { reason } = await parseOAuthFailureReason(
			tokenResp,
			"authorization_code",
		);
		log("error", "oauth_token_exchange_failed", {
			requestId,
			baseURL,
			status: tokenResp.status,
			redirectUri,
			reason,
		});
		throw new HTTPException(400, { message: reason });
	}

	let tokenData: { access_token?: string };
	try {
		tokenData = await tokenResp.json();
	} catch (err) {
		log(
			"error",
			"oauth_token_exchange_invalid_json",
			{ requestId, baseURL },
			err,
		);
		throw new HTTPException(400, { message: "Invalid token response" });
	}

	if (!tokenData.access_token) {
		log("error", "oauth_token_exchange_missing_access_token", {
			requestId,
			baseURL,
		});
		throw new HTTPException(400, { message: "Invalid token response" });
	}

	log("info", "oauth_token_exchange_succeeded", { requestId, baseURL });
	return tokenData;
}

async function exchangeRefreshToken(
	baseURL: string,
	refreshToken: string,
	requestId?: string,
) {
	const tokenUrl = `${baseURL}/oauth/token`;
	const formData = new URLSearchParams();
	formData.set("grant_type", "refresh_token");
	formData.set("client_id", validatedClientId);
	formData.set("refresh_token", refreshToken);

	let tokenResp: Response;
	try {
		tokenResp = await fetch(tokenUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formData.toString(),
		});
	} catch (err) {
		log("error", "oauth_refresh_network_error", { requestId, baseURL }, err);
		throw new HTTPException(400, { message: "Error exchanging refresh token" });
	}

	if (!tokenResp.ok) {
		const { reason } = await parseOAuthFailureReason(
			tokenResp,
			"refresh_token",
		);
		log("error", "oauth_refresh_failed", {
			requestId,
			baseURL,
			status: tokenResp.status,
			reason,
		});
		throw new HTTPException(400, { message: reason });
	}

	let tokenData: { access_token?: string };
	try {
		tokenData = await tokenResp.json();
	} catch (err) {
		log("error", "oauth_refresh_invalid_json", { requestId, baseURL }, err);
		throw new HTTPException(400, { message: "Invalid token response" });
	}

	if (!tokenData.access_token) {
		log("error", "oauth_refresh_missing_access_token", { requestId, baseURL });
		throw new HTTPException(400, { message: "Invalid token response" });
	}

	log("info", "oauth_refresh_succeeded", { requestId, baseURL });
	return tokenData;
}

function encryptToken(tokenData: unknown, publicKey: string) {
	const tokenString = JSON.stringify(tokenData);
	const symmetricKey = randomBytes(32); // 256 bits

	// Encrypt the data with AES-GCM
	const iv = randomBytes(12);
	const cipher = createCipheriv("aes-256-gcm", symmetricKey, iv);
	let encryptedData = cipher.update(tokenString, "utf8", "base64");
	encryptedData += cipher.final("base64");
	const authTag = cipher.getAuthTag().toString("base64");

	// Encrypt the symmetric key with RSA
	const encryptedSymmetricKey = publicEncrypt(
		{
			key: publicKey,
			padding: constants.RSA_PKCS1_OAEP_PADDING,
			oaepHash: "sha256",
		},
		symmetricKey,
	);

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
		const { publicKey, privateKey } = generateKeyPairSync("rsa", {
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
	} catch (error) {
		log("error", "rsa_key_pair_generation_failed", { modulusLength }, error);
		throw new Error("Failed to generate key pair");
	}
}

function decryptToken(encryptedTokenData: string, privateKey: string) {
	try {
		const tokenData = JSON.parse(encryptedTokenData);

		// Check token format version
		if (tokenData.version !== "1.0") {
			throw new Error("Unsupported token format version");
		}

		// Verify the encryption algorithms used
		if (
			tokenData.algorithm?.symmetric !== "AES-256-GCM" ||
			tokenData.algorithm?.asymmetric !== "RSA-OAEP-SHA256"
		) {
			throw new Error("Unsupported encryption algorithm");
		}

		// Extract required data
		const { ciphertext, encryptedKey, iv, authTag } = tokenData.data;
		if (!ciphertext || !encryptedKey || !iv || !authTag) {
			throw new Error("Invalid encrypted token format");
		}

		// Decrypt the symmetric key with the private key
		const encryptedSymmetricKey = Buffer.from(encryptedKey, "base64");
		const symmetricKey = privateDecrypt(
			{
				key: privateKey,
				padding: constants.RSA_PKCS1_OAEP_PADDING,
				oaepHash: "sha256",
			},
			encryptedSymmetricKey,
		);

		// Decrypt the data with the symmetric key
		const decipher = createDecipheriv(
			"aes-256-gcm",
			symmetricKey,
			Buffer.from(iv, "base64"),
		);

		decipher.setAuthTag(Buffer.from(authTag, "base64"));

		let decryptedData = decipher.update(ciphertext, "base64", "utf8");
		decryptedData += decipher.final("utf8");

		return JSON.parse(decryptedData);
	} catch (error) {
		log("error", "token_decryption_failed", undefined, error);
		throw new Error("Failed to decrypt token");
	}
}

async function storeEncryptedToken(
	uuid: string,
	encryptedToken: string,
	requestId?: string,
) {
	try {
		// TTL 5 minutes
		const ttl = Math.floor(Date.now() / 1000) + 300;
		await ddbDocClient.send(
			new UpdateCommand({
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
			}),
		);
		log("info", "encrypted_token_stored", { requestId, uuid: maskUuid(uuid) });
	} catch (err) {
		log(
			"error",
			"dynamodb_update_encrypted_token_failed",
			{
				requestId,
				uuid: maskUuid(uuid),
				tableName: validatedTableName,
			},
			err,
		);
		throw new HTTPException(400, { message: "Error storing token" });
	}
}

function parseOAuthState(
	state: string,
	requestId?: string,
): { id: string; publicKey: string } {
	try {
		const decoded = JSON.parse(atob(state)) as {
			id?: string;
			publicKey?: string;
		};
		if (!decoded.id || !decoded.publicKey) {
			log("warn", "oauth_state_missing_fields", { requestId });
			throw new HTTPException(400, { message: "Invalid state parameter" });
		}
		return { id: decoded.id, publicKey: decoded.publicKey };
	} catch (err) {
		if (isHTTPException(err)) {
			throw err;
		}
		log("warn", "oauth_state_parse_failed", { requestId }, err);
		throw new HTTPException(400, { message: "Invalid state parameter" });
	}
}

// Retrieve a UUID, generate a random encryption key, and return the auth URL
app.post("/Prod/sailapps/auth", async (c) => {
	const requestId = c.get("requestId");
	if (c.req.header("Content-Type") !== "application/json") {
		throw new HTTPException(400, {
			message: "Content-Type must be application/json",
		});
	}

	let body: {
		apiBaseURL?: string;
		tenant?: string;
		publicKey?: string;
		dev?: boolean;
	};
	try {
		body = await c.req.json();
	} catch (err) {
		log("warn", "auth_init_invalid_json", { requestId }, err);
		throw new HTTPException(400, { message: "Invalid JSON body" });
	}

	if (!body.publicKey) {
		throw new HTTPException(400, { message: "publicKey is required" });
	}

	const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
	const authInfo = await getAuthInfo(baseURL, requestId);

	const uuid = randomUUID();
	const codeVerifier = generateCodeVerifier();
	const codeChallenge = generateCodeChallenge(codeVerifier);
	const redirectUri =
		body.dev === true ? validatedDevRedirectUrl : validatedRedirectUrl;
	const objectToPut = await storeAuthData(
		uuid,
		baseURL,
		codeVerifier,
		redirectUri,
		requestId,
	);

	const state = { id: uuid, publicKey: body.publicKey };
	const authURL = new URL(authInfo.authorizeEndpoint);

	authURL.searchParams.set("client_id", validatedClientId);
	authURL.searchParams.set("response_type", "code");
	authURL.searchParams.set("redirect_uri", redirectUri);
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
	let body: { code?: string; state?: string; dev?: boolean } | undefined;
	if (c.req.raw.body) {
		try {
			body = await c.req.json();
		} catch (err) {
			log("warn", "auth_code_invalid_json", { requestId }, err);
			throw new HTTPException(400, { message: "Invalid JSON body" });
		}
	}

	const code = body?.code;
	const state = body?.state;

	if (!code) {
		throw new HTTPException(400, { message: "Code not provided" });
	}
	if (!state) {
		throw new HTTPException(400, { message: "State not provided" });
	}

	const { id: uuid, publicKey } = parseOAuthState(state, requestId);
	const tableData = await getStoredData(uuid, requestId);

	if (!tableData.baseURL) {
		log("warn", "auth_code_missing_base_url", {
			requestId,
			uuid: maskUuid(uuid),
		});
		throw new HTTPException(400, { message: "Invalid stored data" });
	}
	if (!tableData.codeVerifier) {
		log("warn", "auth_code_missing_pkce_verifier", {
			requestId,
			uuid: maskUuid(uuid),
		});
		throw new HTTPException(400, {
			message: "Invalid stored data: missing PKCE verifier",
		});
	}
	if (!tableData.redirectUri) {
		log("warn", "auth_code_missing_redirect_uri", {
			requestId,
			uuid: maskUuid(uuid),
		});
		throw new HTTPException(400, {
			message: "Invalid stored data: missing redirect URI",
		});
	}

	const tokenData = await exchangeCodeForToken(
		tableData.baseURL,
		code,
		tableData.redirectUri,
		tableData.codeVerifier,
		requestId,
	);

	let encryptedToken: string;
	try {
		encryptedToken = encryptToken(tokenData, atob(publicKey));
	} catch (err) {
		log(
			"error",
			"token_encryption_failed",
			{ requestId, uuid: maskUuid(uuid) },
			err,
		);
		throw new HTTPException(400, { message: "Failed to encrypt token" });
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
		throw new HTTPException(400, { message: "UUID not provided" });
	}

	const data = await getStoredData(uuid, requestId);
	if (!data.tokenInfo) {
		log("warn", "encrypted_token_not_found", {
			requestId,
			uuid: maskUuid(uuid),
		});
		throw new HTTPException(400, { message: "Token not found" });
	}

	await deleteStoredData(uuid, requestId);

	log("info", "encrypted_token_retrieved", { requestId, uuid: maskUuid(uuid) });

	return c.json(data, 200);
});

// Refresh token endpoint
app.post("/Prod/sailapps/auth/refresh", async (c) => {
	const requestId = c.get("requestId");
	if (c.req.header("Content-Type") !== "application/json") {
		throw new HTTPException(400, {
			message: "Content-Type must be application/json",
		});
	}

	let body: { refreshToken?: string; apiBaseURL?: string; tenant?: string };
	try {
		body = await c.req.json();
	} catch (err) {
		log("warn", "auth_refresh_invalid_json", { requestId }, err);
		throw new HTTPException(400, { message: "Invalid JSON body" });
	}

	if (!body.refreshToken) {
		throw new HTTPException(400, { message: "refreshToken is required" });
	}

	const baseURL = await validateApiUrl(body.apiBaseURL, body.tenant);
	const tokenData = await exchangeRefreshToken(
		baseURL,
		body.refreshToken,
		requestId,
	);
	return c.json(tokenData, 200);
});

// Decrypt token endpoint
app.post("/Prod/sailapps/auth/token/decrypt", async (c) => {
	const requestId = c.get("requestId");
	if (c.req.header("Content-Type") !== "application/json") {
		throw new HTTPException(400, {
			message: "Content-Type must be application/json",
		});
	}

	let body: {
		privateKey?: string;
		encryptedToken?: string;
		uuid?: string;
		isBase64Encoded?: boolean;
	};
	try {
		body = await c.req.json();
	} catch (err) {
		log("warn", "token_decrypt_invalid_json", { requestId }, err);
		throw new HTTPException(400, { message: "Invalid JSON body" });
	}

	// Validate required fields
	if (!body.privateKey) {
		throw new HTTPException(400, { message: "privateKey is required" });
	}

	if (!body.encryptedToken) {
		throw new HTTPException(400, { message: "encryptedToken is required" });
	}

	try {
		// If UUID is provided, get the encrypted token from the database
		let tokenInfo: string;
		if (body.uuid) {
			const data = await getStoredData(body.uuid, requestId);
			if (!data.tokenInfo) {
				log("warn", "token_decrypt_uuid_not_found", {
					requestId,
					uuid: maskUuid(body.uuid),
				});
				throw new HTTPException(400, {
					message: "Token not found for the provided UUID",
				});
			}
			tokenInfo = data.tokenInfo as string;
		} else {
			// Otherwise use the provided encrypted token directly
			tokenInfo = body.encryptedToken as string;
		}

		// Decode the private key if it's base64-encoded
		const privateKey = body.isBase64Encoded
			? atob(body.privateKey as string)
			: (body.privateKey as string);

		// Decrypt the token
		const decryptedToken = decryptToken(tokenInfo, privateKey);

		log("info", "token_decrypt_succeeded", {
			requestId,
			uuid: maskUuid(body.uuid),
		});

		return c.json(
			{
				token: decryptedToken,
				tokenInfo: {
					expiresAt: decryptedToken.expires_in
						? new Date(
								Date.now() + decryptedToken.expires_in * 1000,
							).toISOString()
						: undefined,
					tokenType: decryptedToken.token_type || "Bearer",
				},
			},
			200,
		);
	} catch (error) {
		if (isHTTPException(error)) {
			throw error;
		}
		log(
			"error",
			"token_decrypt_endpoint_failed",
			{
				requestId,
				uuid: maskUuid(body.uuid),
			},
			error,
		);
		throw new HTTPException(400, { message: "Failed to decrypt token" });
	}
});

// Generate RSA key pair endpoint
app.post("/Prod/sailapps/auth/keypair", async (c) => {
	const requestId = c.get("requestId");
	try {
		const keySize = 2048;
		const keyPair = generateRsaKeyPair(keySize);
		log("info", "rsa_key_pair_generated", { requestId, keySize });
		return c.json(
			{
				message: `Successfully generated ${keySize}-bit RSA key pair`,
				...keyPair,
			},
			200,
		);
	} catch (error) {
		if (isHTTPException(error)) {
			throw error;
		}
		log("error", "rsa_key_pair_endpoint_failed", { requestId }, error);
		throw new HTTPException(500, { message: "Failed to generate key pair" });
	}
});

export const handler = handle(app);
