---
id: data-store
title: Data Store
pagination_label: Data Store
sidebar_label: Data Store
sidebar_position: 5.6
sidebar_class_name: dataStore
keywords: ['connectivity', 'connectors', 'data store', 'persistent storage', 'connectorAttributes', 'patchConfig']
description: The connector SDK provides a persistent data store backed by source connectorAttributes. Use it to store sync timestamps, pagination state, and other data that must survive connector restarts.
slug: /connectivity/saas-connectivity/in-depth/data-store
tags: ['Connectivity']
---

The connector SDK provides a persistent key-value data store backed by your source's `connectorAttributes`. Unlike the [in-memory cache](./caching), data stored here survives container recycling and cold starts — it is persisted in the source configuration on the SHF platform.

Under the hood, the data store uses the `patchConfig` mechanism to write JSON Patch operations to `connectorAttributes`. The SDK handles the patch format for you and only sends patches when values actually change, avoiding unnecessary writes.

## Getting Started

Create a data store instance inside a command handler using the config and response objects:

```typescript
import {
  createConnectorDataStore,
  readConfig,
  createConnector,
} from '@sailpoint/connector-sdk'

export const connector = createConnector()
  .stdAccountList(async (context, input, res) => {
    const config = await readConfig()
    const dataStore = createConnectorDataStore(config, res)

    // Read the last sync timestamp
    const lastSync = dataStore.get<string>('lastSyncTimestamp')

    // Fetch accounts (delta or full depending on whether we have a timestamp)
    const accounts = lastSync
      ? await myClient.getAccountsSince(lastSync)
      : await myClient.getAllAccounts()

    for (const account of accounts) {
      res.send(account)
    }

    // Store the new sync timestamp
    dataStore.set('lastSyncTimestamp', new Date().toISOString())

    // Send all changes to SHF
    dataStore.flush()
  })
```

## API Reference

### `createConnectorDataStore(config, res)`

Creates a new data store instance.

- `config` — the connector config object from `readConfig()`
- `res` — the response object from the current command handler

```typescript
const config = await readConfig()
const dataStore = createConnectorDataStore(config, res)
```

### `dataStore.get<T>(key): T | undefined`

Read a value from `connectorAttributes`. If a pending (unflushed) change exists for the key, the pending value is returned.

```typescript
const cursor = dataStore.get<string>('paginationCursor')
const metadata = dataStore.get<{ page: number; total: number }>('syncMetadata')
```

### `dataStore.set(key, value)`

Set a value. The change is buffered — no patch is sent until `flush()` is called.

If the new value is identical to the current stored value (deep equality), the change is ignored and no patch will be emitted. This prevents unnecessary writes when your connector runs the same logic repeatedly.

```typescript
dataStore.set('lastSyncTimestamp', '2024-01-15T10:30:00Z')
dataStore.set('syncMetadata', { page: 5, total: 100 })
```

### `dataStore.delete(key)`

Remove a key from `connectorAttributes`. Like `set`, this is buffered until `flush()`.

```typescript
dataStore.delete('deprecatedField')
```

### `dataStore.flush()`

Send all accumulated changes as a single `patchConfig` call. The SDK uses the correct JSON Patch operation for each change:

- **Add** — for keys that don't exist yet in `connectorAttributes`
- **Replace** — for keys that already exist
- **Remove** — for deleted keys

If there are no pending changes, `flush()` is a no-op and nothing is sent.

```typescript
dataStore.set('key1', 'value1')
dataStore.set('key2', 'value2')
dataStore.delete('oldKey')

// All three changes are sent in a single patchConfig call
dataStore.flush()
```

### `dataStore.hasPendingChanges: boolean`

Check whether there are unflushed changes.

```typescript
if (dataStore.hasPendingChanges) {
  dataStore.flush()
}
```

### `dataStore.reload(context): Promise<void>`

Reload the connector config from SHF via the command context and update the data store's baseline. Call this during long aggregations to pick up config changes that occurred mid-run — including values written by a previous `flush()` call in the same invocation.

Pending changes are preserved across a reload.

```typescript
// Flush a batch, then reload so the next batch uses the updated baseline
dataStore.set('cursor', nextCursor)
dataStore.flush()
await dataStore.reload(context)
```

:::info
`flush()` also updates the local config baseline automatically, so in most cases an explicit `reload()` is only needed if the config may have changed externally — for example, if SHF or another process has updated `connectorAttributes` mid-aggregation.
:::

## Change Detection

One of the key benefits of the data store is automatic change detection. If you set a value to the same thing it already is, no patch is emitted:

```typescript
// config.connectorAttributes.lastSync is already '2024-01-15T10:30:00Z'
dataStore.set('lastSync', '2024-01-15T10:30:00Z')

dataStore.hasPendingChanges // false — nothing to flush
```

This also works with objects and arrays (compared by deep equality):

```typescript
// config.connectorAttributes.filter is already { status: 'active' }
dataStore.set('filter', { status: 'active' })

dataStore.hasPendingChanges // false
```

## Practical Examples

### Delta aggregation with sync timestamps

Store a timestamp after each aggregation so the next run only fetches new data:

```typescript
.stdAccountList(async (context, input, res) => {
  const config = await readConfig()
  const dataStore = createConnectorDataStore(config, res)

  const lastSync = dataStore.get<string>('accountSyncTimestamp')
  const now = new Date().toISOString()

  const accounts = lastSync
    ? await myClient.getModifiedAccounts(lastSync)
    : await myClient.getAllAccounts()

  for (const account of accounts) {
    res.send({
      key: { simple: { id: account.id } },
      attributes: account,
    })
  }

  dataStore.set('accountSyncTimestamp', now)
  dataStore.flush()
})
```

### Storing pagination state

If an API uses cursor-based pagination and you need to resume across invocations:

```typescript
.stdAccountList(async (context, input, res) => {
  const config = await readConfig()
  const dataStore = createConnectorDataStore(config, res)

  let cursor = dataStore.get<string>('userCursor')
  let hasMore = true

  while (hasMore) {
    const page = await myClient.getUsers({ cursor, limit: 100 })

    for (const user of page.results) {
      res.send({
        key: { simple: { id: user.id } },
        attributes: user,
      })
    }

    cursor = page.nextCursor
    hasMore = !!cursor

    // Persist cursor in case the connector times out mid-aggregation
    if (cursor) {
      dataStore.set('userCursor', cursor)
      dataStore.flush()
    }
  }

  // Clear cursor when aggregation completes
  dataStore.delete('userCursor')
  dataStore.flush()
})
```

### Reloading config during long aggregations

For very long aggregations, SHF may update the source config externally while the connector is running. Use `reload()` to pick up any changes and keep the data store's baseline in sync:

```typescript
.stdAccountList(async (context, input, res) => {
  const config = await readConfig()
  const dataStore = createConnectorDataStore(config, res)

  let cursor = dataStore.get<string>('userCursor')
  let batchCount = 0

  while (true) {
    const page = await myClient.getUsers({ cursor, limit: 100 })

    for (const user of page.results) {
      res.send({ key: { simple: { id: user.id } }, attributes: user })
    }

    if (!page.nextCursor) break

    cursor = page.nextCursor
    batchCount++

    // Persist cursor after each batch
    dataStore.set('userCursor', cursor)
    dataStore.flush()

    // Reload every 10 batches to pick up any external config changes
    if (batchCount % 10 === 0) {
      await dataStore.reload(context)
    }
  }

  dataStore.delete('userCursor')
  dataStore.flush()
})
```

### Storing cached lookup data

If you need to persist a mapping that is expensive to rebuild:

```typescript
const dataStore = createConnectorDataStore(config, res)

let groupMap = dataStore.get<Record<string, string>>('groupIdToNameMap')

if (!groupMap) {
  const groups = await myClient.listGroups()
  groupMap = Object.fromEntries(groups.map(g => [g.id, g.name]))
  dataStore.set('groupIdToNameMap', groupMap)
  dataStore.flush()
}
```

## Cache vs. Data Store

See the [Caching](./caching) page for a comparison of when to use the in-memory cache vs. the persistent data store. In general:

- Use the **in-memory cache** (`connectorCache`) for data you can re-fetch if the container restarts
- Use the **data store** (`createConnectorDataStore`) for data that must survive cold starts, like sync timestamps or pagination cursors
