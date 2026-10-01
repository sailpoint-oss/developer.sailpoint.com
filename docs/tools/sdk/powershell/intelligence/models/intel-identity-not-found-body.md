# IntelIdentityNotFoundBody

# IntelIdentityNotFoundBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** |  **Enum** [  "IDC_IDENTITY_NOT_FOUND" ] | Constant detail code indicating that no identity matched the supplied filter. | [required]
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelIdentityNotFoundBody = Initialize-IntelIdentityNotFoundBody  -DetailCode IDC_IDENTITY_NOT_FOUND `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null `
 -Causes null
```

- Convert the resource to JSON
```powershell
$IntelIdentityNotFoundBody | ConvertTo-JSON
```


[[Back to top]](#) 

