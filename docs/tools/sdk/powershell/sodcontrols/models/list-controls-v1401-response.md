# ListControlsV1401Response

# ListControlsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListControlsV1401Response = Initialize-ListControlsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListControlsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

