# ListRequestableObjectsV1401Response

# ListRequestableObjectsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListRequestableObjectsV1401Response = Initialize-ListRequestableObjectsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListRequestableObjectsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

