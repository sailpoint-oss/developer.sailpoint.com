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


## Implementation


Use this logic to implement the code:

```javascript
    .customizedOperation('Operation Identifier', async (context: Context, input: any) => {
        logger.info(`Running customized code.`)
        return input
    })
```

The `input` object can be mutated and returned. First parameter should be the identifier for your connector. To execute the code, the below code must be added to your connector code at the appropriate place.

```javascript
const response = await context.customizedOperation('Operation Identifier', input);
```