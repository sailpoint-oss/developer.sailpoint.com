---
id: entitlement-list-customizer
title: Entitlement List
pagination_label: Entitlement List
sidebar_label: Entitlement List
keywords: ['connectivity', 'connectors', 'Entitlement List']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/commands/entitlement-list
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [entitlement-list](../../commands/entitlement-list) command

### Before entitlement-list command

You can implement the command by using the following logic

```javascript
    .beforeStdEntitlementList(async (context: Context, input: StdEntitlementListInput) => {
        logger.info(`Running before entitlement list for account. State ${input.state}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After entitlement-list command

After entitlement-list is not available for customization at this time. If you need to modify the values of the response, then it is recommended to use Transforms.