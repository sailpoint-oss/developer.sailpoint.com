---
id: v2025-hierarchical-right-set
title: HierarchicalRightSet
pagination_label: HierarchicalRightSet
sidebar_label: HierarchicalRightSet
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'HierarchicalRightSet', 'V2025HierarchicalRightSet'] 
slug: /tools/sdk/python/v2025/models/hierarchical-right-set
tags: ['SDK', 'Software Development Kit', 'HierarchicalRightSet', 'V2025HierarchicalRightSet']
---

# HierarchicalRightSet

A HierarchicalRightSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the RightSet. | [optional] 
**name** | **str** | The human-readable name of the RightSet. | [optional] 
**description** | **str** | A human-readable description of the RightSet. | [optional] 
**category** | **str** | The category of the RightSet. | [optional] 
**nested_config** | [**NestedConfig**](nested-config) |  | [optional] 
**children** | [**[]HierarchicalRightSet**](hierarchical-right-set) | List of child HierarchicalRightSets. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.hierarchical_right_set import HierarchicalRightSet

hierarchical_right_set = HierarchicalRightSet(
id='idn:ui-right-set-example',
name='Hierarchical Right Set Name',
description='This is a description of the HierarchicalRightSet.',
category='identity',
nested_config=sailpoint.v2025.models.nested_config.NestedConfig(
                    ancestor_id = 'idn:ui-ancestor-example', 
                    depth = 2, 
                    parent_id = 'idn:ui-parent-example', 
                    children_ids = [idn:ui-child-one-example, idn:ui-child-two-example], ),
children={id=idn:ui-identity-details-example, name=Identity Details, description=Read only access for identity details., category=identity, nestedConfig={ancestorId=idn:ui-identity-management-example, depth=1, parentId=idn:ui-identity-management-example, childrenIds=[]}, children=[]}
)

```
[[Back to top]](#) 

