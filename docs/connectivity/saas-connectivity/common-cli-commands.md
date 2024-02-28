---
id: common-cli-commands
title: Common CLI Commands
pagination_label: Common CLI Commands
sidebar_label: Common CLI Commands
sidebar_position: 3
sidebar_class_name: commonCliCommands
keywords: ['connectivity', 'connectors', 'commands', 'cli']
description: These are the CLI commands most commonly used when building SaaS Connectors.
slug: /saas-connectivity/common-cli-commands
tags: ['Connectivity']
---

Below is a list of commands and their usages:

- **Development**
  - Create a connector on your local system: `sail conn init "my-project"`
  - Create a customizer on your local system `sail conn customizers init "my-customizer-project"`
  - Test your connector or customizer locally: `npm run debug`
- **Deployment**
  - Create an empty connector in your IDN Org (used to get id so you can upload): `sail conn create "my-project"`
  - Create an empty customizer in your IDN Org (used to get id so you can upload): `sail conn customizers create "my-customizer-project"`
  - Build a project: `npm run pack-zip`
  - Upload your connector to your IDN Org: `sail conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip`
  - Upload your customizer to your IDN Org: `sail conn customizers upload -c [customizerID] -f dist/[customizer filename].zip`
- **Exploring**
  - List connectors in your IDN Org: `sail conn list`
  - List customizers in your IDN Org: `sail conn customizers list`
  - List source instances in your IDN Org: `sail conn instances list`
  - List your connector tags: `sail conn tags list -c [connectorID | connectorAlias]`
- **Testing and Debugging**
  - Test your connector on the IDN Org: `sail connectors invoke [action] -c [connectorID | connectorAlias] -p config.json`
  - Get a list of actions: `sail conn invoke -h`
  - Run read-only integration tests against your connector: `sail conn validate -p config.json -c [connectorID | connectorAlias] -r`
  - Tail IDN Org connector logs: `sail conn logs tail`
- **Delete**
  - Delete a connector: `sail conn delete -c [connectorID | connectorAlias]`
- **Linking**
  - Link a customizer to your source instance: `sail conn customizers link -i [sourceInstanceID] -c [customizerID]`
  
