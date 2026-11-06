# GetConnectorV1401Response

# GetConnectorV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetConnectorV1401Response = Initialize-GetConnectorV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetConnectorV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

