# CreatePrivilegeCriteriaRequest

# CreatePrivilegeCriteriaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The Id of the source that the criteria is applied to. | [optional] 
**type** |  **Enum** [  'CUSTOM' ] | The type of criteria being created. Expects \"CUSTOM\". | [optional] 
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between groups. | [optional] 
**groups** | [**[]CreatePrivilegeCriteriaRequestGroupsInner**](create-privilege-criteria-request-groups-inner) |  | [optional] 
**privilege_level** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The privilege level assigned by this criteria. | [optional] 
\}

## Example

```python
from sailpoint.privilege_criteria.models.create_privilege_criteria_request import CreatePrivilegeCriteriaRequest

create_privilege_criteria_request = CreatePrivilegeCriteriaRequest(
source_id='c42c45d8d7c04d2da64d215cd8c32f21',
type='CUSTOM',
operator='AND',
groups=[
                    sailpoint.privilege_criteria.models.create_privilege_criteria_request_groups_inner.CreatePrivilegeCriteriaRequest_groups_inner(
                        operator = 'AND', 
                        criteria_items = [
                            sailpoint.privilege_criteria.models.create_privilege_criteria_request_groups_inner_criteria_items_inner.CreatePrivilegeCriteriaRequest_groups_inner_criteriaItems_inner(
                                target_type = 'group', 
                                operator = 'displayName', 
                                values = ["admin","superuser"], 
                                ignore_case = True, )
                            ], )
                    ],
privilege_level='HIGH'
)

```
[[Back to top]](#) 

