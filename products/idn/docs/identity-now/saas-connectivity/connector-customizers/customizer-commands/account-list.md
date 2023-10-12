---
id: account-list-customizer
title: Account List
pagination_label: Account List
sidebar_label: Account List
keywords: ['connectivity', 'connectors', 'Account List']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/account-list
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [account-list](../../commands/account-list) command

### Before account-list command

You can implement the command by using the following logic

```javascript
    .beforeStdAccountList(async (context: Context, input: StdAccountListInput) => {
        logger.info(`Running before account list for account. State: ${input.state}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After account-list command

After account-list is not available for customization at this time. If you need to modify the values of the response, then it is recommended to use Transforms.