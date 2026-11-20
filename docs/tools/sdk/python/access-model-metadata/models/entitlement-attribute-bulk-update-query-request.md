# EntitlementAttributeBulkUpdateQueryRequest

# EntitlementAttributeBulkUpdateQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**Search**](search) |  | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]BulkUpdateAMMKeyValueInner**](bulk-update-amm-key-value-inner) | The metadata to be updated, including attribute and values. | [optional] 
\}

## Example

```python
from sailpoint.access_model_metadata.models.entitlement_attribute_bulk_update_query_request import EntitlementAttributeBulkUpdateQueryRequest

entitlement_attribute_bulk_update_query_request = EntitlementAttributeBulkUpdateQueryRequest(
query=sailpoint.access_model_metadata.models.search.Search(
                    indices = ["identities"], 
                    query_type = 'SAILPOINT', 
                    query_version = null, 
                    query = sailpoint.access_model_metadata.models.query.Query(
                        fields = '["firstName,lastName,email"]', 
                        time_zone = 'America/Chicago', 
                        inner_hit = sailpoint.access_model_metadata.models.inner_hit.InnerHit(
                            query = 'source.name:\"Active Directory\"', 
                            type = 'access', ), ), 
                    query_dsl = {"match":{"name":"john.doe"}}, 
                    text_query = sailpoint.access_model_metadata.models.text_query.TextQuery(
                        terms = ["The quick brown fox","3141592","7"], 
                        fields = ["displayName","employeeNumber","roleCount"], 
                        match_any = False, 
                        contains = True, ), 
                    type_ahead_query = sailpoint.access_model_metadata.models.type_ahead_query.TypeAheadQuery(
                        query = 'Work', 
                        field = 'source.name', 
                        nested_type = 'access', 
                        max_expansions = 10, 
                        size = 100, 
                        sort = 'desc', 
                        sort_by_value = True, ), 
                    include_nested = True, 
                    query_result_filter = sailpoint.access_model_metadata.models.query_result_filter.QueryResultFilter(
                        includes = ["name","displayName"], 
                        excludes = ["stacktrace"], ), 
                    aggregation_type = 'DSL', 
                    aggregations_version = null, 
                    aggregations_dsl = {}, 
                    aggregations = null, 
                    sort = ["displayName","+id"], 
                    search_after = ["John Doe","2c91808375d8e80a0175e1f88a575221"], 
                    filters = {}, ),
operation='add',
replace_scope='attribute',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

