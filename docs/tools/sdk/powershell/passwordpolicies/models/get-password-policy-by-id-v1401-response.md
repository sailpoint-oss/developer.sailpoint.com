# GetPasswordPolicyByIdV1401Response

# GetPasswordPolicyByIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordPolicyByIdV1401Response = Initialize-GetPasswordPolicyByIdV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPasswordPolicyByIdV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

