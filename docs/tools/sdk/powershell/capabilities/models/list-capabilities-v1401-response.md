# ListCapabilitiesV1401Response

# ListCapabilitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCapabilitiesV1401Response = Initialize-ListCapabilitiesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListCapabilitiesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

