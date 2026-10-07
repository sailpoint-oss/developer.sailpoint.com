# SourceDatasetResourceReference

# SourceDatasetResourceReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Resource identifier. | [optional] 
**Name** | **String** | Display name of the resource. | [optional] 
**Type** | **String** | Resource type from source schema config. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceDatasetResourceReference = Initialize-SourceDatasetResourceReference  -Id aws:iam-role `
 -Name Role `
 -Type std:resource
```

- Convert the resource to JSON
```powershell
$SourceDatasetResourceReference | ConvertTo-JSON
```


[[Back to top]](#) 

