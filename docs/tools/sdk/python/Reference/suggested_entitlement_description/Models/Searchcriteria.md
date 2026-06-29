---
id: searchcriteria
title: Searchcriteria
pagination_label: Searchcriteria
sidebar_label: Searchcriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Searchcriteria', 'Searchcriteria'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/searchcriteria
tags: ['SDK', 'Software Development Kit', 'Searchcriteria', 'Searchcriteria']
---

# Searchcriteria

Represents the search criteria for querying entitlements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | **[]str** | A list of indices to search within. Must contain exactly one item, typically \"entitlements\". | [required]
**filters** | [**map[string]SearchcriteriaFiltersValue**](searchcriteria-filters-value) | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [optional] 
**query** | [**SearchcriteriaQuery**](searchcriteria-query) |  | [optional] 
**query_type** | **str** | Specifies the type of query. Must be \"TEXT\" if `textQuery` is used. | [optional] 
**text_query** | [**SearchcriteriaTextQuery**](searchcriteria-text-query) |  | [optional] 
**include_nested** | **bool** | Whether to include nested objects in the search results. | [optional] [default to False]
**sort** | **[]str** | Specifies the sorting order for the results. | [optional] 
**search_after** | **[]str** | Used for pagination to fetch results after a specific point. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.searchcriteria import Searchcriteria

searchcriteria = Searchcriteria(
indices=["entitlements"],
filters={"status":{"type":"TERMS","terms":["active","inactive"]}},
query=sailpoint.suggested_entitlement_description.models.searchcriteria_query.searchcriteria_query(
                    query = 'status:active', ),
query_type='TEXT',
text_query=sailpoint.suggested_entitlement_description.models.searchcriteria_text_query.searchcriteria_textQuery(
                    terms = ["admin","user"], 
                    fields = ["role","name"], 
                    match_any = True, ),
include_nested=True,
sort=["name:asc","createdAt:desc"],
search_after=["12345","67890"]
)

```
[[Back to top]](#) 

