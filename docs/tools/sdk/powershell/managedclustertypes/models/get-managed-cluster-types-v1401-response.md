# GetManagedClusterTypesV1401Response

# GetManagedClusterTypesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClusterTypesV1401Response = Initialize-GetManagedClusterTypesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetManagedClusterTypesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

