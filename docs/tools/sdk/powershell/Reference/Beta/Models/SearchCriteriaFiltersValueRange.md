---
id: beta-search-criteria-filters-value-range
title: SearchCriteriaFiltersValueRange
pagination_label: SearchCriteriaFiltersValueRange
sidebar_label: SearchCriteriaFiltersValueRange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaFiltersValueRange', 'BetaSearchCriteriaFiltersValueRange'] 
slug: /tools/sdk/powershell/beta/models/search-criteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRange', 'BetaSearchCriteriaFiltersValueRange']
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
$SearchCriteriaFiltersValueRange = Initialize-BetaSearchCriteriaFiltersValueRange  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRange | ConvertTo-JSON
```


[[Back to top]](#) 

