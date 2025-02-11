---
id: account-list-customizer
title: Account List
pagination_label: Account List
sidebar_label: Account List
keywords: ['connectivity', 'connectors', 'Account List']
description: Intercept the account list command.
slug: /connectivity/saas-connectivity/customizers/commands/account-list
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-list](../../commands/account-list) command.

| Input/Output |      Data Type      |
| :----------- | :-----------------: |
| Input        | StdAccountListInput |
| Output       | StdAccountListOutput |

### Example StdAccountListInput

```javascript
"state": {"date": "1686341338871"},
"stateful": true
```

### Example StdAccountListOutput

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

## Implementation

### Before account-list command

Use this logic to implement the command:

```javascript
    .beforeStdAccountList(async (context: Context, input: StdAccountListInput) => {
        logger.info(`Running before account list for account. State: ${input.state}`)
        return input
    })
```

The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-list command

Use this logic to implement the command:

```javascript
    .afterStdAccountList(async (context: Context, output: StdAccountListOutput) => {
        logger.info(`Running after account list for account ${output.identity}`)
        return output
    })
```

The `output` object can be mutated and returned, but the same data type must still be returned.

:::caution

The aggregation process will be delayed when you use this customization because the customization involves additional processing. 

:::

