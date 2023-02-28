# Connectors

The `connectors` command is a CLI interface for the SaaS Connectivity Platform.  This CLI is the best way to create and manage SaaS connectors within your IdentityNow tenant.  Please [read our saas connectivity guide](https://developer.sailpoint.com/idn/docs/saas-connectivity) for more information.

- [Init project](#init-project)
- [Create connector](#create-connector)
- [Upload connector](#upload-connector)
- [Invoke command](#invoke-command)
- [List connectors](#list-connectors)
- [Update connector](#update-connector)
- [Delete connector](#delete-connector)
- [Manage tags](#manage-tags)
- [Get logs](#get-logs)

## Init project

To initialize a new connector project, use the following command.

```shell
sail conn init [connectorProjectName]
```

This command will create a folder in your current working directory with the same name as `connectorProjectName`.  All of the necessary files needed to create a connector will be included in this folder.  See [creating a new project](https://developer.sailpoint.com/idn/docs/saas-connectivity/prerequisites#create-new-project) for more information.

## Create connector

To create a connector entry in your IdentityNow tenant, run the following command.

```shell
sail conn create [connectorAlias]
```

This will register your connector and give it a unique ID.  See [creating a connector in your org](https://developer.sailpoint.com/idn/docs/saas-connectivity/test-build-deploy#create-and-upload-connector-bundle) for more information.

## Upload connector

To upload a connector to your IdentityNow tenant, package the connector into a zip file by running `npm run pack-zip` in the project directory and then run the following command.

```shell
sail conn upload -c [connectorID | connectorAlias] -f connector.zip
```

The project files must be packaged before uploading.  Please see [creating a connector](https://developer.sailpoint.com/idn/docs/saas-connectivity/test-build-deploy#create-and-upload-connector-bundle) for information on how to package and upload a connector.

## Invoke command

To test commands, like `test-connection`, `account-list`, and `entitlement-list`, run the following command.

```shell
sail conn invoke [command] -c [connectorID | connectorAlias] -p [config.json] -v [version]
```

The entitlement commands require an additional flag (`-t [entitlementType]`).  For example.

```shell
sail conn invoke entitlement-list -t [entitlementType] -c [connectorID | connectorAlias] -p [config.json] -v [version]
```

See [testing your connection in IdentityNow](https://developer.sailpoint.com/idn/docs/saas-connectivity/test-build-deploy#test-your-connector-in-identitynow) for more information on invoking commands.

## List connectors

To get a list of connectors in your tenant, run the following command.

```shell
sail conn list
```

## Update connector

To change the alias of a connector, run the following command.

```shell
sail conn update -c [connectorID] -a [newConnectorAlias]
```

## Delete connector

To delete a connector, run the following command.

```shell
sail conn delete -c [connectorID]
```

## Manage tags

Tags allow you to create multiple instances of your connector that can be used in IdentityNow.  The `latest` tag is created by default and is the primary instance, typically used for production purposes.  Tags are similar to branches in a version control system, like git or CVS.  You can create a tag for actively developing the connector, or for any other purpose you see fit.

A common pattern is to create a `development` tag on a connector from a specific version, like the latest version.

```shell
sail conn tags create -c [connectorID | connectorAlias] -n [tagName] -v [version]
```

As the connector is developed and the version number increases, update the `development` tag to point to the latest version.  This leaves the `latest` tag on a stable version while you make changes to your connector on the unstable `development` tag.

```shell
sail conn tags update -c [connectorID | connectorAlias] -n [tagName] -v [version]
```

You can test the connector in IdentityNow by selecting the instance of your connector with the `development` tag, which will use whatever version you point to with the update command.

To see all of the tags of the connector and what version they point to, run the following command.

```shell
sail conn tags list -c [connectorID | connectorAlias]
```

Once you are satisfied with the changes you made to the `develop` tag, you can point your `latest` tag to the new stable version.

## Get logs

The following logging commands will get all logs for all connectors.

To get a dump of logs, run the following command.

```shell
sail conn logs
```

To get the output of logs in realtime, run the following command.

```shell
sail conn logs tail
```

To filter the logs to a specific connector, use a utility like `grep`.

```shell
sail conn logs | grep 'connector version 29'
```

To get detailed logging statistics on each connector, run the following command.

```shell
sail conn stats
```

See our [connector logging docs](https://developer.sailpoint.com/idn/docs/saas-connectivity/in-depth/logging) for more information on logging.