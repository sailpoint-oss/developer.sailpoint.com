# GetRecommendationsV1401Response

# GetRecommendationsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetRecommendationsV1401Response = Initialize-GetRecommendationsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetRecommendationsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

