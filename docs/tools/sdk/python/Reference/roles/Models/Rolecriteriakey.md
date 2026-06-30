---
id: rolecriteriakey
title: Rolecriteriakey
pagination_label: Rolecriteriakey
sidebar_label: Rolecriteriakey
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolecriteriakey', 'Rolecriteriakey'] 
slug: /tools/sdk/python/roles/models/rolecriteriakey
tags: ['SDK', 'Software Development Kit', 'Rolecriteriakey', 'Rolecriteriakey']
---

# Rolecriteriakey

Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Rolecriteriakeytype**](rolecriteriakeytype) |  | [required]
**var_property** | **str** | The name of the attribute or entitlement to which the associated criteria applies. | [required]
**source_id** | **str** | ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT | [optional] 
}

## Example

```python
from sailpoint.roles.models.rolecriteriakey import Rolecriteriakey

rolecriteriakey = Rolecriteriakey(
type='ACCOUNT',
var_property='attribute.email',
source_id='2c9180867427f3a301745aec18211519'
)

```
[[Back to top]](#) 

