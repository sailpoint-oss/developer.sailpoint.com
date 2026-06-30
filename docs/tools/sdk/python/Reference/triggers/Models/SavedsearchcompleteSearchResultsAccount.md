---
id: savedsearchcomplete-search-results-account
title: SavedsearchcompleteSearchResultsAccount
pagination_label: SavedsearchcompleteSearchResultsAccount
sidebar_label: SavedsearchcompleteSearchResultsAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedsearchcompleteSearchResultsAccount', 'SavedsearchcompleteSearchResultsAccount'] 
slug: /tools/sdk/python/triggers/models/savedsearchcomplete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsAccount', 'SavedsearchcompleteSearchResultsAccount']
---

# SavedsearchcompleteSearchResultsAccount

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
from sailpoint.triggers.models.savedsearchcomplete_search_results_account import SavedsearchcompleteSearchResultsAccount

savedsearchcomplete_search_results_account = SavedsearchcompleteSearchResultsAccount(
count='3',
noun='accounts',
preview=[
                    []
                    ]
)

```
[[Back to top]](#) 

