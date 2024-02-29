---
id: test-build-deploy
title: Test, Build, and Deploy
pagination_label: Test, Build, and Deploy
sidebar_label: Test, Build, and Deploy
sidebar_position: 2
sidebar_class_name: testBuildDeploy
keywords: ['connectivity', 'connectors', 'test', 'build', 'deploy']
description: As you implement command handlers, you must test them. The connector SDK provides some utility methods to locally run your connector to test, build, and deploy.
slug: /connectivity/saas-connectivity/test-build-deploy
tags: ['Connectivity']
---

## Testing Your Connector

You can use the following Postman Collection file to locally run tests for each of the commands.

[Postman Collection](./assets/SaaS_Connectivity.postman_collection)

As you implement command handlers, you must test them. The connector SDK provides some utility methods to locally run your connector. To start, run `npm run dev` within the connector project folder. This script locally starts an Express server on port 3000, which can be used to invoke a command against the connector. You do not need to restart this process after making changes to connector code. Once the Express server is started, you can send `POST` requests to `localhost:3000` and test your command handlers. For example, you can run `POST localhost:3000` with the following payload to run the stdAccountRead handler method.

```json
{
  "type": "std:account:read",
  "input": {
    "identity": "john.doe"
  },
  "config": {
    "token": ""
  }
}
```

- **type:** The command handler’s name. It also refers to the operation being performed.
- **input:** Input to provide to the command handler.
- **config:** The configuration values required to test locally. A `token` value is not required, but the default project specifies `token`, so you must include it in your request to begin.

## Create and Upload Connector Bundle

Follow these steps to use the CLI to package a connector bundle, create it in your Identity Security Cloud org, and upload it to Identity Security Cloud.

### Package Connector Files

You must compress the files in the connector project into a zip file before uploading them to Identity Security Cloud.

Use the CLI to run `npm run pack-zip` to build and package the connector bundle. Put the resulting zip file in the `dist` folder.

### Create Connector In Your Org

Before uploading the zip file, you must create an entry for the connector in your Identity Security Cloud org. Run `sail conn create "my-project"` to create a connector entry.

The response to this command contains a connector ID you can use to manage this connector.

```bash
$ sail conn create "example-connector"
+--------------------------------------+----------------------------+
|                  ID                  |           ALIAS            |
+--------------------------------------+----------------------------+
| a9360354-2f9d-4111-bff6-7cd53184a61e | example-connector          |
+--------------------------------------+----------------------------+
```

Run the following command to retrieve the connector ID at any time:

```
sail conn list
```

```bash
$ sail conn list
+--------------------------------------+----------------------------+
|                  ID                  |           ALIAS            |
+--------------------------------------+----------------------------+
| 39fe3f4f-3559-4e1f-98bb-2f6d0bcb13dc | airtable-hr                |
| a9360354-2f9d-4111-bff6-7cd53184a61e | example-connector          |
+--------------------------------------+----------------------------+
```

### Upload Connector Zip File to Identity Security Cloud

Run `sail conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip` to upload the zip file built from the previous step to Identity Security Cloud.

```bash
$ sail conn upload -c example-connector -f dist/example-connector-0.1.0.zip
+--------------------------------------+---------+
|             CONNECTOR ID             | VERSION |
+--------------------------------------+---------+
| a9360354-2f9d-4111-bff6-7cd53184a61e |       7 |
+--------------------------------------+---------+
```

The first version upload of connector zip file also creates the `latest` tag, pointing to the latest version of the connector file. After uploading the connector bundle zip file, you can run `sail conn tags list -c example-connector` to see the connector tags.

```bash
$ sail conn tags list -c example-connector
+--------------------------------------+----------+----------------+
|                  ID                  | TAG NAME | ACTIVE VERSION |
+--------------------------------------+----------+----------------+
| 8cd99eea-cfe1-424f-abfd-6494292b13a8 | latest   |              3 |
+--------------------------------------+----------+----------------+
```

:::caution Important

Make sure that you implement a form of version control or regular backup process for your connectors.
You cannot recover the source code from ISC because it gets sent to ISC as a compiled and minified JavaScript (JS) bundle that cannot be easily expanded into its original source code structure. 

:::

## Test Your Connector in Identity Security Cloud

Follow these steps to test a connector bundle in both Identity Security Cloud and the Identity Security Cloud user interface (UI).

### Test Your Connector Bundle In Identity Security Cloud

The connector CLI provides ways to test invoking commands with any connector upload version. Before running a command, create a file, **config.json**, in the root project folder. Include any configuration items required to interact with the target web service in this file, such as API token, username, password, organization, version, etc. The following snippet is an example:

```json
{
  "token": "123acsa494fbasd#asd"
}
```

This file is required and requires at least one key value even if your connector does not require anything.

Next, invoke the command using the connector ID and config.json. For example, this command invokes std:account:list command on the connector:

```
sail connectors invoke account-list -c example-connector -p config.json
```

You will receive a list of JSON objects for each account the connector contains.

```bash
$ sail connectors invoke account-list -c example-connector -p config.json
2022/06/29 11:06:07 Running "std:account:list" with "{}"
{"key":{"simple":{"id":"john.doe"}},"disabled":false,"locked":false,"attributes":{"id":"john.doe","displayName":"John Doe","entitlements":["administrator","sailpoint"]}}
```

> ⚠️ Sensitive information!
>
> Ensure that you add config.json to your .gitignore file so you do not accidentally store secrets in your code repository.

## Test Your Connector from Identity Security Cloud UI

Go to your Identity Security Cloud org’s source section. Create a source from the connector you just uploaded. This connector will display in the dropdown list: **example-connector (tag: latest)**

After creating a source, you can to test connection, aggregate account, etc. from the Identity Security Cloud UI.
