# Common CLI commands

Below is a list of commands and their usages:

- **Development**
  - Create a connector on your local system: `sail conn init "my-project"`
  - Create a customizer on your local system `sail conn customizers init "my-customizer-project"`
  - Test your connector or customizer locally: `npm run debug`
- **Deployment**
  - Create an empty connector in your SailPoint Identity Security Org (used to get id so you can upload): `sail conn create "my-project"`
  - Create an empty customizer in your SailPoint Identity Security Org (used to get id so you can upload): `sail conn customizers create "my-customizer-project"`
  - Build a project: `npm run pack-zip`
  - Upload your connector to your SailPoint Identity Security Org: `sail conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip`
  - Upload your customizer to your SailPoint Identity Security Org: `sail conn customizers upload -c [customizerID] -f dist/[customizer filename].zip`
- **Exploring**
  - List connectors in your SailPoint Identity Security Org: `sail conn list`
  - List customizers in your SailPoint Identity Security Org: `sail conn customizers list`
  - List source instances in your SailPoint Identity Security Org: `sail conn instances list`
  - List your connector tags: `sail conn tags list -c [connectorID | connectorAlias]`
- **Testing and Debugging**
  - Test your connector on the SailPoint Identity Security Org: `sail connectors invoke [action] -c [connectorID | connectorAlias] -p config.json`
  - Get a list of actions: `sail conn invoke -h`
  - Run read-only integration tests against your connector: `sail conn validate -p config.json -c [connectorID | connectorAlias] -r`
  - Tail SailPoint Identity Security Org connector logs: `sail conn logs tail`
- **Delete**
  - Delete a connector: `sail conn delete -c [connectorID | connectorAlias]`
- **Linking**
  - Link a customizer to your source instance: `sail conn customizers link -i [sourceInstanceID] -c [customizerID]`
