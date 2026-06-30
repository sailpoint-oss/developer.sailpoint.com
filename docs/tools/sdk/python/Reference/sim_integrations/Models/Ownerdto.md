---
id: ownerdto
title: Ownerdto
pagination_label: Ownerdto
sidebar_label: Ownerdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Ownerdto', 'Ownerdto'] 
slug: /tools/sdk/python/sim-integrations/models/ownerdto
tags: ['SDK', 'Software Development Kit', 'Ownerdto', 'Ownerdto']
---

# Ownerdto

Owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner's DTO type. | [optional] 
**id** | **str** | Owner's identity ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
}

## Example

```python
from sailpoint.sim_integrations.models.ownerdto import Ownerdto

ownerdto = Ownerdto(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 

