---
id: saved-search-complete-search-results-entitlement
title: SavedSearchCompleteSearchResultsEntitlement
pagination_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SavedSearchCompleteSearchResultsEntitlement'] 
slug: /tools/sdk/powershell/beta/models/saved-search-complete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsEntitlement']
---


# SavedSearchCompleteSearchResultsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  **String** | The number of rows in the table. | 
**Noun** |  **String** | The type of object represented in the table. | 
**Preview** |  **[]String[]** | A sample of the data in the table. | 

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsEntitlement = Initialize-PSSailpointBetaSavedSearchCompleteSearchResultsEntitlement  -Count 2 `
 -Noun entitlements `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

