# CreatePrivilegeCriteriaRequestGroupsInner

# CreatePrivilegeCriteriaRequestGroupsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between criteria items in the group. | [optional] 
**criteria_items** | [**[]CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner**](create-privilege-criteria-request-groups-inner-criteria-items-inner) |  | [optional] 
\}

## Example

```python
from sailpoint.privilege_criteria.models.create_privilege_criteria_request_groups_inner import CreatePrivilegeCriteriaRequestGroupsInner

create_privilege_criteria_request_groups_inner = CreatePrivilegeCriteriaRequestGroupsInner(
operator='AND',
criteria_items=[
                    sailpoint.privilege_criteria.models.create_privilege_criteria_request_groups_inner_criteria_items_inner.CreatePrivilegeCriteriaRequest_groups_inner_criteriaItems_inner(
                        target_type = 'group', 
                        operator = 'displayName', 
                        values = ["admin","superuser"], 
                        ignore_case = True, )
                    ]
)

```
[[Back to top]](#) 

