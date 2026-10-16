# GetTaskStatusV1401Response

# GetTaskStatusV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTaskStatusV1401Response = Initialize-GetTaskStatusV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTaskStatusV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

