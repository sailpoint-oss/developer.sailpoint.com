---
id: createprivilegecriteriarequest-groups-inner-criteria-items-inner
title: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
pagination_label: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
sidebar_label: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner'] 
slug: /tools/sdk/python/privilege-criteria/models/createprivilegecriteriarequest-groups-inner-criteria-items-inner
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner']
---

# CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** |  **Enum** [  'group' ] | The target type of the criteria item. | [optional] 
**operator** |  **Enum** [  'displayName',    'description',    'value' ] |  | [optional] 
**values** | **[]str** | The values to evaluate the property against. | [optional] 
**ignore_case** | **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to False]
}

## Example

```python
from sailpoint.privilege_criteria.models.createprivilegecriteriarequest_groups_inner_criteria_items_inner import CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner

createprivilegecriteriarequest_groups_inner_criteria_items_inner = CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner(
target_type='group',
operator='displayName',
values=["admin","superuser"],
ignore_case=True
)

```
[[Back to top]](#) 

