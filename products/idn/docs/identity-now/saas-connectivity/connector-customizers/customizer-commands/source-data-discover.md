---
id: source-data-discover-customizer
title: Source Data Discover
pagination_label: Source Data Discover
sidebar_label: Source Data Discover
keywords: ['connectivity', 'connectors', 'Source Data Discover']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/source-data-discover
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [source-data-discover](../../commands/source-data-discover) command

### Before source-data-discover command

You can implement the command by using the following logic

```javascript
    .beforeStdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput) => {
        logger.info(`Running before source data discover. Query: ${input.queryInput?.query}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After source-data-discover command

You can implement the command by using the following logic

```javascript
    .afterStdSourceDataDiscover(async (context: Context, output: StdSourceDataDiscoverOutput) => {
        logger.info(`Running after source data discover first record key: ${output[0].key}`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 