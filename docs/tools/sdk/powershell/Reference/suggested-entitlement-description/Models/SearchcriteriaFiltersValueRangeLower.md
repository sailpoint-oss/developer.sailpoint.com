---
id: searchcriteria-filters-value-range-lower
title: SearchcriteriaFiltersValueRangeLower
pagination_label: SearchcriteriaFiltersValueRangeLower
sidebar_label: SearchcriteriaFiltersValueRangeLower
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchcriteriaFiltersValueRangeLower', 'SearchcriteriaFiltersValueRangeLower'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria-filters-value-range-lower
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRangeLower', 'SearchcriteriaFiltersValueRangeLower']
---


# SearchcriteriaFiltersValueRangeLower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The lower bound value. | [optional] 
**Inclusive** | **Boolean** | Whether the lower bound is inclusive. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchcriteriaFiltersValueRangeLower = Initialize-SearchcriteriaFiltersValueRangeLower  -Value 10 `
 -Inclusive true
```

- Convert the resource to JSON
```powershell
$SearchcriteriaFiltersValueRangeLower | ConvertTo-JSON
```


[[Back to top]](#) 

