---
id: v2024-saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchDetailFilters', 'V2024SavedSearchDetailFilters'] 
slug: /tools/sdk/powershell/v2024/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters', 'V2024SavedSearchDetailFilters']
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
$SavedSearchDetailFilters = Initialize-V2024SavedSearchDetailFilters  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$SavedSearchDetailFilters | ConvertTo-JSON
```


[[Back to top]](#) 

