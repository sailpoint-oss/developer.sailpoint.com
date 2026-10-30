# SourceDatasetResource

# SourceDatasetResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Resource identifier. Server-generated on create. | [optional] [readonly] 
**Name** | **String** | Display name of the resource. Required on create. | [optional] 
**Features** | **[]String** | Feature identifiers supported by this resource. | [optional] 
**Type** | **String** | Resource type. Required on create. | [optional] 
**DatasetId** | **String** | Dataset identifier to associate this resource with. Required on create. | [optional] 
**Schema** | [**Schema**](schema) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceDatasetResource = Initialize-SourceDatasetResource  -Id aws:iam-role `
 -Name Account `
 -Features ["Create","Delete"] `
 -Type std:resource `
 -DatasetId cmdb-servicenow:applications `
 -Schema null
```

- Convert the resource to JSON
```powershell
$SourceDatasetResource | ConvertTo-JSON
```


[[Back to top]](#) 

