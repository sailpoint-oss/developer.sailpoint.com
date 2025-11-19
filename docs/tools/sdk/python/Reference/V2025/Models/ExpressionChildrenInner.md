---
id: v2025-expression-children-inner
title: ExpressionChildrenInner
pagination_label: ExpressionChildrenInner
sidebar_label: ExpressionChildrenInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExpressionChildrenInner', 'V2025ExpressionChildrenInner'] 
slug: /tools/sdk/python/v2025/models/expression-children-inner
tags: ['SDK', 'Software Development Kit', 'ExpressionChildrenInner', 'V2025ExpressionChildrenInner']
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
from sailpoint.v2025.models.expression_children_inner import ExpressionChildrenInner

expression_children_inner = ExpressionChildrenInner(
operator='EQUALS',
attribute='location',
value=sailpoint.v2025.models.value.Value(
                    type = 'STRING', ),
children=''
)

```
[[Back to top]](#) 

