---
id: privilegecriteriadto-groups-inner-criteria-items-inner
title: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
pagination_label: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
sidebar_label: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner'] 
slug: /tools/sdk/python/privilege-criteria/models/privilegecriteriadto-groups-inner-criteria-items-inner
tags: ['SDK', 'Software Development Kit', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner']
---

# PrivilegecriteriadtoGroupsInnerCriteriaItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** |  **Enum** [  'group' ] | The target type for the criteria item. | [optional] 
**operator** |  **Enum** [  'IN',    'EQUALS',    'NOT_EQUALS',    'CONTAINS',    'DOES_NOT_CONTAIN',    'STARTS_WITH',    'ENDS_WITH' ] | The operator to apply to the property and values. | [optional] 
**var_property** |  **Enum** [  'displayName',    'description',    'value' ] |  | [optional] 
**values** | **[]str** | The values to evaluate the property against. | [optional] 
**ignore_case** | **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to False]
}

## Example

```python
from sailpoint.privilege_criteria.models.privilegecriteriadto_groups_inner_criteria_items_inner import PrivilegecriteriadtoGroupsInnerCriteriaItemsInner

privilegecriteriadto_groups_inner_criteria_items_inner = PrivilegecriteriadtoGroupsInnerCriteriaItemsInner(
target_type='group',
operator='IN',
var_property='displayName',
values=["admin","superuser"],
ignore_case=True
)

```
[[Back to top]](#) 

