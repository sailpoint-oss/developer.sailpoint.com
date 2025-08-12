---
id: v2025-search-criteria
title: SearchCriteria
pagination_label: SearchCriteria
sidebar_label: SearchCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchCriteria', 'V2025SearchCriteria'] 
slug: /tools/sdk/python/v2025/models/search-criteria
tags: ['SDK', 'Software Development Kit', 'SearchCriteria', 'V2025SearchCriteria']
---

# SearchCriteria

Represents the search criteria for querying entitlements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | **[]str** | A list of indices to search within. Must contain exactly one item, typically \"entitlements\". | [required]
**filters** | [**map[string]SearchCriteriaFiltersValue**](search-criteria-filters-value) | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [optional] 
**query** | [**SearchCriteriaQuery**](search-criteria-query) |  | [optional] 
**query_type** | **str** | Specifies the type of query. Must be \"TEXT\" if `textQuery` is used. | [optional] 
**text_query** | [**SearchCriteriaTextQuery**](search-criteria-text-query) |  | [optional] 
**include_nested** | **bool** | Whether to include nested objects in the search results. | [optional] [default to False]
**sort** | **[]str** | Specifies the sorting order for the results. | [optional] 
**search_after** | **[]str** | Used for pagination to fetch results after a specific point. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.search_criteria import SearchCriteria

search_criteria = SearchCriteria(
indices=[entitlements],
filters={status={type=TERMS, terms=[active, inactive]}},
query=sailpoint.v2025.models.search_criteria_query.SearchCriteria_query(),
query_type='TEXT',
text_query=sailpoint.v2025.models.search_criteria_text_query.SearchCriteria_textQuery(
                    terms = [admin, user], 
                    fields = [role, name], 
                    match_any = True, ),
include_nested=True,
sort=[name:asc, createdAt:desc],
search_after=[12345, 67890]
)

```
[[Back to top]](#) 

