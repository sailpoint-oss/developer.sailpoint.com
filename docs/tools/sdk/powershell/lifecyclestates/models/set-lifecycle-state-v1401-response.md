# SetLifecycleStateV1401Response

# SetLifecycleStateV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateV1401Response = Initialize-SetLifecycleStateV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

