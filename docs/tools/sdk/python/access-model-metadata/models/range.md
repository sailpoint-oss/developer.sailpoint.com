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
from sailpoint.access_model_metadata.models.range import Range

range = Range(
lower=sailpoint.access_model_metadata.models.bound.Bound(
                    value = '1', 
                    inclusive = False, ),
upper=sailpoint.access_model_metadata.models.bound.Bound(
                    value = '1', 
                    inclusive = False, )
)

```
[[Back to top]](#) 

