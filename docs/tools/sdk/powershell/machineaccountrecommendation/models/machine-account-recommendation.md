# MachineAccountRecommendation

# MachineAccountRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Recommendation ID. | [optional] 
**AccountId** | **String** | ID of the account the recommendation is for. | [optional] 
**SourceId** | **String** | ID of the source the account belongs to. | [optional] 
**IsMachine** | **Boolean** | Indicates whether the account is recommended as a machine account. | [optional] [default to $false]
**Explanation** | [**[]MachineAccountRecommendationExplanation**](machine-account-recommendation-explanation) | Reasons that contributed to the recommendation. | [optional] 
**Created** | **System.DateTime** | Date and time when the recommendation was created. | [optional] 
**Recommendation** | **String** | Recommendation result. | [optional] 
**RecommendationType** | **String** | Type of recommendation. | [optional] 
**Algorithm** | **String** | Algorithm that produced the recommendation. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountRecommendation = Initialize-MachineAccountRecommendation  -Id 2c9180835d2e5168015d32f890ca1581 `
 -AccountId 2c9180835d2e5168015d32f890ca1581 `
 -SourceId 2c9180835d2e5168015d32f890ca1581 `
 -IsMachine true `
 -Explanation null `
 -Created 2026-01-15T10:00Z `
 -Recommendation MACHINE `
 -RecommendationType MACHINE_ACCOUNT_DISCOVERY `
 -Algorithm v1
```

- Convert the resource to JSON
```powershell
$MachineAccountRecommendation | ConvertTo-JSON
```


[[Back to top]](#) 

