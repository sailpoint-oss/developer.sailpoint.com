# EntitlementRecommendationAssignee

# EntitlementRecommendationAssignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP",    "SOURCE_OWNER",    "ENTITLEMENT_OWNER" ] | The type of assignee. | [required]
**Value** | **String** | The ID of the identity or governance group to assign to. | [required]

## Examples

- Prepare the resource
```powershell
$EntitlementRecommendationAssignee = Initialize-EntitlementRecommendationAssignee  -Type IDENTITY `
 -Value 2c91808a7f3b2e8a017f3c3e5f6d0099
```

- Convert the resource to JSON
```powershell
$EntitlementRecommendationAssignee | ConvertTo-JSON
```


[[Back to top]](#) 

