# AccessModelMetadataValuesInner

# AccessModelMetadataValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The value to assign to the metdata item | [optional] 
**Name** | **String** | Display name of the value | [optional] 
**Status** | **String** | The status of the individual value | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessModelMetadataValuesInner = Initialize-AccessModelMetadataValuesInner  -Value development `
 -Name Development `
 -Status active
```

- Convert the resource to JSON
```powershell
$AccessModelMetadataValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

