---
id: beta-saved-search-complete-search-results-account
title: SavedSearchCompleteSearchResultsAccount
pagination_label: SavedSearchCompleteSearchResultsAccount
sidebar_label: SavedSearchCompleteSearchResultsAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchCompleteSearchResultsAccount', 'BetaSavedSearchCompleteSearchResultsAccount'] 
slug: /tools/sdk/python/beta/models/saved-search-complete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsAccount', 'BetaSavedSearchCompleteSearchResultsAccount']
---

# SavedSearchCompleteSearchResultsAccount

Table of accounts matching the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of rows in the table. | [required]
**noun** | **str** | Type of object represented in the table. | [required]
**preview** | **[]List[str]** | Sample of table data. | [required]
}

## Example

```python
from sailpoint.beta.models.saved_search_complete_search_results_account import SavedSearchCompleteSearchResultsAccount

saved_search_complete_search_results_account = SavedSearchCompleteSearchResultsAccount(
count='3',
noun='accounts',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

