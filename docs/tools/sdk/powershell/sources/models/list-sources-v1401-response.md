# ListSourcesV1401Response

# ListSourcesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSourcesV1401Response = Initialize-ListSourcesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListSourcesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

