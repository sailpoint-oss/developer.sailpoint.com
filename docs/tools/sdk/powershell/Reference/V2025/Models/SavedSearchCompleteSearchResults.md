---
id: v2025-saved-search-complete-search-results
title: SavedSearchCompleteSearchResults
pagination_label: SavedSearchCompleteSearchResults
sidebar_label: SavedSearchCompleteSearchResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResults', 'V2025SavedSearchCompleteSearchResults'] 
slug: /tools/sdk/powershell/v2025/models/saved-search-complete-search-results
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResults', 'V2025SavedSearchCompleteSearchResults']
---


# SavedSearchCompleteSearchResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | [**SavedSearchCompleteSearchResultsAccount**](saved-search-complete-search-results-account) |  | [optional] 
**Entitlement** | [**SavedSearchCompleteSearchResultsEntitlement**](saved-search-complete-search-results-entitlement) |  | [optional] 
**Identity** | [**SavedSearchCompleteSearchResultsIdentity**](saved-search-complete-search-results-identity) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResults = Initialize-PSSailpoint.V2025SavedSearchCompleteSearchResults  -Account null `
 -Entitlement null `
 -Identity null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResults | ConvertTo-JSON
```


[[Back to top]](#) 

