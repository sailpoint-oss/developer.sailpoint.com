# ObjectExportImportNames

# ObjectExportImportNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | **[]String** | Object names to be included in a backup. | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectExportImportNames = Initialize-ObjectExportImportNames  -IncludedNames null
```

- Convert the resource to JSON
```powershell
$ObjectExportImportNames | ConvertTo-JSON
```


[[Back to top]](#) 

