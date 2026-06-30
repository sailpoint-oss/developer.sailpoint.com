---
id: v1-search-v1
title: SearchV1
pagination_label: SearchV1
sidebar_label: SearchV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SearchV1', 'v1SearchV1']
slug: /tools/sdk/typescript/search/models/search-v1
tags: ['SDK', 'Software Development Kit', 'SearchV1', 'v1SearchV1']
---

# SearchV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | **(optional)** `Array<IndexV1>` | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [default to undefined]
**queryType** | **(optional)** `QuerytypeV1` |  | [default to undefined]
**queryVersion** | **(optional)** `string` |  | [default to undefined]
**query** | **(optional)** `QueryV1` |  | [default to undefined]
**queryDsl** | **(optional)** `object` | The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax. | [default to undefined]
**textQuery** | **(optional)** `TextqueryV1` |  | [default to undefined]
**typeAheadQuery** | **(optional)** `TypeaheadqueryV1` |  | [default to undefined]
**includeNested** | **(optional)** `boolean` | Indicates whether nested objects from returned search results should be included. | [default to true]
**queryResultFilter** | **(optional)** `QueryresultfilterV1` |  | [default to undefined]
**aggregationType** | **(optional)** `AggregationtypeV1` |  | [default to undefined]
**aggregationsVersion** | **(optional)** `string` |  | [default to undefined]
**aggregationsDsl** | **(optional)** `object` | The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax. | [default to undefined]
**aggregations** | **(optional)** `SearchaggregationspecificationV1` |  | [default to undefined]
**sort** | **(optional)** `Array<string>` | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [default to undefined]
**searchAfter** | **(optional)** `Array<string>` | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set. This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value. It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\'t get duplicate results while paging. For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example [\"displayName\", \"id\"].  If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is \"John Doe\", then using that displayName and ID will start a new search after this identity. The searchAfter value will look like [\"John Doe\",\"2c91808375d8e80a0175e1f88a575221\"] | [default to undefined]
**filters** | **(optional)**  | The filters to be applied for each filtered field name. | [default to undefined]

