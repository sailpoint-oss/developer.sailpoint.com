# GetObjectMappingsV1401Response

# GetObjectMappingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetObjectMappingsV1401Response = Initialize-GetObjectMappingsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetObjectMappingsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

