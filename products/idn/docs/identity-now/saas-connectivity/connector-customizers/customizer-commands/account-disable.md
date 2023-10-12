---
id: account-disable-customizer
title: Account Disable
pagination_label: Account Disable
sidebar_label: Account Disable
keywords: ['connectivity', 'connectors', 'Account Disable']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/account-disable
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-disable](../../commands/account-disable) command

### Before account-disable command

You can implement the command by using the following logic

```javascript
    .beforeStdAccountDisable(async (context: Context, input: StdAccountDisableInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After account-disable command

You can implement the command by using the following logic

```javascript
    .afterStdAccountDisable(async (context: Context, output: StdAccountDisableOutput) => {
        logger.info(`Running after account disable for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 