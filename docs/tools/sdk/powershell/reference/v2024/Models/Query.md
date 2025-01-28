---
id: v2024-query
title: Query
pagination_label: Query
sidebar_label: Query
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Query', 'V2024Query'] 
slug: /tools/sdk/powershell/v2024/models/query
tags: ['SDK', 'Software Development Kit', 'Query', 'V2024Query']
---


# Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** |  Pointer to **String** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [optional] 
**Fields** |  Pointer to **String** | The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of ""a*"" to be applied to ""name"", ""firstName"", and the ""source.name"".  The response will include all results matching the ""a*"" query found in those three fields.  A field's availability depends on the indices being searched.  For example, if you are searching ""identities"", you can apply your search to the ""firstName"" field, but you couldn't use ""firstName"" with a search on ""access profiles"".  Refer to the response schema for the respective lists of available fields.  | [optional] 
**TimeZone** |  Pointer to **String** | The time zone to be applied to any range query related to dates. | [optional] 
**InnerHit** |  Pointer to [**InnerHit**](inner-hit) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Query = Initialize-PSSailpoint.V2024Query  -Query name:a* `
 -Fields [firstName,lastName,email] `
 -TimeZone America/Chicago `
 -InnerHit null
```

- Convert the resource to JSON
```powershell
$Query | ConvertTo-JSON
```


[[Back to top]](#) 

