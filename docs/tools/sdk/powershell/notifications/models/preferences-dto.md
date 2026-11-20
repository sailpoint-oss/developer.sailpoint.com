# PreferencesDto

# PreferencesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template notification key. | [optional] 
**Mediums** | **[]Medium** | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. An empty list means the notification is disabled for the tenant. More mediums may be added in the future. | [optional] 
**Modified** | **System.DateTime** | Modified date of preference. | [optional] [readonly] 
**CcList** | [**[]CcBccPreferenceEntry**](cc-bcc-preference-entry) | Optional CC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [optional] 
**BccList** | [**[]CcBccPreferenceEntry**](cc-bcc-preference-entry) | Optional BCC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [optional] 

## Examples

- Prepare the resource
```powershell
$PreferencesDto = Initialize-PreferencesDto  -Key cloud_manual_work_item_summary `
 -Mediums ["EMAIL"] `
 -Modified 2020-05-15T14:37:06.909Z `
 -CcList [{"type":"IDENTITY","id":"6b0b8e47cc1f4c3fa961a38fc718e989"},{"type":"STATIC_EMAIL","email":"cc-recipient@example.com"}] `
 -BccList [{"type":"MANAGER_OF"},{"type":"ORG_ADMINS"}]
```

- Convert the resource to JSON
```powershell
$PreferencesDto | ConvertTo-JSON
```


[[Back to top]](#) 

