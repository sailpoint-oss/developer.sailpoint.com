---
id: entitlement-read-customizer
title: Entitlement Read
pagination_label: Entitlement Read
sidebar_label: Entitlement Read
keywords: ['connectivity', 'connectors', 'Entitlement Read']
description: Ensure the connector can communicate with the source.
slug: /docs/saas-connectivity/connector-customizers/customizer-commands/entitlement-read
tags: ['Connectivity', 'Connector Command']
---

## Overview

Use these commands to intercept the [entitlement-read](../../commands/entitlement-read) command

### Before entitlement-read command

You can implement the command by using the following logic

```javascript
    .beforeStdEntitlementRead(async (context: Context, input: StdEntitlementReadInput) => {
        logger.info(`Running before entitlement read for account ${input.identity}`)
        return input
    })
```
The `input` object can be mutated and returned but the same data type still needs to be returned 

### After entitlement-read command

You can implement the command by using the following logic

```javascript
    .afterStdEntitlementRead(async (context: Context, output: StdEntitlementReadOutput) => {
        logger.info(`Running after entitlement read for account ${output.identity}`)
        return output
    })
```
The `output` object can be mutated and returned but the same data type still needs to be returned 