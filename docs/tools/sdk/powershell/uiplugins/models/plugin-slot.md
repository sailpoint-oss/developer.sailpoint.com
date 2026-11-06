# PluginSlot

# PluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SlotId** | **String** | Identifier referencing an entry in the slot registry | [required]
**RequiredCapabilities** | **[]String** | ISC capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted. | [optional] 
**RestrictToUsers** | **[]String** | User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction. | [optional] 

## Examples

- Prepare the resource
```powershell
$PluginSlot = Initialize-PluginSlot  -SlotId full-page `
 -RequiredCapabilities ["ORG_ADMIN"] `
 -RestrictToUsers ["2c9180867b5f4b3e8a1c2d3e4f5a6b7c"]
```

- Convert the resource to JSON
```powershell
$PluginSlot | ConvertTo-JSON
```


[[Back to top]](#) 

