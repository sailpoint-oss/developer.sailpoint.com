---
id: aggregationresult
title: Aggregationresult
pagination_label: Aggregationresult
sidebar_label: Aggregationresult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Aggregationresult', 'Aggregationresult'] 
slug: /tools/sdk/python/search/models/aggregationresult
tags: ['SDK', 'Software Development Kit', 'Aggregationresult', 'Aggregationresult']
---

# Aggregationresult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | **object** | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [optional] 
**hits** | **[]object** | The results of the aggregation search query.  | [optional] 
}

## Example

```python
from sailpoint.search.models.aggregationresult import Aggregationresult

aggregationresult = Aggregationresult(
aggregations={"Identity Locations":{"buckets":[{"key":"Austin","doc_count":109},{"key":"London","doc_count":64},{"key":"San Jose","doc_count":27},{"key":"Brussels","doc_count":26},{"key":"Sao Paulo","doc_count":24},{"key":"Munich","doc_count":23},{"key":"Singapore","doc_count":22},{"key":"Tokyo","doc_count":20},{"key":"Taipei","doc_count":16}]}},
hits=[
                    sailpoint.search.models.searchdocuments.searchdocuments()
                    ]
)

```
[[Back to top]](#) 

