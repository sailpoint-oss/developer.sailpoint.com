# FilterAggregation

# FilterAggregation

An additional filter to constrain the results of the search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the filter aggregate to be included in the result. | [required]
**type** | **SearchFilterType** |  | [optional] [default to SearchFilterType.TERM]
**var_field** | **str** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | [required]
**value** | **str** | The value to filter on. | [required]
\}

## Example

```python
from sailpoint.access_model_metadata.models.filter_aggregation import FilterAggregation

filter_aggregation = FilterAggregation(
name='Entitlements',
type='TERM',
var_field='access.type',
value='ENTITLEMENT'
)

```
[[Back to top]](#) 

