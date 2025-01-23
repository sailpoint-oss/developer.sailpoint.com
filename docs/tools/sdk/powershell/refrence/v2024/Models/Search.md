---
id: search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Search'] 
slug: /tools/sdk/powershell/v2024/models/search
tags: ['SDK', 'Software Development Kit', 'Search']
---


# Search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** |  Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**QueryType** |  Pointer to [**QueryType**](query-type) |  | [optional] 
**QueryVersion** |  Pointer to **String** |  | [optional] 
**Query** |  Pointer to [**Query**](query) |  | [optional] 
**QueryDsl** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax. | [optional] 
**TextQuery** |  Pointer to [**TextQuery**](text-query) |  | [optional] 
**TypeAheadQuery** |  Pointer to [**TypeAheadQuery**](type-ahead-query) |  | [optional] 
**IncludeNested** |  Pointer to **Boolean** | Indicates whether nested objects from returned search results should be included. | [optional] [default to $true]
**QueryResultFilter** |  Pointer to [**QueryResultFilter**](query-result-filter) |  | [optional] 
**AggregationType** |  Pointer to [**AggregationType**](aggregation-type) |  | [optional] 
**AggregationsVersion** |  Pointer to **String** |  | [optional] 
**AggregationsDsl** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax. | [optional] 
**Aggregations** |  Pointer to [**SearchAggregationSpecification**](search-aggregation-specification) |  | [optional] 
**Sort** |  Pointer to **[]String** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 
**SearchAfter** |  Pointer to **[]String** | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set. This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value. It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging. For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example [""displayName"", ""id""].  If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is ""John Doe"", then using that displayName and ID will start a new search after this identity. The searchAfter value will look like [""John Doe"",""2c91808375d8e80a0175e1f88a575221""] | [optional] 
**Filters** |  Pointer to [**map[string]ModelFilter**](model-filter) | The filters to be applied for each filtered field name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Search = Initialize-PSSailpoint.V2024Search  -Indices [identities] `
 -QueryType null `
 -QueryVersion null `
 -Query null `
 -QueryDsl {match&#x3D;{name&#x3D;john.doe}} `
 -TextQuery null `
 -TypeAheadQuery null `
 -IncludeNested true `
 -QueryResultFilter null `
 -AggregationType null `
 -AggregationsVersion null `
 -AggregationsDsl {} `
 -Aggregations null `
 -Sort [displayName, +id] `
 -SearchAfter [John Doe, 2c91808375d8e80a0175e1f88a575221] `
 -Filters {}
```

- Convert the resource to JSON
```powershell
$Search | ConvertTo-JSON
```


[[Back to top]](#) 

