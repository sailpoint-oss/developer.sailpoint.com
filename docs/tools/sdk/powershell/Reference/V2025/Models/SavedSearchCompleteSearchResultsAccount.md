---
id: v2025-saved-search-complete-search-results-account
title: SavedSearchCompleteSearchResultsAccount
pagination_label: SavedSearchCompleteSearchResultsAccount
sidebar_label: SavedSearchCompleteSearchResultsAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsAccount', 'V2025SavedSearchCompleteSearchResultsAccount'] 
slug: /tools/sdk/powershell/v2025/models/saved-search-complete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsAccount', 'V2025SavedSearchCompleteSearchResultsAccount']
---


# SavedSearchCompleteSearchResultsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | The number of rows in the table. | [required]
**Noun** | **String** | The type of object represented in the table. | [required]
**Preview** | **[]String[]** | A sample of the data in the table. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsAccount = Initialize-V2025SavedSearchCompleteSearchResultsAccount  -Count 3 `
 -Noun accounts `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsAccount | ConvertTo-JSON
```


[[Back to top]](#) 

