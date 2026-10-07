# HTTP Client

The connector SDK includes a built-in HTTP client powered by [Axios](https://axios-http.com/) that provides authentication, automatic retries with exponential backoff, and structured logging out of the box. Instead of installing and configuring Axios yourself, you can use `createConnectorHttpClient` to get a fully configured client in a few lines of code.

## Getting Started

Import and create an HTTP client in your connector:

```typescript
import {
  createConnectorHttpClient,
  ConnectorError,
  AxiosInstance,
} from '@sailpoint/connector-sdk'

export class MyClient {
  private httpClient: AxiosInstance

  constructor(config: any) {
    if (!config.apiUrl) {
      throw new ConnectorError('apiUrl must be provided from config')
    }

    this.httpClient = createConnectorHttpClient({
      baseURL: config.apiUrl,
      auth: { type: 'bearer', token: config.token },
    })
  }

  async getUsers(): Promise<any[]> {
    const response = await this.httpClient.get('/users')
    return response.data
  }

  async getUser(id: string): Promise<any> {
    const response = await this.httpClient.get(`/users/${id}`)
    return response.data
  }

  async createUser(user: any): Promise<any> {
    const response = await this.httpClient.post('/users', user)
    return response.data
  }
}
```

The returned client is a standard Axios instance, so you can use all the familiar Axios methods (`get`, `post`, `put`, `patch`, `delete`) as you normally would.

## Authentication

The `auth` option supports four authentication types that work without user interaction. The SDK handles all header and parameter injection automatically.

### Basic Authentication

Sends an `Authorization: Basic <base64>` header on every request:

```typescript
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  auth: {
    type: 'basic',
    username: config.username,
    password: config.password,
  },
})
```

### Bearer Token

Sends an `Authorization: Bearer <token>` header on every request:

```typescript
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  auth: {
    type: 'bearer',
    token: config.token,
  },
})
```

### API Key

Sends an API key as either a header or query parameter:

```typescript
// As a header
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  auth: {
    type: 'apiKey',
    in: 'header',
    name: 'X-API-Key',
    value: config.apiKey,
  },
})

// As a query parameter
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  auth: {
    type: 'apiKey',
    in: 'query',
    name: 'api_key',
    value: config.apiKey,
  },
})
```

### OAuth2 Client Credentials

Automatically fetches and refreshes access tokens using the OAuth2 Client Credentials grant. Tokens are cached across invocations and refreshed before they expire:

```typescript
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  auth: {
    type: 'oauth2ClientCredentials',
    tokenUrl: 'https://auth.example.com/oauth/token',
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    scope: 'read write', // optional
  },
})
```

By default, client credentials are sent in the POST body. Some OAuth2 providers require credentials in the `Authorization` header instead. Use the `credentialPlacement` option to control this:

```typescript
auth: {
  type: 'oauth2ClientCredentials',
  tokenUrl: 'https://auth.example.com/oauth/token',
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  credentialPlacement: 'header', // sends Basic auth header to the token endpoint
}
```

:::info
OAuth2 tokens are stored in the SDK's [in-memory cache](./caching) and persist across warm connector invocations. If the same `tokenUrl` and `clientId` are used, the token is shared across multiple HTTP client instances, so you don't need to manage token lifecycle yourself.
:::

## Automatic Retries

The HTTP client automatically retries failed requests with exponential backoff. This is enabled by default and handles the most common transient failures:

- **429 (Too Many Requests)** — respects the `Retry-After` header if present, otherwise uses exponential backoff
- **500, 502, 503, 504** — server errors that are typically transient
- **Network errors** — connection failures with no HTTP response

### Default Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| `maxRetries` | 3 | Maximum number of retry attempts |
| `baseDelay` | 1000ms | Base delay for exponential backoff |
| `maxDelay` | 30000ms | Maximum delay between retries |
| `retryableStatusCodes` | `[429, 500, 502, 503, 504]` | Status codes that trigger a retry |
| `retryOnNetworkError` | `true` | Whether to retry on connection failures |

The delay between retries follows the formula `baseDelay * 2^(attempt-1)` plus a small random jitter to prevent [thundering herd](https://en.wikipedia.org/wiki/Thundering_herd_problem) scenarios when many connectors retry simultaneously.

### Custom Retry Configuration

You can override any of the defaults:

```typescript
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  retry: {
    maxRetries: 5,
    baseDelay: 2000,
    maxDelay: 60000,
    retryableStatusCodes: [429, 500, 502, 503, 504, 522],
    retryOnNetworkError: true,
  },
})
```

### Disabling Retries

If the target API has its own retry logic or you need full control over error handling, you can disable retries entirely:

```typescript
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  retry: false,
})
```

## Logging

All requests and responses are automatically logged using the SDK's built-in [pino logger](./logging). Request logs include the HTTP method, URL, and base URL. Response logs include the status code. Error responses are logged at the `error` level with the status code.

You do not need to configure logging separately — it is included with every HTTP client instance.

## Additional Axios Options

If you need to configure Axios options that are not covered by the SDK's options (such as `maxRedirects`, `responseType`, or custom `validateStatus`), use the `axiosOptions` escape hatch:

```typescript
const httpClient = createConnectorHttpClient({
  baseURL: config.apiUrl,
  auth: { type: 'bearer', token: config.token },
  timeout: 60000,
  axiosOptions: {
    maxRedirects: 0,
    responseType: 'json',
  },
})
```

Options set directly (`baseURL`, `timeout`, `headers`) take precedence over values in `axiosOptions`.

## Full Example

Here is a complete example of a connector client class using the SDK HTTP client with OAuth2 authentication:

```typescript
import {
  createConnectorHttpClient,
  ConnectorError,
  AxiosInstance,
} from '@sailpoint/connector-sdk'

export class ServiceNowClient {
  private httpClient: AxiosInstance

  constructor(config: any) {
    if (!config.instanceUrl) {
      throw new ConnectorError('instanceUrl must be provided from config')
    }
    if (!config.clientId || !config.clientSecret) {
      throw new ConnectorError(
        'clientId and clientSecret must be provided from config'
      )
    }

    this.httpClient = createConnectorHttpClient({
      baseURL: `${config.instanceUrl}/api/now`,
      timeout: 30000,
      auth: {
        type: 'oauth2ClientCredentials',
        tokenUrl: `${config.instanceUrl}/oauth_token.do`,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
      },
    })
  }

  async testConnection(): Promise<void> {
    await this.httpClient.get('/table/sys_user?sysparm_limit=1')
  }

  async getUser(sysId: string): Promise<any> {
    const response = await this.httpClient.get(
      `/table/sys_user/${sysId}`
    )
    return response.data.result
  }

  async listUsers(): Promise<any[]> {
    const response = await this.httpClient.get(
      '/table/sys_user?sysparm_limit=100'
    )
    return response.data.result
  }

  async updateUser(sysId: string, updates: any): Promise<any> {
    const response = await this.httpClient.patch(
      `/table/sys_user/${sysId}`,
      updates
    )
    return response.data.result
  }
}
```
