# GetIdentityDecisionSummaryV1401Response

# GetIdentityDecisionSummaryV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetIdentityDecisionSummaryV1401Response = Initialize-GetIdentityDecisionSummaryV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetIdentityDecisionSummaryV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

