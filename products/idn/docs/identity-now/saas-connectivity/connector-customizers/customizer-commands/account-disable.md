---
id: account-disable-customizer
title: Account Disable
pagination_label: Account Disable
sidebar_label: Account Disable
keywords: ['connectivity', 'connectors', 'Account Disable']
description: Intercept the account disable command. 
slug: /docs/saas-connectivity/connector-customizers/commands/account-disable
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-disable](../../commands/account-disable) command.

### Before account-disable command

Use this logic to implement the command: 

```javascript
    .beforeStdAccountDisable(async (context: Context, input: StdAccountDisableInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-disable command

Use this logic to implement the command: 

```javascript
    .afterStdAccountDisable(async (context: Context, output: StdAccountDisableOutput) => {
        logger.info(`Running after account disable for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.