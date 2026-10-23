# BackupOptions

# BackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Examples

- Prepare the resource
```powershell
$BackupOptions = Initialize-BackupOptions  -IncludeTypes null `
 -ObjectOptions {"TRIGGER_SUBSCRIPTION":{"includedNames":["Trigger Subscription name"]}}
```

- Convert the resource to JSON
```powershell
$BackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

