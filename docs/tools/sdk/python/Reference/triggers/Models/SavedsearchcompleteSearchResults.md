---
id: savedsearchcomplete-search-results
title: SavedsearchcompleteSearchResults
pagination_label: SavedsearchcompleteSearchResults
sidebar_label: SavedsearchcompleteSearchResults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedsearchcompleteSearchResults', 'SavedsearchcompleteSearchResults'] 
slug: /tools/sdk/python/triggers/models/savedsearchcomplete-search-results
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResults', 'SavedsearchcompleteSearchResults']
---

# SavedsearchcompleteSearchResults

A preview of the search results for each object type. This includes a count as well as headers, and the first several rows of data, per object type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**SavedsearchcompleteSearchResultsAccount**](savedsearchcomplete-search-results-account) |  | [optional] 
**entitlement** | [**SavedsearchcompleteSearchResultsEntitlement**](savedsearchcomplete-search-results-entitlement) |  | [optional] 
**identity** | [**SavedsearchcompleteSearchResultsIdentity**](savedsearchcomplete-search-results-identity) |  | [optional] 
}

## Example

```python
from sailpoint.triggers.models.savedsearchcomplete_search_results import SavedsearchcompleteSearchResults

savedsearchcomplete_search_results = SavedsearchcompleteSearchResults(
account=sailpoint.triggers.models.savedsearchcomplete_search_results_account.savedsearchcomplete_searchResults_Account(
                    count = '3', 
                    noun = 'accounts', 
                    preview = [
                        []
                        ], ),
entitlement=sailpoint.triggers.models.savedsearchcomplete_search_results_entitlement.savedsearchcomplete_searchResults_Entitlement(
                    count = '2', 
                    noun = 'entitlements', 
                    preview = [
                        []
                        ], ),
identity=sailpoint.triggers.models.savedsearchcomplete_search_results_identity.savedsearchcomplete_searchResults_Identity(
                    count = '2', 
                    noun = 'identities', 
                    preview = [
                        []
                        ], )
)

```
[[Back to top]](#) 

