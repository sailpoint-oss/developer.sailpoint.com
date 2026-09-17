---
id: account-delete
title: Account Delete
pagination_label: Account Delete
sidebar_label: Account Delete
keywords: ['connectivity', 'connectors', 'account delete']
description: Remove account from a source.
slug: /connectivity/saas-connectivity/commands/account-delete
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |       Data Type        |
| :----------- | :--------------------: |
| Input        | StdAccountDeleteInput  |
| Output       | StdAccountDeleteOutput |

### Example StdAccountDeleteInput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    }
}
```

### Example StdAccountDeleteOutput

```javascript
{
}
```

## Description

The account delete command sends the account's key from SHF, which your connector uses to permanently remove the account from the source system.

:::caution Important
Although SaaS Connectivity supports the `std:account:delete` command, SHF does **not** send it automatically during normal leaver lifecycle events. SHF sends the `std:account:disable` command during standard offboarding. Account delete must be triggered explicitly by a `BeforeProvisioning` rule. For more information, see the [documentation](https://community.sailpoint.com/t5/Identity-Security-Cloud-Articles/Identity-Security-Cloud-Rule-Guide/ta-p/76665) and an [example implementation](https://community.sailpoint.com/t5/Identity-Security-Cloud-Wiki/Identity-Security-Cloud-Rule-Guide-Before-Provisioning-Rule/ta-p/77415). If you want to permanently remove accounts on leaver events, implement that logic in your [Account Disable](./account-disable.md) handler instead.
:::

To use this command, you must specify this value in the `commands` array: `std:account:delete`

## Implementation

The following example shows how to look up the account by its native ID and call the source API to delete it:

```typescript
import {
    ConnectorError,
    ConnectorErrorType,
    Context,
    Response,
    StdAccountDeleteInput,
    StdAccountDeleteOutput,
} from '@sailpoint/connector-sdk'

.stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
    const id = input.key.simple?.id ?? input.identity

    // Confirm the account exists before attempting to delete
    const account = await myClient.getAccount(id)
    if (!account) {
        throw new ConnectorError('Account not found', ConnectorErrorType.NotFound)
    }

    await myClient.deleteAccount(account.id)

    // Return an empty object — account delete has no output payload
    res.send({})
})
```

If your source does not support hard deletes but you need to remove access, you can implement a soft delete instead:

```typescript
.stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
    // Soft delete: disable the account rather than permanently removing it
    await myClient.disableAccount(input.identity)
    res.send({})
})
```

The following snippet shows an equivalent implementation using the Airtable example connector:

[index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts)

```javascript
.stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
    const account = await airtable.getAccount(input.key)
    res.send(await airtable.deleteAccount(account.airtableId))
})
```

[airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts)

```javascript
async deleteAccount(airTableid: string): Promise<Record<string, never>> {
    return this.airTableBase('Users').destroy(airTableid,
    ).then(() => {
        return {}
    }).catch(err => {
        throw new ConnectorError('error while deleting account: ' + err)
    })
}
```
