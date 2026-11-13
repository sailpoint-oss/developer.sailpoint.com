# UIPluginSlot

# UIPluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SlotId** | **String** | Identifier of the UI extension point | [required]
**Name** | [**UIPluginSlotName**](ui-plugin-slot-name) |  | [required]
**Description** | [**UIPluginSlotDescription**](ui-plugin-slot-description) |  | [required]
**State** | **SlotState** |  | [required]
**InputSchema** | **map[string]AnyType** | JSON Schema for data the App Shell provides to plugins in this slot | [required]
**SlotType** | **SlotType** |  | [required]
**MaxPlugins** | **Int32** | Max concurrent plugins in this slot; `-1` means unlimited | [required]

## Examples

- Prepare the resource
```powershell
$UIPluginSlot = Initialize-UIPluginSlot  -SlotId full-page `
 -Name null `
 -Description null `
 -State null `
 -InputSchema {"type":"object","properties":{"identityId":{"type":"string"}}} `
 -SlotType null `
 -MaxPlugins -1
```

- Convert the resource to JSON
```powershell
$UIPluginSlot | ConvertTo-JSON
```


[[Back to top]](#) 

