# GetAutoWriteSettingsV1401Response

# GetAutoWriteSettingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAutoWriteSettingsV1401Response = Initialize-GetAutoWriteSettingsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAutoWriteSettingsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

