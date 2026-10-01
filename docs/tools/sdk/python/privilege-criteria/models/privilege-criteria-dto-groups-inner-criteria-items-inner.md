# PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner

# PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** |  **Enum** [  'group' ] | The target type for the criteria item. | [optional] 
**operator** |  **Enum** [  'IN',    'EQUALS',    'NOT_EQUALS',    'CONTAINS',    'DOES_NOT_CONTAIN',    'STARTS_WITH',    'ENDS_WITH' ] | The operator to apply to the property and values. | [optional] 
**var_property** |  **Enum** [  'displayName',    'description',    'value' ] |  | [optional] 
**values** | **[]str** | The values to evaluate the property against. | [optional] 
**ignore_case** | **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to False]
\}

## Example

```python
from sailpoint.privilege_criteria.models.privilege_criteria_dto_groups_inner_criteria_items_inner import PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner

privilege_criteria_dto_groups_inner_criteria_items_inner = PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner(
target_type='group',
operator='IN',
var_property='displayName',
values=["admin","superuser"],
ignore_case=True
)

```
[[Back to top]](#) 

