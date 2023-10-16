---
id: test-connection-customizer
title: Test Connection
pagination_label: Test Connection
sidebar_label: Test Connection
keywords: ['connectivity', 'connectors', 'test connection']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/commands/test-connection
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [Test-Connection](../../commands/test-connection) command

### Before test-connection command

You can implement the command by using the following logic

```javascript
    .beforeStdTestConnection(async (context: Context, input: undefined) => {
        logger.info('Running before test connection')
    })
```
Since there is no input you cannot mutate any data, but you can make web request calls or perform any type of logging or logic you would like prior to making the call to the connector

### After test-connection command

You can implement the command by using the following logic

```javascript
    .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {
        logger.info('Running after test connection')
        return output
    })
```
The output datatype is always an empty object that is handed down from the connector