---
id: account-create-customizer
title: Account Create
pagination_label: Account Create
sidebar_label: Account Create
keywords: ['connectivity', 'connectors', 'Account Create']
description: Intercept the account create command. 
slug: /connectivity/saas-connectivity/customizers/commands/account-create
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-create](../../commands/account-create) command.


| Input/Output |       Data Type        |
| :----------- | :--------------------: |
| Input        | StdAccountCreateInput  |
| Output       | StdAccountCreateOutput |

### Example StdAccountCreateInput

```javascript
{
    "attributes": {
        "id": "john.doe",
        "email": "example@gmail.com",
        "department": "external",
        "displayName": "John Doe",
        "password": "test",
        "entitlements": [
            "user",
            "administrator"
        ]
    }
}
```

### Example StdAccountCreateOutput

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

### Before account-create command

Use this logic to implement the command: 

```javascript
    .beforeStdAccountCreate(async (context: Context, input: StdAccountCreateInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-create command

Use this logic to implement the command: 

```javascript
    .afterStdAccountCreate(async (context: Context, output: StdAccountCreateOutput) => {
        logger.info(`Running after account create for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned. 