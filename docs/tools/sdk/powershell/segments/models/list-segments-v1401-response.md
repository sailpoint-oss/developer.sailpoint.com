# ListSegmentsV1401Response

# ListSegmentsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSegmentsV1401Response = Initialize-ListSegmentsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListSegmentsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

