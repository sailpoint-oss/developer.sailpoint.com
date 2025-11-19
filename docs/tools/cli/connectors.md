---
id: cli-connectors
title: Connectors
pagination_label: CLI Connectors
sidebar_label: Connectors
sidebar_position: 1
sidebar_class_name: cli-connectors
keywords: ['cli', 'cli connectors', 'connectors']
description: Learn how to use the CLI to create, manage, and test SaaS connectors in this guide.
slug: /tools/cli/connectors
tags: ['CLI']
---

## Connectors

Learn how to use the CLI to create, manage, and test SaaS connectors in this guide.

You can use SaaS connectors to serve as bridges between your Identity Security Cloud (ISC) tenant and other source systems without the use of a Virtual Appliance (VA). For more information about the SaaS connectors, refer to the [SaaS Connectivity](/docs/connectivity/saas-connectivity) guide.

The `connectors` command is a CLI interface for the SaaS Connectivity platform. The CLI is the best way to create, manage, and test SaaS connectors within your tenant.

## Commands

To create, manage, and test SaaS connectors with the CLI, you can run these commands:

- [Init project](#init-project)
- [Create connector](#create-connector)
- [Upload connector](#upload-connector)
- [Invoke command](#invoke-command)
- [List connectors](#list-connectors)
- [Update connector](#update-connector)
- [Validate connector](#validate-a-connector)
- [Delete connector](#delete-connector)
- [Manage tags](#manage-tags)
- [Get logs](#get-logs)

### Init project

To initialize a connector project, run this command:

```shell
sail conn init [connectorProjectName]
```

This command creates a folder named `connectorProjectName` in your working directory. The folder includes all the files necessary to create a connector. For more information about initiating a connector project, refer to the [Create new project](/docs/connectivity/saas-connectivity/prerequisites#creating-your-first-project) section of the SaaS Connectivity documentation.

### Create connector

To create a connector entry in your ISC tenant, run this command:

```shell
sail conn create [connectorAlias]
```

This command registers your connector and gives it a unique ID. For more information about creating a connector in your tenant, refer to the [Create connector in your org](/docs/connectivity/saas-connectivity/test-build-deploy#create-connector-in-your-org) section of the SaaS Connectivity documentation.

### Upload connector

To upload a connector to your ISC tenant, run `npm run pack-zip` in the project directory to package the connector into a zip file. Then run this command:

```shell
sail conn upload -c [connectorID | connectorAlias] -f connector.zip
```

You must package the project files before you upload them. For more information about how to package and upload connectors, refer to the [Create and upload connector bundle](/docs/connectivity/saas-connectivity/test-build-deploy/#create-and-upload-connector-bundle) section of the SaaS Connectivity documentation.

### Invoke command

To test connector commands, like `test-connection`, `account-list`, and `entitlement-list`, run this command:

```shell
sail conn invoke [command] -c [connectorID | connectorAlias] -p [config.json] -v [version]
```

For more information about the different available connector commands, refer to [Connector Commands](/docs/connectivity/saas-connectivity/connector-commands).

The entitlement commands require an additional flag (`-t [entitlementType]`), like this example:

```shell
sail conn invoke entitlement-list -t [entitlementType] -c [connectorID | connectorAlias] -p [config.json] -v [version]
```

For more information about invoking commands, refer to the [Test your connector in Identity Security Cloud](/docs/connectivity/saas-connectivity/test-build-deploy#test-your-connector-in-identity-security-cloud) section of the SaaS Connectivity documentation.

### List connectors

To get a list of connectors in your tenant, run this command:

```shell
sail conn list
```

### Update connector

To change a connector's alias, run this command:

```shell
sail conn update -c [connectorID] -a [newConnectorAlias]
```

### Validate a connector

You can use the CLI to validate your connector's behavior. The validate command runs integration tests against your connector to ensure all the basic functionality works.

To validate a connector's behavior, run this command:

```shell
sail conn validate -c [connectorID]
```

You can pass in a `-r` flag to run the command as read-only, or you can run a full suite of read/write tests.

### Delete connector

To delete a connector, run this command:

```shell
sail conn delete -c [connectorID]
```

### Manage tags

You can use tags to create multiple instances of your connector that can be used in ISC. The `latest` tag is created by default and is the primary instance, typically used for production purposes. Tags are similar to branches in a version control system, like git or CVS. You can create a tag for actively developing the connector, or for any other purpose you want.

A common pattern is to create a `development` tag on a connector from a specific version, like the latest version.

```shell
sail conn tags create -c [connectorID | connectorAlias] -n [tagName] -v [version]
```

As the connector is developed and the version number increases, update the `development` tag to point to the latest version. Doing so leaves the `latest` tag on a stable version while you make changes to your connector on the unstable `development` tag.

```shell
sail conn tags update -c [connectorID | connectorAlias] -n [tagName] -v [version]
```

You can test the connector in ISC by selecting the connector instance with the `development` tag. The CLI will use the version you point to with the update command.

To see a connector's tags and the versions they point to, run this command:

```shell
sail conn tags list -c [connectorID | connectorAlias]
```

When you are satisfied with the changes you made to the `develop` tag, you can point your `latest` tag to the new stable version.

### Get logs

To get all logs for all connectors, run these logging commands:

To get a dump of logs, run this command:

```shell
sail conn logs
```

To get the output of logs in realtime, run this command:

```shell
sail conn logs tail
```

To filter the logs to a specific connector, use a utility like `grep`, like how it's used in this example:

```shell
sail conn logs | grep 'connector version 29'
```

To get detailed logging statistics on each connector, run this command:

```shell
sail conn stats
```

For more information about connector logging, refer to [Logging](/docs/connectivity/saas-connectivity/in-depth/logging/).
