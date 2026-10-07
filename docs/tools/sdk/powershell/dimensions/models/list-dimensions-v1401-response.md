# ListDimensionsV1401Response

# ListDimensionsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDimensionsV1401Response = Initialize-ListDimensionsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListDimensionsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

