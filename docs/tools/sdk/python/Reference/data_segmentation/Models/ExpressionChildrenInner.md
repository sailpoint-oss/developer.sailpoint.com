---
id: expression-children-inner
title: ExpressionChildrenInner
pagination_label: ExpressionChildrenInner
sidebar_label: ExpressionChildrenInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExpressionChildrenInner', 'ExpressionChildrenInner'] 
slug: /tools/sdk/python/data-segmentation/models/expression-children-inner
tags: ['SDK', 'Software Development Kit', 'ExpressionChildrenInner', 'ExpressionChildrenInner']
---

# ExpressionChildrenInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'EQUALS' ] | Operator for the expression | [optional] 
**attribute** | **str** | Name for the attribute | [optional] 
**value** | [**Value**](value) |  | [optional] 
**children** | **str** | There cannot be anymore nested children. This will always be null. | [optional] 
}

## Example

```python
from sailpoint.data_segmentation.models.expression_children_inner import ExpressionChildrenInner

expression_children_inner = ExpressionChildrenInner(
operator='EQUALS',
attribute='location',
value=sailpoint.data_segmentation.models.value.Value(
                    type = 'STRING', ),
children=''
)

```
[[Back to top]](#) 

