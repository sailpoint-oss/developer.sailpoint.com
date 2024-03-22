---
id: aggregation-result
title: AggregationResult
pagination_label: AggregationResult
sidebar_label: AggregationResult
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AggregationResult'] 
slug: /tools/sdk/powershell/v3/models/aggregation-result
tags: ['SDK', 'Software Development Kit', 'AggregationResult']
---


# AggregationResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aggregations** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [optional] 
**Hits** |  Pointer to [**[]SearchDocument**](search-document) | The results of the aggregation search query.  | [optional] 

## Examples

- Prepare the resource
```powershell
$AggregationResult = Initialize-PSSailpointAggregationResult  -Aggregations {Identity Locations&#x3D;{buckets&#x3D;[{key&#x3D;Austin, doc_count&#x3D;109}, {key&#x3D;London, doc_count&#x3D;64}, {key&#x3D;San Jose, doc_count&#x3D;27}, {key&#x3D;Brussels, doc_count&#x3D;26}, {key&#x3D;Sao Paulo, doc_count&#x3D;24}, {key&#x3D;Munich, doc_count&#x3D;23}, {key&#x3D;Singapore, doc_count&#x3D;22}, {key&#x3D;Tokyo, doc_count&#x3D;20}, {key&#x3D;Taipei, doc_count&#x3D;16}]}} `
 -Hits null
```

- Convert the resource to JSON
```powershell
$AggregationResult | ConvertTo-JSON
```


[[Back to top]](#) 

