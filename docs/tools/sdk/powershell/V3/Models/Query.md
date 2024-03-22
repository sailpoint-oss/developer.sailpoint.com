---
id: query
title: Query
pagination_label: Query
sidebar_label: Query
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Query'] 
slug: /tools/sdk/powershell/v3/models/query
tags: ['SDK', 'Software Development Kit', 'Query']
---


# Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** |  Pointer to **String** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [optional] 
**Fields** |  Pointer to **[]String** | The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of &quot;&quot;a*&quot;&quot; to be applied to &quot;&quot;name&quot;&quot;, &quot;&quot;firstName&quot;&quot;, and the &quot;&quot;source.name&quot;&quot;.  The response will include all results matching the &quot;&quot;a*&quot;&quot; query found in those three fields.  A field&#39;s availability depends on the indices being searched.  For example, if you are searching &quot;&quot;identities&quot;&quot;, you can apply your search to the &quot;&quot;firstName&quot;&quot; field, but you couldn&#39;t use &quot;&quot;firstName&quot;&quot; with a search on &quot;&quot;access profiles&quot;&quot;.  Refer to the response schema for the respective lists of available fields.  | [optional] 
**TimeZone** |  Pointer to **String** | The time zone to be applied to any range query related to dates. | [optional] 
**InnerHit** |  Pointer to [**InnerHit**](inner-hit) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Query = Initialize-PSSailpointQuery  -Query name:a* `
 -Fields [name] `
 -TimeZone America/Chicago `
 -InnerHit null
```

- Convert the resource to JSON
```powershell
$Query | ConvertTo-JSON
```


[[Back to top]](#) 

