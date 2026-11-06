# ContextAttributeDto

# ContextAttributeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the attribute | [optional] 
**Value** | [**ContextAttributeDtoValue**](context-attribute-dto-value) |  | [optional] 
**Derived** | **Boolean** | True if the attribute was derived. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ContextAttributeDto = Initialize-ContextAttributeDto  -Attribute location `
 -Value null `
 -Derived false
```

- Convert the resource to JSON
```powershell
$ContextAttributeDto | ConvertTo-JSON
```


[[Back to top]](#) 

