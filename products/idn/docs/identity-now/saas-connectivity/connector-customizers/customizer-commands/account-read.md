---
id: account-read-customizer
title: Account Read
pagination_label: Account Read
sidebar_label: Account Read
keywords: ['connectivity', 'connectors', 'Account Read']
description: Intercept the account read command.
slug: /docs/saas-connectivity/connector-customizers/commands/account-read
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-read](../../commands/account-read) command.

### Before account-read command

Use this logic to implement the command: 

```javascript
    .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-read command

Use this logic to implement the command: 

```javascript
    .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {
        logger.info(`Running after account read for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.