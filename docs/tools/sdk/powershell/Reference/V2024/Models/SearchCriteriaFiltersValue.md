---
id: v2024-search-criteria-filters-value
title: SearchCriteriaFiltersValue
pagination_label: SearchCriteriaFiltersValue
sidebar_label: SearchCriteriaFiltersValue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaFiltersValue', 'V2024SearchCriteriaFiltersValue'] 
slug: /tools/sdk/powershell/v2024/models/search-criteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValue', 'V2024SearchCriteriaFiltersValue']
---


# SearchCriteriaFiltersValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type of filter, e.g., ""TERMS"" or ""RANGE"". | [optional] 
**Terms** | **[]String** | Terms to filter by (for ""TERMS"" type). | [optional] 
**Range** | [**SearchCriteriaFiltersValueRange**](search-criteria-filters-value-range) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValue = Initialize-V2024SearchCriteriaFiltersValue  -Type TERMS `
 -Terms [active, inactive] `
 -Range null
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValue | ConvertTo-JSON
```


[[Back to top]](#) 

