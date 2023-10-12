---
id: account-read-customizer
title: Account Read
pagination_label: Account Read
sidebar_label: Account Read
keywords: ['connectivity', 'connectors', 'Account Read']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/account-read
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-read](../../commands/account-read) command

### Before account-read command

You can implement the command by using the following logic

```javascript
    .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After account-read command

You can implement the command by using the following logic

```javascript
    .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {
        logger.info(`Running after account read for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 