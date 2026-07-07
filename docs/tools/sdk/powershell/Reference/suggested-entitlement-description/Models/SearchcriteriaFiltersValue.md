---
id: searchcriteria-filters-value
title: SearchcriteriaFiltersValue
pagination_label: SearchcriteriaFiltersValue
sidebar_label: SearchcriteriaFiltersValue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchcriteriaFiltersValue', 'SearchcriteriaFiltersValue'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValue', 'SearchcriteriaFiltersValue']
---


# SearchcriteriaFiltersValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type of filter, e.g., ""TERMS"" or ""RANGE"". | [optional] 
**Terms** | **[]String** | Terms to filter by (for ""TERMS"" type). | [optional] 
**Range** | [**SearchcriteriaFiltersValueRange**](searchcriteria-filters-value-range) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchcriteriaFiltersValue = Initialize-SearchcriteriaFiltersValue  -Type TERMS `
 -Terms ["active","inactive"] `
 -Range null
```

- Convert the resource to JSON
```powershell
$SearchcriteriaFiltersValue | ConvertTo-JSON
```


[[Back to top]](#) 

