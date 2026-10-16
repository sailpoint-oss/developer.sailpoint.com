# Intelidentityambiguousbody

# Intelidentityambiguousbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** |  **Enum** [  "IDC_IDENTITY_AMBIGUOUS" ] | Constant detail code indicating that more than one identity matched the filter. | [required]
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
**Candidates** | [**[]Intelidentityambiguouscandidate**](intelidentityambiguouscandidate) | Identities that matched the ambiguous filter expression. | [required]

## Examples

- Prepare the resource
```powershell
$Intelidentityambiguousbody = Initialize-Intelidentityambiguousbody  -DetailCode IDC_IDENTITY_AMBIGUOUS `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null `
 -Causes null `
 -Candidates null
```

- Convert the resource to JSON
```powershell
$Intelidentityambiguousbody | ConvertTo-JSON
```


[[Back to top]](#) 

