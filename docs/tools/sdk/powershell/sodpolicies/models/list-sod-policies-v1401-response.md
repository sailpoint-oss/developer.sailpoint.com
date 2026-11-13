# ListSodPoliciesV1401Response

# ListSodPoliciesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSodPoliciesV1401Response = Initialize-ListSodPoliciesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListSodPoliciesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

