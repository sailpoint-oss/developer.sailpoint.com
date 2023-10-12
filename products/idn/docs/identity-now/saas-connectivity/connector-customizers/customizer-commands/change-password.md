---
id: change-password-customizer
title: Change Password
pagination_label: Change Password
sidebar_label: Change Password
keywords: ['connectivity', 'connectors', 'Change Password']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/change-password
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [change-password](../../commands/change-password) command

### Before change-password command

You can implement the command by using the following logic

```javascript
    .beforeStdChangePassword(async (context: Context, input: StdChangePasswordInput) => {
        logger.info(`Running before change password for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After change-password command

You can implement the command by using the following logic

```javascript
    .afterStdChangePassword(async (context: Context, output: StdChangePasswordOutput) => {
        logger.info(`Running after change password`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 