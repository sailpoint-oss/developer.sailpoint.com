---
id: create-saved-search-request
title: CreateSavedSearchRequest
pagination_label: CreateSavedSearchRequest
sidebar_label: CreateSavedSearchRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateSavedSearchRequest', 'CreateSavedSearchRequest'] 
slug: /tools/sdk/python/v3/models/create-saved-search-request
tags: ['SDK', 'Software Development Kit', 'CreateSavedSearchRequest', 'CreateSavedSearchRequest']
---

# CreateSavedSearchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the saved search.  | [optional] 
**description** | **str** | The description of the saved search.  | [optional] 
**created** | **datetime** | A date-time in ISO-8601 format | [optional] 
**modified** | **datetime** | A date-time in ISO-8601 format | [optional] 
**indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | [required]
**columns** | [**map[string]List[Column]**](list) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**query** | **str** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | [required]
**fields** | **[]str** | The fields to be searched against in a multi-field query.  | [optional] 
**order_by** | **map[string]List[str]** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**sort** | **[]str** | The fields to be used to sort the search results.  | [optional] 
**filters** | [**SavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.create_saved_search_request import CreateSavedSearchRequest

create_saved_search_request = CreateSavedSearchRequest(
name='Disabled accounts',
description='Disabled accounts',
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

