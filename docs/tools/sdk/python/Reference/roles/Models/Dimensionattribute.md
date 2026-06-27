---
id: dimensionattribute
title: Dimensionattribute
pagination_label: Dimensionattribute
sidebar_label: Dimensionattribute
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensionattribute', 'Dimensionattribute'] 
slug: /tools/sdk/python/roles/models/dimensionattribute
tags: ['SDK', 'Software Development Kit', 'Dimensionattribute', 'Dimensionattribute']
---

# Dimensionattribute

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
from sailpoint.roles.models.dimensionattribute import Dimensionattribute

dimensionattribute = Dimensionattribute(
name='city',
display_name='City',
derived=True
)

```
[[Back to top]](#) 

