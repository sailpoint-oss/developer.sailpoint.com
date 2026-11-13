# StartApplicationDiscoveryV1403Response

# StartApplicationDiscoveryV1403Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
**VarError** | **String** | Error message when quota is exceeded | [required]

## Examples

- Prepare the resource
```powershell
$StartApplicationDiscoveryV1403Response = Initialize-StartApplicationDiscoveryV1403Response  -DetailCode 400.1 Bad Request Content `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null `
 -Causes null `
 -VarError null
```

- Convert the resource to JSON
```powershell
$StartApplicationDiscoveryV1403Response | ConvertTo-JSON
```


[[Back to top]](#) 

