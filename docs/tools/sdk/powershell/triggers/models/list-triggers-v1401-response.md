# ListTriggersV1401Response

# ListTriggersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTriggersV1401Response = Initialize-ListTriggersV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTriggersV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

