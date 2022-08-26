---
id: cli-common-commands
slug: idn/docs/saas-connectivity/getting-started/cli-common-commands
---
# Common CLI/SDK Commands

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