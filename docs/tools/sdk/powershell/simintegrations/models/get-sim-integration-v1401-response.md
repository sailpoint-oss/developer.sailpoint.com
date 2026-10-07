# GetSIMIntegrationV1401Response

# GetSIMIntegrationV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSIMIntegrationV1401Response = Initialize-GetSIMIntegrationV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetSIMIntegrationV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

