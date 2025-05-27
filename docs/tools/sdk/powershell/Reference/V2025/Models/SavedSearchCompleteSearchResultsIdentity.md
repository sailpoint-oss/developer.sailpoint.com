---
id: v2025-saved-search-complete-search-results-identity
title: SavedSearchCompleteSearchResultsIdentity
pagination_label: SavedSearchCompleteSearchResultsIdentity
sidebar_label: SavedSearchCompleteSearchResultsIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchCompleteSearchResultsIdentity', 'V2025SavedSearchCompleteSearchResultsIdentity'] 
slug: /tools/sdk/powershell/v2025/models/saved-search-complete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsIdentity', 'V2025SavedSearchCompleteSearchResultsIdentity']
---


# SavedSearchCompleteSearchResultsIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | The number of rows in the table. | [required]
**Noun** | **String** | The type of object represented in the table. | [required]
**Preview** | **[]String[]** | A sample of the data in the table. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsIdentity = Initialize-V2025SavedSearchCompleteSearchResultsIdentity  -Count 2 `
 -Noun identities `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

