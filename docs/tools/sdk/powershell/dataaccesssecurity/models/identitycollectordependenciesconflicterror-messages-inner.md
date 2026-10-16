# IdentitycollectordependenciesconflicterrorMessagesInner

# IdentitycollectordependenciesconflicterrorMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | **String** | An indicator of how the locale was selected. | [optional] 
**Text** | **String** | Actual text of the error message in the indicated locale. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitycollectordependenciesconflicterrorMessagesInner = Initialize-IdentitycollectordependenciesconflicterrorMessagesInner  -Locale en-US `
 -LocaleOrigin DEFAULT `
 -Text Identity collector is in use and cannot be deleted.
```

- Convert the resource to JSON
```powershell
$IdentitycollectordependenciesconflicterrorMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

