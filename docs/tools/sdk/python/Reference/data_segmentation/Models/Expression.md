---
id: expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Expression', 'Expression'] 
slug: /tools/sdk/python/data-segmentation/models/expression
tags: ['SDK', 'Software Development Kit', 'Expression', 'Expression']
---

# Expression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'EQUALS' ] | Operator for the expression | [optional] 
**attribute** | **str** | Name for the attribute | [optional] 
**value** | [**Value**](value) |  | [optional] 
**children** | [**[]ExpressionChildrenInner**](expression-children-inner) | List of expressions | [optional] 
}

## Example

```python
from sailpoint.data_segmentation.models.expression import Expression

expression = Expression(
operator='EQUALS',
attribute='location',
value=sailpoint.data_segmentation.models.value.Value(
                    type = 'STRING', 
                    value = 'Austin', ),
children=[]
)

```
[[Back to top]](#) 

