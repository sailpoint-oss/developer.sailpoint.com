# AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes

# AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | The name of attribute | [optional] 
**SourceName** | **String** | Name of the Source | [optional] 
**Name** | **String** | ID of the Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes = Initialize-AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes  -AttributeName givenName `
 -SourceName delimited-src `
 -Name 8d3e0094e99445de98eef6c75e25jc04
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

