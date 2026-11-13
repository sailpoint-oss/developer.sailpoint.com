# UIPluginSlot

# UIPluginSlot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slot_id** | **str** | Identifier of the UI extension point | [required]
**name** | [**UIPluginSlotName**](ui-plugin-slot-name) |  | [required]
**description** | [**UIPluginSlotDescription**](ui-plugin-slot-description) |  | [required]
**state** | **SlotState** |  | [required]
**input_schema** | **map[string]object** | JSON Schema for data the App Shell provides to plugins in this slot | [required]
**slot_type** | **SlotType** |  | [required]
**max_plugins** | **int** | Max concurrent plugins in this slot; `-1` means unlimited | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.ui_plugin_slot import UIPluginSlot

ui_plugin_slot = UIPluginSlot(
slot_id='full-page',
name=,
description=,
state='active',
input_schema={"type":"object","properties":{"identityId":{"type":"string"}}},
slot_type='full-page',
max_plugins=-1
)

```
[[Back to top]](#) 

