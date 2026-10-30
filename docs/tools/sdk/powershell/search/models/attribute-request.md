# AttributeRequest

# AttributeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Attribute name. | [optional] 
**Op** | **String** | Operation to perform on attribute. | [optional] 
**Value** | [**AttributeRequestValue**](attribute-request-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeRequest = Initialize-AttributeRequest  -Name groups `
 -Op Add `
 -Value null
```

- Convert the resource to JSON
```powershell
$AttributeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

