---
id: connectivity-customizers-testing
title: Testing and Debugging
pagination_label: Testing and Debugging
sidebar_label: Testing and Debugging
sidebar_position: 6
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Getting started with Connectivity Customizers
slug: /docs/saas-connectivity/customizers/testing
tags: ['Connectivity']
---

# Testing and Debugging

### Debugging locally

Debugging your code locally follows the same process as debugging a [connector locally](../in-depth/debugging). The recommended approach is to simply start a [Visual Studio Code debug window](https://code.visualstudio.com/docs/editor/debugging) and run the command:

```bash
npm run debug
```

Now you can set breakpoints in your code step through processes in the IDE.

### Testing alongside a custom connector

If you want to test alongside a SaaS custom connector, the easiest way to do this is to simply copy the customizer code into the connector code. For example, if you have a custom connector like the following:

```javascript
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const myClient = new MyClient(config)

    return createConnector()
        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {
            logger.info("Running test connection")
            res.send(await myClient.testConnection())
        })
}
```

You can test a customizer by simply appending the customizer code to the end of the file:

```javascript
// existing custom connector code
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const myClient = new MyClient(config)

    return createConnector()
        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {
            logger.info("Running test connection")
            res.send(await myClient.testConnection())
        })
}

// appended customizer code that will also get run
export const connectorCustomizer = async () => {

    // Get connector source config
    const config = await readConfig()

    return createConnectorCustomizer()
        .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {
            logger.info('Running after test connection')
            return output
        })
}

```

now when you run the test-connection command, the customizer After test-connection command will also be run.