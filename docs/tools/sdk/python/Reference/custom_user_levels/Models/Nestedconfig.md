---
id: nestedconfig
title: Nestedconfig
pagination_label: Nestedconfig
sidebar_label: Nestedconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nestedconfig', 'Nestedconfig'] 
slug: /tools/sdk/python/custom-user-levels/models/nestedconfig
tags: ['SDK', 'Software Development Kit', 'Nestedconfig', 'Nestedconfig']
---

# Nestedconfig

A NestedConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor_id** | **str** | The unique identifier of the ancestor RightSet. | [optional] 
**depth** | **int** | The depth level of the configuration. | [optional] 
**parent_id** | **str** | The unique identifier of the parent RightSet. | [optional] 
**children_ids** | **[]str** | List of unique identifiers for child configurations. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.nestedconfig import Nestedconfig

nestedconfig = Nestedconfig(
ancestor_id='idn:ui-ancestor-example',
depth=2,
parent_id='idn:ui-parent-example',
children_ids=["idn:ui-child-one-example","idn:ui-child-two-example"]
)

```
[[Back to top]](#) 

