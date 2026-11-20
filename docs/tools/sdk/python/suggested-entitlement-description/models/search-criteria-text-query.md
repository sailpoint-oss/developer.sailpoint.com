# SearchCriteriaTextQuery

# SearchCriteriaTextQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | **[]str** | Terms to search for. | [optional] 
**fields** | **[]str** | Fields to search within. | [optional] 
**match_any** | **bool** | Whether to match any of the terms. | [optional] [default to False]
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.search_criteria_text_query import SearchCriteriaTextQuery

search_criteria_text_query = SearchCriteriaTextQuery(
terms=["admin","user"],
fields=["role","name"],
match_any=True
)

```
[[Back to top]](#) 

