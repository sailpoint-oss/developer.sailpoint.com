# AccessRecommendationMessage

# AccessRecommendationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** | **String** | Information about why the access item was recommended. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRecommendationMessage = Initialize-AccessRecommendationMessage  -Interpretation 95% of your peers have this access.
```

- Convert the resource to JSON
```powershell
$AccessRecommendationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

