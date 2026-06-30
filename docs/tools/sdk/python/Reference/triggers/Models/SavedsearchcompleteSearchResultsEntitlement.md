---
id: savedsearchcomplete-search-results-entitlement
title: SavedsearchcompleteSearchResultsEntitlement
pagination_label: SavedsearchcompleteSearchResultsEntitlement
sidebar_label: SavedsearchcompleteSearchResultsEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedsearchcompleteSearchResultsEntitlement', 'SavedsearchcompleteSearchResultsEntitlement'] 
slug: /tools/sdk/python/triggers/models/savedsearchcomplete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsEntitlement', 'SavedsearchcompleteSearchResultsEntitlement']
---

# SavedsearchcompleteSearchResultsEntitlement

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
from sailpoint.triggers.models.savedsearchcomplete_search_results_entitlement import SavedsearchcompleteSearchResultsEntitlement

savedsearchcomplete_search_results_entitlement = SavedsearchcompleteSearchResultsEntitlement(
count='2',
noun='entitlements',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

