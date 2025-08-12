---
id: v2025-search-criteria-filters-value-range-upper
title: SearchCriteriaFiltersValueRangeUpper
pagination_label: SearchCriteriaFiltersValueRangeUpper
sidebar_label: SearchCriteriaFiltersValueRangeUpper
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaFiltersValueRangeUpper', 'V2025SearchCriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/powershell/v2025/models/search-criteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeUpper', 'V2025SearchCriteriaFiltersValueRangeUpper']
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
$SearchCriteriaFiltersValueRangeUpper = Initialize-V2025SearchCriteriaFiltersValueRangeUpper  -Value 20 `
 -Inclusive false
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRangeUpper | ConvertTo-JSON
```


[[Back to top]](#) 

