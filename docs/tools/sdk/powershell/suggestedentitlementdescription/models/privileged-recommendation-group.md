# PrivilegedRecommendationGroup

# PrivilegedRecommendationGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementName** | **String** | The name of the entitlement shared across all instances in this group. | [optional] 
**ConnectorType** | **String** | The connector type associated with all instances in this group. | [optional] 
**RecommendationScore** | **String** | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [optional] 
**OrgCount** | **Int32** | The number of organizations in which this entitlement appears as privileged. | [optional] 
**InstanceCount** | **Int32** | The total number of individual entitlement instances in this group. | [optional] 
**Instances** | [**[]PrivilegedRecommendationInstance**](privileged-recommendation-instance) | The individual entitlement instances belonging to this group. | [optional] 

## Examples

- Prepare the resource
```powershell
$PrivilegedRecommendationGroup = Initialize-PrivilegedRecommendationGroup  -EntitlementName Domain Admins `
 -ConnectorType Active Directory - Direct `
 -RecommendationScore .85 `
 -OrgCount 8 `
 -InstanceCount 2 `
 -Instances null
```

- Convert the resource to JSON
```powershell
$PrivilegedRecommendationGroup | ConvertTo-JSON
```


[[Back to top]](#) 

