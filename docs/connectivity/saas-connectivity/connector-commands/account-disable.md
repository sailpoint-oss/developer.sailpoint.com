---
id: account-disable
title: Account Disable
pagination_label: Account Disable
sidebar_label: Account Disable
keywords: ['connectivity', 'connectors', 'account disable']
description: Disable an account on the source.
slug: /saas-connectivity/commands/account-disable
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

You typically invoke the `account disable` command during the joiner, mover, leaver (JML) lifecycle. An identity’s leaving from the organization or change to a role that does not require access to one or more accounts triggers the account disable command.

Disabling accounts is generally preferred if the source supports account disabling so the account data remains for later reactivation or inspection. If the source does not support account disabling, or deleting accounts is preferred when an identity leaves the organization, the connector can perform the necessary steps to delete an account with the account disable function.

> 🚧 It is important to note that although SaaS Connectivity supports the account delete command, IDN never sends the account delete command, only the account disable command. The connector’s developer determines the appropriate action for account disable on the source.

Account disable is similar to implementing the account update command. If you have implemented your source call to modify any of the values on your source, then you can use the same method to implement the command. The following code implements disable:

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
