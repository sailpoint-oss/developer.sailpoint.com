# GetManagedClustersV1401Response

# GetManagedClustersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClustersV1401Response = Initialize-GetManagedClustersV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetManagedClustersV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

