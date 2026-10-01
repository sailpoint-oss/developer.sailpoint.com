# GetPublicIdentityConfigV1401Response

# GetPublicIdentityConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPublicIdentityConfigV1401Response = Initialize-GetPublicIdentityConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPublicIdentityConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

