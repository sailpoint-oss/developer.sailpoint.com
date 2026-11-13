# ListMachineAccountsV1401Response

# ListMachineAccountsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListMachineAccountsV1401Response = Initialize-ListMachineAccountsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListMachineAccountsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

