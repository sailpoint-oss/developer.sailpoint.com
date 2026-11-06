# CcBccPreferenceEntry

# CcBccPreferenceEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **CcBccRecipientType** |  | [required]
**Id** | **String** | Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email. | [optional] 
**Email** | **String** | Static email address when type is STATIC_EMAIL. | [optional] 

## Examples

- Prepare the resource
```powershell
$CcBccPreferenceEntry = Initialize-CcBccPreferenceEntry  -Type null `
 -Id 6b0b8e47cc1f4c3fa961a38fc718e989 `
 -Email cc-recipient@example.com
```

- Convert the resource to JSON
```powershell
$CcBccPreferenceEntry | ConvertTo-JSON
```


[[Back to top]](#) 

