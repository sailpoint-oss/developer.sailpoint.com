---
id: saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearch', 'SavedSearch'] 
slug: /tools/sdk/python/v3/models/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'SavedSearch']
---

# SavedSearch


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
**id** | **str** | The saved search ID.  | [optional] 
**owner** | [**TypedReference**](typed-reference) |  | [optional] 
**owner_id** | **str** | The ID of the identity that owns this saved search. | [optional] 
**public** | **bool** | Whether this saved search is visible to anyone but the owner. This field will always be false as there is no way to set a saved search as public at this time. | [optional] [default to False]
}

## Example

```python
from sailpoint.v3.models.saved_search import SavedSearch

saved_search = SavedSearch(
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
filters=,
id='0de46054-fe90-434a-b84e-c6b3359d0c64',
owner=sailpoint.v3.models.typed_reference.TypedReference(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', ),
owner_id='2c91808568c529c60168cca6f90c1313',
public=False
)

```
[[Back to top]](#) 

