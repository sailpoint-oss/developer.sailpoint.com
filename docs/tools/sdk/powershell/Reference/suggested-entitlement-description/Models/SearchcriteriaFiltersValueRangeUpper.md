---
id: searchcriteria-filters-value-range-upper
title: SearchcriteriaFiltersValueRangeUpper
pagination_label: SearchcriteriaFiltersValueRangeUpper
sidebar_label: SearchcriteriaFiltersValueRangeUpper
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchcriteriaFiltersValueRangeUpper', 'SearchcriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRangeUpper', 'SearchcriteriaFiltersValueRangeUpper']
---


# SearchcriteriaFiltersValueRangeUpper

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The upper bound value. | [optional] 
**Inclusive** | **Boolean** | Whether the upper bound is inclusive. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchcriteriaFiltersValueRangeUpper = Initialize-SearchcriteriaFiltersValueRangeUpper  -Value 20 `
 -Inclusive false
```

- Convert the resource to JSON
```powershell
$SearchcriteriaFiltersValueRangeUpper | ConvertTo-JSON
```


[[Back to top]](#) 

