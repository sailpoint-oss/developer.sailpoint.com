---
id: expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Expression', 'Expression'] 
slug: /tools/sdk/python/v3/models/expression
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
from sailpoint.v3.models.expression import Expression

expression = Expression(
operator='EQUALS',
attribute='location',
value=sailpoint.v3.models.value.Value(
                    type = 'STRING', ),
children=[]
)

```
[[Back to top]](#) 

