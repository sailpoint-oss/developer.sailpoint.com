# EntitlementRecommendationAssigneeOneOf

# EntitlementRecommendationAssigneeOneOf

Assign to a specific identity or governance group. The value field is required and must be the ID of the identity or governance group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The type of assignee. | [required]
**value** | **str** | The ID of the identity or governance group to assign to. | [required]
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_assignee_one_of import EntitlementRecommendationAssigneeOneOf

entitlement_recommendation_assignee_one_of = EntitlementRecommendationAssigneeOneOf(
type='IDENTITY',
value='2c91808a7f3b2e8a017f3c3e5f6d0099'
)

```
[[Back to top]](#) 

