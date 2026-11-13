# GetUsagesByAccountIdV1401Response

# GetUsagesByAccountIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetUsagesByAccountIdV1401Response = Initialize-GetUsagesByAccountIdV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetUsagesByAccountIdV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

