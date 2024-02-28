---
id: account-unlock-customizer
title: Account Unlock
pagination_label: Account Unlock
sidebar_label: Account Unlock
keywords: ['connectivity', 'connectors', 'Account Unlock']
description: Intercept the account unlock command.
slug: /saas-connectivity/customizers/commands/account-unlock
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-unlock](../../commands/account-unlock) command.


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

### Before account-unlock command

Use this logic to implement the command: 

```javascript
    .beforeStdAccountUnlock(async (context: Context, input: StdAccountUnlockInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-unlock command

Use this logic to implement the command: 

```javascript
    .afterStdAccountUnlock(async (context: Context, output: StdAccountUnlockOutput) => {
        logger.info(`Running after account unlock for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.