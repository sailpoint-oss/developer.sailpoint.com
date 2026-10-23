# Criteria

# Criteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_type** | **CriteriaType** |  | [required]
**operation** | **Operation** |  | [required]
**criteria_property** | **str** | The specified key from the Type of criteria. | [optional] 
**criteria_value** | **str** | The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN. | [optional] 
**criteria_values** | **[]str** | List of values for the IN operation. Required when operation is IN; must be absent for all other operations. | [optional] 
**children** | [**[]Criteria**](criteria) | List of child criteria. Applicable only for COMPOSITE criteriaType | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.criteria import Criteria

criteria = Criteria(
criteria_type='IDENTITY_ATTRIBUTE',
operation='EQUALS',
criteria_property='displayName',
criteria_value='Allie',
criteria_values=["8a32c3d5f2864555948e63867c377ca2","9b41d4e6g3975666059f74978d488db3"],
children=[{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}]
)

```
[[Back to top]](#) 

