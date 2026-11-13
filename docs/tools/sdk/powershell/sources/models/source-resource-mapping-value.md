# SourceResourceMappingValue

# SourceResourceMappingValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetId** | **String** | Dataset identifier that owns the resource. | [optional] 
**ResourceType** | **String** | Resource type from source schema config. | [optional] 
**ObjectType** | **String** | Connector object type for the resource. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceResourceMappingValue = Initialize-SourceResourceMappingValue  -DatasetId cmdb-servicenow:applications `
 -ResourceType std:resource `
 -ObjectType account
```

- Convert the resource to JSON
```powershell
$SourceResourceMappingValue | ConvertTo-JSON
```


[[Back to top]](#) 

