---
id: saved-search-complete-search-results-identity
title: SavedSearchCompleteSearchResultsIdentity
pagination_label: SavedSearchCompleteSearchResultsIdentity
sidebar_label: SavedSearchCompleteSearchResultsIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SavedSearchCompleteSearchResultsIdentity'] 
slug: /tools/sdk/powershell/beta/models/saved-search-complete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsIdentity']
---


# SavedSearchCompleteSearchResultsIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  **String** | The number of rows in the table. | 
**Noun** |  **String** | The type of object represented in the table. | 
**Preview** |  **[]String[]** | A sample of the data in the table. | 

## Examples

- Prepare the resource
```powershell
$SavedSearchCompleteSearchResultsIdentity = Initialize-PSSailpointBetaSavedSearchCompleteSearchResultsIdentity  -Count 2 `
 -Noun identities `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedSearchCompleteSearchResultsIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

