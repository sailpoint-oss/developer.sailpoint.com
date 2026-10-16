# ScheduledActionPayloadContentBackupOptions

# ScheduledActionPayloadContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | [**map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue**](scheduled-action-response-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledActionPayloadContentBackupOptions = Initialize-ScheduledActionPayloadContentBackupOptions  -IncludeTypes ["ROLE","IDENTITY_PROFILE"] `
 -ObjectOptions {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}
```

- Convert the resource to JSON
```powershell
$ScheduledActionPayloadContentBackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

