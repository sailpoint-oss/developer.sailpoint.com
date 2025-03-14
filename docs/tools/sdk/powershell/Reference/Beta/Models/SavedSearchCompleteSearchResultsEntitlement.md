---
id: beta-saved-search-complete-search-results-entitlement
title: SavedSearchCompleteSearchResultsEntitlement
pagination_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsEntitlement', 'BetaSavedSearchCompleteSearchResultsEntitlement'] 
slug: /tools/sdk/powershell/beta/models/saved-search-complete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsEntitlement', 'BetaSavedSearchCompleteSearchResultsEntitlement']
---


# SavedSearchCompleteSearchResultsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | Number of rows in the table. | [required]
**Noun** | **String** | Type of object represented in the table. | [required]
**Preview** | **[]String[]** | Sample of table data. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsEntitlement = Initialize-PSSailpoint.BetaSavedSearchCompleteSearchResultsEntitlement  -Count 2 `
 -Noun entitlements `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

