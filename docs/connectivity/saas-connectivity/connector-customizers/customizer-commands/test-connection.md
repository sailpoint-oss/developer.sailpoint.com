---
id: test-connection-customizer
title: Test Connection
pagination_label: Test Connection
sidebar_label: Test Connection
keywords: ['connectivity', 'connectors', 'test connection']
description: Intercept the test connection command.
slug: /connectivity/saas-connectivity/customizers/commands/test-connection
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [Test-Connection](../../commands/test-connection) command.

| Input/Output |        Data Type        |
| :----------- | :---------------------: |
| Input        |        undefined        |
| Output       | StdTestConnectionOutput |

### Example StdTestConnectionOutput

```javascript
{
}
```

## Implementation

### Before test-connection command

Use this logic to implement the command:

```javascript
    .beforeStdTestConnection(async (context: Context, input: undefined) => {
        logger.info('Running before test connection')
    })
```

There is no input, so you cannot mutate any data. However, you can make web request calls or perform any type of logging or logic before calling the connector.

### After test-connection command

Use this logic to implement the command:

```javascript
    .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {
        logger.info('Running after test connection')
        return output
    })
```

The output datatype is always an empty object handed down from the connector.
