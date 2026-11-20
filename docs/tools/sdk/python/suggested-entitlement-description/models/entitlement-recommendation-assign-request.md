# EntitlementRecommendationAssignRequest

# EntitlementRecommendationAssignRequest

Request body for assigning a set of entitlement recommendations to a reviewer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **[]str** | The list of recommendation record IDs to assign. | [required]
**assignee** | [**EntitlementRecommendationAssignee**](entitlement-recommendation-assignee) |  | [required]
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_assign_request import EntitlementRecommendationAssignRequest

entitlement_recommendation_assign_request = EntitlementRecommendationAssignRequest(
items=["79db50d4-723c-4aa0-a824-83c2205d82d1","a1b2c3d4-e5f6-7890-abcd-ef1234567890"],
assignee=
)

```
[[Back to top]](#) 

