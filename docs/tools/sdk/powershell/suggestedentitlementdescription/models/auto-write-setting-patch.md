# AutoWriteSettingPatch

# AutoWriteSettingPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "replace" ] | The operation to perform. Only ""replace"" is supported. | [required]
**Path** | **String** | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | [required]
**Value** | [**AutoWriteSettingPatchValue**](auto-write-setting-patch-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$AutoWriteSettingPatch = Initialize-AutoWriteSettingPatch  -Op replace `
 -Path /enabled `
 -Value null
```

- Convert the resource to JSON
```powershell
$AutoWriteSettingPatch | ConvertTo-JSON
```


[[Back to top]](#) 

