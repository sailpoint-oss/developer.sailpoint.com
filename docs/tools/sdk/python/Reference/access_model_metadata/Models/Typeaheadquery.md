---
id: typeaheadquery
title: Typeaheadquery
pagination_label: Typeaheadquery
sidebar_label: Typeaheadquery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Typeaheadquery', 'Typeaheadquery'] 
slug: /tools/sdk/python/access-model-metadata/models/typeaheadquery
tags: ['SDK', 'Software Development Kit', 'Typeaheadquery', 'Typeaheadquery']
---

# Typeaheadquery

Query parameters used to construct an Elasticsearch type ahead query object.  The typeAheadQuery performs a search for top values beginning with the typed values. For example, typing \"Jo\" results in top hits matching \"Jo.\" Typing \"Job\" results in top hits matching \"Job.\" 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | The type ahead query string used to construct a phrase prefix match query. | [required]
**var_field** | **str** | The field on which to perform the type ahead search. | [required]
**nested_type** | **str** | The nested type. | [optional] 
**max_expansions** | **int** | The number of suffixes the last term will be expanded into. Influences the performance of the query and the number results returned. Valid values: 1 to 1000. | [optional] [default to 10]
**size** | **int** | The max amount of records the search will return. | [optional] [default to 100]
**sort** | **str** | The sort order of the returned records. | [optional] [default to 'desc']
**sort_by_value** | **bool** | The flag that defines the sort type, by count or value. | [optional] [default to False]
}

## Example

```python
from sailpoint.access_model_metadata.models.typeaheadquery import Typeaheadquery

typeaheadquery = Typeaheadquery(
query='Work',
var_field='source.name',
nested_type='access',
max_expansions=10,
size=100,
sort='desc',
sort_by_value=True
)

```
[[Back to top]](#) 

