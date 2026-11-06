# BulkApproveEntitlementRecommendationResult

# BulkApproveEntitlementRecommendationResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the processed recommendation record. | [optional] 
**Status** |  **Enum** [  "SUCCESS",    "FAILURE" ] | The outcome of the approval for this item. | [optional] 
**FailedReason** | **String** | The reason for failure if status is FAILURE; null on success. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkApproveEntitlementRecommendationResult = Initialize-BulkApproveEntitlementRecommendationResult  -Id 79db50d4-723c-4aa0-a824-83c2205d82d1 `
 -Status SUCCESS `
 -FailedReason null
```

- Convert the resource to JSON
```powershell
$BulkApproveEntitlementRecommendationResult | ConvertTo-JSON
```


[[Back to top]](#) 

