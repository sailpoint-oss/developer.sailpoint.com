# ViolationContext

# ViolationContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**ViolationContextPolicy**](violation-context-policy) |  | [optional] 
**conflicting_access_criteria** | [**ExceptionAccessCriteria**](exception-access-criteria) |  | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.violation_context import ViolationContext

violation_context = ViolationContext(
policy=sailpoint.sod_violations.models.violation_context_policy.ViolationContext_policy(
                    type = 'ENTITLEMENT', ),
conflicting_access_criteria=sailpoint.sod_violations.models.exception_access_criteria.ExceptionAccessCriteria(
                    left_criteria = sailpoint.sod_violations.models.exception_criteria.ExceptionCriteria(
                        criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ), 
                    right_criteria = sailpoint.sod_violations.models.exception_criteria.ExceptionCriteria(
                        criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ), )
)

```
[[Back to top]](#) 

