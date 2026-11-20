# SodPolicyConflictingAccessCriteria

# SodPolicyConflictingAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**right_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.sod_policy_conflicting_access_criteria import SodPolicyConflictingAccessCriteria

sod_policy_conflicting_access_criteria = SodPolicyConflictingAccessCriteria(
left_criteria=sailpoint.sod_policies.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}], ),
right_criteria=sailpoint.sod_policies.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}], )
)

```
[[Back to top]](#) 

