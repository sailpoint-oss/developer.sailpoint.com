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

Table of entitlements matching the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of rows in the table. | [required]
**noun** | **str** | Type of object represented in the table. | [required]
**preview** | **[]List[str]** | Sample of table data. | [required]
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

