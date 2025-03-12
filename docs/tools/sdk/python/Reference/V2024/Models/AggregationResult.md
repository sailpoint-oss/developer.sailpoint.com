---
id: v2024-aggregation-result
title: AggregationResult
pagination_label: AggregationResult
sidebar_label: AggregationResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AggregationResult', 'V2024AggregationResult'] 
slug: /tools/sdk/python/v2024/models/aggregation-result
tags: ['SDK', 'Software Development Kit', 'AggregationResult', 'V2024AggregationResult']
---

# AggregationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | **object** | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [optional] 
**hits** | **[]object** | The results of the aggregation search query.  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.aggregation_result import AggregationResult

aggregation_result = AggregationResult(
aggregations={Identity Locations={buckets=[{key=Austin, doc_count=109}, {key=London, doc_count=64}, {key=San Jose, doc_count=27}, {key=Brussels, doc_count=26}, {key=Sao Paulo, doc_count=24}, {key=Munich, doc_count=23}, {key=Singapore, doc_count=22}, {key=Tokyo, doc_count=20}, {key=Taipei, doc_count=16}]}},
hits=[
                    sailpoint.v2024.models.search_documents.SearchDocuments()
                    ]
)

```
[[Back to top]](#) 

