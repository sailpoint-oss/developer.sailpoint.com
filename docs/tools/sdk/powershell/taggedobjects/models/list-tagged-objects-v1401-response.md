# ListTaggedObjectsV1401Response

# ListTaggedObjectsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTaggedObjectsV1401Response = Initialize-ListTaggedObjectsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTaggedObjectsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

