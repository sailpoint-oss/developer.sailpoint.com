---
id: source-data-discover-customizer
title: Source Data Discover
pagination_label: Source Data Discover
sidebar_label: Source Data Discover
keywords: ['connectivity', 'connectors', 'Source Data Discover']
description: Intercept the source data discover command.
slug: /saas-connectivity/customizers/commands/source-data-discover
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [source-data-discover](../../commands/source-data-discover) command.


| Input/Output |            Data Type        |
| :----------- | :-------------------------: |
| Input        | StdSourceDataDiscoverInput  |
| Output       | StdSourceDataDiscoverOutput |

### Example StdSourceDataDiscoverInput

```javascript
{
    "queryInput": {
        "query": "fetchAll",
        "limit": 10
    }
}
```

### Example StdSourceDataDiscoverOutput

```javascript
[
    {
        key: 'id',
        label: 'Id',
        subLabel: 'Airtable Base Id'
    },
    {
        key: 'name',
        label: 'Name',
        subLabel: 'Airtable Source Table Name'
    }
]
```
## Implementation

### Before source-data-discover command

Use this logic to implement the command: 

```javascript
    .beforeStdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput) => {
        logger.info(`Running before source data discover. Query: ${input.queryInput?.query}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After source-data-discover command

Use this logic to implement the command: 

```javascript
    .afterStdSourceDataDiscover(async (context: Context, output: StdSourceDataDiscoverOutput) => {
        logger.info(`Running after source data discover first record key: ${output[0].key}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.