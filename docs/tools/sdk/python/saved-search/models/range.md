# Range

# Range

The range of values to be filtered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower** | [**Bound**](bound) |  | [optional] 
**upper** | [**Bound**](bound) |  | [optional] 
\}

## Example

```python
from sailpoint.saved_search.models.range import Range

range = Range(
lower=sailpoint.saved_search.models.bound.Bound(
                    value = '1', 
                    inclusive = False, ),
upper=sailpoint.saved_search.models.bound.Bound(
                    value = '1', 
                    inclusive = False, )
)

```
[[Back to top]](#) 

