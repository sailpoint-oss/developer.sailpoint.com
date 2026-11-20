# GetManagedClientsV1401Response

# GetManagedClientsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClientsV1401Response = Initialize-GetManagedClientsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetManagedClientsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

