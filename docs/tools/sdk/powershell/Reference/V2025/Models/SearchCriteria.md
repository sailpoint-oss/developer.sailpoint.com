---
id: v2025-search-criteria
title: SearchCriteria
pagination_label: SearchCriteria
sidebar_label: SearchCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteria', 'V2025SearchCriteria'] 
slug: /tools/sdk/powershell/v2025/models/search-criteria
tags: ['SDK', 'Software Development Kit', 'SearchCriteria', 'V2025SearchCriteria']
---


# SearchCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** | **[]String** | A list of indices to search within. Must contain exactly one item, typically ""entitlements"". | [required]
**Filters** | [**map[string]SearchCriteriaFiltersValue**](search-criteria-filters-value) | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [optional] 
**Query** | [**SearchCriteriaQuery**](search-criteria-query) |  | [optional] 
**QueryType** | **String** | Specifies the type of query. Must be ""TEXT"" if `textQuery` is used. | [optional] 
**TextQuery** | [**SearchCriteriaTextQuery**](search-criteria-text-query) |  | [optional] 
**IncludeNested** | **Boolean** | Whether to include nested objects in the search results. | [optional] [default to $false]
**Sort** | **[]String** | Specifies the sorting order for the results. | [optional] 
**SearchAfter** | **[]String** | Used for pagination to fetch results after a specific point. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteria = Initialize-V2025SearchCriteria  -Indices [entitlements] `
 -Filters {status={type=TERMS, terms=[active, inactive]}} `
 -Query null `
 -QueryType TEXT `
 -TextQuery null `
 -IncludeNested true `
 -Sort [name:asc, createdAt:desc] `
 -SearchAfter [12345, 67890]
```

- Convert the resource to JSON
```powershell
$SearchCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

