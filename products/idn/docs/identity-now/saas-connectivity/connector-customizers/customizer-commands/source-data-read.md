---
id: source-data-read-customizer
title: Source Data Read
pagination_label: Source Data Read
sidebar_label: Source Data Read
keywords: ['connectivity', 'connectors', 'Source Data Read']
description: Intercept the source data read command.
slug: /docs/saas-connectivity/connector-customizers/commands/source-data-read
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [source-data-read](../../commands/source-data-read) command.

### Before source-data-read command

Use this logic to implement the command: 

```javascript
    .beforeStdSourceDataRead(async (context: Context, input: StdSourceDataReadInput) => {
        logger.info(`Running before source data read. Query: ${input.queryInput?.query}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After source-data-read command

Use this logic to implement the command: 

```javascript
    .afterStdSourceDataRead(async (context: Context, output: StdSourceDataReadOutput) => {
        logger.info(`Running after source data read first query record key: ${output[0].key}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.