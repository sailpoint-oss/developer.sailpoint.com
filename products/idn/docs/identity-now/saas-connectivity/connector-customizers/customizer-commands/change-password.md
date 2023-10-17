---
id: change-password-customizer
title: Change Password
pagination_label: Change Password
sidebar_label: Change Password
keywords: ['connectivity', 'connectors', 'Change Password']
description: Intercept the change password command.
slug: /docs/saas-connectivity/connector-customizers/commands/change-password
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [change-password](../../commands/change-password) command.

### Before change-password command

Use this logic to implement the command: 

```javascript
    .beforeStdChangePassword(async (context: Context, input: StdChangePasswordInput) => {
        logger.info(`Running before change password for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After change-password command

Use this logic to implement the command: 

```javascript
    .afterStdChangePassword(async (context: Context, output: StdChangePasswordOutput) => {
        logger.info(`Running after change password`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.