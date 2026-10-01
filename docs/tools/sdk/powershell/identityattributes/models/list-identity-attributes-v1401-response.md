# ListIdentityAttributesV1401Response

# ListIdentityAttributesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListIdentityAttributesV1401Response = Initialize-ListIdentityAttributesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListIdentityAttributesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

