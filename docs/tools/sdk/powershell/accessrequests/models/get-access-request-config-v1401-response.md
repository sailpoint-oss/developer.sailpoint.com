# GetAccessRequestConfigV1401Response

# GetAccessRequestConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccessRequestConfigV1401Response = Initialize-GetAccessRequestConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAccessRequestConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

