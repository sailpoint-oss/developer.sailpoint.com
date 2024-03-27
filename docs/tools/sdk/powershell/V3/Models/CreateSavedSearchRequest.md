---
id: create-saved-search-request
title: CreateSavedSearchRequest
pagination_label: CreateSavedSearchRequest
sidebar_label: CreateSavedSearchRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreateSavedSearchRequest'] 
slug: /tools/sdk/powershell/v3/models/create-saved-search-request
tags: ['SDK', 'Software Development Kit', 'CreateSavedSearchRequest']
---


# CreateSavedSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the saved search.  | [optional] 
**Description** |  Pointer to **String** | The description of the saved search.  | [optional] 
**Created** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Modified** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Indices** |  [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | 
**Columns** |  Pointer to [**map[string][]Column**] | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** |  **String** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | 
**Fields** |  Pointer to **[]String** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** |  Pointer to **map[string]String[]** | Sort by index. This takes precedence over the &#x60;sort&#x60; property.  | [optional] 
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results.  | [optional] 
**Filters** |  Pointer to [**SavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateSavedSearchRequest = Initialize-PSSailpointCreateSavedSearchRequest  -Name Disabled accounts `
 -Description Disabled accounts `
 -Created 2018-06-25T20:22:28.104Z `
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
$CreateSavedSearchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

