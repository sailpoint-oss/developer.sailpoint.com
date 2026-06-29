---
id: searchcriteria-text-query
title: SearchcriteriaTextQuery
pagination_label: SearchcriteriaTextQuery
sidebar_label: SearchcriteriaTextQuery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchcriteriaTextQuery', 'SearchcriteriaTextQuery'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/searchcriteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaTextQuery', 'SearchcriteriaTextQuery']
---

# SearchcriteriaTextQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | **[]str** | Terms to search for. | [optional] 
**fields** | **[]str** | Fields to search within. | [optional] 
**match_any** | **bool** | Whether to match any of the terms. | [optional] [default to False]
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.searchcriteria_text_query import SearchcriteriaTextQuery

searchcriteria_text_query = SearchcriteriaTextQuery(
terms=["admin","user"],
fields=["role","name"],
match_any=True
)

```
[[Back to top]](#) 

