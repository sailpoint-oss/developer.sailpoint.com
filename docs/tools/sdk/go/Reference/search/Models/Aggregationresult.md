---
id: v1-aggregationresult
title: Aggregationresult
pagination_label: Aggregationresult
sidebar_label: Aggregationresult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Aggregationresult', 'V1Aggregationresult'] 
slug: /tools/sdk/go/search/models/aggregationresult
tags: ['SDK', 'Software Development Kit', 'Aggregationresult', 'V1Aggregationresult']
---

# Aggregationresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aggregations** | Pointer to **map[string]interface{}** | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [optional] 
**Hits** | Pointer to **[]map[string]interface{}** | The results of the aggregation search query.  | [optional] 

## Methods

### NewAggregationresult

`func NewAggregationresult() *Aggregationresult`

NewAggregationresult instantiates a new Aggregationresult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAggregationresultWithDefaults

`func NewAggregationresultWithDefaults() *Aggregationresult`

NewAggregationresultWithDefaults instantiates a new Aggregationresult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAggregations

`func (o *Aggregationresult) GetAggregations() map[string]interface{}`

GetAggregations returns the Aggregations field if non-nil, zero value otherwise.

### GetAggregationsOk

`func (o *Aggregationresult) GetAggregationsOk() (*map[string]interface{}, bool)`

GetAggregationsOk returns a tuple with the Aggregations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregations

`func (o *Aggregationresult) SetAggregations(v map[string]interface{})`

SetAggregations sets Aggregations field to given value.

### HasAggregations

`func (o *Aggregationresult) HasAggregations() bool`

HasAggregations returns a boolean if a field has been set.

### GetHits

`func (o *Aggregationresult) GetHits() []map[string]interface{}`

GetHits returns the Hits field if non-nil, zero value otherwise.

### GetHitsOk

`func (o *Aggregationresult) GetHitsOk() (*[]map[string]interface{}, bool)`

GetHitsOk returns a tuple with the Hits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHits

`func (o *Aggregationresult) SetHits(v []map[string]interface{})`

SetHits sets Hits field to given value.

### HasHits

`func (o *Aggregationresult) HasHits() bool`

HasHits returns a boolean if a field has been set.


