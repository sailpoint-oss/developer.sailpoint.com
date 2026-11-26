# GetCommonAccessV1401Response

# GetCommonAccessV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetCommonAccessV1401Response = Initialize-GetCommonAccessV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetCommonAccessV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

