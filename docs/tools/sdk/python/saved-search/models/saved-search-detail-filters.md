# SavedSearchDetailFilters

# SavedSearchDetailFilters


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
from sailpoint.saved_search.models.saved_search_detail_filters import SavedSearchDetailFilters

saved_search_detail_filters = SavedSearchDetailFilters(
type='RANGE',
range=sailpoint.saved_search.models.range.Range(
                    lower = sailpoint.saved_search.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), 
                    upper = sailpoint.saved_search.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), ),
terms=[
                    'account_count'
                    ],
exclude=False
)

```
[[Back to top]](#) 

