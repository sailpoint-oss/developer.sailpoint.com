---
id: machineidentitysourcereference
title: Machineidentitysourcereference
pagination_label: Machineidentitysourcereference
sidebar_label: Machineidentitysourcereference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineidentitysourcereference', 'Machineidentitysourcereference'] 
slug: /tools/sdk/python/triggers/models/machineidentitysourcereference
tags: ['SDK', 'Software Development Kit', 'Machineidentitysourcereference', 'Machineidentitysourcereference']
---

# Machineidentitysourcereference

Reference to a source of entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Source Type. | [required]
**id** | **str** | Unique identifier. | [required]
**name** | **str** | Display name. | [required]
}

## Example

```python
from sailpoint.triggers.models.machineidentitysourcereference import Machineidentitysourcereference

machineidentitysourcereference = Machineidentitysourcereference(
type='SOURCE',
id='c0201251a6ce4d268aba536cdd60a7f2',
name='IdentityNow'
)

```
[[Back to top]](#) 

