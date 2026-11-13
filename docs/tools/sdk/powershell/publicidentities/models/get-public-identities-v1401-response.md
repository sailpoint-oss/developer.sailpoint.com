# GetPublicIdentitiesV1401Response

# GetPublicIdentitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPublicIdentitiesV1401Response = Initialize-GetPublicIdentitiesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPublicIdentitiesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

