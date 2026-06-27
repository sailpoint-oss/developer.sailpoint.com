---
id: savedsearchcomplete-search-results-identity
title: SavedsearchcompleteSearchResultsIdentity
pagination_label: SavedsearchcompleteSearchResultsIdentity
sidebar_label: SavedsearchcompleteSearchResultsIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedsearchcompleteSearchResultsIdentity', 'SavedsearchcompleteSearchResultsIdentity'] 
slug: /tools/sdk/python/triggers/models/savedsearchcomplete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsIdentity', 'SavedsearchcompleteSearchResultsIdentity']
---

# SavedsearchcompleteSearchResultsIdentity

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
from sailpoint.triggers.models.savedsearchcomplete_search_results_identity import SavedsearchcompleteSearchResultsIdentity

savedsearchcomplete_search_results_identity = SavedsearchcompleteSearchResultsIdentity(
count='2',
noun='identities',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

