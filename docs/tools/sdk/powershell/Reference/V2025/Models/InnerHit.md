---
id: v2025-inner-hit
title: InnerHit
pagination_label: InnerHit
sidebar_label: InnerHit
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'InnerHit', 'V2025InnerHit'] 
slug: /tools/sdk/powershell/v2025/models/inner-hit
tags: ['SDK', 'Software Development Kit', 'InnerHit', 'V2025InnerHit']
---


# InnerHit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **String** | The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**Type** | **String** | The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document ""nested"" within another document. For example, an identity can have nested documents for access, accounts, and apps. | [required]

## Examples

- Prepare the resource
```powershell
$InnerHit = Initialize-V2025InnerHit  -Query source.name:\"Active Directory\" `
 -Type access
```

- Convert the resource to JSON
```powershell
$InnerHit | ConvertTo-JSON
```


[[Back to top]](#) 

