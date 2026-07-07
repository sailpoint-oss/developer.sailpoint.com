---
id: scope
title: Scope
pagination_label: Scope
sidebar_label: Scope
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scope', 'Scope'] 
slug: /tools/sdk/python/data-segmentation/models/scope
tags: ['SDK', 'Software Development Kit', 'Scope', 'Scope']
---

# Scope

This defines what access the segment is giving

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**Scopetype**](scopetype) |  | [optional] 
**visibility** | [**Scopevisibilitytype**](scopevisibilitytype) |  | [optional] 
**scope_filter** | [**Visibilitycriteria**](visibilitycriteria) |  | [optional] 
**scope_selection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 
}

## Example

```python
from sailpoint.data_segmentation.models.scope import Scope

scope = Scope(
scope='ALL',
visibility='ALL',
scope_filter=sailpoint.data_segmentation.models.visibility_criteria.Visibility Criteria(
                    expression = sailpoint.data_segmentation.models.expression.Expression(
                        operator = 'EQUALS', 
                        attribute = 'location', 
                        value = sailpoint.data_segmentation.models.value.Value(
                            type = 'STRING', ), 
                        children = [], ), ),
scope_selection=[{"type":"IDENTITY","id":"29cb6c061da843ea8be4b3125f248f2a"},{"type":"IDENTITY","id":"f7b1b8a35fed4fd4ad2982014e137e19"}]
)

```
[[Back to top]](#) 

