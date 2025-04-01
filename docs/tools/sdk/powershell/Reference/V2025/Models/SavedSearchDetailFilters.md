---
id: v2025-saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchDetailFilters', 'V2025SavedSearchDetailFilters'] 
slug: /tools/sdk/powershell/v2025/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters', 'V2025SavedSearchDetailFilters']
---


# SavedSearchDetailFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**FilterType**](filter-type) |  | [optional] 
**Range** | [**Range**](range) |  | [optional] 
**Terms** | **[]String** | The terms to be filtered. | [optional] 
**Exclude** | **Boolean** | Indicates if the filter excludes results. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SavedSearchDetailFilters = Initialize-PSSailpoint.V2025SavedSearchDetailFilters  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$SavedSearchDetailFilters | ConvertTo-JSON
```


[[Back to top]](#) 

