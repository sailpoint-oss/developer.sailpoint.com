---
id: v2025-dimension-attribute
title: DimensionAttribute
pagination_label: DimensionAttribute
sidebar_label: DimensionAttribute
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DimensionAttribute', 'V2025DimensionAttribute'] 
slug: /tools/sdk/python/v2025/models/dimension-attribute
tags: ['SDK', 'Software Development Kit', 'DimensionAttribute', 'V2025DimensionAttribute']
---

# DimensionAttribute

A dimension attribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the attribute | [optional] 
**display_name** | **str** | Display name of the attribute | [optional] 
**derived** | **bool** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to True]
}

## Example

```python
from sailpoint.v2025.models.dimension_attribute import DimensionAttribute

dimension_attribute = DimensionAttribute(
name='city',
display_name='City',
derived=True
)

```
[[Back to top]](#) 

