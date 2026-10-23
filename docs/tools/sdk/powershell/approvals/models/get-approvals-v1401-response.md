# GetApprovalsV1401Response

# GetApprovalsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetApprovalsV1401Response = Initialize-GetApprovalsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetApprovalsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

