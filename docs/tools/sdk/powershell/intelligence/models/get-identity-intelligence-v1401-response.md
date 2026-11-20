# GetIdentityIntelligenceV1401Response

# GetIdentityIntelligenceV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetIdentityIntelligenceV1401Response = Initialize-GetIdentityIntelligenceV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetIdentityIntelligenceV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

