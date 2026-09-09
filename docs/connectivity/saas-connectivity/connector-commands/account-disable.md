---
id: account-disable
title: Account Disable
pagination_label: Account Disable
sidebar_label: Account Disable
keywords: ['connectivity', 'connectors', 'account disable']
description: Disable an account on the source.
slug: /connectivity/saas-connectivity/commands/account-disable
tags: ['Connectivity', 'Connector Command']
---

| Input/Output    |        Data Type        |
| :-------------- | :---------------------: |
| Input - Disable | StdAccountDisableInput  |
| Output -Disable | StdAccountDisableOutput |

### Example StdAccountDisableInput

```javascript
"key": {
    "simple": {
        "id": "john.doe"
    }
}
```

### Example StdAccountDisableOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "disabled": true,
    "locked": false,
    "attributes": {
        "id": "john.doe",
        "displayName": "John Doe",
        "email": "example@sailpoint.com",
        "entitlements": [
            "administrator",
            "sailpoint"
        ]
    }
}
```

## Description

You typically invoke the `account disable` command during the joiner, mover, leaver (JML) lifecycle. An identity’s leaving from the organization or change to a role that does not require access to one or more accounts triggers the account disable command.

Disabling accounts is generally preferred if the source supports account disabling so the account data remains for later reactivation or inspection. If the source does not support account disabling, or deleting accounts is preferred when an identity leaves the organization, the connector can perform the necessary steps to delete an account with the account disable function.

> 🚧 It is important to note that although SaaS Connectivity supports the account delete command, SHF never sends the account delete command, only the account disable command. The connector’s developer determines the appropriate action for account disable on the source.

To use this command, you must specify this value in the `commands` array: `std:account:disable`

:::caution Important
Although SaaS Connectivity supports a separate `std:account:delete` command, SHF **never** sends it automatically. The `std:account:disable` command is the only command SHF sends during normal leaver lifecycle events. If your organization's policy is to delete accounts on offboarding rather than disable them, implement the delete logic inside your `account disable` handler.
:::

## Implementation

Account disable is similar to the account update command. After disabling the account, return the updated account with `disabled: true` so SHF reflects the new state.

```typescript
import {
    ConnectorError,
    ConnectorErrorType,
    Context,
    Response,
    SimpleKey,
    StdAccountDisableInput,
    StdAccountDisableOutput,
} from '@sailpoint/connector-sdk'

.stdAccountDisable(async (context: Context, input: StdAccountDisableInput, res: Response<StdAccountDisableOutput>) => {
    const id = input.key.simple?.id ?? input.identity

    const account = await myClient.getAccount(id)
    if (!account) {
        throw new ConnectorError('Account not found', ConnectorErrorType.NotFound)
    }

    // Call the source API to disable the account.
    // Exact approach depends on the API: a dedicated endpoint, or a PATCH to set an active/status field.
    const updated = await myClient.disableAccount(id)

    res.send({
        key: SimpleKey(updated.id),
        disabled: true,
        locked: updated.locked,
        attributes: {
            id: updated.id,
            displayName: updated.displayName,
            email: updated.email,
            groups: updated.groups,
        },
    })
})
```

The following code from the Airtable example connector shows an equivalent pattern:

```javascript
.stdAccountDisable(async (context: Context, input: StdAccountDisableInput, res: Response<StdAccountDisableOutput>) => {
    let account = await airtable.getAccount(input.key)
    const change: AttributeChange = {
        op: AttributeChangeOp.Set,
        attribute: 'enabled',
        value: 'false'
    }
    account = await airtable.changeAccount(account, change)
    res.send(account.toStdAccountDisableOutput())
})
```
