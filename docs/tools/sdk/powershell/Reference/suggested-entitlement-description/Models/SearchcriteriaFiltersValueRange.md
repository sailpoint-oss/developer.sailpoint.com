---
id: searchcriteria-filters-value-range
title: SearchcriteriaFiltersValueRange
pagination_label: SearchcriteriaFiltersValueRange
sidebar_label: SearchcriteriaFiltersValueRange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchcriteriaFiltersValueRange', 'SearchcriteriaFiltersValueRange'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRange', 'SearchcriteriaFiltersValueRange']
---


# SearchcriteriaFiltersValueRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | [**SearchcriteriaFiltersValueRangeLower**](searchcriteria-filters-value-range-lower) |  | [optional] 
**Upper** | [**SearchcriteriaFiltersValueRangeUpper**](searchcriteria-filters-value-range-upper) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchcriteriaFiltersValueRange = Initialize-SearchcriteriaFiltersValueRange  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$SearchcriteriaFiltersValueRange | ConvertTo-JSON
```


[[Back to top]](#) 

