---
id: v2024-saved-search-complete-search-results-account
title: SavedSearchCompleteSearchResultsAccount
pagination_label: SavedSearchCompleteSearchResultsAccount
sidebar_label: SavedSearchCompleteSearchResultsAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsAccount', 'V2024SavedSearchCompleteSearchResultsAccount'] 
slug: /tools/sdk/powershell/v2024/models/saved-search-complete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsAccount', 'V2024SavedSearchCompleteSearchResultsAccount']
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
$SavedSearchCompleteSearchResultsAccount = Initialize-PSSailpoint.V2024SavedSearchCompleteSearchResultsAccount  -Count 3 `
 -Noun accounts `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsAccount | ConvertTo-JSON
```


[[Back to top]](#) 

