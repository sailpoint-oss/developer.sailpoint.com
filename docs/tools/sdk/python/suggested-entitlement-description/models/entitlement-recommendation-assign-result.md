# EntitlementRecommendationAssignResult

# EntitlementRecommendationAssignResult

Response body returned when entitlement recommendations are successfully queued for assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **str** | The unique identifier of the assignment batch created by this request. | [optional] 
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_assign_result import EntitlementRecommendationAssignResult

entitlement_recommendation_assign_result = EntitlementRecommendationAssignResult(
batch_id='770e8400-e29b-41d4-a716-446655440099'
)

```
[[Back to top]](#) 

