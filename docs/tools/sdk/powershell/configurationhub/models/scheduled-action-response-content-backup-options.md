# ScheduledActionResponseContentBackupOptions

# ScheduledActionResponseContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | [**map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue**](scheduled-action-response-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledActionResponseContentBackupOptions = Initialize-ScheduledActionResponseContentBackupOptions  -IncludeTypes ["ROLE","IDENTITY_PROFILE"] `
 -ObjectOptions {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}
```

- Convert the resource to JSON
```powershell
$ScheduledActionResponseContentBackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

