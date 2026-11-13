# ObjectImportResult2

# ObjectImportResult2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]SpConfigMessage2**](sp-config-message2) | Informational messages returned from the target service on import. | [required]
**Warnings** | [**[]SpConfigMessage2**](sp-config-message2) | Warning messages returned from the target service on import. | [required]
**Errors** | [**[]SpConfigMessage2**](sp-config-message2) | Error messages returned from the target service on import. | [required]
**ImportedObjects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | [required]

## Examples

- Prepare the resource
```powershell
$ObjectImportResult2 = Initialize-ObjectImportResult2  -Infos null `
 -Warnings null `
 -Errors null `
 -ImportedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectImportResult2 | ConvertTo-JSON
```


[[Back to top]](#) 

