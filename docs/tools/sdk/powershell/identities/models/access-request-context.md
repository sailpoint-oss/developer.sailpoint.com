# AccessRequestContext

# AccessRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContextAttributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestContext = Initialize-AccessRequestContext  -ContextAttributes null
```

- Convert the resource to JSON
```powershell
$AccessRequestContext | ConvertTo-JSON
```


[[Back to top]](#) 

