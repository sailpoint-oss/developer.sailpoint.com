---
id: beta-saved-search-complete-search-results-account
title: SavedSearchCompleteSearchResultsAccount
pagination_label: SavedSearchCompleteSearchResultsAccount
sidebar_label: SavedSearchCompleteSearchResultsAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsAccount', 'BetaSavedSearchCompleteSearchResultsAccount'] 
slug: /tools/sdk/powershell/beta/models/saved-search-complete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsAccount', 'BetaSavedSearchCompleteSearchResultsAccount']
---


# SavedSearchCompleteSearchResultsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | Number of rows in the table. | [required]
**Noun** | **String** | Type of object represented in the table. | [required]
**Preview** | **[]String[]** | Sample of table data. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsAccount = Initialize-PSSailpoint.BetaSavedSearchCompleteSearchResultsAccount  -Count 3 `
 -Noun accounts `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsAccount | ConvertTo-JSON
```


[[Back to top]](#) 

