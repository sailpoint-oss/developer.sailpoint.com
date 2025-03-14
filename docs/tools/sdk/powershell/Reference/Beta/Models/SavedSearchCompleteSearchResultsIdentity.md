---
id: beta-saved-search-complete-search-results-identity
title: SavedSearchCompleteSearchResultsIdentity
pagination_label: SavedSearchCompleteSearchResultsIdentity
sidebar_label: SavedSearchCompleteSearchResultsIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsIdentity', 'BetaSavedSearchCompleteSearchResultsIdentity'] 
slug: /tools/sdk/powershell/beta/models/saved-search-complete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsIdentity', 'BetaSavedSearchCompleteSearchResultsIdentity']
---


# SavedSearchCompleteSearchResultsIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | Number of rows in the table. | [required]
**Noun** | **String** | Type of object represented in the table. | [required]
**Preview** | **[]String[]** | Sample of the table data. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsIdentity = Initialize-PSSailpoint.BetaSavedSearchCompleteSearchResultsIdentity  -Count 2 `
 -Noun identities `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

