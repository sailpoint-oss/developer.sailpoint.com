# CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

# CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** |  **Enum** [  'group' ] | The target type of the criteria item. | [optional] 
**operator** |  **Enum** [  'displayName',    'description',    'value' ] |  | [optional] 
**values** | **[]str** | The values to evaluate the property against. | [optional] 
**ignore_case** | **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to False]
\}

## Example

```python
from sailpoint.privilege_criteria.models.create_privilege_criteria_request_groups_inner_criteria_items_inner import CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

create_privilege_criteria_request_groups_inner_criteria_items_inner = CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner(
target_type='group',
operator='displayName',
values=["admin","superuser"],
ignore_case=True
)

```
[[Back to top]](#) 

