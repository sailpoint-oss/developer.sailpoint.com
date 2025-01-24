---
id: saved-search-complete-search-results
title: SavedSearchCompleteSearchResults
pagination_label: SavedSearchCompleteSearchResults
sidebar_label: SavedSearchCompleteSearchResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResults'] 
slug: /tools/sdk/powershell/v2024/models/saved-search-complete-search-results
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResults']
---


# SavedSearchCompleteSearchResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** |  Pointer to [**SavedSearchCompleteSearchResultsAccount**](saved-search-complete-search-results-account) |  | [optional] 
**Entitlement** |  Pointer to [**SavedSearchCompleteSearchResultsEntitlement**](saved-search-complete-search-results-entitlement) |  | [optional] 
**Identity** |  Pointer to [**SavedSearchCompleteSearchResultsIdentity**](saved-search-complete-search-results-identity) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResults = Initialize-PSSailpoint.V2024SavedSearchCompleteSearchResults  -Account null `
 -Entitlement null `
 -Identity null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResults | ConvertTo-JSON
```


[[Back to top]](#) 

