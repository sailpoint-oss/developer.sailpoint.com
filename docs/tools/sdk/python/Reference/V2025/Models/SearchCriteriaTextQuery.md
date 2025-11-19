---
id: v2025-search-criteria-text-query
title: SearchCriteriaTextQuery
pagination_label: SearchCriteriaTextQuery
sidebar_label: SearchCriteriaTextQuery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchCriteriaTextQuery', 'V2025SearchCriteriaTextQuery'] 
slug: /tools/sdk/python/v2025/models/search-criteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaTextQuery', 'V2025SearchCriteriaTextQuery']
---

# SearchCriteriaTextQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | **[]str** | Terms to search for. | [optional] 
**fields** | **[]str** | Fields to search within. | [optional] 
**match_any** | **bool** | Whether to match any of the terms. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.search_criteria_text_query import SearchCriteriaTextQuery

search_criteria_text_query = SearchCriteriaTextQuery(
terms=[admin, user],
fields=[role, name],
match_any=True
)

```
[[Back to top]](#) 

