---
id: account-create-customizer
title: Account Create
pagination_label: Account Create
sidebar_label: Account Create
keywords: ['connectivity', 'connectors', 'Account Create']
description: Intercept the account create command. 
slug: /docs/saas-connectivity/connector-customizers/commands/account-create
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-create](../../commands/account-create) command.

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