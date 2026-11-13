# GetProfileConfigListV1401Response

# GetProfileConfigListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetProfileConfigListV1401Response = Initialize-GetProfileConfigListV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetProfileConfigListV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

