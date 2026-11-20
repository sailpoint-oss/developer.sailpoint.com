# VisibilityCriteria

# VisibilityCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**Expression**](expression) |  | [optional] 
\}

## Example

```python
from sailpoint.data_segmentation.models.visibility_criteria import VisibilityCriteria

visibility_criteria = VisibilityCriteria(
expression=sailpoint.data_segmentation.models.expression.Expression(
                    operator = 'EQUALS', 
                    attribute = 'location', 
                    value = sailpoint.data_segmentation.models.value.Value(
                        type = 'STRING', ), 
                    children = [], )
)

```
[[Back to top]](#) 

