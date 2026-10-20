---
id: account-enable
title: Account Enable
pagination_label: Account Enable
sidebar_label: Account Enable
keywords: ['connectivity', 'connectors', 'account enable']
description: Enable an account on the source.
slug: /connectivity/saas-connectivity/commands/account-enable
tags: ['Connectivity', 'Connector Command']
---

| Input/Output    |       Data Type        |
| :-------------- | :--------------------: |
| Input - Enable  | StdAccountEnableInput  |
| Output - Enable | StdAccountEnableOutput |

### Example StdAccountEnableInput

```javascript
"key": {
    "simple": {
        "id": "john.doe"
    }
}
```

### Example StdAccountEnableOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "disabled": false,
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

You typically invoke the `account enable` command during the joiner, mover, leaver (JML) lifecycle. An identity’s rejoining the organization or move to a role that grants access to a previously disabled account triggers the account enable command.

To use this command, you must specify this value in the `commands` array: `std:account:enable`

## Implementation

Implementing account enable is similar to implementing the account update command. Most source APIs expose either a dedicated enable endpoint or accept a status field via PATCH/PUT. After enabling the account, return the updated account object so SHF reflects the new `disabled: false` state.

```typescript
import {
    ConnectorError,
    ConnectorErrorType,
    Context,
    Response,
    SimpleKey,
    StdAccountEnableInput,
    StdAccountEnableOutput,
} from '@sailpoint/connector-sdk'

.stdAccountEnable(async (context: Context, input: StdAccountEnableInput, res: Response<StdAccountEnableOutput>) => {
    const id = input.key.simple?.id ?? input.identity

    const account = await myClient.getAccount(id)
    if (!account) {
        throw new ConnectorError('Account not found', ConnectorErrorType.NotFound)
    }

    // Call the source API to enable the account.
    // Exact approach depends on the API: a dedicated endpoint, or a PATCH to set an active/status field.
    const updated = await myClient.enableAccount(id)

    res.send({
        key: SimpleKey(updated.id),
        disabled: false,
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

The following code from the Airtable example connector shows an equivalent pattern using the `AttributeChange` helper:

```javascript
.stdAccountEnable(async (context: Context, input: StdAccountEnableInput, res: Response<StdAccountEnableOutput>) => {
    let account = await airtable.getAccount(input.key)
    const change: AttributeChange = {
        op: AttributeChangeOp.Set,
        attribute: 'enabled',
        value: 'true'
    }
    account = await airtable.changeAccount(account, change)
    res.send(account.toStdAccountEnableOutput())
})
```
