---
id: aggregationresult
title: Aggregationresult
pagination_label: Aggregationresult
sidebar_label: Aggregationresult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Aggregationresult', 'Aggregationresult'] 
slug: /tools/sdk/powershell/search/models/aggregationresult
tags: ['SDK', 'Software Development Kit', 'Aggregationresult', 'Aggregationresult']
---


# Aggregationresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aggregations** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [optional] 
**Hits** | [**[]Searchdocuments**](searchdocuments) | The results of the aggregation search query.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Aggregationresult = Initialize-Aggregationresult  -Aggregations {"Identity Locations":{"buckets":[{"key":"Austin","doc_count":109},{"key":"London","doc_count":64},{"key":"San Jose","doc_count":27},{"key":"Brussels","doc_count":26},{"key":"Sao Paulo","doc_count":24},{"key":"Munich","doc_count":23},{"key":"Singapore","doc_count":22},{"key":"Tokyo","doc_count":20},{"key":"Taipei","doc_count":16}]}} `
 -Hits null
```

- Convert the resource to JSON
```powershell
$Aggregationresult | ConvertTo-JSON
```


[[Back to top]](#) 

