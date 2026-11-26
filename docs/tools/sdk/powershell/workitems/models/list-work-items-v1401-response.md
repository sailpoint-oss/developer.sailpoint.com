# ListWorkItemsV1401Response

# ListWorkItemsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkItemsV1401Response = Initialize-ListWorkItemsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListWorkItemsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

