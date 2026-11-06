# GetMFAOktaConfigV1401Response

# GetMFAOktaConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetMFAOktaConfigV1401Response = Initialize-GetMFAOktaConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetMFAOktaConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

