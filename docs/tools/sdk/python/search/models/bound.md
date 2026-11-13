# Bound

# Bound


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The value of the range's endpoint. | [required]
**inclusive** | **bool** | Indicates if the endpoint is included in the range. | [optional] [default to False]
\}

## Example

```python
from sailpoint.search.models.bound import Bound

bound = Bound(
value='1',
inclusive=False
)

```
[[Back to top]](#) 

