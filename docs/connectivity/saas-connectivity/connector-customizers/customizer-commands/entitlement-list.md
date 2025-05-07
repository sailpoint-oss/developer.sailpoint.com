---
id: entitlement-list-customizer
title: Entitlement List
pagination_label: Entitlement List
sidebar_label: Entitlement List
keywords: ['connectivity', 'connectors', 'Entitlement List']
description: Intercept the entitlement list command.
slug: /connectivity/saas-connectivity/customizers/commands/entitlement-list
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [entitlement-list](../../commands/entitlement-list) command.

| Input/Output |        Data Type        |
| :----------- | :---------------------: |
| Input        | StdEntitlementListInput |

### Example StdEntitlementListInput

```javascript
{
    "type": "group"
}
```

## Implementation

### Before entitlement-list command

Use this logic to implement the command:

```javascript
    .beforeStdEntitlementList(async (context: Context, input: StdEntitlementListInput) => {
        logger.info(`Running before entitlement list for account. State ${input.state}`)
        return input
    })
```

The `input` object can be mutated and returned, but the same data type must still be returned.

### After entitlement-list command

Use this logic to implement the command:

```javascript
    .afterStdEntitlementList(async (context: Context, output: StdEntitlementListOutput) => {
        logger.info(`Running after entitlement list for account  ${output.identity}`)
        return output
    })
```

The `output` object can be mutated and returned, but the same data type must still be returned.
