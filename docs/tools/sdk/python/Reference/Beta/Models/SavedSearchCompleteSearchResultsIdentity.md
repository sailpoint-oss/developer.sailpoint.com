---
id: beta-saved-search-complete-search-results-identity
title: SavedSearchCompleteSearchResultsIdentity
pagination_label: SavedSearchCompleteSearchResultsIdentity
sidebar_label: SavedSearchCompleteSearchResultsIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchCompleteSearchResultsIdentity', 'BetaSavedSearchCompleteSearchResultsIdentity'] 
slug: /tools/sdk/python/beta/models/saved-search-complete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsIdentity', 'BetaSavedSearchCompleteSearchResultsIdentity']
---

# SavedSearchCompleteSearchResultsIdentity

Table of identities matching the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of rows in the table. | [required]
**noun** | **str** | Type of object represented in the table. | [required]
**preview** | **[]List[str]** | Sample of the table data. | [required]
}

## Example

```python
from sailpoint.beta.models.saved_search_complete_search_results_identity import SavedSearchCompleteSearchResultsIdentity

saved_search_complete_search_results_identity = SavedSearchCompleteSearchResultsIdentity(
count='2',
noun='identities',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

