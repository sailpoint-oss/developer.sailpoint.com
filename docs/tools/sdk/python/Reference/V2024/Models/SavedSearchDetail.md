---
id: v2024-saved-search-detail
title: SavedSearchDetail
pagination_label: SavedSearchDetail
sidebar_label: SavedSearchDetail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchDetail', 'V2024SavedSearchDetail'] 
slug: /tools/sdk/python/v2024/models/saved-search-detail
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetail', 'V2024SavedSearchDetail']
---

# SavedSearchDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | A date-time in ISO-8601 format | [optional] 
**modified** | **datetime** | A date-time in ISO-8601 format | [optional] 
**indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | [required]
**columns** | [**map[string]List[Column]**](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**query** | **str** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | [required]
**fields** | **[]str** | The fields to be searched against in a multi-field query.  | [optional] 
**order_by** | **map[string]List[str]** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**sort** | **[]str** | The fields to be used to sort the search results.  | [optional] 
**filters** | [**SavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.saved_search_detail import SavedSearchDetail

saved_search_detail = SavedSearchDetail(
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
indices=[identities],
columns={identity=[{field=displayName, header=Display Name}, {field=e-mail, header=Work Email}]},
query='@accounts(disabled:true)',
fields=[disabled],
order_by={identity=[lastName, firstName], role=[name]},
sort=[displayName],
filters=
)

```
[[Back to top]](#) 

