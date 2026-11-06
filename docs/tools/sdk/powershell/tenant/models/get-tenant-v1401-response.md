# GetTenantV1401Response

# GetTenantV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantV1401Response = Initialize-GetTenantV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTenantV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

