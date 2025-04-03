---
id: v2025-aggregation-result
title: AggregationResult
pagination_label: AggregationResult
sidebar_label: AggregationResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AggregationResult', 'V2025AggregationResult'] 
slug: /tools/sdk/go/v2025/models/aggregation-result
tags: ['SDK', 'Software Development Kit', 'AggregationResult', 'V2025AggregationResult']
---

# AggregationResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aggregations** | Pointer to **map[string]interface{}** | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [optional] 
**Hits** | Pointer to **[]map[string]interface{}** | The results of the aggregation search query.  | [optional] 

## Methods

### NewAggregationResult

`func NewAggregationResult() *AggregationResult`

NewAggregationResult instantiates a new AggregationResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAggregationResultWithDefaults

`func NewAggregationResultWithDefaults() *AggregationResult`

NewAggregationResultWithDefaults instantiates a new AggregationResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAggregations

`func (o *AggregationResult) GetAggregations() map[string]interface{}`

GetAggregations returns the Aggregations field if non-nil, zero value otherwise.

### GetAggregationsOk

`func (o *AggregationResult) GetAggregationsOk() (*map[string]interface{}, bool)`

GetAggregationsOk returns a tuple with the Aggregations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregations

`func (o *AggregationResult) SetAggregations(v map[string]interface{})`

SetAggregations sets Aggregations field to given value.

### HasAggregations

`func (o *AggregationResult) HasAggregations() bool`

HasAggregations returns a boolean if a field has been set.

### GetHits

`func (o *AggregationResult) GetHits() []map[string]interface{}`

GetHits returns the Hits field if non-nil, zero value otherwise.

### GetHitsOk

`func (o *AggregationResult) GetHitsOk() (*[]map[string]interface{}, bool)`

GetHitsOk returns a tuple with the Hits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHits

`func (o *AggregationResult) SetHits(v []map[string]interface{})`

SetHits sets Hits field to given value.

### HasHits

`func (o *AggregationResult) HasHits() bool`

HasHits returns a boolean if a field has been set.


