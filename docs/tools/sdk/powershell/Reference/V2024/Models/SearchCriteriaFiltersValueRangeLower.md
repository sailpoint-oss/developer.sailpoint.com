---
id: v2024-search-criteria-filters-value-range-lower
title: SearchCriteriaFiltersValueRangeLower
pagination_label: SearchCriteriaFiltersValueRangeLower
sidebar_label: SearchCriteriaFiltersValueRangeLower
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaFiltersValueRangeLower', 'V2024SearchCriteriaFiltersValueRangeLower'] 
slug: /tools/sdk/powershell/v2024/models/search-criteria-filters-value-range-lower
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeLower', 'V2024SearchCriteriaFiltersValueRangeLower']
---


# SearchCriteriaFiltersValueRangeLower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The lower bound value. | [optional] 
**Inclusive** | **Boolean** | Whether the lower bound is inclusive. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValueRangeLower = Initialize-V2024SearchCriteriaFiltersValueRangeLower  -Value 10 `
 -Inclusive true
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRangeLower | ConvertTo-JSON
```


[[Back to top]](#) 

