---
id: privilegecriteriadto
title: Privilegecriteriadto
pagination_label: Privilegecriteriadto
sidebar_label: Privilegecriteriadto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Privilegecriteriadto', 'Privilegecriteriadto'] 
slug: /tools/sdk/python/privilege-criteria/models/privilegecriteriadto
tags: ['SDK', 'Software Development Kit', 'Privilegecriteriadto', 'Privilegecriteriadto']
---

# Privilegecriteriadto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Id of the criteria. | [optional] 
**source_id** | **str** | The Id of the source that the criteria is applied to. | [optional] 
**type** |  **Enum** [  'CUSTOM',    'CONNECTOR',    'SINGLE_LEVEL' ] | The type of criteria. | [optional] 
**operator** |  **Enum** [  'AND',    'OR' ] | The logical operator to apply between groups. | [optional] 
**groups** | [**[]PrivilegecriteriadtoGroupsInner**](privilegecriteriadto-groups-inner) |  | [optional] 
**privilege_level** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The privilege level assigned by this criteria. | [optional] 
}

## Example

```python
from sailpoint.privilege_criteria.models.privilegecriteriadto import Privilegecriteriadto

privilegecriteriadto = Privilegecriteriadto(
id='2c9180867817ac4d017817c491119a20',
source_id='c42c45d8d7c04d2da64d215cd8c32f21',
type='CUSTOM',
operator='AND',
groups=[
                    sailpoint.privilege_criteria.models.privilegecriteriadto_groups_inner.privilegecriteriadto_groups_inner(
                        operator = 'AND', 
                        criteria_items = [
                            sailpoint.privilege_criteria.models.privilegecriteriadto_groups_inner_criteria_items_inner.privilegecriteriadto_groups_inner_criteriaItems_inner(
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

