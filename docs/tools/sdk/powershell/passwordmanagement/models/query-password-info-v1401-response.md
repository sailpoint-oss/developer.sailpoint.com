# QueryPasswordInfoV1401Response

# QueryPasswordInfoV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$QueryPasswordInfoV1401Response = Initialize-QueryPasswordInfoV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$QueryPasswordInfoV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

