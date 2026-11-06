# ListDevicesV1401Response

# ListDevicesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDevicesV1401Response = Initialize-ListDevicesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListDevicesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

