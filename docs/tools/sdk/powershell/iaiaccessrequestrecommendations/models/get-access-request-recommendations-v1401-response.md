# GetAccessRequestRecommendationsV1401Response

# GetAccessRequestRecommendationsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccessRequestRecommendationsV1401Response = Initialize-GetAccessRequestRecommendationsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAccessRequestRecommendationsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

