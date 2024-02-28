---
id: cli-advanced
title: CLI - Advanced
pagination_label: CLI - Advanced
sidebar_label: CLI - Advanced
sidebar_position: 1
sidebar_class_name: cliAdvanced
keywords: ['connectivity', 'connectors', 'cli']
description: Using the CLI to properly test and debug your connector in IdentityNow
slug: /connectivity/saas-connectivity/in-depth/cli-advanced
tags: ['Connectivity']
---

You can use the CLI to invoke a number of calls in IdentityNow, including calls that aren't specifically defined by the CLI. This section includes examples that show how you can invoke those calls: 

## Use provided CLI invoke calls

To find commands supported by the CLI, you can use the `sail conn invoke -h` command:

```bash
Available Commands:
  account-create          Invoke a std:account:create command
  account-delete          Invoke a std:account:delete command
  account-discover-schema Invoke a std:account:discover-schema command
  account-list            Invoke a std:account:list command
  account-read            Invoke a std:account:read command
  account-update          Invoke a std:account:update command
  change-password         Invoke a change-password command
  entitlement-list        Invoke a std:entitlement:list command
  entitlement-read        Invoke a std:entitlement:read command
  raw                     Invoke a raw command
  source-data-discover    Invoke a std:source-data:discover command
  source-data-read        Invoke a std:source-data:read command
  test-connection         Invoke a std:test-connection command
```
To understand the required parameters to invoke a command from the CLI, you can use the help command to get a list of required parameters. For example, to read an account using the CLI, first call `sail conn invoke account-read -h`. The CLI will respond with the required input:

```bash
Usage:
  sail connectors invoke account-read [id/lookupId] [uniqueId] [flags]

Flags:
  -h, --help            help for account-read
      --schema string   Optional - Custom account schema

Global Flags:
      --config-json string     Config JSON to use for commands
  -p, --config-path string     Path to config to use for commands
  -e, --conn-endpoint string   Override connectors endpoint (default "/beta/platform-connectors")
      --debug                  Enable debug logging
      --env string             Environment to use for SailPoint CLI commands
  -c, --id string              Connector ID or Alias
  -v, --version string         Optional. Run against a specific version if provided. Otherwise run against the latest tag.
```
In this case, you need to provide the connector ID, the config path that contains the necessary configuration for the connector, and the ID for the account. 

The config file will look something like this:

```json
{    
    "apiKey": "<API_KEY>",
    "airtableBase": "<BASE_ID>"
}
```

The command to invoke account-read will look like this:

```bash
sail conn invoke account-read philip.ellis -c 4b12cf79-b2ac-44ac-842b-b5a6268548f5 -p config.json
```

## Use sail conn invoke raw

Even if a command isn't supported by the CLI, you can still invoke it. The `invoke raw` command allows you to specify the entire JSON object used to invoke the command. 

You can use the Postman collection as a way to build the JSON object needed to invoke the command. For example, if you want to run the `account-disable` command, you can create a JSON object with the required fields. If you look at this example, you will see that it closely resembles the same information that is sent when debugging the command using Postman:

```
{
    "type": "std:account:disable",
    "input": {
        "key": {"simple": { "id": "philip.ellis"}}
    }
}
```
Running the `raw` command is similar to running the other commands, except now you pass the JSON file created earlier with the `-f` flag:

```
sail conn invoke raw -c 4b12cf79-b2ac-44ac-842b-b5a6268548f5 -f account-disable.json -p config.json
```
