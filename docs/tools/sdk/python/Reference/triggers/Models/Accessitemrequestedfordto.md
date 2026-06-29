---
id: accessitemrequestedfordto
title: Accessitemrequestedfordto
pagination_label: Accessitemrequestedfordto
sidebar_label: Accessitemrequestedfordto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemrequestedfordto', 'Accessitemrequestedfordto'] 
slug: /tools/sdk/python/triggers/models/accessitemrequestedfordto
tags: ['SDK', 'Software Development Kit', 'Accessitemrequestedfordto', 'Accessitemrequestedfordto']
---

# Accessitemrequestedfordto

Identity the access item is requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity the access item is requested for. | [optional] 
**id** | **str** | ID of identity the access item is requested for. | [optional] 
**name** | **str** | Human-readable display name of identity the access item is requested for. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.accessitemrequestedfordto import Accessitemrequestedfordto

accessitemrequestedfordto = Accessitemrequestedfordto(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

