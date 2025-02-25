---
id: v2024-entitlement1-owner
title: Entitlement1Owner
pagination_label: Entitlement1Owner
sidebar_label: Entitlement1Owner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlement1Owner', 'V2024Entitlement1Owner'] 
slug: /tools/sdk/python/v2024/models/entitlement1-owner
tags: ['SDK', 'Software Development Kit', 'Entitlement1Owner', 'V2024Entitlement1Owner']
---

# Entitlement1Owner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The owner id for the entitlement | [optional] 
**name** | **str** | The owner name for the entitlement | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement1_owner import Entitlement1Owner

entitlement1_owner = Entitlement1Owner(
id='2a2fdacca5e345f18bf7970cfbb8fec2',
name='identity 1',
type='IDENTITY'
)

```
[[Back to top]](#) 

