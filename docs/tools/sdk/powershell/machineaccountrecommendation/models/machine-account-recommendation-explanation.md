# MachineAccountRecommendationExplanation

# MachineAccountRecommendationExplanation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Feature** | **String** | Account feature that contributed to the recommendation. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountRecommendationExplanation = Initialize-MachineAccountRecommendationExplanation  -Feature high-privilege-grant
```

- Convert the resource to JSON
```powershell
$MachineAccountRecommendationExplanation | ConvertTo-JSON
```


[[Back to top]](#) 

