---
id: v2025-type-ahead-query
title: TypeAheadQuery
pagination_label: TypeAheadQuery
sidebar_label: TypeAheadQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TypeAheadQuery', 'V2025TypeAheadQuery'] 
slug: /tools/sdk/powershell/v2025/models/type-ahead-query
tags: ['SDK', 'Software Development Kit', 'TypeAheadQuery', 'V2025TypeAheadQuery']
---


# TypeAheadQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **String** | The type ahead query string used to construct a phrase prefix match query. | [required]
**Field** | **String** | The field on which to perform the type ahead search. | [required]
**NestedType** | **String** | The nested type. | [optional] 
**MaxExpansions** | **Int32** | The number of suffixes the last term will be expanded into. Influences the performance of the query and the number results returned. Valid values: 1 to 1000. | [optional] [default to 10]
**Size** | **Int32** | The max amount of records the search will return. | [optional] [default to 100]
**Sort** | **String** | The sort order of the returned records. | [optional] [default to "desc"]
**SortByValue** | **Boolean** | The flag that defines the sort type, by count or value. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$TypeAheadQuery = Initialize-PSSailpoint.V2025TypeAheadQuery  -Query Work `
 -Field source.name `
 -NestedType access `
 -MaxExpansions 10 `
 -Size 100 `
 -Sort asc `
 -SortByValue true
```

- Convert the resource to JSON
```powershell
$TypeAheadQuery | ConvertTo-JSON
```


[[Back to top]](#) 

