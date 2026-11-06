# CreateMachineAccountRequestV1401Response

# CreateMachineAccountRequestV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateMachineAccountRequestV1401Response = Initialize-CreateMachineAccountRequestV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$CreateMachineAccountRequestV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

