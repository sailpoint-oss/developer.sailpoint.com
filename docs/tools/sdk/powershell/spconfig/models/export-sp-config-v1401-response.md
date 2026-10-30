# ExportSpConfigV1401Response

# ExportSpConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportSpConfigV1401Response = Initialize-ExportSpConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ExportSpConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

