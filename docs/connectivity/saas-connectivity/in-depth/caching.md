# Caching

The connector SDK provides a general-purpose in-memory cache that persists across warm connector invocations. Because connectors run in a Lambda-like environment, module-level state survives between requests as long as the container stays warm. The SDK's `connectorCache` takes advantage of this to let you store expensive-to-fetch data and reuse it on subsequent calls.

## How It Works

Connectors are invoked like AWS Lambda functions. When a connector is called frequently, the runtime keeps the container warm, and any module-level variables retain their values between invocations. The `connectorCache` is a module-level singleton, so anything you store in it is available on the next invocation without re-fetching.

:::caution
The cache is in-memory only. If the container is recycled (which happens after periods of inactivity), the cache is cleared. Do not rely on the cache for data that must survive a cold start — use the [Data Store](./data-store) for persistent storage instead.
:::

## Basic Usage

The simplest way to use the cache is `fetch`, which handles the get-or-compute pattern in one call:

```typescript
import { connectorCache } from '@sailpoint/connector-sdk'

// Inside a command handler:
async (context, input, res) => {
  // Returns cached value if present, otherwise calls the factory once and stores the result
  const users = await connectorCache.fetch<User[]>(
    'all-users',
    () => myClient.getAllUsers(),
    300, // TTL: 5 minutes
  )

  for (const user of users) {
    res.send(user)
  }
}
```

If multiple requests arrive simultaneously before the first factory call completes, only one call to `myClient.getAllUsers()` is made — all concurrent callers wait for the same result. This prevents redundant API calls during high-concurrency scenarios.

You can also use `get` and `set` directly when you need more control:

```typescript
let users = connectorCache.get<User[]>('all-users')
if (!users) {
  users = await myClient.getAllUsers()
  connectorCache.set('all-users', users, 300)
}
```
```

## API Reference

### `connectorCache.fetch<T>(key, factory, ttlSeconds?): Promise<T>`

Return the cached value for `key`, or call `factory` to compute and store it. Concurrent calls for the same key are deduplicated — only one `factory` invocation runs regardless of how many callers are waiting.

```typescript
const roleList = await connectorCache.fetch(
  'roles',
  async () => {
    const response = await httpClient.get('/roles')
    return response.data
  },
  600, // cache for 10 minutes
)
```

### `connectorCache.get<T>(key): T | undefined`

Retrieve a value from the cache. Returns `undefined` if the key does not exist or has expired.

```typescript
const value = connectorCache.get<string>('my-key')
```

### `connectorCache.set(key, value, ttlSeconds?)`

Store a value in the cache. If `ttlSeconds` is provided, the entry automatically expires after that many seconds. If omitted, the entry persists until the container is recycled or the entry is manually deleted.

```typescript
// Cache for 10 minutes
connectorCache.set('roles', roleList, 600)

// Cache indefinitely (until container recycle)
connectorCache.set('static-config', configData)
```

### `connectorCache.has(key): boolean`

Check whether a key exists and has not expired.

```typescript
if (!connectorCache.has('schema')) {
  // Fetch and cache the schema
}
```

### `connectorCache.delete(key): boolean`

Remove a key from the cache. Returns `true` if the key existed.

```typescript
connectorCache.delete('stale-data')
```

### `connectorCache.clear(includeInternal?)`

Remove all user entries from the cache. By default, internal SDK entries (such as OAuth2 tokens managed by the [HTTP client](./http-client)) are preserved. Pass `true` to clear everything.

```typescript
// Clear your cached data, keep SDK tokens
connectorCache.clear()

// Clear everything including SDK tokens
connectorCache.clear(true)
```

### `connectorCache.size: number`

The number of entries currently in the cache.

## Practical Examples

### Caching entitlements during account aggregation

Entitlement data often doesn't change between individual account reads. You can cache it once and reuse it:

```typescript
async function getEntitlements(client: MyClient): Promise<Map<string, string>> {
  let entitlementMap = connectorCache.get<Map<string, string>>('entitlement-map')

  if (!entitlementMap) {
    const entitlements = await client.listEntitlements()
    entitlementMap = new Map(entitlements.map(e => [e.id, e.name]))
    connectorCache.set('entitlement-map', entitlementMap, 600)
  }

  return entitlementMap
}
```

### Caching API configuration or schema

If your connector needs to fetch API metadata or schema information that rarely changes, cache it to avoid repeated calls:

```typescript
let schema = connectorCache.get<SchemaDefinition>('api-schema')

if (!schema) {
  schema = await httpClient.get('/api/schema').then(r => r.data)
  connectorCache.set('api-schema', schema, 1800) // cache for 30 minutes
}
```

:::info
For data that must survive container recycling — such as pagination cursors or sync timestamps — use the [Data Store](./data-store) instead of the in-memory cache.
:::

## Reserved Keys

Keys starting with `__sdk:` are reserved for internal SDK use (such as OAuth2 token caching). Do not use this prefix for your own cache keys.

## Cache vs. Data Store

| | In-Memory Cache | Data Store |
|---|---|---|
| **Persistence** | Warm invocations only | Survives cold starts |
| **Storage** | Process memory | Source `connectorAttributes` |
| **Speed** | Instant | Requires patchConfig round-trip |
| **Best for** | Expensive API responses, lookup tables, temporary state | Sync timestamps, pagination tokens, configuration state |

Use the cache for data you can re-fetch if needed. Use the [Data Store](./data-store) for data that must survive container recycling.
