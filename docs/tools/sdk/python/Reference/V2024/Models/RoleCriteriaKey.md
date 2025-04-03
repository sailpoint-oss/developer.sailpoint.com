---
id: v2024-role-criteria-key
title: RoleCriteriaKey
pagination_label: RoleCriteriaKey
sidebar_label: RoleCriteriaKey
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleCriteriaKey', 'V2024RoleCriteriaKey'] 
slug: /tools/sdk/python/v2024/models/role-criteria-key
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaKey', 'V2024RoleCriteriaKey']
---

# RoleCriteriaKey

Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RoleCriteriaKeyType**](role-criteria-key-type) |  | [required]
**var_property** | **str** | The name of the attribute or entitlement to which the associated criteria applies. | [required]
**source_id** | **str** | ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_criteria_key import RoleCriteriaKey

role_criteria_key = RoleCriteriaKey(
type='ACCOUNT',
var_property='attribute.email',
source_id='2c9180867427f3a301745aec18211519'
)

```
[[Back to top]](#) 

