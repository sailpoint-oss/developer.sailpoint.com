# SavedSearchCompleteSearchResultsAccount

# SavedSearchCompleteSearchResultsAccount

A table of accounts that match the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of rows in the table. | [required]
**noun** | **str** | The type of object represented in the table. | [required]
**preview** | **[]List[str]** | A sample of the data in the table. | [required]
\}

## Example

```python
from sailpoint.triggers.models.saved_search_complete_search_results_account import SavedSearchCompleteSearchResultsAccount

saved_search_complete_search_results_account = SavedSearchCompleteSearchResultsAccount(
count='3',
noun='accounts',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

