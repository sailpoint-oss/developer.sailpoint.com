---
id: account-enable-customizer
title: Account Enable
pagination_label: Account Enable
sidebar_label: Account Enable
keywords: ['connectivity', 'connectors', 'Account Enable']
description: Intercept the account enable command.
slug: /saas-connectivity/customizers/commands/account-enable
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-enable](../../commands/account-enable) command.


| Input/Output    |        Data Type        |
| :-------------- | :---------------------: |
| Input           |  StdAccountEnableInput  |
| Output          |  StdAccountEnableOutput |

### Example StdAccountEnableInput

```javascript
"identity": "john.doe",
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
## Implementation

### Before account-enable command

Use this logic to implement the command: 

```javascript
    .beforeStdAccountEnable(async (context: Context, input: StdAccountEnableInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-enable command

Use this logic to implement the command: 

```javascript
    .afterStdAccountEnable(async (context: Context, output: StdAccountEnableOutput) => {
        logger.info(`Running after account enable for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.