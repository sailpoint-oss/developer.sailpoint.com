---
id: account-delete-customizer
title: Account Delete
pagination_label: Account Delete
sidebar_label: Account Delete
keywords: ['connectivity', 'connectors', 'Account Delete']
description: Intercept the account delete command. 
slug: /docs/saas-connectivity/connector-customizers/commands/account-delete
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-delete](../../commands/account-delete) command.

### Before account-delete command

Use this logic to implement the command: 

```javascript
    .beforeStdAccountDelete(async (context: Context, input: StdAccountDeleteInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned. 

### After account-delete command

Use this logic to implement the command: 

```javascript
    .afterStdAccountDelete(async (context: Context, output: StdAccountDeleteOutput) => {
        logger.info(`Running after account delete`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned. 