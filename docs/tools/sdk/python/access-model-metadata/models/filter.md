# Filter

# Filter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **FilterType** |  | [optional] 
**range** | [**Range**](range) |  | [optional] 
**terms** | **[]str** | The terms to be filtered. | [optional] 
**exclude** | **bool** | Indicates if the filter excludes results. | [optional] [default to False]
\}

## Example

```python
from sailpoint.access_model_metadata.models.filter import Filter

filter = Filter(
type='RANGE',
range=sailpoint.access_model_metadata.models.range.Range(
                    lower = sailpoint.access_model_metadata.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), 
                    upper = sailpoint.access_model_metadata.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), ),
terms=[
                    'account_count'
                    ],
exclude=False
)

```
[[Back to top]](#) 

