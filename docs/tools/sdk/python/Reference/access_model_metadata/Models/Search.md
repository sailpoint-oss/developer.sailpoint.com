---
id: search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Search', 'Search'] 
slug: /tools/sdk/python/access-model-metadata/models/search
tags: ['SDK', 'Software Development Kit', 'Search', 'Search']
---

# Search


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**query_type** | [**Querytype**](querytype) |  | [optional] [default to Querytype.SAILPOINT]
**query_version** | **str** |  | [optional] 
**query** | [**Query**](query) |  | [optional] 
**query_dsl** | **object** | The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax. | [optional] 
**text_query** | [**Textquery**](textquery) |  | [optional] 
**type_ahead_query** | [**Typeaheadquery**](typeaheadquery) |  | [optional] 
**include_nested** | **bool** | Indicates whether nested objects from returned search results should be included. | [optional] [default to True]
**query_result_filter** | [**Queryresultfilter**](queryresultfilter) |  | [optional] 
**aggregation_type** | [**Aggregationtype**](aggregationtype) |  | [optional] [default to Aggregationtype.DSL]
**aggregations_version** | **str** |  | [optional] 
**aggregations_dsl** | **object** | The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax. | [optional] 
**aggregations** | [**Searchaggregationspecification**](searchaggregationspecification) |  | [optional] 
**sort** | **[]str** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 
**search_after** | **[]str** | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set. This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value. It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging. For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example [\"displayName\", \"id\"].  If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is \"John Doe\", then using that displayName and ID will start a new search after this identity. The searchAfter value will look like [\"John Doe\",\"2c91808375d8e80a0175e1f88a575221\"] | [optional] 
**filters** | [**map[string]Filter**](filter) | The filters to be applied for each filtered field name. | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.search import Search

search = Search(
indices=["identities"],
query_type='SAILPOINT',
query_version=,
query=sailpoint.access_model_metadata.models.query.query(
                    query = 'name:a*', 
                    fields = '["firstName,lastName,email"]', 
                    time_zone = 'America/Chicago', 
                    inner_hit = sailpoint.access_model_metadata.models.innerhit.innerhit(
                        query = 'source.name:\"Active Directory\"', 
                        type = 'access', ), ),
query_dsl={"match":{"name":"john.doe"}},
text_query=sailpoint.access_model_metadata.models.textquery.textquery(
                    terms = ["The quick brown fox","3141592","7"], 
                    fields = ["displayName","employeeNumber","roleCount"], 
                    match_any = False, 
                    contains = True, ),
type_ahead_query=sailpoint.access_model_metadata.models.typeaheadquery.typeaheadquery(
                    query = 'Work', 
                    field = 'source.name', 
                    nested_type = 'access', 
                    max_expansions = 10, 
                    size = 100, 
                    sort = 'desc', 
                    sort_by_value = True, ),
include_nested=True,
query_result_filter=sailpoint.access_model_metadata.models.queryresultfilter.queryresultfilter(
                    includes = ["name","displayName"], 
                    excludes = ["stacktrace"], ),
aggregation_type='DSL',
aggregations_version=,
aggregations_dsl={},
aggregations=,
sort=["displayName","+id"],
search_after=["John Doe","2c91808375d8e80a0175e1f88a575221"],
filters={}
)

```
[[Back to top]](#) 

