# ErrorMessageDto

# ErrorMessageDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | **LocaleOrigin** |  | [optional] 
**Text** | **String** | Actual text of the error message in the indicated locale. | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessageDto = Initialize-ErrorMessageDto  -Locale en-US `
 -LocaleOrigin null `
 -Text The request was syntactically correct but its content is semantically invalid.
```

- Convert the resource to JSON
```powershell
$ErrorMessageDto | ConvertTo-JSON
```


[[Back to top]](#) 

