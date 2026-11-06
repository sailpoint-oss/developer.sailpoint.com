# ObjectImportResult

# ObjectImportResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]SpConfigMessage**](sp-config-message) | Informational messages returned from the target service on import. | [required]
**Warnings** | [**[]SpConfigMessage**](sp-config-message) | Warning messages returned from the target service on import. | [required]
**Errors** | [**[]SpConfigMessage**](sp-config-message) | Error messages returned from the target service on import. | [required]
**ImportedObjects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | [required]

## Examples

- Prepare the resource
```powershell
$ObjectImportResult = Initialize-ObjectImportResult  -Infos null `
 -Warnings null `
 -Errors null `
 -ImportedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectImportResult | ConvertTo-JSON
```


[[Back to top]](#) 

