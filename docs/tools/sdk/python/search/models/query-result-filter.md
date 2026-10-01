# QueryResultFilter

# QueryResultFilter

Allows the query results to be filtered by specifying a list of fields to include and/or exclude from the result documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**includes** | **[]str** | The list of field names to include in the result documents. | [optional] 
**excludes** | **[]str** | The list of field names to exclude from the result documents. | [optional] 
\}

## Example

```python
from sailpoint.search.models.query_result_filter import QueryResultFilter

query_result_filter = QueryResultFilter(
includes=["name","displayName"],
excludes=["stacktrace"]
)

```
[[Back to top]](#) 

