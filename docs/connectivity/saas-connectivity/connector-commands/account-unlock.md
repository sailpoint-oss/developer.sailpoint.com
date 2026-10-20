---
id: account-unlock
title: Account Unlock
pagination_label: Account Unlock
sidebar_label: Account Unlock
keywords: ['connectivity', 'connectors', 'account unlock']
description: Lock and unlock an account on the source.
slug: /connectivity/saas-connectivity/commands/account-unlock
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |       Data Type        |
| :----------- | :--------------------: |
| Input        | StdAccountUnlockInput  |
| Output       | StdAccountUnlockOutput |

### Example StdAccountUnlockInput

```javascript
"identity": "john.doe",
"key": {
    "simple": {
        "id": "john.doe"
    }
}
```

### Example StdAccountUnlockOutput

```javascript
{
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

The account lock and account unlock commands provide ways to temporarily prevent access to an account. SHF only supports the **unlock** command — accounts can only be locked at the source system level, but they can be unlocked through SHF.

The `locked` state is distinct from the `disabled` state:
- `disabled: true` means the account has been intentionally deactivated (e.g., a leaver event). Use the [Account Disable](./account-disable.md) command for this.
- `locked: true` means the account has been temporarily prevented from logging in, typically due to too many failed login attempts. The account can be unlocked without enabling it as a full leaver/joiner action.

To use this command, you must specify this value in the `commands` array: `std:account:unlock`

## Implementation

Implementing account unlock is similar to the other commands that update attributes on an account. After unlocking, return the updated account with `locked: false`:

```typescript
import {
    ConnectorError,
    ConnectorErrorType,
    Context,
    Response,
    SimpleKey,
    StdAccountUnlockInput,
    StdAccountUnlockOutput,
} from '@sailpoint/connector-sdk'

.stdAccountUnlock(async (context: Context, input: StdAccountUnlockInput, res: Response<StdAccountUnlockOutput>) => {
    const id = input.key.simple?.id ?? input.identity

    const account = await myClient.getAccount(id)
    if (!account) {
        throw new ConnectorError('Account not found', ConnectorErrorType.NotFound)
    }

    // Call the source API to unlock the account
    const updated = await myClient.unlockAccount(id)

    res.send({
        key: SimpleKey(updated.id),
        disabled: !updated.active,
        locked: false,
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
.stdAccountUnlock(async (context: Context, input: StdAccountUnlockInput, res: Response<StdAccountUnlockOutput>) => {
    let account = await airtable.getAccount(input.key)
    const change: AttributeChange = {
        op: AttributeChangeOp.Set,
        attribute: 'locked',
        value: 'false'
    }
    account = await airtable.changeAccount(account, change)
    res.send(account.toStdAccountUnlockOutput())
})
```
