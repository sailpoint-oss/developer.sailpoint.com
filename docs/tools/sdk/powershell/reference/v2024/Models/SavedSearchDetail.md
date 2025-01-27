---
id: saved-search-detail
title: SavedSearchDetail
pagination_label: SavedSearchDetail
sidebar_label: SavedSearchDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchDetail'] 
slug: /tools/sdk/powershell/v2024/models/saved-search-detail
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetail']
---


# SavedSearchDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Modified** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Indices** |  [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | [required]
**Columns** |  Pointer to [**map[string]Column[]**](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays?view=powershell-7.4) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** |  **String** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | [required]
**Fields** |  Pointer to **[]String** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** |  Pointer to **map[string]String[]** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results.  | [optional] 
**Filters** |  Pointer to [**SavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SavedSearchDetail = Initialize-PSSailpoint.V2024SavedSearchDetail  -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Indices [identities] `
 -Columns {identity&#x3D;[{field&#x3D;displayName, header&#x3D;Display Name}, {field&#x3D;e-mail, header&#x3D;Work Email}]} `
 -Query @accounts(disabled:true) `
 -Fields [disabled] `
 -OrderBy {identity&#x3D;[lastName, firstName], role&#x3D;[name]} `
 -Sort [displayName] `
 -Filters null
```

- Convert the resource to JSON
```powershell
$SavedSearchDetail | ConvertTo-JSON
```


[[Back to top]](#) 

