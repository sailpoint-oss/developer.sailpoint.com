---
id: logging
title: Logging
pagination_label: Logging
sidebar_label: Logging
sidebar_position: 5
sidebar_class_name: logging
keywords: ['connectivity', 'connectors', 'logging']
description: You can use this feature to read the logs of your connectors.
slug: /connectivity/saas-connectivity/in-depth/logging
tags: ['Connectivity']
---

## Printing Logs with the CLI

Fetch logs from SHF by issuing the `sail conn logs` command:

```bash
$ sail conn logs

[2022-07-14T11:04:24.276-04:00] ERROR | connectorMessage ▶︎ {"commandType":"std:test-connection","invocationId":"49213a1c-0ba5-48f4-bceb-b6b5b0ec18d5","message":"Connector error ConnectorError: unable to connect, check your connection parameters and API key\n    at /app/index.js:1:441187\n    at runMicrotasks (\u003canonymous\u003e)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async /app/index.js:1:441923\n    at async Connector._exec (/app/index.js:1:5872)\n    at async /usr/bin/index.js:1:77407 {\n  type: 'generic'\n}\n","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":2}
[2022-07-14T11:04:24.310-04:00] INFO  | commandOutcome   ▶︎ {"commandType":"std:test-connection","completed":true,"elapsed":62,"error":"[ConnectorError] unable to connect, check your connection parameters and API key","message":"command failed","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":2}
[2022-07-14T11:04:24.442-04:00] INFO  | invokeCommand    ▶︎ Command execution started : std:test-connection, for connector version 29.
[2022-07-14T11:04:24.442-04:00] INFO  | invokeCommand    ▶︎ Command invocation complete : std:test-connection, for connector version: 29. Elapsed time 144.178µs
[2022-07-14T11:04:24.812-04:00] INFO  | commandOutcome   ▶︎ {"commandType":"std:test-connection","completed":true,"elapsed":369,"message":"command completed","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":29}
[2022-07-14T11:04:24.890-04:00] INFO  | invokeCommand    ▶︎ Command execution started : std:test-connection, for connector version 8.
[2022-07-14T11:04:24.890-04:00] INFO  | invokeCommand    ▶︎ Command invocation complete : std:test-connection, for connector version: 8. Elapsed time 125.749µs
[2022-07-14T11:04:24.941-04:00] INFO  | commandOutcome   ▶︎ {"commandType":"std:test-connection","completed":true,"elapsed":49,"message":"command completed","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":8}
```

To tail the logs to see output as it happens, execute the `sail conn logs tail` command.

It can also be helpful to execute the logs command along with grep to filter your results to a specific connector or text:

```bash
$ sail conn logs | grep 'connector version 29'
[2022-07-14T11:04:24.442-04:00] INFO  | invokeCommand    ▶︎ Command execution started : std:test-connection, for connector version 29.
```

## Logging with console.log

anywhere that you use console.log in your code will expose the output to the logs. The following example has a printed statement in the index.ts file:

```javascript
// Connector must be exported as module property named connector
export const connector = async () => {

...
    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const airtable = new AirtableClient(config)
    return createConnector()
        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {
            // print the output to the console
            console.log('testing connector logging')
            res.send(await airtable.testConnection())
        })

...

```

When you run the `sail conn logs` command, you will see the following in the output:

```bash
$ sail conn logs tail

[2022-07-14T11:23:05.418-04:00] INFO  | connectorMessage ▶︎ {"commandType":"std:test-connection","invocationId":"e5c73502-2c03-4b22-aa0d-5b67655e8f2d","message":"testing connector logging\n","requestId":"93370aa663d94bebb509bf5661f18650","version":9}
[2022-07-14T11:23:06.085-04:00] INFO  | commandOutcome   ▶︎ {"commandType":"std:test-connection","completed":true,"elapsed":1071,"message":"command completed","requestId":"93370aa663d94bebb509bf5661f18650","version":9}
```

## Logging using the SDK

Use the built in logging tool to simplify the logging process and enhance your logger’s capabilities. To start, import the logger from the sdk:

`import { logger as SDKLogger } from '@sailpoint/connector-sdk'`

Next, add a simple configuration for the logger to use throughout your application.

[logger.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/logger/logger.ts)

```javascript
import {logger as SDKLogger} from '@sailpoint/connector-sdk';

export const logger = SDKLogger.child(
  // specify your connector name
  {connectorName: 'Airtable'},
);
```

Now you can import your logger into your project and start logging.

[index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts)

```javascript
// Connector must be exported as module property named connector
export const connector = async () => {

...
    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const airtable = new AirtableClient(config)
    return createConnector()
        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {
            const accounts = await airtable.getAllAccounts()

            // use the logger to send accounts that are fetched
            logger.info(accounts, "fetched the following accounts from Airtable")
            for (const account of accounts) {
                res.send(account.toStdAccountListOutput())
            }
        })

...

```

## Enabling Debug Logging

### Adding the option to your connector spec

To expose a debug logging toggle in the SHF source configuration UI, add `"showDebugLoggingOption": true` to your `connector-spec.json`:

```json
{
  "name": "my-connector",
  "commands": ["std:account:list", "std:account:read", "std:test-connection"],
  "showDebugLoggingOption": true,
  "sourceConfig": [...]
}
```

### Turning on debug logging as an administrator

Once `showDebugLoggingOption` is enabled in the spec, an administrator can activate debug logging without redeploying the connector:

1. In SHF, go to **Admin** > **Connections** > **Sources** and open the source.
2. Click **Edit Configuration**, then open the **Administrator Settings** tab.
3. Enable the **Enable Debug Logging** toggle.
4. Select an expiry duration for how long debug logging should remain active.
5. Save the configuration.

After saving, the connector will emit `debug`-level log entries alongside the standard `info` and `error` levels until the expiry duration elapses.

### Logging debug messages in your connector

Use `logger.debug` to write messages that are only visible when debug logging is active. This keeps your production logs clean while still giving you detailed diagnostic output on demand.

[index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts)

```javascript
export const connector = async () => {

...
    const airtable = new AirtableClient(config)
    return createConnector()
        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {
            logger.debug('Starting account list fetch')
            const accounts = await airtable.getAllAccounts()

            logger.debug({count: accounts.length}, 'Fetched accounts from Airtable')
            for (const account of accounts) {
                logger.debug({accountId: account.id}, 'Sending account to SHF')
                res.send(account.toStdAccountListOutput())
            }
        })

...

```

When debug logging is enabled, you will see entries like the following in the output of `sail conn logs`:

```bash
$ sail conn logs tail

[2022-07-14T11:23:05.100-04:00] DEBUG | connectorMessage ▶︎ {"commandType":"std:account:list","connectorName":"Airtable","message":"Starting account list fetch",...}
[2022-07-14T11:23:05.200-04:00] DEBUG | connectorMessage ▶︎ {"commandType":"std:account:list","connectorName":"Airtable","count":3,"message":"Fetched accounts from Airtable",...}
[2022-07-14T11:23:05.210-04:00] DEBUG | connectorMessage ▶︎ {"commandType":"std:account:list","connectorName":"Airtable","accountId":"recdUN76q9KibYMir","message":"Sending account to SHF",...}
```

When debug logging is **not** enabled, these `logger.debug` calls produce no output, so there is no performance or noise impact in normal operation.

## Configuring the SDK to Mask Sensitive Values

The SDK Logger uses [Pino](https://github.com/pinojs/pino) under the hood, which has the built-in capability to search and remove JSON paths that can contain sensitive information.

> 🚧 Never expose any Personal Identifiable Information in any logging operations.

Start by looking at line 116 to 122 in your logger configuration, which looks like the one below:

```javascript
import {logger as SDKLogger} from '@sailpoint/connector-sdk';

export const logger = SDKLogger.child(
  // specify your connector name
  {connectorName: 'Airtable'},
  // This is optional for  removing specific information you might not want to be logged
  {
    redact: {
      paths: [
        '*.password',
        '*.username',
        '*.email',
        '*.id',
        '*.firstName',
        '*.lastName',
        '*.displayName',
      ],
      censor: '****',
    },
  },
);
```

Now compare that with the object you want to remove information from while still logging information in it:

[AirtableAccount.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/models/AirtableAccount.ts)

```javascript
export class AirtableAccount {
    airtableId!: string
    displayName!: string
    email!: string
    id!: string
    department!: string
    firstName!: string
    lastName!: string
    enabled = true
    locked = false
    password!: string
    entitlments!: Array<string>
}
```

Now when you log the contents of an `AirtableAccount` object, you will see all the fields redacted. For example, in [index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts) we log the `accounts` in the following code snippet:

```javascript
.stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {
    const accounts = await airtable.getAllAccounts()

    logger.info(accounts, "fetched the following accounts from Airtable")
    for (const account of accounts) {
        res.send(account.toStdAccountListOutput())
    }
})
```

which results in the following log output:

```bash
$ sail conn logs

[2022-07-14T11:19:29.368-04:00] INFO  | invokeCommand    ▶︎ Command invocation complete : std:account:list, for connector version: 8. Elapsed time 111.836542ms
[2022-07-14T11:19:30.629-04:00] INFO  | connectorMessage ▶︎ {"0":{"airtableId":"recdUN76q9KibYMir","department":"sailpoint admins","displayName":"****","email":"****","enabled":true,"entitlments":["administrator","sailpoint"],"firstName":"****","id":"****","lastName":"****","locked":false},"1":{"airtableId":"recXJEzpeySmtlIOF","department":"external","displayName":"****","email":"****","enabled":true,"entitlments":["administrator"],"firstName":"****","id":"****","lastName":"****","locked":false},"2":{"airtableId":"recnsv3VJ1K4k867v","department":"external","displayName":"****","email":"****","enabled":true,"entitlments":[""],"firstName":"****","id":"****","lastName":"****","locked":false},"commandType":"std:account:list","connectorName":"Airtable","invocationId":"541bcc2f-1d42-4c78-b201-de3ea46552e0","message":"fetched the following accounts from Airtable","requestId":"379a8a4510944daf9d02b51a29ae863e","version":8}
[2022-07-14T11:19:30.678-04:00] INFO  | commandOutcome   ▶︎ {"commandType":"std:account:list","completed":true,"elapsed":1290,"message":"command completed","requestId":"379a8a4510944daf9d02b51a29ae863e","version":8}
```

You can see that any of the PII information has now been transformed into "\*\*\*\*"
