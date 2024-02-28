---
id: account-list-customizer
title: Account List
pagination_label: Account List
sidebar_label: Account List
keywords: ['connectivity', 'connectors', 'Account List']
description: Intercept the account list command.
slug: /saas-connectivity/customizers/commands/account-list
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-list](../../commands/account-list) command.


| Input/Output |      Data Type       |
| :----------- | :------------------: |
| Input        | StdAccountListInput  |

### Example StdAccountListInput

```javascript
"state": {"date": "1686341338871"},
"stateful": true
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

After account-list is not available for customization at this time. If you need to modify the values of the response, it is recommended that you use [Transforms](https://developer.sailpoint.com/idn/docs/transforms/).