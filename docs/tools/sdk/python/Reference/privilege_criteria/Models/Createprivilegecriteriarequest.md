---
id: createprivilegecriteriarequest
title: Createprivilegecriteriarequest
pagination_label: Createprivilegecriteriarequest
sidebar_label: Createprivilegecriteriarequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Createprivilegecriteriarequest', 'Createprivilegecriteriarequest'] 
slug: /tools/sdk/python/privilege-criteria/models/createprivilegecriteriarequest
tags: ['SDK', 'Software Development Kit', 'Createprivilegecriteriarequest', 'Createprivilegecriteriarequest']
---

# Createprivilegecriteriarequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The Id of the source that the criteria is applied to. | [optional] 
**type** |  **Enum** [  'CUSTOM' ] | The type of criteria being created. Expects \"CUSTOM\". | [optional] 
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between groups. | [optional] 
**groups** | [**[]CreateprivilegecriteriarequestGroupsInner**](createprivilegecriteriarequest-groups-inner) |  | [optional] 
**privilege_level** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The privilege level assigned by this criteria. | [optional] 
}

## Example

```python
from sailpoint.privilege_criteria.models.createprivilegecriteriarequest import Createprivilegecriteriarequest

createprivilegecriteriarequest = Createprivilegecriteriarequest(
source_id='c42c45d8d7c04d2da64d215cd8c32f21',
type='CUSTOM',
operator='AND',
groups=[
                    sailpoint.privilege_criteria.models.createprivilegecriteriarequest_groups_inner.createprivilegecriteriarequest_groups_inner(
                        operator = 'AND', 
                        criteria_items = [
                            sailpoint.privilege_criteria.models.createprivilegecriteriarequest_groups_inner_criteria_items_inner.createprivilegecriteriarequest_groups_inner_criteriaItems_inner(
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

