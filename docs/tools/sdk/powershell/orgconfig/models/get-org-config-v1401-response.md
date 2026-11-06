# GetOrgConfigV1401Response

# GetOrgConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetOrgConfigV1401Response = Initialize-GetOrgConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetOrgConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

