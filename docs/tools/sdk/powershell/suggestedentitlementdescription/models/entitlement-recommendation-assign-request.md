# EntitlementRecommendationAssignRequest

# EntitlementRecommendationAssignRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]String** | The list of recommendation record IDs to assign. | [required]
**Assignee** | [**EntitlementRecommendationAssignee**](entitlement-recommendation-assignee) |  | [required]

## Examples

- Prepare the resource
```powershell
$EntitlementRecommendationAssignRequest = Initialize-EntitlementRecommendationAssignRequest  -Items ["79db50d4-723c-4aa0-a824-83c2205d82d1","a1b2c3d4-e5f6-7890-abcd-ef1234567890"] `
 -Assignee null
```

- Convert the resource to JSON
```powershell
$EntitlementRecommendationAssignRequest | ConvertTo-JSON
```


[[Back to top]](#) 

