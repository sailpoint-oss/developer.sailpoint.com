---
id: build-basic-connector
title: Build a Basic SaaS Connector
pagination_label: Build a Basic SaaS Connector
sidebar_label: Build a Basic SaaS Connector
sidebar_position: 5.5
sidebar_class_name: buildBasicConnector
keywords: ['connectivity', 'connectors', 'commands', 'cli']
description: This guide will show you how to start building SaaS connectors. 
slug: /connectivity/saas-connectivity/build-basic-connector
tags: ['Connectivity']
---

## Objectives 

This guide will walk you through the process of building a SaaS connector. You will learn how to build a SaaS connector that connects Identity Security Cloud (ISC) to a cloud-based source called [Airtable](https://airtable.com).

In addition to learning how to build the SaaS connector, you will learn how to deploy, debug, and test it as well. 

You will learn how to implement SaaS Connectivity [commands](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/connector-commands) that allow you to manage accounts on the source. You will implement these commands: 

- [Test Connection](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/test-connection)
- [Account List](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-list)
- [Account Read](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-read)
- [Account Create](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-create)
- [Account Update](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-update) 
- [Account Delete](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-delete)
- [Entitlement List](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/entitlement-list/)
- [Entitlement Read](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/entitlement-read)

Once you have learned how to build an Airtable connector, you will know how to build basic SaaS connectors. You can then customize those connectors to best suit your organization's needs. 

## SaaS connectivity 

[Connectors](https://documentation.sailpoint.com/saas/help/sources/index.html) are the bridges between ISC and the various source systems ISC needs to communicate with and aggregate data from. These connectors require the use of virtual appliances (VAs). 

**SaaS connectors** use [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity), a framework you can use to connect ISC, a SaaS platform, to other cloud-based sources without the use of a VA as a go-between. 

SaaS Connectivity provides these benefits: 

- The ability to develop, debug, and test custom connectors locally, without any dependencies on ISC. 
- Features you can use to customize the user interface (UI) in ways specific to the source. 
- Support for modern languages and frameworks. 

## Requirements 

To build an Airtable connector, you will need these resources: 

- [Node](https://nodejs.org/en): Node >= 18.0.0 is required to develop SaaS connectors. You can get the latest release [here](https://nodejs.org/en/download/package-manager).
- [TypeScript](https://www.typescriptlang.org/): You will need TypeScript to develop the SaaS connector and follow this guide. You can learn how to get TypeScript [here](https://www.typescriptlang.org/download/).
- [SailPoint CLI](https://developer.sailpoint.com/docs/tools/cli): The SailPoint command line interface (CLI) is a command line tool you can use to leverage the SaaS Connectivity functionality and start building SaaS connectors much more quickly and easily. Get the latest release [here](https://github.com/sailpoint-oss/sailpoint-cli/releases). 
- [IDE](https://code.visualstudio.com/): Use an integrated development environment (IDE), like [VSCode](https://code.visualstudio.com/), to develop, deploy, and debug the SaaS connector. You can get the latest release [here](https://code.visualstudio.com/Download). 
- [Postman](https://www.postman.com/): Postman is an API platform you can use to send test API requests. SailPoint maintains a collection of SaaS Connectivity commands in Postman that you can access [here](https://www.postman.com/sailpoint/identitynow/folder/kv75eb5/connector-commands). This collection of commands makes it quick and easy for you to test SaaS connector commands. 
- [ISC](https://documentation.sailpoint.com/saas/help/setup/get_started.html): You need an ISC tenant you can connect to Airtable. 
- [Airtable](https://airtable.com/): You need to create an account on Airtable, the source you are connecting to. Airtable is a cloud-based relational database platform - it is a bit like Excel, but it is useful for this example because you can send API requests to modify the data in the tables. 

## Create project 

To create your SaaS connector project, use a command line to navigate to your project directory and run this command: 

```sh
sail conn init navigate-conference
```

This command leverages the SailPoint CLI's SaaS Connectivity functionality to create a SaaS connector project, 'navigate-conference', that has all the resources you will need to develop the connector. You can read more about the SaaS connector's project structure [here](./prerequisites/#source-files).

To open the project with VSCode, open the 'navigate-conference' folder, and run this command: 

```sh
code .
```

This command will launch VSCode in the folder you have open. 

## Install dependencies 

The SaaS connnector project has dependencies - packages or libraries required for it to function. To install these dependencies, run this command in your terminal: 

```bash
npm install 
```

This command installs the required dependencies and creates the 'package-lock.json' file, which lists the installed dependencies and their versions. 

The 'package-lock.json' file looks something like this: 

<details>
<summary>package-lock.json</summary>

```json
{
  "name": "navigate-conference",
  "version": "0.1.0",
  "main": "dist/index.js",
  "scripts": {
    "clean": "shx rm -rf ./dist",
    "prebuild": "npm run clean",
    "build": "npx ncc build ./src/index.ts -o ./dist -m -C",
    "dev": "cross-env NODE_OPTIONS=--enable-source-maps spcx run dist/index.js",
    "debug": "spcx run dist/index.js",
    "prettier": "npx prettier --write .",
    "test": "jest --coverage",
    "prepack-zip": "npm ci && npm run build",
    "pack-zip": "spcx package"
  },
  "private": true,
  "dependencies": {
    "@sailpoint/connector-sdk": "^1.0.0"
  },
  "devDependencies": {
    "@types/jest": "^27.0.1",
    "@vercel/ncc": "^0.34.0",
    "jest": "^27.0.6",
    "prettier": "^2.3.2",
    "shx": "^0.3.3",
    "ts-jest": "^27.0.5",
    "typescript": "4.3.5",
    "cross-env": "7.0.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "clearMocks": true,
    "collectCoverage": true,
    "coverageThreshold": {
      "global": {
        "statements": 60,
        "branches": 50,
        "functions": 40,
        "lines": 60
      }
    }
  },
  "prettier": {
    "printWidth": 120,
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
  }
}
```

</details>

## Test deployment 

You can now deploy your SaaS connector project. To deploy it, run this command: 

```bash
npm run dev
```

This command deploys your project so that it watches for file changes. This means that the project will recompile as you make changes to it. 

The script locally starts an Express server on `port 3000`, which you can use to invoke a command against the connector. You do not need to restart this process after making changes to connector code. Once the Express server is started, you can send `POST` requests to `localhost:3000` and test your command handlers. 

You can also change the port by specifying it after `dev`, like this: 

```bash
npm run dev 4200 
```

This command changes the port to `localhost:4200`.

## Create Airtable table 

Open [Airtable](https://airtable.com/). Follow these steps to create the table you will use to set up the test data for your SaaS connector: 

1. Create a workspace and open it. 
2. Within that workspace, select the 'Create' button to create a base. You will have two options, "Build an app", or "Start from scratch". Select "Start from scratch" to create a base, along with a basic table. Each row will represent an account, and each column will represent an account attribute. 
3. Rename your table from 'Untitled Base' and your table from 'Table 1'. In the example, the base is 'Navigate-Conference', and the table is 'Users'. 
4. Modify the columns: 
    - Name the first column, 'id', and make it 'Single line text'. 
    - Name the second column, 'email', and make it 'Single line text'. 
    - Name the third column, 'entitlements' and make it 'Multiple select'. Create these entitlement options: 'user', 'admin', and 'readonly'. 
    - Name the fourth column, 'fullname'. 
5. Populate the table with some dummy data. Create at least two accounts, along with their attributes. 

You will use your SaaS connector to aggregate this table's accounts into ISC and make changes to those accounts. 

The table will look something like this example: 

<details>

<summary>Example Airtable table</summary>

| id            | email                           | entitlements | fullname  |
| ------------- | ------------------------------- | ------------ | ------------- |
| alan.bradley  | alan.bradley@sailpointdemo.com  | user         | Alan Bradley  |
| brenda.cooper | brenda.cooper@sailpointdemo.com | admin        | Brenda Cooper |
| fred.mcbread  | fred.mcbread@test.com           | readonly     | Fred McBread  |

</details>

## Install Airtable SDK

To connect your SaaS connector to Airtable, you must leverage the Airtable software development kit (SDK). 

To install the Airtable SDK, run this command: 

```bash
npm install airtable
```

This command installs the Airtable SDK and allows you to leverage its functionality. 

Once you have installed the Airtable SDK, you will see it added to the list of dependencies in the 'package.json' file: 

```json
"dependencies": {
    "@sailpoint/connector-sdk": "^1.0.0",
    "airtable": "^0.12.2"
  }
```

## Get Airtable configuration

To connect to Airtable, you must be able to authenticate your API requests. To both learn how to configure your authentication as well as get the information you will need to do so, return to Airtable, go to the 'Help' menu, and access its API documentation. The API documentation is specific to the Airtable base and table you access it from. 

Go to the 'Authentication' section of the API documentation. Switch to the 'JavaScript' option on the right to see the sample JavaScript code you must incorporate into your SaaS connector project to get started. 

The code looks something like this: 

```javascript
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'YOUR_SECRET_API_TOKEN' 
});
var base = Airtable.base('YOUR_BASE'); /// Your base ID is actually provided in the sample code in the documentation. 
```

You must provide an `apiKey` and `Airtable.base` to authenticate to the Airtable API (the `endpointUrl` is optional). The Airtable API documentation provides your base, but for your `apiKey`, you need to an Airtable personal access token ([PAT](https://airtable.com/developers/web/guides/personal-access-tokens)). 

## Create Airtable PAT

To create the PAT you will need to pass as an `apiKey`, go to [Airtable Builder Hub](https://airtable.com/create/tokens). The Airtable Builder Hub lists all your available PATs. Follow these steps to create a PAT: 

1. Select the 'Create new token' button in the upper right corner of the Builder Hub. 
2. Name your token. 
3. Add scopes to your token to grant permissions. For example, adding `data.records:read` will allow you to see the data in table records. For more information about scopes in Airtable, refer to the [Scopes Guide](https://airtable.com/developers/web/api/scopes). 
4. Add the base you created to the list of bases the PAT can access. 
5. Select the 'Create token' button. 

## Configure Airtable authentication 

Once you have a PAT to pass as an `apiKey` and the base ID to pass as an `Airtable.base`, you can return to your code and configure your Airtable connector's authentication. 

Open your 'my-client.ts' file. The SaaS connector's authentication is configured here. 

The 'my-client.ts' file looks like this: 

<details>

<summary>my-client.ts (Default)</summary>

```typescript showLineNumbers
import { ConnectorError } from "@sailpoint/connector-sdk"

const MOCK_DATA = new Map([
    [
        'john.doe',
        {
            id: '1',
            username: 'john.doe',
            firstName: 'john',
            lastName: 'doe',
            email: 'john.doe@example.com',
        },
    ],
    [
        'jane.doe',
        {
            id: '2',
            username: 'jane.doe',
            firstName: 'jane',
            lastName: 'doe',
            email: 'jane.doe@example.com',
        },
    ],
])

export class MyClient {
    private readonly token?: string

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        this.token = config?.token
        if (this.token == null) {
            throw new ConnectorError('token must be provided from config')
        }
    }

    async getAllAccounts(): Promise<any[]> {
        return Array.from(MOCK_DATA.values())
    }

    async getAccount(identity: string): Promise<any> {
        // In a real use case, this requires a HTTP call out to SaaS app to fetch an account,
        // which is why it's good practice for this to be async and return a promise.
        return MOCK_DATA.get(identity)
    }

    async testConnection(): Promise<any> {
        return {}
    }
}
```

</details>

The current authentication is configured in the `constructor`. A token is expected, and if a token is not sent with the request, the connector handles it with an error: "token must be provided from config". 

This is where you need to implement the code from the Airtable API documentation. 

1. Import the `Fieldset` and `Record` types from the Airtable SDK. To do so, copy this line at the top of the page, after the first import. 

    ```typescript
    import Airtable, { FieldSet, Record } from "airtable"
    ```

2. Copy and paste these lines, inspired by the Airtable API documentation, within the constructor, after the error handling. The SaaS connector will expect an Airtable `apiKey` and an `airtableBase`, instead of a `token`: 

    ```typescript
    Airtable.configure({apiKey: config.apiKey})
    this.airtableBase = Airtable.base(config.airtableBase);
    ```
2. You no longer need the `token?` property, so you can replace that line before the constructor with this one, with the `airtableBase`: 

    ```typescript
    private readonly airtableBase: Airtable.Base
    ```

3. Update the error handling to reflect the new necessary authentication information. To do so, copy these lines to replace the current error handling: 

    ```typescript
        if (config?.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }
        if (config?.airtableBase == null) {
            throw new ConnectorError('airtableBase must be provided from config')
        }
    ```

Once you have made these changes, your 'my-client.ts' file looks like this: 

<details>

<summary>my-client.ts updated for authentication</summary>

```typescript showLineNumbers
import { ConnectorError } from "@sailpoint/connector-sdk"
import Airtable, { FieldSet, Record } from "airtable"

const MOCK_DATA = new Map([
    [
        'john.doe',
        {
            id: '1',
            username: 'john.doe',
            firstName: 'john',
            lastName: 'doe',
            email: 'john.doe@example.com',
        },
    ],
    [
        'jane.doe',
        {
            id: '2',
            username: 'jane.doe',
            firstName: 'jane',
            lastName: 'doe',
            email: 'jane.doe@example.com',
        },
    ],
])

export class MyClient {
    private readonly airtableBase: Airtable.Base

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config?.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }
        if (config?.airtableBase == null) {
            throw new ConnectorError('airtableBase must be provided from config')
        }

        Airtable.configure({apiKey: config.apiKey})
        this.airtableBase = Airtable.base(config.airtableBase);
    }

    async getAllAccounts(): Promise<any[]> {
        return Array.from(MOCK_DATA.values())
    }

    async getAccount(identity: string): Promise<any> {
        // In a real use case, this requires a HTTP call out to SaaS app to fetch an account,
        // which is why it's good practice for this to be async and return a promise.
        return MOCK_DATA.get(identity)
    }

    async testConnection(): Promise<any> {
        return {}
    }
}
```

</details>

Your SaaS connector is now configured to authenticate its API requests to Airtable.  

## Configure Postman environment

Once your SaaS connector's authentication is configured, you can configure Postman to test the connection between the SaaS connector and Airtable. 

1. Open Postman. In the upper right corner, you can select the environment variables you will store so you can use them whenever you send API requests to Airtable or ISC. 

2. Use the '+' button to create a new environment. 

    The first three environment variables you need, `tenant`, `clientId`, and `clientSecret`, will authenticate your API requests to ISC. If you have configured your SailPoint CLI, you can the same variables from your CLI's PAT. Otherwise, you can refer to [Authentication](/docs/api/authentication/#generate-a-personal-access-token) to learn how to create a PAT and get these variables. 

    The fourth environment variable, `airtableAPIKey` will authenticate your API requests. You will use the PAT you generated in Airtable for this variable. 

3. To authenticate your API requests to ISC, specify values for these variables in their 'Initial value' and 'Current value' fields: 

    | Environment Variable | Required | Description |
    | --- | --- | --- |
    | `tenant` | Yes | Your ISC tenant, typically your company's name. |
    | `clientId` | Yes | The client ID for the API client or personal access token. Keep this private and secure. |
    | `clientSecret` | Yes | The client secret for the API client or personal access token. Keep this private and secure. |
    | `airtableAPIKey` | Yes | The Airtable PAT. Keep this private and secure. | 

4. Save your environment to finalize your changes. 

5. Select the environment from the environment dropdown menu. All your API requests will automatically include these variables, authenticating them for both Airtable and ISC. 

## Implement test connection command 

Once you have configured Postman for testing your API requests, you can almost test your SaaS connector's connection to Airtable. To do so, you must implement your first command: [Test Connection](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/test-connection) 

To implement Test Connection, open 'my-client.ts' and follow these steps: 

Go to this `testConnection` asynchronous function at the end of the file. 

    ```typescript
        async testConnection(): Promise<any> {
                return {}
            }
    ```
    You will rewrite this function so that it actually does something. 

Rewrite the function like this: 

    ```typescript
        async testConnection(): Promise<any> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Unable to connect!')
        })
    }
    ```

The first part of the function before the `catch` implements the command. The SaaS connector now sends a request to the `Users` table and checks whether it can connect and authenticate. If it is successful, the API returns an empty object, which is okay because you don't need to do anything with the data yet.  

The second part of the function after the `catch` implements the error handling. If there is an error, the API returns this response: 'Unable to connect!'

Your code should currently look like this: 

<details>

<summary>Code with test connection implemented</summary>

```typescript showLineNumbers
import { ConnectorError } from "@sailpoint/connector-sdk"
import Airtable, { FieldSet, Record } from "airtable"

const MOCK_DATA = new Map([
    [
        'john.doe',
        {
            id: '1',
            username: 'john.doe',
            firstName: 'john',
            lastName: 'doe',
            email: 'john.doe@example.com',
        },
    ],
    [
        'jane.doe',
        {
            id: '2',
            username: 'jane.doe',
            firstName: 'jane',
            lastName: 'doe',
            email: 'jane.doe@example.com',
        },
    ],
])

export class MyClient {
    private readonly airtableBase: Airtable.Base

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config?.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }
        if (config?.airtableBase == null) {
            throw new ConnectorError('airtableBase must be provided from config')
        }

        Airtable.configure({apiKey: config.apiKey})
        this.airtableBase = Airtable.base(config.airtableBase);
    }

    async getAllAccounts(): Promise<any[]> {
        return Array.from(MOCK_DATA.values())
    }

    async getAccount(identity: string): Promise<any> {
        // In a real use case, this requires a HTTP call out to SaaS app to fetch an account,
        // which is why it's good practice for this to be async and return a promise.
        return MOCK_DATA.get(identity)
    }

    async testConnection(): Promise<any> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Unable to connect!')
        })
    }
}
```

</details>

## Fork SaaS connectivity Postman collection 

To start testing the SaaS connector's commands in Postman, you will need to get the SaaS Connectivity collection. 

To get the SaaS Connectivity commands, follow these steps: 

1. Go to the SailPoint maintained workspace in Postman [here](https://www.postman.com/sailpoint/identitynow/overview). 

2. You will see the 'SaaS Connectivity collection listed on the left. Right click the collection and select 'Create a fork'. Forking the collection will create a collection you can use to test locally and make changes. 

3. Name the fork and select the 'Fork Collection' button. This will create a copy of the collection in your own workspace. 

4. Open the 'Workspaces' menu in the upper left corner and select 'My Workspace'. Doing so will open your workspace and list your API collections on the left. 

5. Expand the 'SaaS Connectivity' collection. 

6. There are two folders within this collection, 'Connector Commands' and 'Customizer Commands'. Expand 'Connector Commands'. You will see all the available connector commands listed. 

## Test connection 

Before you test the connection, make sure that your SaaS connector is running. Use this command in your terminal to run the connector: 

```bash
npm run dev
```

Once the connector is running, you will see in the terminal that it is "watching for file changes". Whenever you save your changes, the project will recompile automatically to include them. 

Each SaaS connector command in the collection includes a basic sample in its body. Select the 'Test Connection' command, listed as 'Test local stdTestConnection', to see a sample. You can use this sample as a template for your 'Test Connection' command, but this sample won't quite work for the Airtable connector because the necessary configuration for authentication no longer involves a `token`. Authentication to Airtable requires an `apiKey` and an `airtableBase`. 

Rewrite the sample 'Test Connection' command like this: 

```json
{
  "type": "std:test-connection",
  "input": {},
  "config": {
    "apiKey": "{{airtableAPIKey}}", /// The {{airtableAPIKey}} syntax uses the airtableAPIKey environment variable. 
    "airtableBase": "INSERT-AIRTABLE-BASE-HERE" /// Insert your Airtable base's ID here. 
  }
}
```

This command now provides the correct authentication, an `airtableAPIKey` and an `airtableBase`. 

To test the request, click 'Send'. 

This is a successful response: 

```json
{
    "data": {},
    "type": "output"
}
```

To see what an unsuccessful response looks like, try making a small error in the Postman body, like this: 

```json
{
  "type": "std:test-connection",
  "input": {},
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBas": "YOUR-AIRTABLE-BASE-HERE"
  }
}
```

The `airtableBase` value is now missing an "e" at the end, so the request won't work. 

Try sending it again. This is what the response may look like: 

<details>

<summary>Connector error</summary>

```json
generic error: 
 + ConnectorError: airtableBase must be provided from config
    at new MyClient (C:\git\Navigate-Conference\src\my-client.ts: 37: 19)
    at connector (C:\git\Navigate-Conference\src\index.ts: 23: 22)
    at process.processTicksAndRejections (node:internal/process/task_queues: 95: 5)
    at async loadConnector (C:\git\Navigate-Conference\node_modules\@sailpoint\connector-sdk\bin\spcx.ts: 106: 49)
    at async <anonymous> (C:\git\Navigate-Conference\node_modules\@sailpoint\connector-sdk\bin\spcx.ts: 118: 16)
    at async _withConfig (C:\git\Navigate-Conference\node_modules\@sailpoint\connector-sdk\lib\config.ts: 37: 2)
    at async <anonymous> (C:\git\Navigate-Conference\node_modules\@sailpoint\connector-sdk\bin\spcx.ts: 117: 5) {
  type: 'generic'
}
```

</details>

The response now returns this error: "airtableBase must be provided from config". 

## Debugging 

When you're configuring your SaaS connector and implementing commands, it's inevitable that you will encounter bugs and errors while you work. SaaS Connectivity provides you the ability to run your SaaS connector in 'debug' mode, which allows you to test the connector locally and use breakpoints to help you troubleshoot. 

First, stop running your SaaS connector. To do so, type "Ctrl+C" in the terminal. You will be prompted to confirm that you want to "terminate batch job". Type "Y" and click "Enter" to do so. 

To run your SaaS connector in debug mode, open a JavaScript Debug Terminal in your terminal and use this command: 

```bash
npm run debug 
```

Similarly to the `npm run dev` command, this command starts running the connector and watching for file changes. However, running the `npm run debug` command in a JavaScript Debug Terminal runs your project in debugging mode. You can now take advantage of useful debugging features like breakpoints and the ability to add expressions to a watchlist. 

## Breakpoints 

One way to debug your SaaS connector is to use breakpoints. When you run your SaaS connector in debug mode, you can click a line number and add a break point. 

A breakpoint stops running the project when it gets to that line. The idea is that if the project fails before it reaches the breakpoint in the code, the error occurred before that breakpoint, which gives you an idea of where to look. You can put another breakpoint earlier in the project to help you narrow down the area of code where the error occurred. 

To show this, here is an example of the 'Test Connection' command in the 'my-client.ts' file, with an incorrect table name: 

```typescript
async testConnection(): Promise<any> {
        return this.airtableBase('TableName').select().firstPage().then(records => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Unable to connect!')
        })
    }
```

This example does not have the 'Users' Airtable table name, so the SaaS connector is not going to be able to return the correct table. 

Save your changes. The project will recompile to include them. 

Try to test the connection in Postman with this request: 

```json
{
  "type": "std:test-connection",
  "input": {},
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE-ID"
  }
}
```

This time, there is an error: "Connector Error: Unable to connect!" 

To pinpoint where the error occurred, follow these steps: 

1. Return to the 'Test Connection' command implementation. Click the red dot that displays to the left of line 58, where the error gets thrown. Doing so inserts a break point at that line. Line 58 is a good one to start with, because that's where the "Unable to connect" error gets thrown. 

2. Test the connection in Postman again. Postman will stall until it times out after 3 minutes (SaaS connectors time out after 3 minutes), because the project stopped before the response was returned. 

3. Return to the 'my-client.ts' file, and you will see that line 58 is highlighted and the connector is now paused. The breakpoint indicates that the connector is working as intended, returning the error because it can't connect. This means that there is an error in the asynchronous `testConnection` function. 

4. Click F5 to continue running the project. You will receive the same error as before: "Unable to connect!"

To resolve the issue, change `'TableName'` to `'Users'` and save your changes. 

Now, test the connection in Postman again. Postman will stall again, so return to the 'my-client.ts' file and click 'F5' there to continue running the connector. 

This time, you will receive a successful response: an empty JSON object. 

Click the breakpoint again to remove it so that you can run your connector without pauses. 

## Implement Account List Command 

The next command you're going to run is [Account List](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-list). This command allows you to get all the accounts from your table, along with their account attributes. This command also allows you to manually aggregate Airtable account data within ISC. 

To implement Account List, follow these steps: 

1. [Create AirtableAccount Typescript File](#create-airtableaccount-typescript-file)
2. [Write Account List Logic](#write-account-list-logic)
3. [Update Account List Command Handler](#update-account-list-command-handler)

### Create AirtableAccount Typescript file

To implement Account List and successfully aggregate account data into ISC, the first thing you must do is create a new Typescript file, titled 'AirtableAccount.ts'. You will use this file to create a class that will act as a wrapper around the Airtable account record data, which you can then convert to standard output formats and back to Airtable-compatible objects. 

Follow these steps to configure your 'AirtableAccount.ts' file: 

1. Create a folder within the 'src' folder, called 'models'. 

2. Create a Typescript file in the 'models' folder, called 'AirtableAccount.ts'. 

3. Define the `AirtableAccount` class: 

    ```typescript
        export class AirtableAccount2 {
        identity!: string
        email!: string
        id!: string
        fullname!: string
        entitlements!: Array<string>
    }
    ```

    The `AirtableAccount` class represents an Airtable account object. The class defines the account attributes and their data types. The non-null assertion operator (!) ensures that the properties always have values and cannot be null or undefined. 

4. Import the types you will need from the SaaS Connector and Airtable SDKs at the beginning of the file, before the `AirtableAccount` class: 

    ```typescript
    import { SimpleKey, StdAccountCreateOutput, StdAccountListOutput, StdAccountReadOutput } from '@sailpoint/connector-sdk'
    import { FieldSet, Record } from 'airtable'
    ```

    You will leverage the SaaS Connector and Airtable SDKs to implement Account List. 

5. Write the `createwithRecords` static method within the `AirtableAccount` class, following the attribute definitions:

    ```typescript
    public static createWithRecords(record: Record<FieldSet>): AirtableAccount {
        const account = new AirtableAccount();
        account.identity = record.id
        account.email = record.get('email') ? String(record.get('email')) : ''
        account.id = record.get('id') ? String(record.get('id')) : ''
        account.fullname = record.get('fullname') ? String(record.get('fullname')) : ''
        account.entitlements = record.get('entitlements') ? String(record.get('entitlements')).split(',') : []

        return account;
    }
    ```

    The `createwithRecords` static method takes a `Record` and its `Fieldset` from the Airtable table as an input and uses it to create an `AirtableAccount` instance with all the account's attributes. You will then be able to use this instance to create the Airtable account's corresponding ISC account. This is essential for aggregating the Airtable account data into ISC. 

    The `identity` refers to the actual table row of the account in Airtable. ISC will use the `identity` for an 'Native Identity ID', as well as their 'Account ID' on the source. 

6. Write the `buildStandardObject` private method within the `AirtableAccount` class, after the `createwithRecords` static method: 

    ```typescript
    private buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {
        return {
            key: SimpleKey(this.identity),
            attributes: {
                id: this.id,
                fullname: this.fullname,
                email: this.email,
                entitlements: this.entitlements,
            },
        }
    }
    ```

    The `buildStandardObject` private method constructs a standard account object that conforms to one of the standard output types. 

5. Write the `toStdAccountListOutput` public method, within the `AirtableAccount` class: 

    ```typescript
    public toStdAccountListOutput(): StdAccountListOutput {
        return this.buildStandardObject();
    }
    ```

    The `toStdAccountListOutput` public method now internally calls the `buildStandardObject` private method to construct the account's new standard object representation. You will be able to use this output when you run Account List. 

Once you have finished making these changes, your 'AirtableAccount.ts' file will look something like this: 

<details>

<summary>AirtableAccount.ts for Account List</summary>

```typescript showLineNumbers

import { SimpleKey, StdAccountCreateOutput, StdAccountListOutput, StdAccountReadOutput } from '@sailpoint/connector-sdk'
import { FieldSet, Record } from 'airtable'

export class AirtableAccount {
    identity!: string
    email!: string
    id!: string
    fullname!: string
    entitlements!: Array<string>

    // Create the account from the record coming from Airtable
    public static createWithRecords(record: Record<FieldSet>): AirtableAccount {
        const account = new AirtableAccount();
        account.identity = record.id
        account.email = record.get('email') ? String(record.get('email')) : ''
        account.id = record.get('id') ? String(record.get('id')) : ''
        account.fullname = record.get('fullname') ? String(record.get('fullname')) : ''
        account.entitlements = record.get('entitlements') ? String(record.get('entitlements')).split(',') : []

        return account;
    }

    public toStdAccountListOutput(): StdAccountListOutput {
        return this.buildStandardObject();
    }
    
    private buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {
        return {
            key: SimpleKey(this.identity),
            attributes: {
                id: this.id,
                fullname: this.fullname,
                email: this.email,
                entitlements: this.entitlements,
            },
        }
    }

}

```

</details>

### Write account list logic

Once you have finished creating your 'AirtableAccount.ts' file, you can implement the Account List logic. To do so, follow these steps: 

1. Open 'my-client.ts'. 

2. Import the `AirtableAccount` class from the 'AirtableAccount.ts' file, at the beginning of the client file:

    ```typescript
    import { AirtableAccount } from "./models/AirtableAccount"
    ```

3. Remove the mock data from the file. 

4. Rewrite the `getAllAccounts` asynchronous function: 

    ```typescript
    async getAllAccounts(): Promise<AirtableAccount[]> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                recordArray.push(AirtableAccount.createWithRecords(record))
            }
            return recordArray
        }).catch(err => {
            throw new ConnectorError('Error while getting accounts!')
        })
    }
    ```

    This command now uses the `AirtableAccount` class to not only return all the Airtable table's lists but also create an instance you can later use to aggregate the account data into ISC. 

5. To simplify the file, remove the `getAccount` asynchronous function for now. You will implement it correctly later. 

Once you have finished making the changes, your 'my-client.ts' file will look something like this: 

<details>

<summary>my-client.ts with account list</summary>

```typescript showLineNumbers
import { ConnectorError } from "@sailpoint/connector-sdk"
import Airtable, { FieldSet, Record } from "airtable"
import {AirtableAccount} from "../AirtableAccount"

export class MyClient {
    private readonly airtableBase: Airtable.Base

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config?.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }
        if (config?.airtableBase == null) {
            throw new ConnectorError('airtableBase must be provided from config')
        }

        Airtable.configure({apiKey: config.apiKey})
        this.airtableBase = Airtable.base(config.airtableBase);
    }

    async getAllAccounts(): Promise<AirtableAccount[]> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                recordArray.push(AirtableAccount.createWithRecords(record))
            }
            return recordArray
        }).catch(err => {
            throw new ConnectorError('Error while getting accounts!')
        })
    }

    async testConnection(): Promise<any> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Unable to connect!')
        })
    }
}

```

</details>

### Update account list command handler

The 'List Account' command is currently looking for attributes that don't exist in the 'Users' table (`username`, `firstName`, and `lastName`). To resolve this, you will have to open the 'index.ts' file to redefine what the command returns. To do so, follow these steps: 

1. Open the 'index.ts' file. 

2. To simplify the file, remove the `.stdAccountRead` command handler for now, as well as the `StdAccountReadInput` and `StdAccountReadOutput` in the imports. You will implement the command correctly later. 

3. Rewrite the `.stdAccountList` command handler: 

    ```typescript
    .stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
            let accounts = []
            accounts = await myClient.getAllAccounts()

            for (const account of accounts) {
                res.send(account.toStdAccountListOutput())
                    }
            logger.info(`stdAccountList sent ${accounts.length} accounts`)
        })
    ```

    The command handler now initializes an empty array, `accounts`, which will store the list of accounts retrieved from Airtable and then awaits a response from the `getAllAccount` command. In the response, the command loops through the accounts and returns each one, leveraging the `.toStdAccountListOutput` method from to create the standard instance of the account. 

Once you have finished making your changes, your 'index.ts' file will look something like this: 


<details>

<summary>index.ts file with account list</summary>

```typescript showLineNumbers
import {
    Context,
    createConnector,
    readConfig,
    Response,
    logger,
    StdAccountListOutput,
    StdTestConnectionOutput,
    StdAccountListInput,
    StdTestConnectionInput
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

// Connector must be exported as module property named connector
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const myClient = new MyClient(config)

    return createConnector()
        .stdTestConnection(async (context: Context, input: StdTestConnectionInput, res: Response<StdTestConnectionOutput>) => {
            logger.info("Running test connection")
            res.send(await myClient.testConnection())
        })
        .stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
            let accounts = []
            accounts = await myClient.getAllAccounts()

            for (const account of accounts) {
                res.send(account.toStdAccountListOutput())
                    }
            logger.info(`stdAccountList sent ${accounts.length} accounts`)
        })
}

```

</details>

## List Airtable accounts 

Once you have configured the 'AirtableAccount.ts', 'my-client.ts', 'index.ts', and 'connector-spec.json' files, you can test Account List. To do so, open Postman and open the 'Test local stdAccountList' command. Then open its 'Body'. 

You must rewrite the body to reflect the correct authentication process. Provide this body with your request: 

```json
{
  "type": "std:account:list",
  "input": {},
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE"
  }
}
```

Click'Send' to send the request. Make sure that you are running your connector with `npm run dev`. 

Your SaaS connector will get a successful response from Airtable, listing all the accounts, along with their attributes: 

<details>

<summary>Account list command</summary>

```json
{
    "data": {
        "key": {
            "simple": {
                "id": "recWURQH9J29nxwsl"
            }
        },
        "attributes": {
            "id": "sarah.sky",
            "fullname": "Sarah.Sky",
            "email": "sarah.sky@test.com",
            "entitlements": [
                "user"
            ]
        }
    },
    "type": "output"
}
{
    "data": {
        "key": {
            "simple": {
                "id": "recqzs27RMGpoLZtm"
            }
        },
        "attributes": {
            "id": "owen.ocean",
            "fullname": "Owen.Ocean",
            "email": "owen.ocean@test.com",
            "entitlements": [
                "admin"
            ]
        }
    },
    "type": "output"
}
{
    "data": {
        "key": {
            "simple": {
                "id": "reczK3XThaVgOotdH"
            }
        },
        "attributes": {
            "id": "mike.mountain",
            "fullname": "Mike.Mountain",
            "email": "mike.mountain@test.com",
            "entitlements": [
                "readonly"
            ]
        }
    },
    "type": "output"
}
```

</details>

## Current code 

At this point, your SaaS connector can successfully connect to Airtable and list accounts along with their attributes.

Before implementing more commands, you will learn how to configure the other side of the bridge, the connection to ISC. 

This is a good time to stop and examine your code. This is how your code should currently look:

<details>

<summary>index.ts</summary>

```typescript
import {
    Context,
    createConnector,
    readConfig,
    Response,
    logger,
    StdAccountListOutput,
    StdTestConnectionOutput,
    StdAccountListInput,
    StdTestConnectionInput
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

// Connector must be exported as module property named connector
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const myClient = new MyClient(config)

    return createConnector()
        .stdTestConnection(async (context: Context, input: StdTestConnectionInput, res: Response<StdTestConnectionOutput>) => {
            logger.info("Running test connection")
            res.send(await myClient.testConnection())
        })
        .stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
            let accounts = []
            accounts = await myClient.getAllAccounts()

            for (const account of accounts) {
                res.send(account.toStdAccountListOutput())
                    }
            logger.info(`stdAccountList sent ${accounts.length} accounts`)
        })
}

```

</details>

<details>

<summary>my-client.ts</summary>

```typescript
import { ConnectorError } from "@sailpoint/connector-sdk"
import Airtable, { FieldSet, Record } from "airtable"
import { AirtableAccount } from "./models/AirtableAccount"


export class MyClient {
    private readonly airtableBase: Airtable.Base

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config?.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }
        if (config?.airtableBase == null) {
            throw new ConnectorError('airtableBase must be provided from config')
        }

        Airtable.configure({apiKey: config.apiKey})
        this.airtableBase = Airtable.base(config.airtableBase);
    }

    async getAllAccounts(): Promise<AirtableAccount[]> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                recordArray.push(AirtableAccount.createWithRecords(record))
            }
            return recordArray
        }).catch(err => {
            throw new ConnectorError('Error while getting accounts!')
        })
    }

    async testConnection(): Promise<any> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Unable to connect!')
        })
    }

}

```

</details>

<details>

<summary>AirtableAccount.ts</summary>

```typescript
import { SimpleKey, StdAccountCreateOutput, StdAccountListOutput, StdAccountReadOutput } from '@sailpoint/connector-sdk'
import { FieldSet, Record } from 'airtable'

export class AirtableAccount {
    identity!: string
    email!: string
    id!: string
    fullname!: string
    entitlements!: Array<string>

    // Create the account from the record coming from Airtable
    public static createWithRecords(record: Record<FieldSet>): AirtableAccount {
        const account = new AirtableAccount();
        account.identity = record.id
        account.email = record.get('email') ? String(record.get('email')) : ''
        account.id = record.get('id') ? String(record.get('id')) : ''
        account.fullname = record.get('fullname') ? String(record.get('fullname')) : ''
        account.entitlements = record.get('entitlements') ? String(record.get('entitlements')).split(',') : []

        return account;
    }

    public toStdAccountListOutput(): StdAccountListOutput {
        return this.buildStandardObject();
    }
    
    private buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {
        return {
            key: SimpleKey(this.identity),
            attributes: {
                id: this.id,
                fullname: this.fullname,
                email: this.email,
                entitlements: this.entitlements,
            },
        }
    }

}
```

</details>

## Connect to ISC

Before implementing any more new commands, this is a good time to connect your SaaS connector to ISC. 

You're going to use your terminal in VSCode and your command line to leverage the SailPoint CLI. You will build your SaaS connector project, create an empty SaaS connector in ISC, and then upload your connector to ISC. 

To create your SaaS connector in ISC and load account data from Airtable, you must follow these steps: 

1. [Build Project](#build-project)
2. [Create Empty ISC Connector](#create-empty-isc-connector)
3. [Upload Connector to ISC](#upload-connector-to-isc)
4. [Test Connector](#test-connector)
5. [Create Empty ISC Connector](#create-empty-isc-connector)
6. [Configure ISC Connector](#configure-isc-connector)
7. [Aggregate Airtable Account Data](#aggregate-airtable-account-data)

### Build project

Building your SaaS connector project means compressing your SaaS connector project's files into a zip file before uploading the connector to ISC. Before you can build your connector, however, you must update your 'connector-spec.json' file. 

The 'connector-spec.json' file tells ISC how the connector works. At a high level, it provides this information: 

- Commands the connector supports
- The `config` values the user must provide when they create the connector
- Account schema definitions
- Entitlement schema definitions
- Definitions for the Account Create template that maps fields between ISC and the connector

You must make some edits to this file because the authentication configuration and account schema are currently incorrect. To do so, follow these steps: 

1. To implement the correct authentication configuration, rewrite the `sourceConfig` section like this: 

    ```json
    "sourceConfig": [
            {
                "type": "menu",
                "label": "Configuration",
                "items": [
                    {
                        "type": "section",
                        "sectionTitle": "Authentication",
                        "sectionHelpMessage": "Provide connection parameters to interact securely with the target application.",
                        "items": [
                            {
                                "key": "apiKey",
                                "label": "apiKey",
                                "type": "secret"
                            },
                            {
                                "key": "airtableBase",
                                "label": "airtableBase",
                                "type": "text"
                            }
                        ]
                    }
                ]
            }
        ],
    ```

The authentication process now looks for the correct keys, `apiKey` and `airtableBase`, and the `apiKey` is the `secret` type, which will prevent the API key from displaying in requests. 

2. To correct the account attributes in the account schema, rewrite the `accountSchema` like this: 

    ```json
    "accountSchema":{
            "displayAttribute": "id",
            "identityAttribute": "id",
            "groupAttribute": "entitlements",
            "attributes":[
                {
                    "name": "fullname",
                    "type": "string",
                    "description": "Account fullname"
                },
                {
                    "name": "email",
                    "type": "string",
                    "description": "Account email"
                },
                {
                    "name": "id",
                    "type": "string",
                    "description": "Account id"
                },
                {
                    "name": "entitlements",
                    "type": "string",
                    "description": "Account entitlements",
                    "entitlement": true,
                    "multi": true,
                    "managed": true
                }
            ]
        },
        "entitlementSchemas": []
    ```

3. Add the `entitlementSchemas` inside the brackets: 

    ```json
    "entitlementSchemas": [
		{
			"type": "group",
			"displayAttribute": "name",
			"identityAttribute": "id",
			"attributes": [
				{
					"name": "id", 
					"type": "string",
					"description": "Unique ID of the group (ex. admin)"
				}, 
				{
					"name": "name", 
					"type": "string",
					"description": "Display name of the group (ex. admin)"
				}
			]
		}
	]
    ```

    The `entitlementSchemas` tell ISC the format and data types to expect for entitlement objects. 

4. Add the `accountCreateTemplate` account mapping after the `entitlementSchemas`: 

    ```json
    "accountCreateTemplate": {
		"fields": [
			{
				"key": "fullname",
				"label": "Name",
				"type": "string",
				"required": true,
				"initialValue": {
					"type": "identityAttribute",
					"attributes": {
						"name": "Name"
					}
				}
			},
			{
				"key": "id",
				"label": "Identity",
				"type": "string",
				"required": true,
				"initialValue": {
					"type": "identityAttribute",
					"attributes": {
						"name": "Identity"
					}
				}
			},
			{
				"key": "email",
				"label": "Email",
				"type": "string",
				"required": false,
				"initialValue": {
					"type": "identityAttribute",
					"attributes": {
						"name": "Email"
					}
				}
			}
		]
	}
    ```

    The `accountCreateTemplate` is provides ISC with a template it can use to map incoming values to their respective fields in ISC. 

5. Save these changes and run the project with `npm run dev` to ensure that the changes didn't break anything. 

6. You can now build your SaaS connector project. To build the project, run this command in your terminal: 

    ```bash
    npm run pack-zip
    ```

    This command bundles the SaaS connector project's files into a zip file, 'your-projectname-0.1.0.zip', located in your project's 'dist' folder. You can now send this zip file to ISC. 

### Create empty ISC connector

Before you can upload your SaaS connector to ISC, you must create an entry for the connector in your ISC tenant. 

To create an empty connector to upload your file to, run this command in your terminal or command line:

```powershell
sail conn create my-projectname 
```

This command creates an empty connector in your ISC tenant. You will use this empty connector's ID to upload your connector to ISC. When you run the command successfully, the terminal outputs a response like this:

```powershell
+--------------------------------------+--------------------+
|                  ID                  |       ALIAS        |
+--------------------------------------+--------------------+
| connector-id                         | connector-name     |
+--------------------------------------+--------------------+
```

The output includes your new connector entry's name (alias) and its ID. You will need this connector ID to upload your connector project. 

You can use the the `sail conn list` command to list the available connectors at any time. To learn more about the other available SaaS connector commands you can use with the SailPoint CLI, refer to [Connectors](/docs/tools/cli/connectors/#commands). 

### Upload connector to ISC 

Once you have created the SaaS connector in ISC and gotten its connector ID, you can upload your SaaS connector project to ISC. To upload your connector, run this command: 

```powershell
sail conn upload -c [connector ID] -f dist/[connector filename].zip
```

You must provide the connector ID, name (alias), and zip filename to upload it to ISC. 

A successful response looks like this: 

```powershell
+--------------------------------------+---------+
|             CONNECTOR ID             | VERSION |
+--------------------------------------+---------+
| connector-id                         |       1 |
+--------------------------------------+---------+
```

### Test connector 

It can be very helpful to test your SaaS connector before you go through all the steps of configuring it in ISC. 

The SailPoint CLI has a [validate command](/docs/tools/cli/connectors/#validate-a-connector) you can use to run a suite of integration tests against your connector to ensure that all the basic functionality works. The CLI also has an [invoke command](/docs/tools/cli/connectors/#invoke-command) you can use to test specific connector commands. The `validate` and `invoke` commands allow you to use the CLI to run tests without ever having to actually go into ISC. 

Before you can run the tests, you must create a 'config.json' file. You must include your `apiKey` and `airtableBase` credentials in the 'config.json' file to authenticate the requests you want to send for the tests. 

Create a 'config.json' file that looks like this: 

```json 
{
    "apiKey": "YOUR-API-KEY",
    "airtableBase": "YOUR-AIRTABLE-BASE-ID"
}
```

Save the file. You can now run the tests. To run them, open your terminal or command line and run this command: 

```powershell
sail conn validate -p config.json -c [connector ID] -r 
```

In addition to running the tests, this command tells the CLI to get the authentication details from the 'config.json' file, which connector to run the tests on, and uses the `-r` flag to make the tests read-only so they don't modify the connector's data. 

The CLI will go through the different commands and skip tests for any commands that haven't been implemented yet. The output will look something like this: 

```powershell
+--------------------------+---------+--------+----------+--------------------------------+
|            ID            | RESULT  | ERRORS | WARNINGS |            SKIPPED             |
+--------------------------+---------+--------+----------+--------------------------------+
| account-not-found        | PASS    |        |          |                                |
| account-schema-check     | PASS    |        |          |                                |
| entitlement-not-found    | SKIPPED |        |          | Skipping check                 |
|                          |         |        |          | due to unimplemented           |
|                          |         |        |          | commands on a connector:       |
|                          |         |        |          | std:entitlement:read           |
| entitlement-list-read    | SKIPPED |        |          | Skipping check                 |
|                          |         |        |          | due to unimplemented           |
|                          |         |        |          | commands on a connector:       |
|                          |         |        |          | std:entitlement:read,          |
|                          |         |        |          | std:entitlement:list           |
| entitlement-schema-check | SKIPPED |        |          | Skipping check                 |
|                          |         |        |          | due to unimplemented           |
|                          |         |        |          | commands on a connector:       |
|                          |         |        |          | std:entitlement:list           |
| test-connection-empty    | PASS    |        |          |                                |
| test-connection-success  | PASS    |        |          |                                |
+--------------------------+---------+--------+----------+--------------------------------+
```

### Configure ISC connector 

Once you have uploaded the SaaS connector to ISC and tested it, you can configure it in ISC. Follow these steps to configure your connector in ISC: 

1. Open ISC and log in. Go to 'Admin' and expand the 'Connections' dropdown menu. Select 'Sources' from the menu.
    
    You will see a list of the available sources in your ISC tenant. 

2. To create a new source in ISC to connect to Airtable, select the 'Create New' button. 

3. You will see a list of available connectors, or source types. Find your connector by its name. Select 'Configure'. 

4. You will see a panel with the connector's 'Base Configuration', fields you can use to provide your connector's required details: 'Source Name', 'Description', and 'Source Owner'. Name your source, provide a description, and select a source owner in ISC from the list. 

5. Once you have provided those details, you will see the full source configuration page. Open the next section, 'Configuration'. You will see the 'apiKey' and 'airtableBase' fields from your connector listed. Provide your Airtable API key and the base ID and save your changes. 

6. Open the 'Review and Test' section. Select the 'Test Connection' button to test the connection to Airtable. You will receive a confirmation that the connection test was successful. 

### Aggregate Airtable account data 

Once you have configured your SaaS connector in ISC and successfully connected to your Airtable base, you can aggregate the Airtable account data into ISC. To do so, follow these steps: 

First, open the SaaS connector and open its 'Account Aggregation' tab, under 'Account Management. To load the account data into ISC, click 'Start Aggregation' in the upper right. Doing so starts an aggregation whose progress you can track at the bottom of the window. 

Once the accounts have been successfully loaded into ISC, you can view them by opening the 'Accounts' tab. 

If you click an account in the list, you can see the account's attributes: `fullname`, `email`, `id`, and `entitlements`.

## Implement account read command 

Once you have configured the Account List command, it is natural to implement the last command included in the sample, [Account Read](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-read), as well. The logic is similar, but the key difference is that instead of getting all the accounts and listing their attributes, you will get one account by its identity (Airtable row ID) and list its attributes. 

To implement Account Read, follow these steps: 

1. Open 'AirtableAccount.ts' and add the `StdAccountReadOutput` import to the imports from the `'@sailpoint/connector-sdk'` at the beginning of the file. 

2. Add a public method just like the `toStdAccountListOutput` method, except with a few differences: 

    ```typescript
    public toStdAccountReadOutput(): StdAccountReadOutput {
        return this.buildStandardObject();
    }
    ```

    This command now uses the `buildStandardObject` private method to build a standard ISC account object when you get the account. You can now leverage the `toStdAccountReadOutput` method in your 'index.ts' file. 

3. Open 'index.ts' and write the `.stdAccountRead` command handler like this, after `.stdAccountList`: 

    ```typescript 
    .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {
                const account = await myClient.getAccount(input.key)
                logger.info(account, "Fetched the following account from Airtable")
                res.send(account.toStdAccountReadOutput())
            })
    ```

    The command awaits an input of an `identity` and then finds that `identity` and returns the correct attributes: `id`, `email`, `fullname`, and `entitlements`. 

4. Open 'my-client.ts' and add these imports from `"@sailpoint/connector-sdk"`: `SimpleKeyType, CompoundKeyType, ConnectorErrorType`

5. Rewrite the `getAccount` asynchronous function like this: 

    ```typescript
    async getAccount(identity: SimpleKeyType | CompoundKeyType | string): Promise<AirtableAccount> {
        const id = <SimpleKeyType>identity
        let found = false

        return this.airtableBase('Users').select().firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                if (record.id === id.simple.id){
                found = true
                recordArray.push(AirtableAccount.createWithRecords(record))}
            }
            return recordArray[0]
        }).catch(err => {
            throw new ConnectorError('Error while getting account: ' + err)
        }).finally(() => {
            if (!found) {
                throw new ConnectorError("Account not found", ConnectorErrorType.NotFound)
            }
        })
    }
    ```

    This is the logic: First, you must provide the Airtable record `id`. Then, the connector will loop through the records until it finds the one that matches your specified value. Once it finds the value, it will create an array of the one account record and return that array of one. It uses that record to build an ISC object for the account. If it can't find the record, it throws an error.

## Read Airtable account 

Once you have configured Account Read in the 'AirtableAccount.ts', 'my-client.ts', and 'index.ts' files, you can test it in Postman. 

1. Open Postman and use the Account List command to get the accounts, along with their identities: 

    ```json
    {
    "type": "std:account:list",
    "input": {},
    "config": {
        "apiKey": "{{airtableAPIKey}}",
        "airtableBase": "YOUR-AIRTABLE-BASE-ID"
    }
    }
    ```

2. In the response, the identity is listed first for each account, like this example: 

    ```json
    {
        "data": {
            "identity": "recC76AqVMbpdR2zq",
            "attributes": {
                "id": "alan.bradley",
                "email": "alan.bradley@test.com",
                "fullname": "alan.bradley",
                "entitlements": [
                    "user"
                ]
            }
        },
        "type": "output"
    }
    ```

    The `identity` refers to the account record's row ID in its Airtable table. 

3. Open the 'Test local stdAccountRead' command. Replace the sample command with this: 

    ```json
        {
        "type": "std:account:read",
        "input": {
            "key": {"simple": { "id": "recLKhPMP2mK26gxQ"}},
            "identity": "recLKhPMP2mK26gxQ"
        },
        "config": {
            "apiKey": "{{airtableAPIKey}}",
            "airtableBase": "YOUR-AIRTABLE-BASE"
        }
    }
    ```

    The command now inputs a specific identity for the connector to find. 

4. Send the request. Your response will look something like this: 

    ```json
    {
        "data": {
            "identity": "recLKhPMP2mK26gxQ",
            "attributes": {
                "id": "alan.bradley",
                "email": "alan.bradley@demo.com",
                "fullname": "alan.bradley",
                "entitlements": [
                    "user"
                ]
            }
        },
        "type": "output"
    }
    ```

## Implement entitlement list 

The next command you will implement is [Entitlement List](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/entitlement-list), which will allow you to get a list of entitlements. 

To start implementing 'Entitlement List', open the 'index.ts' file. 

You will make a couple additions to the file, and you will write the logic for the Entitlement List command handler. 

To implement Entitlement List, you must make these changes: 

1. Add `StdEntitlementListInput` and `StdEntitlementListOutput` to the list of imports from `'@sailpoint/connector-sdk'` at the beginning of the file. You will specify those types of inputs and outputs in your Entitlement List logic.

2. Create a new constant variable, `entitlements`, and define its possible values: 

    ```typescript
    const entitlements: string [] = ["user", "admin", "readonly"]
    ```

    You will use this variable in your Entitlement List logic. 

    :::note
    This hard coded `entitlements` variable will work for this guide for now, but you would ideally want to get the entitlements from Airtable. One way would be to create an 'Entitlements' table and a separate 'AirtableEntitlement.ts' file to represent the entitlement objects, but this way will show the idea, for now. 
    :::

3. Write the `.stdEntitlementList` logic: 

    ```typescript
    .stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {
            for(const entitlement of entitlements) {
                res.send({
                    identity: entitlement,
                    type: 'group',
                    attributes: {
                        id: entitlement,
                        name: entitlement
                    }
                })
            }
        })
    ```

    The logic of this command handler is this: the handler sends the command as its input, and Airtable loops through the entitlements and outputs each entitlement. 

    Once you have finished making your changes, your 'index.ts' file will look like this: 

    <details>

    <summary>index.ts with entitlement list</summary>

    ```typescript showLineNumbers
    import {
        Context,
        createConnector,
        readConfig,
        Response,
        logger,
        StdAccountListOutput,
        StdAccountReadInput,
        StdAccountReadOutput,
        StdTestConnectionOutput,
        StdTestConnectionInput,
        StdAccountListInput,
        StdEntitlementListInput,
        StdEntitlementListOutput,
        ConnectorError
    } from '@sailpoint/connector-sdk'
    import { MyClient } from './my-client'

    // Connector must be exported as module property named connector
    export const connector = async () => {

        const entitlements: string [] = ["user", "admin", "readonly"]
        // Get connector source config
        const config = await readConfig()

        // Use the vendor SDK, or implement own client as necessary, to initialize a client
        const myClient = new MyClient(config)

        return createConnector()
            .stdTestConnection(async (context: Context, input: StdTestConnectionInput, res: Response<StdTestConnectionOutput>) => {
                logger.info("Running test connection")
                res.send(await myClient.testConnection())
            })
            .stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
                let accounts = []
                accounts = await myClient.getAllAccounts()

                for (const account of accounts) {
                    res.send(account.toStdAccountListOutput())
                        }
                logger.info(`stdAccountList sent ${accounts.length} accounts`)
            })
            .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {
                const account = await myClient.getAccount(input.key)
                logger.info(account, "Fetched the following account from Airtable")
                res.send(account.toStdAccountReadOutput())
            })
            .stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {
                for(const entitlement of entitlements) {
                    res.send({
                        identity: entitlement,
                        type: 'group',
                        attributes: {
                            id: entitlement,
                            name: entitlement
                        }
                    })
                }
            })
    }
    ```

    </details>

4. Open the 'connector-spec.json' file and add `"std:entitlement:list"` to the list of supported `commands` at the beginning of the file.

    First, add `"std:entitlement:list"` to the list of supported `commands` (line 8) at the beginning of the file. 

    Next, you must specify the `id` and `name` attributes, which the Entitlement List command is now outputting. To do so, you must add those attributes to the `entitlementSchemas`. 

    Once you have added the `entitlementSchemas`, your 'connector-spec.json' file will look something like this:

    <details>

    <summary>connector-spec.json with Entitlement Schema and accountCreateTemplate</summary>

    ```json showLineNumbers
    {
        "name": "navigate-conference",
        "commands": [
            "std:account:list",
            "std:account:read",
            "std:test-connection",
            "std:entitlement:list"
        ],
        "sourceConfig": [
            {
                "type": "menu",
                "label": "Configuration",
                "items": [
                    {
                        "type": "section",
                        "sectionTitle": "Authentication",
                        "sectionHelpMessage": "Provide connection parameters to interact securely with the target application.",
                        "items": [
                            {
                                "key": "apiKey",
                                "label": "apiKey",
                                "type": "secret"
                            },
                            {
                                "key": "airtableBase",
                                "label": "airtableBase",
                                "type": "text"
                            }
                        ]
                    }
                ]
            }
        ],
        "accountSchema":{
            "displayAttribute": "id",
            "identityAttribute": "id",
            "groupAttribute": "entitlements",
            "attributes":[
                {
                    "name": "identity",
                    "type": "string",
                    "description": "Identity ID"
                },
                {
                    "name": "fullname",
                    "type": "string",
                    "description": "Account fullname"
                },
                {
                    "name": "email",
                    "type": "string",
                    "description": "Account email"
                },
                {
                    "name": "id",
                    "type": "string",
                    "description": "Account id"
                },
                {
                    "name": "entitlements",
                    "type": "string",
                    "description": "Account entitlements",
                    "entitlement": true,
                    "multi": true,
                    "managed": true
                }
            ]
        },
        "entitlementSchemas": [
            {
                "type": "group",
                "displayAttribute": "name",
                "identityAttribute": "id",
                "attributes": [
                    {
                        "name": "id", 
                        "type": "string",
                        "description": "Unique ID of the group (ex. admin)"
                    }, 
                    {
                        "name": "name", 
                        "type": "string",
                        "description": "Display name of the group (ex. admin)"
                    }
                ]
            }
        ]
    }
    ```

    </details>

Once you have updated the 'connector-spec.json' file, you can test the Entitlement List. 

## List Airtable entitlements

Once you have configured both the 'index.ts' and 'connector-spec.json' files, you can test Entitlement List. Open Postman and open the 'Test local stdEntitlementList' command. 

Rewrite the sample request like this: 

```json
{
    "type": "std:entitlement:list",
    "input": {},
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE"
  }
}
```

You don't need to provide an input - you just need to authenticate your request and get any entitlements in the table. 

A successful response will look something like this:

```json
{
    "data": {
        "identity": "user",
        "type": "group",
        "attributes": {
            "id": "user",
            "name": "user"
        }
    },
    "type": "output"
}
{
    "data": {
        "identity": "admin",
        "type": "group",
        "attributes": {
            "id": "admin",
            "name": "admin"
        }
    },
    "type": "output"
}
{
    "data": {
        "identity": "readonly",
        "type": "group",
        "attributes": {
            "id": "readonly",
            "name": "readonly"
        }
    },
    "type": "output"
}
```

## Implement entitlement read 

Once you have implemented the Entitlement List command, implementing [Entitlement Read](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/entitlement-read) will be simple because you only have to update the 'index.ts' file and your changes will be similar to those you made for Entitlement List. 

To implement the Entitlement Read command, open the 'index.ts' file and make these additions: 

1. Add `StdEntitlementReadInput` and `StdEntitlementReadOutput` to the list of imports from `'@sailpoint/connector-sdk'` at the beginning of the file.

2. Add `ConnectorError` after those two new commands. You will need to import this error type so you can throw it if you don't find the specified entitlement. 

3. Add the `.stdEntitlementRead` command handler to the end of the file, and write it like this:

    ```typescript
            .stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {

                const entitlement: string = entitlements.filter((e) => {return e == input.identity})[0]

                if (entitlement) {
                    res.send({
                        identity: entitlement,
                        type: 'group',
                        attributes: {
                            id: entitlement, 
                            name: entitlement
                        }
                    })
                } else {
                    throw new ConnectorError("Entitlement not found")
                }

            })
    ```

    The logic is similar to that of Entitlement List's command handler, but the key difference is that with this command, you specify a specific entitlement for the connector to find. The connector then returns that entitlement if it can find it, along with its attributes. If it can't find it, it throws the error, "Entitlement not found". 

## Read Airtable entitlement

Once you have configured both the 'index.ts' file, you can test Entitlement Read. Open Postman and open the 'Test local stdEntitlementRead' command. 

Rewrite the sample request like this: 

```json
{
    "type": "std:entitlement:read",
    "input": {
        "identity": "user"
    },
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE"
  }
}
```

The request now specifies an entitlement to find, `user`. 

A successful response will look something like this:

```json
{
    "data": {
        "identity": "user",
        "type": "group",
        "attributes": {
            "id": "user",
            "name": "user"
        }
    },
    "type": "output"
}
```

## Implement account create

To create accounts in Airtable, you can use [Account Create](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-create). 

To implement the Account Create command, follow these steps:

1. Open 'AirtableAccount.ts' You must add a new public method within the `AirtableAccount` class: 

    ```typescript
    public toStdAccountCreateOutput(): StdAccountCreateOutput {
        return this.buildStandardObject();
    }
    ```

    You can now call this method in the 'index.ts' file

2. Open 'index.ts' and add `StdAccountCreateInput` and `StdAccountCreateOutput` to the list of imported commands at the beginning of the file. 

3. Add the `.stdAccountCreate` command handler to the end of the file: 

    ```typescript
    .stdAccountCreate(async (context: Context, input: StdAccountCreateInput, res: Response<StdAccountCreateOutput>) => {
            const account = await myClient.createAccount(input)
            res.send({
                identity: account.id,
                attributes: {
                    id: <string>account.get('id'),
                    email: <string>account.get('email'),
                    fullname: <string>account.get('fullname'),
                    entitlements: input.attributes.entitlements || []
                }
            })
        })
    ```

    The handler is now configured to include all the correct attributes in its response. 

4. Open 'my-client.ts' and add `StdAccountCreateInput` to the list of imports from `"@sailpoint/connector-sdk"` at the beginning of the file. 

5. Add a new asynchronous function, `createAccount`:

    ```typescript
    async createAccount(input: StdAccountCreateInput): Promise<Record<FieldSet>> {
        return this.airtableBase('Users').create({
            'id': input.attributes['id'],
            'email': input.attributes['email'],
            'fullname': input.attributes['fullname'],
            'entitlements': input.attributes.entitlements || []
        }
        ).then(record => {
            return record
        }).catch(err => {
            throw new ConnectorError('Error while creating account: ' + err)
        })
    }
    ```

5. Open 'connector-spec.json'. Add the `"std:account:create"` command to the array of supported `commands` at the beginning of the file. 

## Create Airtable account

Once you have configured the Account Create command, you can use your connector to create accounts in Airtable, which can then be synced with ISC. 

To test the Account Create command, open Postman and open the 'Test local stdAccountCreate' command. 

Rewrite the request body like this:

```json
{
    "type": "std:account:create",
    "input": {
        "attributes": {
            "id": "first.last",
            "email": "first.last@domain.com",
            "fullname": "first.last",
            "entitlements": [
                "user"
            ]
        }
    },
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE"
  }
}
```

Send the request. You will receive a response like this: 

```json
{
    "data": {
        "identity": "recBXIZJO4RFCJ7wd",
        "attributes": {
            "id": "first.last",
            "email": "first.last@domain.com",
            "fullname": "first.last",
            "entitlements": [
                "user"
            ]
        }
    },
    "type": "output"
}
```

You can then go to Airtable and see that your new account was created, along with all its attributes. 

## Implement account delete

Once you can create accounts, you will want to delete them too. The next command you will implement, the [Account Delete](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-delete), will allow you to do so. 

To implement Account Delete, follow these steps: 

1. Open the 'index.ts' file and add `StdAccountDeleteInput` and `StdAccountDeleteOutput` to the imports from the `connector-sdk` at the beginning of the file. 

2. Add the Account delete command hander, `.stdAccountDelete`:

    ```typescript
    .stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
                res.send(await myClient.deleteAccount(input.identity))
            })
    ```

    The logic is this: the user provides an account's identity (Airtable record ID) as an input to be deleted, and the API responds with the output. 

2. Open the 'my-client.ts' file. You must add the `deleteAccount` asynchronous function:

    ```typescript
    async deleteAccount(identity: string): Promise<any> {
            return this.airtableBase('Users').destroy(identity, 
            ).then(() => {
                return {}
            }).catch(err => {
                throw new ConnectorError('Error while deleting account: ' + err)
            })
        }
    ```

3. Open the 'connector-spec.json' file. Add `std:account:delete` to the array of `commands` at the beginning of the file. 

## Delete Airtable account

Once you have configured the Account Delete command, you can test it. 

Open Postman and open the 'Test local stdAccountDelete' command. 

To delete an account, rewrite the command like this:

```json
{
    "type": "std:account:delete",
    "input": {
        "identity": "IDENTITY-TO-BE-DELETED"
    },
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE"
  }
}
```

Send the request. The successful response is empty: 

```json
{
    "data": {},
    "type": "output"
}
```

You can check whether the the account has been deleted by running [Account List](#list-airtable-accounts).

## Implement account update 

The final command you will implement is [Account Update](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/commands/account-update). You can use this command to update the Airtable account's attributes. 

To implement Account Update, follow these steps: 

1. Open the 'AirtableAccount.ts' file. 

2. Add `StdAccountUpdateOutput` and `AttributeChangeOp` to the imports from `'@sailpoint/connector-sdk'` at the beginning of the file.

3. Add this public method within the `AirtableAccount` class: 

    ```typescript
    public updateFieldByName(fieldname: string, value: string, operation: AttributeChangeOp ) {
        switch (fieldname) {
            case 'id':
                this.id = value
                break
            case 'email':
                this.email = value
                break  
            case 'entitlements':
                if (operation == AttributeChangeOp.Add) {
                    this.entitlements.push(value)
                } else if (operation == AttributeChangeOp.Set) {
                    this.entitlements = []
                    this.entitlements.push(value)
                } else if (operation == AttributeChangeOp.Remove) {
                    this.entitlements = this.entitlements.filter(e => e !== value)
                }
                break
            case 'fullname':
                this.fullname = value
                break  
        }
    }
    ```

    The public method `updateFieldByName` defines the operations to be performed based on the specified `fieldname`, `value`, and `operation`. For example, if you add an `entitlement` to an account, it will add the `entitlement` to the end of the `entitlements` array. 

4. Add this public method within the `AirtableAccount` class: 

    ```typescript
    public toStdAccountUpdateOutput(): StdAccountUpdateOutput {
        return this.buildStandardObject();
    }
    ```

5. Open your 'index.ts' file. Add `StdAccountUpdateInput` and `StdAccountUpdateOutput` to the imports from `'@sailpoint/connector-sdk'` at the beginning of the file. 

6. Add the `.stdAccountUpdate` command handler: 

    ```typescript
    .stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {
            logger.info(input, "Getting account using input")
            let account = await myClient.getAccount(input.key)
            logger.info(account, "Changing the following account in myClient")
            for (const changes of input.changes) {
                account = await myClient.updateAccount(account, changes)
            }
            logger.info(account, "New account after changes applied")
            res.send(account.toStdAccountUpdateOutput())
        })
    ```

    The `.stdAccountUpdate` command handler now uses the `.toStdAccountUpdateOutput()` from 'AirtableAccount.ts' to handle its response and provides logging statements. 

7. Open 'my-client.ts'. Add `AttributeChange` to the imports from `"@sailpoint/connector-sdk"` at the beginning of the file. 

8. Add the asynchronous function `updateAccount`: 

    ```typescript
    async updateAccount(account: AirtableAccount, changes: AttributeChange): Promise<AirtableAccount> {
        account.updateFieldByName(changes.attribute, changes.value, changes.op)

        return this.airtableBase('Users').update(account.identity, {
            "id": account.id,
            "fullname": account.fullname,
            "email": account.email,
            "entitlements": account.entitlements
        }).then(record =>{
            const airtableRecord = AirtableAccount.createWithRecords(record)
            return airtableRecord
        }).catch(err => {
            throw new ConnectorError('Error while changing accounts: ' + err)
        })
    }
    ```

    The asynchronous function `updateAccount` takes inputs of the `identity` (Airtable record ID), `op`, `attribute`, and `value` and responds with the updated account. 

9. Open 'connector-spec.json'. Add `"std:account:update"` to the `"commands"` array at the beginning of the file. 

## Update Airtable account 

Once you have configured the Account Update command, you can test it. 

Open Postman and open the 'Test local stdAccountUpdate' command. 

As an example, remove an account's entitlement by rewriting the request body like this: 

```json
{
    "type": "std:account:update",
    "input": {
        "key": {"simple": { "id": "recLKhPMP2mK26gxQ"}},
        "identity": "recLKhPMP2mK26gxQe",
        "changes": [
            {
                "op": "Remove",
                "attribute": "entitlements",
                "value": "user"
            }
        ]
    },
  "config": {
    "apiKey": "{{airtableAPIKey}}",
    "airtableBase": "YOUR-AIRTABLE-BASE"
    }
}
```

Send the request. You will get this successful response: 

```json
{
    "data": {
        "key": {
            "simple": {
                "id": "recLKhPMP2mK26gxQ"
            }
        },
        "attributes": {
            "id": "alan.bradley",
            "fullname": "alan.bradley",
            "email": "alan.bradley@demo.com",
            "entitlements": []
        }
    },
    "type": "output"
}
```

To check your changes, you can open Airtable and see the identity's updated entitlements. 

## Complete code 

You now have a SaaS connector that can get account data from Airtable and send it to ISC. You can also use the connector to make changes to the Airtable account data without opening Airtable at all. 

Your completed code will look something like this: 

<details>

<summary>my-client.ts</summary>

```typescript showLineNumbers
import { CompoundKeyType, ConnectorError, SimpleKeyType, ConnectorErrorType, StdAccountCreateInput, AttributeChange } from "@sailpoint/connector-sdk"
import Airtable, { FieldSet, Record } from "airtable"
import { AirtableAccount } from "./models/AirtableAccount"

export class MyClient {
    private readonly airtableBase: Airtable.Base

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config?.apiKey == null) {
            throw new ConnectorError('apiKey must be provided from config')
        }
        if (config?.airtableBase == null) {
            throw new ConnectorError('airtableBase must be provided from config')
        }

        Airtable.configure({apiKey: config.apiKey})
        this.airtableBase = Airtable.base(config.airtableBase);
    }

    async getAllAccounts(): Promise<AirtableAccount[]> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                recordArray.push(AirtableAccount.createWithRecords(record))
            }
            return recordArray
        }).catch(err => {
            throw new ConnectorError('Error while getting accounts!')
        })
    }

    async getAccount(identity: SimpleKeyType | CompoundKeyType | string): Promise<AirtableAccount> {
        const id = <SimpleKeyType>identity
        let found = false

        return this.airtableBase('Users').select().firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                if (record.id === id.simple.id){
                found = true
                recordArray.push(AirtableAccount.createWithRecords(record))}
            }
            return recordArray[0]
        }).catch(err => {
            throw new ConnectorError('Error while getting account: ' + err)
        }).finally(() => {
            if (!found) {
                throw new ConnectorError("Account not found", ConnectorErrorType.NotFound)
            }
        })
    }

    async createAccount(input: StdAccountCreateInput): Promise<Record<FieldSet>> {
        return this.airtableBase('Users').create({
            'id': input.attributes['id'],
            'email': input.attributes['email'],
            'fullname': input.attributes['fullname'],
            'entitlements': input.attributes.entitlements || []
        }
        ).then(record => {
            return record
        }).catch(err => {
            throw new ConnectorError('Error while creating account: ' + err)
        })
    }

    async testConnection(): Promise<any> {
        return this.airtableBase('Users').select().firstPage().then(records => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Unable to connect!')
        })
    }

    async deleteAccount(identity: string): Promise<any> {
        return this.airtableBase('Users').destroy(identity, 
        ).then(() => {
            return {}
        }).catch(err => {
            throw new ConnectorError('Error while deleting account: ' + err)
        })
    }

    async updateAccount(account: AirtableAccount, changes: AttributeChange): Promise<AirtableAccount> {
        account.updateFieldByName(changes.attribute, changes.value, changes.op)
    
        return this.airtableBase('Users').update(account.identity, {
            "id": account.id,
            "fullname": account.fullname,
            "email": account.email,
            "entitlements": account.entitlements
        }).then(record =>{
            const airtableRecord = AirtableAccount.createWithRecords(record)
            return airtableRecord
        }).catch(err => {
            throw new ConnectorError('Error while changing accounts: ' + err)
        })
    }
}


```

</details>

<details>

<summary>index.ts</summary>

```typescript showLineNumbers
import {
    Context,
    createConnector,
    readConfig,
    Response,
    logger,
    StdAccountListOutput,
    StdAccountReadInput,
    StdAccountReadOutput,
    StdTestConnectionOutput,
    StdAccountListInput,
    StdEntitlementListInput,
    StdEntitlementListOutput,
    StdEntitlementReadInput,
    StdEntitlementReadOutput,
    StdAccountCreateInput,
    StdAccountCreateOutput,
    StdAccountDeleteInput,
    StdAccountDeleteOutput,
    StdAccountUpdateInput,
    StdAccountUpdateOutput,
    ConnectorError,
    StdTestConnectionInput
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

// Connector must be exported as module property named connector
export const connector = async () => {

    const entitlements: string [] = ["user", "admin", "readonly"]

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const myClient = new MyClient(config)

    return createConnector()
        .stdTestConnection(async (context: Context, input: StdTestConnectionInput, res: Response<StdTestConnectionOutput>) => {
            logger.info("Running test connection")
            res.send(await myClient.testConnection())
        })
        .stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
            let accounts = []
            accounts = await myClient.getAllAccounts()
    
            for (const account of accounts) {
                res.send(account.toStdAccountListOutput())
                    }
            logger.info(`stdAccountList sent ${accounts.length} accounts`)
        })
        .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {
            const account = await myClient.getAccount(input.key)
            logger.info(account, "Fetched the following account from Airtable")
            res.send(account.toStdAccountReadOutput())
        })
        .stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {
            for(const entitlement of entitlements) {
                res.send({
                    identity: entitlement,
                    type: 'group',
                    attributes: {
                        id: entitlement,
                        name: entitlement
                    }
                })
            }
        })
        .stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {

            const entitlement: string = entitlements.filter((e) => {return e == input.identity})[0]

            if (entitlement) {
                res.send({
                    identity: entitlement,
                    type: 'group',
                    attributes: {
                        id: entitlement, 
                        name: entitlement
                    }
                })
            } else {
                throw new ConnectorError("Entitlement not found")
            }

        })
        .stdAccountCreate(async (context: Context, input: StdAccountCreateInput, res: Response<StdAccountCreateOutput>) => {
            const account = await myClient.createAccount(input)
            res.send({
                identity: account.id,
                attributes: {
                    id: <string>account.get('id'),
                    email: <string>account.get('email'),
                    fullname: <string>account.get('fullname'),
                    entitlements: input.attributes.entitlements || []
                }
            })
        })
        .stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
            res.send(await myClient.deleteAccount(input.identity))
        })
        .stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {
        logger.info(input, "Getting account using input")
        let account = await myClient.getAccount(input.key)
        logger.info(account, "Changing the following account in myClient")
        for (const changes of input.changes) {
            account = await myClient.updateAccount(account, changes)
        }
        logger.info(account, "New account after changes applied")
        res.send(account.toStdAccountUpdateOutput())
    })
}
```

</details>

<details>

<summary>AirtableAccount.ts</summary>

```typescript showLineNumbers
import { SimpleKey, StdAccountCreateOutput, StdAccountListOutput, StdAccountReadOutput, StdAccountUpdateOutput, AttributeChangeOp } from '@sailpoint/connector-sdk'
import { FieldSet, Record } from 'airtable'

export class AirtableAccount {
    identity!: string
    email!: string
    id!: string
    fullname!: string
    entitlements!: Array<string>

    public static createWithRecords(record: Record<FieldSet>): AirtableAccount {
        const account = new AirtableAccount();
        account.identity = record.id
        account.email = record.get('email') ? String(record.get('email')) : ''
        account.id = record.get('id') ? String(record.get('id')) : ''
        account.fullname = record.get('fullname') ? String(record.get('fullname')) : ''
        account.entitlements = record.get('entitlements') ? String(record.get('entitlements')).split(',') : []
    
        return account;
    }

    public updateFieldByName(fieldname: string, value: string, operation: AttributeChangeOp ) {
        switch (fieldname) {
            case 'id':
                this.id = value
                break
            case 'email':
                this.email = value
                break  
            case 'entitlements':
                if (operation == AttributeChangeOp.Add) {
                    this.entitlements.push(value)
                } else if (operation == AttributeChangeOp.Set) {
                    this.entitlements = []
                    this.entitlements.push(value)
                } else if (operation == AttributeChangeOp.Remove) {
                    this.entitlements = this.entitlements.filter(e => e !== value)
                }
                break
            case 'fullname':
                this.fullname = value
                break  
        }
    }

    public toStdAccountUpdateOutput(): StdAccountUpdateOutput {
        return this.buildStandardObject();
    }

    public toStdAccountReadOutput(): StdAccountReadOutput {
        return this.buildStandardObject();
    }

    public toStdAccountListOutput(): StdAccountListOutput {
        return this.buildStandardObject();
    }

    public toStdAccountCreateOutput(): StdAccountCreateOutput {
        return this.buildStandardObject();
    }

    private buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {
        return {
            key: SimpleKey(this.identity),
            attributes: {
                id: this.id,
                fullname: this.fullname,
                email: this.email,
                entitlements: this.entitlements,
            },
        }
    }
}
```

</details>

<details>

<summary>connector-spec.json</summary>

```json showLineNumbers
{
	"name": "navigate-conference",
	"commands": [
		"std:account:list",
		"std:account:read",
		"std:test-connection",
		"std:entitlement:list",
		"std:account:create",
		"std:account:update"
	],
    "sourceConfig": [
            {
                "type": "menu",
                "label": "Configuration",
                "items": [
                    {
                        "type": "section",
                        "sectionTitle": "Authentication",
                        "sectionHelpMessage": "Provide connection parameters to interact securely with the target application.",
                        "items": [
                            {
                                "key": "apiKey",
                                "label": "apiKey",
                                "type": "secret"
                            },
                            {
                                "key": "airtableBase",
                                "label": "airtableBase",
                                "type": "text"
                            }
                        ]
                    }
                ]
            }
        ],
	"accountSchema":{
        "displayAttribute": "id",
        "identityAttribute": "id",
        "groupAttribute": "entitlements",
        "attributes":[
            {
                "name": "fullname",
                "type": "string",
                "description": "Account fullname"
            },
            {
                "name": "email",
                "type": "string",
                "description": "Account email"
            },
            {
                "name": "id",
                "type": "string",
                "description": "Account id"
            },
            {
                "name": "entitlements",
                "type": "string",
                "description": "Account entitlements",
                "entitlement": true,
                "multi": true,
                "managed": true
            }
        ]
    },
	"entitlementSchemas": [
	{
		"type": "group",
		"displayAttribute": "name",
		"identityAttribute": "id",
		"attributes": [
			{
				"name": "id", 
				"type": "string",
				"description": "Unique ID of the group (ex. admin)"
			}, 
			{
				"name": "name", 
				"type": "string",
				"description": "Display name of the group (ex. admin)"
			}
		]
	}
],
	"accountCreateTemplate": {
	"fields": [
		{
			"key": "fullname",
			"label": "Name",
			"type": "string",
			"required": true,
			"initialValue": {
				"type": "identityAttribute",
				"attributes": {
					"name": "Name"
				}
			}
		},
		{
			"key": "id",
			"label": "Identity",
			"type": "string",
			"required": true,
			"initialValue": {
				"type": "identityAttribute",
				"attributes": {
					"name": "Identity"
				}
			}
		},
		{
			"key": "email",
			"label": "Email",
			"type": "string",
			"required": false,
			"initialValue": {
				"type": "identityAttribute",
				"attributes": {
					"name": "Email"
				}
			}
		}
	]
}
}
```

</details>

## Conclusion 

Now that you know how to build a SaaS connector to Airtable, you know everything you need to build a basic SaaS connector. The only things you need are some way to retrieve and modify your source account data and some way to authenticate your requests for that data. Then you can go further and customize the SaaS connector to truly suit your organization's needs.

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions.

To learn more about SaaS Connectivity and discuss the different SaaS Connectivity options with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/tag/saas-connector).