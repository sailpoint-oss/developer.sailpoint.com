# ErrorMessage

# ErrorMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | Locale is the current Locale | [optional] 
**LocaleOrigin** | **String** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** | **String** | Text is the actual text of the error message | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessage = Initialize-ErrorMessage  -Locale en-US `
 -LocaleOrigin DEFAULT `
 -Text This is an error
```

- Convert the resource to JSON
```powershell
$ErrorMessage | ConvertTo-JSON
```


[[Back to top]](#) 

