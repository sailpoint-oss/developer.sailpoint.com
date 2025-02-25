---
id: v2024-base-entitlement
title: BaseEntitlement
pagination_label: BaseEntitlement
sidebar_label: BaseEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseEntitlement', 'V2024BaseEntitlement'] 
slug: /tools/sdk/python/v2024/models/base-entitlement
tags: ['SDK', 'Software Development Kit', 'BaseEntitlement', 'V2024BaseEntitlement']
---

# BaseEntitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_permissions** | **bool** | Indicates whether the entitlement has permissions. | [optional] [default to False]
**description** | **str** | Entitlement's description. | [optional] 
**attribute** | **str** | Entitlement attribute's name. | [optional] 
**value** | **str** | Entitlement's value. | [optional] 
**var_schema** | **str** | Entitlement's schema. | [optional] 
**privileged** | **bool** | Indicates whether the entitlement is privileged. | [optional] [default to False]
**id** | **str** | Entitlement's ID. | [optional] 
**name** | **str** | Entitlement's name. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.base_entitlement import BaseEntitlement

base_entitlement = BaseEntitlement(
has_permissions=False,
description='Cloud engineering',
attribute='memberOf',
value='CN=Cloud Engineering,DC=sailpoint,DC=COM',
var_schema='group',
privileged=False,
id='2c918084575812550157589064f33b89',
name='CN=Cloud Engineering,DC=sailpoint,DC=COM'
)

```
[[Back to top]](#) 

