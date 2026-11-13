# AttributeMappingsAllOfTransformDefinitionAttributesInput

# AttributeMappingsAllOfTransformDefinitionAttributesInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The Type of Attribute | [optional] 
**Attributes** | [**AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes**](attribute-mappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInput = Initialize-AttributeMappingsAllOfTransformDefinitionAttributesInput  -Type accountAttribute `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInput | ConvertTo-JSON
```


[[Back to top]](#) 

