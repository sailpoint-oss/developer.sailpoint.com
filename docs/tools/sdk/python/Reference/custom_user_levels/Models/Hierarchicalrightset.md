---
id: hierarchicalrightset
title: Hierarchicalrightset
pagination_label: Hierarchicalrightset
sidebar_label: Hierarchicalrightset
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Hierarchicalrightset', 'Hierarchicalrightset'] 
slug: /tools/sdk/python/custom-user-levels/models/hierarchicalrightset
tags: ['SDK', 'Software Development Kit', 'Hierarchicalrightset', 'Hierarchicalrightset']
---

# Hierarchicalrightset

A HierarchicalRightSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the RightSet. | [optional] 
**name** | **str** | The human-readable name of the RightSet. | [optional] 
**description** | **str** | A human-readable description of the RightSet. | [optional] 
**category** | **str** | The category of the RightSet. | [optional] 
**nested_config** | [**Nestedconfig**](nestedconfig) |  | [optional] 
**children** | [**[]Hierarchicalrightset**](hierarchicalrightset) | List of child HierarchicalRightSets. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.hierarchicalrightset import Hierarchicalrightset

hierarchicalrightset = Hierarchicalrightset(
id='idn:ui-right-set-example',
name='Hierarchical Right Set Name',
description='This is a description of the HierarchicalRightSet.',
category='identity',
nested_config=sailpoint.custom_user_levels.models.nestedconfig.nestedconfig(
                    ancestor_id = 'idn:ui-ancestor-example', 
                    depth = 2, 
                    parent_id = 'idn:ui-parent-example', 
                    children_ids = ["idn:ui-child-one-example","idn:ui-child-two-example"], ),
children={"id":"idn:ui-identity-details-example","name":"Identity Details","description":"Read only access for identity details.","category":"identity","nestedConfig":{"ancestorId":"idn:ui-identity-management-example","depth":1,"parentId":"idn:ui-identity-management-example","childrenIds":[]},"children":[]}
)

```
[[Back to top]](#) 

