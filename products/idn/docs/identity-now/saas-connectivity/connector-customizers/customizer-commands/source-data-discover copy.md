---
id: source-data-read-customizer
title: Source Data Read
pagination_label: Source Data Read
sidebar_label: Source Data Read
keywords: ['connectivity', 'connectors', 'Source Data Read']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/commands/source-data-read
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [source-data-read](../../commands/source-data-read) command

### Before source-data-read command

You can implement the command by using the following logic

```javascript
    .beforeStdSourceDataRead(async (context: Context, input: StdSourceDataReadInput) => {
        logger.info(`Running before source data read. Query: ${input.queryInput?.query}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After source-data-read command

You can implement the command by using the following logic

```javascript
    .afterStdSourceDataRead(async (context: Context, output: StdSourceDataReadOutput) => {
        logger.info(`Running after source data read first query record key: ${output[0].key}`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 