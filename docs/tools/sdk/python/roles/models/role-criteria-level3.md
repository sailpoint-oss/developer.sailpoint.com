# RoleCriteriaLevel3

# RoleCriteriaLevel3

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **RoleCriteriaOperation** |  | [optional] 
**key** | [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
\}

## Example

```python
from sailpoint.roles.models.role_criteria_level3 import RoleCriteriaLevel3

role_criteria_level3 = RoleCriteriaLevel3(
operation='EQUALS',
key=sailpoint.roles.models.role_criteria_key.RoleCriteriaKey(
                    type = 'ACCOUNT', 
                    property = 'attribute.email', 
                    source_id = '2c9180867427f3a301745aec18211519', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com'
)

```
[[Back to top]](#) 

