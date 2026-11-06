# PluginSlot

# PluginSlot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slot_id** | **str** | Identifier referencing an entry in the slot registry | [required]
**required_capabilities** | **[]str** | ISC capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted. | [optional] [default to []]
**restrict_to_users** | **[]str** | User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction. | [optional] [default to []]
\}

## Example

```python
from sailpoint.ui_plugins.models.plugin_slot import PluginSlot

plugin_slot = PluginSlot(
slot_id='full-page',
required_capabilities=["ORG_ADMIN"],
restrict_to_users=["2c9180867b5f4b3e8a1c2d3e4f5a6b7c"]
)

```
[[Back to top]](#) 

