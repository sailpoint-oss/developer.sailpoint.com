# ListAccountsV1401Response

# ListAccountsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccountsV1401Response = Initialize-ListAccountsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccountsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

