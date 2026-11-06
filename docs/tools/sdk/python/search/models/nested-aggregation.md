# NestedAggregation

# NestedAggregation

The nested aggregation object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the nested aggregate to be included in the result. | [required]
**type** | **str** | The type of the nested object. | [required]
\}

## Example

```python
from sailpoint.search.models.nested_aggregation import NestedAggregation

nested_aggregation = NestedAggregation(
name='id',
type='access'
)

```
[[Back to top]](#) 

