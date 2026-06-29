---
id: accessitemapproverdto
title: Accessitemapproverdto
pagination_label: Accessitemapproverdto
sidebar_label: Accessitemapproverdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemapproverdto', 'Accessitemapproverdto'] 
slug: /tools/sdk/python/triggers/models/accessitemapproverdto
tags: ['SDK', 'Software Development Kit', 'Accessitemapproverdto', 'Accessitemapproverdto']
---

# Accessitemapproverdto

Identity who approved the access item request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who approved the access item request. | [optional] 
**id** | **str** | ID of identity who approved the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who approved the access item request. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.accessitemapproverdto import Accessitemapproverdto

accessitemapproverdto = Accessitemapproverdto(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

