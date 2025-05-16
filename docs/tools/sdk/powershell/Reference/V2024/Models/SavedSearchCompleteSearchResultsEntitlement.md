---
id: v2024-saved-search-complete-search-results-entitlement
title: SavedSearchCompleteSearchResultsEntitlement
pagination_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsEntitlement', 'V2024SavedSearchCompleteSearchResultsEntitlement'] 
slug: /tools/sdk/powershell/v2024/models/saved-search-complete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsEntitlement', 'V2024SavedSearchCompleteSearchResultsEntitlement']
---


# SavedSearchCompleteSearchResultsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | The number of rows in the table. | [required]
**Noun** | **String** | The type of object represented in the table. | [required]
**Preview** | **[]String[]** | A sample of the data in the table. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsEntitlement = Initialize-V2024SavedSearchCompleteSearchResultsEntitlement  -Count 2 `
 -Noun entitlements `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

