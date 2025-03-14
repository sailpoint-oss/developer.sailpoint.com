---
id: beta-expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Expression', 'BetaExpression'] 
slug: /tools/sdk/python/beta/models/expression
tags: ['SDK', 'Software Development Kit', 'Expression', 'BetaExpression']
---

# Expression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'EQUALS' ] | Operator for the expression | [optional] 
**attribute** | **str** | Name for the attribute | [optional] 
**value** | [**Value**](value) |  | [optional] 
**children** | [**[]Children**](children) | List of expressions | [optional] 
}

## Example

```python
from sailpoint.beta.models.expression import Expression

expression = Expression(
operator='EQUALS',
attribute='location',
value=sailpoint.beta.models.value.Value(
                    type = 'STRING', ),
children=[]
)

```
[[Back to top]](#) 

