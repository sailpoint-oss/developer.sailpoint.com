# SegmentVisibilityCriteria

# SegmentVisibilityCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**Expression**](expression) |  | [optional] 
\}

## Example

```python
from sailpoint.segments.models.segment_visibility_criteria import SegmentVisibilityCriteria

segment_visibility_criteria = SegmentVisibilityCriteria(
expression=sailpoint.segments.models.expression.Expression(
                    operator = 'EQUALS', 
                    attribute = 'location', 
                    value = sailpoint.segments.models.value.Value(
                        type = 'STRING', ), 
                    children = [], )
)

```
[[Back to top]](#) 

