---
id: createprivilegecriteriarequest-groups-inner
title: CreateprivilegecriteriarequestGroupsInner
pagination_label: CreateprivilegecriteriarequestGroupsInner
sidebar_label: CreateprivilegecriteriarequestGroupsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateprivilegecriteriarequestGroupsInner', 'CreateprivilegecriteriarequestGroupsInner'] 
slug: /tools/sdk/python/privilege-criteria/models/createprivilegecriteriarequest-groups-inner
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestGroupsInner', 'CreateprivilegecriteriarequestGroupsInner']
---

# CreateprivilegecriteriarequestGroupsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between criteria items in the group. | [optional] 
**criteria_items** | [**[]CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner**](createprivilegecriteriarequest-groups-inner-criteria-items-inner) |  | [optional] 
}

## Example

```python
from sailpoint.privilege_criteria.models.createprivilegecriteriarequest_groups_inner import CreateprivilegecriteriarequestGroupsInner

createprivilegecriteriarequest_groups_inner = CreateprivilegecriteriarequestGroupsInner(
operator='AND',
criteria_items=[
                    sailpoint.privilege_criteria.models.createprivilegecriteriarequest_groups_inner_criteria_items_inner.createprivilegecriteriarequest_groups_inner_criteriaItems_inner(
                        target_type = 'group', 
                        operator = 'displayName', 
                        values = ["admin","superuser"], 
                        ignore_case = True, )
                    ]
)

```
[[Back to top]](#) 

