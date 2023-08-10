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

You typically invoke the account enable command during the joiner, mover, leaver (JML) lifecycle. An identity’s rejoining the organization or move to a role that grants access to a previously disabled account triggers the account enable command.

Account enable is similar to implementing the account update command. If you have implemented your source call to modify any of the values on your source, then you can use the same method to implement the command. The following code implements enable:

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
