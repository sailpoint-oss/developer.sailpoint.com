---
id: beta-saved-search-complete-search-results
title: SavedSearchCompleteSearchResults
pagination_label: SavedSearchCompleteSearchResults
sidebar_label: SavedSearchCompleteSearchResults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchCompleteSearchResults', 'BetaSavedSearchCompleteSearchResults'] 
slug: /tools/sdk/python/beta/models/saved-search-complete-search-results
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResults', 'BetaSavedSearchCompleteSearchResults']
---

# SavedSearchCompleteSearchResults

Preview of the search results for each object type. This includes a count as well as headers and the first several rows of data, per object type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**SavedSearchCompleteSearchResultsAccount**](saved-search-complete-search-results-account) |  | [optional] 
**entitlement** | [**SavedSearchCompleteSearchResultsEntitlement**](saved-search-complete-search-results-entitlement) |  | [optional] 
**identity** | [**SavedSearchCompleteSearchResultsIdentity**](saved-search-complete-search-results-identity) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.saved_search_complete_search_results import SavedSearchCompleteSearchResults

saved_search_complete_search_results = SavedSearchCompleteSearchResults(
account=sailpoint.beta.models.saved_search_complete_search_results_account.SavedSearchComplete_searchResults_Account(
                    count = '3', 
                    noun = 'accounts', 
                    preview = [
                        []
                        ], ),
entitlement=sailpoint.beta.models.saved_search_complete_search_results_entitlement.SavedSearchComplete_searchResults_Entitlement(
                    count = '2', 
                    noun = 'entitlements', 
                    preview = [
                        []
                        ], ),
identity=sailpoint.beta.models.saved_search_complete_search_results_identity.SavedSearchComplete_searchResults_Identity(
                    count = '2', 
                    noun = 'identities', 
                    preview = [
                        []
                        ], )
)

```
[[Back to top]](#) 

