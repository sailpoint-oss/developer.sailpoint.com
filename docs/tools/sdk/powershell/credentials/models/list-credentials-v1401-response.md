# ListCredentialsV1401Response

# ListCredentialsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCredentialsV1401Response = Initialize-ListCredentialsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListCredentialsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

