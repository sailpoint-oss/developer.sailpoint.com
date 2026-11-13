# ListTagsV1401Response

# ListTagsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTagsV1401Response = Initialize-ListTagsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTagsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

