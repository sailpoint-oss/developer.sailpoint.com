---
id: account-enable-customizer
title: Account Enable
pagination_label: Account Enable
sidebar_label: Account Enable
keywords: ['connectivity', 'connectors', 'Account Enable']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/account-enable
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-enable](../../commands/account-enable) command

### Before account-enable command

You can implement the command by using the following logic

```javascript
    .beforeStdAccountEnable(async (context: Context, input: StdAccountEnableInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After account-enable command

You can implement the command by using the following logic

```javascript
    .afterStdAccountEnable(async (context: Context, output: StdAccountEnableOutput) => {
        logger.info(`Running after account enable for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 