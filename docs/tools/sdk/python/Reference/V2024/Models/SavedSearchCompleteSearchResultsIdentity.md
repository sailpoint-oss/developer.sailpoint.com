---
id: v2024-saved-search-complete-search-results-identity
title: SavedSearchCompleteSearchResultsIdentity
pagination_label: SavedSearchCompleteSearchResultsIdentity
sidebar_label: SavedSearchCompleteSearchResultsIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchCompleteSearchResultsIdentity', 'V2024SavedSearchCompleteSearchResultsIdentity'] 
slug: /tools/sdk/python/v2024/models/saved-search-complete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsIdentity', 'V2024SavedSearchCompleteSearchResultsIdentity']
---

# SavedSearchCompleteSearchResultsIdentity

A table of identities that match the search criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of rows in the table. | [required]
**noun** | **str** | The type of object represented in the table. | [required]
**preview** | **[]List[str]** | A sample of the data in the table. | [required]
}

## Example

```python
from sailpoint.v2024.models.saved_search_complete_search_results_identity import SavedSearchCompleteSearchResultsIdentity

saved_search_complete_search_results_identity = SavedSearchCompleteSearchResultsIdentity(
count='2',
noun='identities',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

