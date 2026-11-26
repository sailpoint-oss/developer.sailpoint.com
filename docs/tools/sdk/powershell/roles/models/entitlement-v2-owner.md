# EntitlementV2Owner

# EntitlementV2Owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Name** | **String** | The display name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementV2Owner = Initialize-EntitlementV2Owner  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type IDENTITY `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$EntitlementV2Owner | ConvertTo-JSON
```


[[Back to top]](#) 

