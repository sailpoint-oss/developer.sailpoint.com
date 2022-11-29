---
id: account-enable
title: Account Enable
pagination_label: Account Enable
sidebar_label: Account Enable
keywords: ['connectivity', 'connectors', 'account enable']
description: Enable an account on the source.
slug: /docs/saas-connectivity/commands/account-enable
tags: ['Connectivity', 'Connector Command']
---

| Input/Output    |        Data Type        |
| :-------------- | :---------------------: |
| Input - Enable  |  StdAccountEnableInput  |
| Output - Enable | StdAccountEnableOutput  |
| Input - Disable | StdAccountDisableInput  |
| Output -Disable | StdAccountDisableOutput |

### Example StdAccountEnableInput/StdAccountDisableInput

```javascript
"key": {
    "simple": {
        "id": "john.doe"
    }
}
```

### Example StdAccountEnableOutput/StdAccountDisableOutput

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

You typically invoke the account enable and account disable commands during the joiner, mover, leaver (JML) lifecycle. An identity’s leaving from the organization or change to a role that does not require access to one or more accounts triggers the account disable command. An identity’s rejoining the organization or move to a role that grants access to a previously disabled account triggers the account enable command.

Disabling accounts is generally preferred if the source supports account disabling so the account data remains for later reactivation or inspection. If the source does not support account disabling or deleting accounts is preferred when an identity leaves the organization, the connector performs the necessary steps to delete an account with the account disable function.

> 🚧 It is important to note that although SaaS Connectivity supports the account delete command, IDN never sends the account delete command, only the account enable command. The connector’s developer determines the appropriate action for account disable on the source.

Account enable/disable is similar to implementing the account update command. If you have implemented your source call to modify any of the values on your source, then you can use the same method to implement the command. The following code implements enable and disable:

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
