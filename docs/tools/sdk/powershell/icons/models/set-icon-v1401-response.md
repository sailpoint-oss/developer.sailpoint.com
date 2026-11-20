# SetIconV1401Response

# SetIconV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SetIconV1401Response = Initialize-SetIconV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$SetIconV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

