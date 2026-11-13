# ListUserLevelsV1401Response

# ListUserLevelsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListUserLevelsV1401Response = Initialize-ListUserLevelsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListUserLevelsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

