# ListAccessProfilesV1401Response

# ListAccessProfilesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessProfilesV1401Response = Initialize-ListAccessProfilesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccessProfilesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

