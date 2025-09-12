---
id: customized-operation-customizer
title: Customized Operation
pagination_label: Customized Operation
sidebar_label: Customized Operation
keywords: ['connectivity', 'connectors', 'Customized Operation']
description: Executes generic customized code
slug: /connectivity/saas-connectivity/customizers/customized-operation
tags: ['Connectivity', 'Connector Command']
---

## Overview

The customized operation customizer is a special customizer that can be embedded anywhere in the code and then called with the customizer. Because this customizer is not bound to a before or after operation, in order to be implemented, the identifier needs to be known to properly call it. This identifier should be available in the connector documentation. 

## Implementation in Customizer

Use this logic to implement the code:

```javascript
    .customizedOperation('Operation Identifier', async (context: Context, input: any) => {
        logger.info(`Running customized code.`)
        return input
    })
```

## Implementation in Connector

Anywhere in the code for the connector, you can add the line as shown below. The first parameter is the identifier and the `input` object can be any object that is mutated and returned. 

```javascript
const response = await context.customizedOperation('Operation Identifier', input);
```

Example implementation in the `accound-read` command:
```javascript
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const airtable = new AirtableClient(config)

    return createConnector()
        .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {
            const account = await airtable.getAccount(input.key)
            const response = await context.customizedOperation('AccountReadCustomization', account);
            res.send(response.toStdAccountReadOutput())
        })
...
```