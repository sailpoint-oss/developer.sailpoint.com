---
id: change-password
title: Change Password
pagination_label: Change Password
sidebar_label: Change Password
keywords: ['connectivity', 'connectors', 'change password']
description: Change password for an account on the source.
slug: /connectivity/saas-connectivity/commands/change-password
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |        Data Type        |
| :----------- | :---------------------: |
| Input        | StdChangePasswordInput  |
| Output       | StdChangePasswordOutput |

### Example StdChangePasswordInput

```javascript
"identity": "john.doe",
"key": {
    "simple": {
        "id": "john.doe"
    }
},
"password": "newPassword"
```

### Example StdChangePasswordOutput

```javascript
{
}
```

## Description

The change password command is triggered in SHF when a user changes their password through SHF. When this occurs, if your source has change password enabled, then you can change the user password on the source system through SHF.

To use this command, you must specify this value in the `commands` array: `std:change-password`

## Implementation

The `input` object contains three relevant fields:

| Field | Description |
|---|---|
| `input.key` | The account's key as stored in SHF. Use `input.key.simple?.id` to extract the native account ID. |
| `input.identity` | The account's identity string (usually the same as the key ID). |
| `input.password` | The new plaintext password to set on the source system. |

The change password command sends the password change event to your connector whenever a user changes their password through the Password Manager. Pass the new password directly to your source API:

```typescript
import {
    ConnectorError,
    ConnectorErrorType,
    Context,
    Response,
    StdChangePasswordInput,
    StdChangePasswordOutput,
} from '@sailpoint/connector-sdk'

.stdChangePassword(async (context: Context, input: StdChangePasswordInput, res: Response<StdChangePasswordOutput>) => {
    const id = input.key.simple?.id ?? input.identity

    // Confirm the account exists before attempting the password change
    const account = await myClient.getAccount(id)
    if (!account) {
        throw new ConnectorError('Account not found', ConnectorErrorType.NotFound)
    }

    // Send the new password to the source system
    await myClient.updatePassword(id, input.password)

    // Change password returns an empty object on success
    res.send({})
})
```

:::caution
The password in `input.password` is the new plaintext password that has already been validated against the source's password policy by SHF. Do not perform additional policy validation in your connector — pass it directly to the source API.
:::

## Testing in SailPoint Human Fabric {#testing-in-identity-security-cloud}

In order to test in SailPoint Human Fabric, the source application must be configured so that it is able to accept password change requests through the Password Manager. Once this setup is complete, you can log in as a user whose identity exists in the configured application and change their password in the Password Manager.
