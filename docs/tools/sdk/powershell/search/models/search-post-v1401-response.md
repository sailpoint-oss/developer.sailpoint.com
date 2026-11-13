# SearchPostV1401Response

# SearchPostV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchPostV1401Response = Initialize-SearchPostV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$SearchPostV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

