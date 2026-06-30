---
id: privilegecriteriadto-groups-inner
title: PrivilegecriteriadtoGroupsInner
pagination_label: PrivilegecriteriadtoGroupsInner
sidebar_label: PrivilegecriteriadtoGroupsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PrivilegecriteriadtoGroupsInner', 'PrivilegecriteriadtoGroupsInner'] 
slug: /tools/sdk/python/privilege-criteria/models/privilegecriteriadto-groups-inner
tags: ['SDK', 'Software Development Kit', 'PrivilegecriteriadtoGroupsInner', 'PrivilegecriteriadtoGroupsInner']
---

# PrivilegecriteriadtoGroupsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between criteria items in the group. | [optional] 
**criteria_items** | [**[]PrivilegecriteriadtoGroupsInnerCriteriaItemsInner**](privilegecriteriadto-groups-inner-criteria-items-inner) |  | [optional] 
}

## Example

```python
from sailpoint.privilege_criteria.models.privilegecriteriadto_groups_inner import PrivilegecriteriadtoGroupsInner

privilegecriteriadto_groups_inner = PrivilegecriteriadtoGroupsInner(
operator='AND',
criteria_items=[
                    sailpoint.privilege_criteria.models.privilegecriteriadto_groups_inner_criteria_items_inner.privilegecriteriadto_groups_inner_criteriaItems_inner(
                        target_type = 'group', 
                        operator = 'IN', 
                        property = 'displayName', 
                        values = ["admin","superuser"], 
                        ignore_case = True, )
                    ]
)

```
[[Back to top]](#) 

