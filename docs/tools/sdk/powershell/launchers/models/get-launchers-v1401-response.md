# GetLaunchersV1401Response

# GetLaunchersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetLaunchersV1401Response = Initialize-GetLaunchersV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetLaunchersV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

