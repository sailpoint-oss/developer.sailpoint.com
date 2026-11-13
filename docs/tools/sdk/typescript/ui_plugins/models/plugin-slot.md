# PluginSlot

# PluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slotId** | `string` | Identifier referencing an entry in the slot registry | [default to undefined]
**requiredCapabilities** | **(optional)** `Array<string>` | ISC capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted. | [default to undefined]
**restrictToUsers** | **(optional)** `Array<string>` | User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction. | [default to undefined]

