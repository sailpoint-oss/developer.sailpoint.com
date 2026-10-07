# ViolationPrediction

# ViolationPrediction

An object containing a listing of the SOD violation reasons detected by this check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violation_contexts** | [**[]ViolationContext**](violation-context) | List of Violation Contexts | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.violation_prediction import ViolationPrediction

violation_prediction = ViolationPrediction(
violation_contexts=[
                    sailpoint.sod_violations.models.violation_context.ViolationContext(
                        policy = sailpoint.sod_violations.models.violation_context_policy.ViolationContext_policy(
                            type = 'ENTITLEMENT', ), 
                        conflicting_access_criteria = sailpoint.sod_violations.models.exception_access_criteria.ExceptionAccessCriteria(
                            left_criteria = sailpoint.sod_violations.models.exception_criteria.ExceptionCriteria(
                                criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ), 
                            right_criteria = sailpoint.sod_violations.models.exception_criteria.ExceptionCriteria(
                                criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ), ), )
                    ]
)

```
[[Back to top]](#) 

