---
id: v2025-saved-search-complete-search-results-account
title: SavedSearchCompleteSearchResultsAccount
pagination_label: SavedSearchCompleteSearchResultsAccount
sidebar_label: SavedSearchCompleteSearchResultsAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchCompleteSearchResultsAccount', 'V2025SavedSearchCompleteSearchResultsAccount'] 
slug: /tools/sdk/python/v2025/models/saved-search-complete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsAccount', 'V2025SavedSearchCompleteSearchResultsAccount']
---

# SavedSearchCompleteSearchResultsAccount

A table of accounts that match the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of rows in the table. | [required]
**noun** | **str** | The type of object represented in the table. | [required]
**preview** | **[]List[str]** | A sample of the data in the table. | [required]
}

## Example

```python
from sailpoint.v2025.models.saved_search_complete_search_results_account import SavedSearchCompleteSearchResultsAccount

saved_search_complete_search_results_account = SavedSearchCompleteSearchResultsAccount(
count='3',
noun='accounts',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

