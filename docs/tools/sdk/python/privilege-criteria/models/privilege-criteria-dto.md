# PrivilegeCriteriaDTO

# PrivilegeCriteriaDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Id of the criteria. | [optional] 
**source_id** | **str** | The Id of the source that the criteria is applied to. | [optional] 
**type** |  **Enum** [  'CUSTOM',    'CONNECTOR',    'SINGLE_LEVEL' ] | The type of criteria. | [optional] 
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between groups. | [optional] 
**groups** | [**[]PrivilegeCriteriaDTOGroupsInner**](privilege-criteria-dto-groups-inner) |  | [optional] 
**privilege_level** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The privilege level assigned by this criteria. | [optional] 
\}

## Example

```python
from sailpoint.privilege_criteria.models.privilege_criteria_dto import PrivilegeCriteriaDTO

privilege_criteria_dto = PrivilegeCriteriaDTO(
id='2c9180867817ac4d017817c491119a20',
source_id='c42c45d8d7c04d2da64d215cd8c32f21',
type='CUSTOM',
operator='AND',
groups=[
                    sailpoint.privilege_criteria.models.privilege_criteria_dto_groups_inner.PrivilegeCriteriaDTO_groups_inner(
                        operator = 'AND', 
                        criteria_items = [
                            sailpoint.privilege_criteria.models.privilege_criteria_dto_groups_inner_criteria_items_inner.PrivilegeCriteriaDTO_groups_inner_criteriaItems_inner(
                                target_type = 'group', 
                                operator = 'IN', 
                                property = 'displayName', 
                                values = ["admin","superuser"], 
                                ignore_case = True, )
                            ], )
                    ],
privilege_level='HIGH'
)

```
[[Back to top]](#) 

