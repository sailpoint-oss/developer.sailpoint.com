# SodViolationContext

# SodViolationContext

The contextual information of the violated criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**SodPolicyDto**](sod-policy-dto) |  | [optional] 
**conflicting_access_criteria** | [**SodViolationContextConflictingAccessCriteria**](sod-violation-context-conflicting-access-criteria) |  | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.sod_violation_context import SodViolationContext

sod_violation_context = SodViolationContext(
policy=sailpoint.access_requests.models.sod_policy_dto.Sod Policy Dto(
                    type = 'SOD_POLICY', 
                    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                    name = 'Business SOD Policy', ),
conflicting_access_criteria=sailpoint.access_requests.models.sod_violation_context_conflicting_access_criteria.SodViolationContext_conflictingAccessCriteria(
                    left_criteria = sailpoint.access_requests.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                        criteria_list = [
                            sailpoint.access_requests.models.sod_exempt_criteria.Sod Exempt Criteria(
                                existing = True, 
                                type = 'IDENTITY', 
                                id = '2c918085771e9d3301773b3cb66f6398', 
                                name = 'My HR Entitlement', )
                            ], ), 
                    right_criteria = sailpoint.access_requests.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(), )
)

```
[[Back to top]](#) 

