---
id: searchcriteria
title: Searchcriteria
pagination_label: Searchcriteria
sidebar_label: Searchcriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Searchcriteria', 'Searchcriteria'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria
tags: ['SDK', 'Software Development Kit', 'Searchcriteria', 'Searchcriteria']
---


# Searchcriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** | **[]String** | A list of indices to search within. Must contain exactly one item, typically ""entitlements"". | [required]
**Filters** | [**map[string]SearchcriteriaFiltersValue**](searchcriteria-filters-value) | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [optional] 
**Query** | [**SearchcriteriaQuery**](searchcriteria-query) |  | [optional] 
**QueryType** | **String** | Specifies the type of query. Must be ""TEXT"" if `textQuery` is used. | [optional] 
**TextQuery** | [**SearchcriteriaTextQuery**](searchcriteria-text-query) |  | [optional] 
**IncludeNested** | **Boolean** | Whether to include nested objects in the search results. | [optional] [default to $false]
**Sort** | **[]String** | Specifies the sorting order for the results. | [optional] 
**SearchAfter** | **[]String** | Used for pagination to fetch results after a specific point. | [optional] 

## Examples

- Prepare the resource
```powershell
$Searchcriteria = Initialize-Searchcriteria  -Indices ["entitlements"] `
 -Filters {"status":{"type":"TERMS","terms":["active","inactive"]}} `
 -Query null `
 -QueryType TEXT `
 -TextQuery null `
 -IncludeNested true `
 -Sort ["name:asc","createdAt:desc"] `
 -SearchAfter ["12345","67890"]
```

- Convert the resource to JSON
```powershell
$Searchcriteria | ConvertTo-JSON
```


[[Back to top]](#) 

