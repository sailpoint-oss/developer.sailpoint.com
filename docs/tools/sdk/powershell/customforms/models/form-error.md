# FormError

# FormError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Key is the technical key | [optional] 
**Messages** | [**[]ErrorMessage**](error-message) | Messages is a list of web.ErrorMessage items | [optional] 
**Value** | **AnyType** | Value is the value associated with a Key | [optional] 

## Examples

- Prepare the resource
```powershell
$FormError = Initialize-FormError  -Key department `
 -Messages null `
 -Value Engineering
```

- Convert the resource to JSON
```powershell
$FormError | ConvertTo-JSON
```


[[Back to top]](#) 

