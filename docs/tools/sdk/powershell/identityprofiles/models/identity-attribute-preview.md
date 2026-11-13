# IdentityAttributePreview

# IdentityAttributePreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the attribute that is being previewed. | [optional] 
**Value** | **String** | Value that was derived during the preview. | [optional] 
**PreviousValue** | **String** | The value of the attribute before the preview. | [optional] 
**ErrorMessages** | [**[]ErrorMessageDto**](error-message-dto) | List of error messages | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributePreview = Initialize-IdentityAttributePreview  -Name email `
 -Value email@mail.com `
 -PreviousValue oldEmail@mail.com `
 -ErrorMessages {"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"}
```

- Convert the resource to JSON
```powershell
$IdentityAttributePreview | ConvertTo-JSON
```


[[Back to top]](#) 

