---
id: v2024-create-saved-search-request
title: CreateSavedSearchRequest
pagination_label: CreateSavedSearchRequest
sidebar_label: CreateSavedSearchRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateSavedSearchRequest', 'V2024CreateSavedSearchRequest'] 
slug: /tools/sdk/powershell/v2024/models/create-saved-search-request
tags: ['SDK', 'Software Development Kit', 'CreateSavedSearchRequest', 'V2024CreateSavedSearchRequest']
---


# CreateSavedSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the saved search.  | [optional] 
**Description** | **String** | The description of the saved search.  | [optional] 
**Created** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Modified** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | [required]
**Columns** | [**map[string]Column[]**](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays?view=powershell-7.4) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** | **String** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | [required]
**Fields** | **[]String** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** | **map[string]String[]** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**Sort** | **[]String** | The fields to be used to sort the search results.  | [optional] 
**Filters** | [**SavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateSavedSearchRequest = Initialize-PSSailpoint.V2024CreateSavedSearchRequest  -Name Disabled accounts `
 -Description Disabled accounts `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Indices [identities] `
 -Columns {identity=[{field=displayName, header=Display Name}, {field=e-mail, header=Work Email}]} `
 -Query @accounts(disabled:true) `
 -Fields [disabled] `
 -OrderBy {identity=[lastName, firstName], role=[name]} `
 -Sort [displayName] `
 -Filters null
```

- Convert the resource to JSON
```powershell
$CreateSavedSearchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

