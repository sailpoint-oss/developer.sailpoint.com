# GetPasswordOrgConfigV1401Response

# GetPasswordOrgConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordOrgConfigV1401Response = Initialize-GetPasswordOrgConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPasswordOrgConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

