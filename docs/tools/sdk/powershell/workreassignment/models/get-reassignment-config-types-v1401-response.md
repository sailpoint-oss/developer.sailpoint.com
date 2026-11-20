# GetReassignmentConfigTypesV1401Response

# GetReassignmentConfigTypesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetReassignmentConfigTypesV1401Response = Initialize-GetReassignmentConfigTypesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetReassignmentConfigTypesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

