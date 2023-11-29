---
id: entitlement-read-customizer
title: Entitlement Read
pagination_label: Entitlement Read
sidebar_label: Entitlement Read
keywords: ['connectivity', 'connectors', 'Entitlement Read']
description: Intercept the entitlement read command.
slug: /docs/saas-connectivity/customizers/commands/entitlement-read
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [entitlement-read](../../commands/entitlement-read) command.


| Input/Output |        Data Type         |
| :----------- | :----------------------: |
| Input        | StdEntitlementReadInput  |
| Output       | StdEntitlementReadOutput |

### Example StdEntitlementReadInput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "type": "group"
}
```

### Example StdEntitlementReadOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "administrator"
        }
    },
    "type": "group",
    "attributes": {
        "id": "administrator",
        "name": "Administrator"
    }
}
```
## Implementation

### Before entitlement-read command

Use this logic to implement the command: 

```javascript
    .beforeStdEntitlementRead(async (context: Context, input: StdEntitlementReadInput) => {
        logger.info(`Running before entitlement read for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned, but the same data type must still be returned.

### After entitlement-read command

Use this logic to implement the command: 

```javascript
    .afterStdEntitlementRead(async (context: Context, output: StdEntitlementReadOutput) => {
        logger.info(`Running after entitlement read for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned, but the same data type must still be returned.