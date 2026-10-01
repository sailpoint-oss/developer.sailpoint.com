# LifecycleRequesterReference

# LifecycleRequesterReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Requester reference type. | [optional] 
**Id** | **String** | Identifier of the requester. | [optional] 
**Name** | **String** | Display name of the requester. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleRequesterReference = Initialize-LifecycleRequesterReference  -Type IDENTITY `
 -Id 2c9180858082150f0180893dbaf44201 `
 -Name Pat Manager
```

- Convert the resource to JSON
```powershell
$LifecycleRequesterReference | ConvertTo-JSON
```


[[Back to top]](#) 

