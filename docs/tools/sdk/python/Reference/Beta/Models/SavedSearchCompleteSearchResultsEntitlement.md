---
id: beta-saved-search-complete-search-results-entitlement
title: SavedSearchCompleteSearchResultsEntitlement
pagination_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchCompleteSearchResultsEntitlement', 'BetaSavedSearchCompleteSearchResultsEntitlement'] 
slug: /tools/sdk/python/beta/models/saved-search-complete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsEntitlement', 'BetaSavedSearchCompleteSearchResultsEntitlement']
---

# SavedSearchCompleteSearchResultsEntitlement

A table of entitlements that match the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of rows in the table. | [required]
**noun** | **str** | The type of object represented in the table. | [required]
**preview** | **[]List[str]** | A sample of the data in the table. | [required]
}

## Example

```python
from sailpoint.beta.models.saved_search_complete_search_results_entitlement import SavedSearchCompleteSearchResultsEntitlement

saved_search_complete_search_results_entitlement = SavedSearchCompleteSearchResultsEntitlement(
count='2',
noun='entitlements',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

