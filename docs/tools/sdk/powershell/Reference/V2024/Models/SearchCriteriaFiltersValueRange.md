---
id: v2024-search-criteria-filters-value-range
title: SearchCriteriaFiltersValueRange
pagination_label: SearchCriteriaFiltersValueRange
sidebar_label: SearchCriteriaFiltersValueRange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaFiltersValueRange', 'V2024SearchCriteriaFiltersValueRange'] 
slug: /tools/sdk/powershell/v2024/models/search-criteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRange', 'V2024SearchCriteriaFiltersValueRange']
---


# SearchCriteriaFiltersValueRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | [**SearchCriteriaFiltersValueRangeLower**](search-criteria-filters-value-range-lower) |  | [optional] 
**Upper** | [**SearchCriteriaFiltersValueRangeUpper**](search-criteria-filters-value-range-upper) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValueRange = Initialize-V2024SearchCriteriaFiltersValueRange  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRange | ConvertTo-JSON
```


[[Back to top]](#) 

