---
id: v2024-search-criteria-filters-value-range-upper
title: SearchCriteriaFiltersValueRangeUpper
pagination_label: SearchCriteriaFiltersValueRangeUpper
sidebar_label: SearchCriteriaFiltersValueRangeUpper
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaFiltersValueRangeUpper', 'V2024SearchCriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/powershell/v2024/models/search-criteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeUpper', 'V2024SearchCriteriaFiltersValueRangeUpper']
---


# SearchCriteriaFiltersValueRangeUpper

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The upper bound value. | [optional] 
**Inclusive** | **Boolean** | Whether the upper bound is inclusive. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValueRangeUpper = Initialize-V2024SearchCriteriaFiltersValueRangeUpper  -Value 20 `
 -Inclusive false
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRangeUpper | ConvertTo-JSON
```


[[Back to top]](#) 

