---
id: account-update-customizer
title: Account Update
pagination_label: Account Update
sidebar_label: Account Update
keywords: ['connectivity', 'connectors', 'Account Update']
description: Intercept the account update command.
slug: /connectivity/saas-connectivity/customizers/commands/account-update
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-update](../../commands/account-update) command.

| Input/Output |       Data Type        |
| :----------- | :--------------------: |
| Input        | StdAccountUpdateInput  |
| Output       | StdAccountUpdateOutput |

### Example StdAccountUpdateInput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "changes": [
        {
            "op": <Set|Add|Remove>,
            "attribute": <account attribute to modify>,
            "value": <the value to use for the operation>
        }
    ]
}
```

### Example StdAccountUpdateOutput

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

### Before account-update command

Use this logic to implement the command:

```javascript
    .beforeStdAccountUpdate(async (context: Context, input: StdAccountUpdateInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```

The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-update command

Use this logic to implement the command:

```javascript
    .afterStdAccountUpdate(async (context: Context, output: StdAccountUpdateOutput) => {
        logger.info(`Running after account update for account ${output.identity}}`)
        return output
    })
```

The `output` object can be mutated and returned, but the same data type must still be returned.
