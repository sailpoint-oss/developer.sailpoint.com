# ExpressionChildrenInner

# ExpressionChildrenInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** |  **Enum** [  'AND',    'EQUALS' ] | Operator for the expression | [optional] 
**attribute** | **str** | Name for the attribute | [optional] 
**value** | [**Value**](value) |  | [optional] 
**children** | **str** | There cannot be anymore nested children. This will always be null. | [optional] 
\}

## Example

```python
from sailpoint.segments.models.expression_children_inner import ExpressionChildrenInner

expression_children_inner = ExpressionChildrenInner(
operator='EQUALS',
attribute='location',
value=sailpoint.segments.models.value.Value(
                    type = 'STRING', ),
children=''
)

```
[[Back to top]](#) 

