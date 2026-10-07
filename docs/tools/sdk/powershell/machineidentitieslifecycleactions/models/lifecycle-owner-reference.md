# LifecycleOwnerReference

# LifecycleOwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "WORKGROUP" ] | Owner reference type. | [optional] 
**Id** | **String** | Identifier of the owner. | [optional] 
**Name** | **String** | Display name of the owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleOwnerReference = Initialize-LifecycleOwnerReference  -Type IDENTITY `
 -Id 2c9180858082150f0180893dbaf44201 `
 -Name Pat Manager
```

- Convert the resource to JSON
```powershell
$LifecycleOwnerReference | ConvertTo-JSON
```


[[Back to top]](#) 

