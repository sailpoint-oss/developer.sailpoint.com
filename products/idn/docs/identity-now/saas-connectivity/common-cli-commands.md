---
id: common-cli-commands
title: Common CLI Commands
pagination_label: Common CLI Commands
sidebar_label: Common CLI Commands
sidebar_position: 3
sidebar_class_name: commonCliCommands
keywords: ["connectivity", "connectors", "commands", "cli"]
description: These are the CLI commands most commonly used when building SaaS Connectors.
slug: /docs/saas-connectivity/common-cli-commands
tags: ["Connectivity"]
---

Below is a list of commands and their usages:

- **Development**
    - Create a project on your local system: ```sp conn init "my-project"```
    - Test your connector locally: ```npm run dev```
- **Deployment**
    - Create an empty connector in your IDN Org (used to get id so you can upload): ```sp conn create "my-project"```
    - Build a project: ```npm run pack-zip```
    - Upload your connector to your IDN Org: ```sp conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip```
- **Exploring**
    - List connectors in your IDN Org: ```sp conn list```
    - List your connector tags: ```sp conn tags list -c [connectorID | connectorAlias]```
- **Testing and Debugging**
    - Test your connector on the IDN Org: ```sp connectors invoke [action] -c [connectorID | connectorAlias] -p config.json```
    - Get a list of actions: ```sp conn invoke -h```
    - Run read-only integration tests against your connector: ```sp conn validate -p config.json -c [connectorID | connectorAlias] -r```
    - Tail IDN Org connector logs: ```sp conn logs tail```
- **Delete**
    - Delete a connector: ```sp conn delete -c [connectorID | connectorAlias]```