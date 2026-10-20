---
id: error-handling
title: Error Handling
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 3
sidebar_class_name: errorHandling
keywords: ['connectivity', 'connectors', 'error handling']
description: If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.
slug: /connectivity/saas-connectivity/in-depth/error-handling
tags: ['Connectivity']
---

If the code fails due to validation issues, connectivity or configuration errors, you can handle the error and provide the user with information about what went wrong. Properly handled errors make it easier to debug and identify what happened in your connector when something goes wrong.

## Connector Errors

The connector SDK has a built-in ConnectorError to use in your project to handle most generic errors:

[airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts)

```javascript
import { ConnectorError } from "@sailpoint/connector-sdk"

...

export class AirtableClient {

...

    async getAllAccounts(): Promise<AirtableAccount[]> {
        return this.airTableBase('Users').select({
            view: 'Grid view'
        }).firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                recordArray.push(AirtableAccount.createWithRecords(record))
            }
            return recordArray
        }).catch(err => {
            throw new ConnectorError('error while getting accounts: ' + err)
        })
    }
```

## Not Found Error Type

The connector SDK offers a special error type `ConnectorErrorType.NotFound`. This error signals to SHF that a specific account does not exist in the source system. When SHF receives this error during a provisioning event (such as an account update triggered by a role assignment), it will automatically call `std:account:create` to provision the account rather than treating the failure as an error.

```typescript
import { ConnectorError, ConnectorErrorType } from '@sailpoint/connector-sdk'

.stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {
    const account = await myClient.getAccount(input.identity)

    if (!account) {
        // Signal to SHF that the account does not exist.
        // SHF will automatically trigger std:account:create for this identity.
        throw new ConnectorError('Account not found', ConnectorErrorType.NotFound)
    }

    // ... perform normal account update logic below
})
```

Use `ConnectorErrorType.NotFound` in `stdAccountRead` and `stdAccountUpdate` handlers. Do not use it during aggregation — an account not being found during `stdAccountList` should simply mean the account is not included in the results.

## Custom Errors

You can create custom error classes that extend `ConnectorError` to give more meaningful and specific responses. Create these in a dedicated `errors/` directory in your project:

```typescript
// src/errors/invalid-configuration-error.ts
import { ConnectorError, ConnectorErrorType } from '@sailpoint/connector-sdk'

export class InvalidConfigurationError extends ConnectorError {
    constructor(message: string) {
        super(message, ConnectorErrorType.InvalidConfiguration)
        this.name = 'InvalidConfigurationError'
    }
}
```

Then throw it in your constructor or configuration validation:

```typescript
import { InvalidConfigurationError } from './errors/invalid-configuration-error'

export class MyClient {
    constructor(config: any) {
        if (!config.apiKey) {
            throw new InvalidConfigurationError('apiKey must be provided from config')
        }
        if (!config.baseUrl) {
            throw new InvalidConfigurationError('baseUrl must be provided from config')
        }
    }
}
```

## Recommended error types and when to use them

The following custom error classes cover the most common failure scenarios. Each maps to a `ConnectorErrorType` that SHF understands.

### `InvalidConfigurationError`

Use when required configuration is missing or invalid — before any API call is made. This is the most common error to throw during connector initialization.

```typescript
constructor(config: any) {
    if (!config.tenantId) {
        throw new InvalidConfigurationError('tenantId is required')
    }
}
```

### `InsufficientPermissionError`

Use when the source API returns a 403 or an equivalent "access denied" error. This tells SHF the connector's credentials do not have the required permissions.

```typescript
async getAccount(id: string): Promise<any> {
    try {
        const response = await this.httpClient.get(`/users/${id}`)
        return response.data
    } catch (err: any) {
        if (err.response?.status === 403) {
            throw new InsufficientPermissionError(
                'The API credentials do not have permission to read users'
            )
        }
        throw err
    }
}
```

### `InvalidRequestError`

Use when the connector cannot construct a valid request to send to the source, or when the source returns a 400 indicating the request was malformed.

```typescript
async createAccount(attrs: Record<string, any>): Promise<any> {
    if (!attrs.email) {
        throw new InvalidRequestError('email is required to create an account')
    }
    // ...
}
```

### `InvalidResponseError`

Use during aggregation or in `getAccount` when the connector receives a response it cannot parse or map to the expected schema. This helps distinguish a broken integration from a transient network failure.

```typescript
async listAccounts(): Promise<any[]> {
    const response = await this.httpClient.get('/users')
    if (!Array.isArray(response.data)) {
        throw new InvalidResponseError(
            `Expected an array from /users but got: ${typeof response.data}`
        )
    }
    return response.data
}
```

### `TimeoutError`

Use when the source system returns a timeout error or when an operation takes longer than expected. This is distinct from the SHF-level 3-minute connector timeout.

```typescript
async runLongOperation(): Promise<void> {
    try {
        await this.httpClient.post('/jobs/export', {}, { timeout: 30000 })
    } catch (err: any) {
        if (err.code === 'ECONNABORTED') {
            throw new TimeoutError('Export job timed out after 30 seconds')
        }
        throw err
    }
}
```

### Organizing custom error classes

Create one file per error class in a `src/errors/` directory and export them from an `index.ts`:

```
src/
└── errors/
    ├── index.ts
    ├── invalid-configuration-error.ts
    ├── insufficient-permission-error.ts
    ├── invalid-request-error.ts
    ├── invalid-response-error.ts
    └── timeout-error.ts
```

```typescript
// src/errors/index.ts
export { InvalidConfigurationError } from './invalid-configuration-error'
export { InsufficientPermissionError } from './insufficient-permission-error'
export { InvalidRequestError } from './invalid-request-error'
export { InvalidResponseError } from './invalid-response-error'
export { TimeoutError } from './timeout-error'
```

Each file follows the same pattern as `InvalidConfigurationError` above, substituting the appropriate `ConnectorErrorType` value.
