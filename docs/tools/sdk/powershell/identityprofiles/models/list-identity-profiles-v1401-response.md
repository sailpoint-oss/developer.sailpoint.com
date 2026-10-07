# ListIdentityProfilesV1401Response

# ListIdentityProfilesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListIdentityProfilesV1401Response = Initialize-ListIdentityProfilesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListIdentityProfilesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

