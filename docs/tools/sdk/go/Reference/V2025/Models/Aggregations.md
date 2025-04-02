---
id: aggregations
title: Aggregations
pagination_label: Aggregations
sidebar_label: Aggregations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Aggregations', 'Aggregations'] 
slug: /tools/sdk/go//models/aggregations
tags: ['SDK', 'Software Development Kit', 'Aggregations', 'Aggregations']
---

# Aggregations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | Pointer to [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** | Pointer to [**MetricAggregation**](metric-aggregation) |  | [optional] 
**Filter** | Pointer to [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** | Pointer to [**BucketAggregation**](bucket-aggregation) |  | [optional] 

## Methods

### NewAggregations

`func NewAggregations() *Aggregations`

NewAggregations instantiates a new Aggregations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAggregationsWithDefaults

`func NewAggregationsWithDefaults() *Aggregations`

NewAggregationsWithDefaults instantiates a new Aggregations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNested

`func (o *Aggregations) GetNested() NestedAggregation`

GetNested returns the Nested field if non-nil, zero value otherwise.

### GetNestedOk

`func (o *Aggregations) GetNestedOk() (*NestedAggregation, bool)`

GetNestedOk returns a tuple with the Nested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNested

`func (o *Aggregations) SetNested(v NestedAggregation)`

SetNested sets Nested field to given value.

### HasNested

`func (o *Aggregations) HasNested() bool`

HasNested returns a boolean if a field has been set.

### GetMetric

`func (o *Aggregations) GetMetric() MetricAggregation`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *Aggregations) GetMetricOk() (*MetricAggregation, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *Aggregations) SetMetric(v MetricAggregation)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *Aggregations) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetFilter

`func (o *Aggregations) GetFilter() FilterAggregation`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Aggregations) GetFilterOk() (*FilterAggregation, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Aggregations) SetFilter(v FilterAggregation)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Aggregations) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetBucket

`func (o *Aggregations) GetBucket() BucketAggregation`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *Aggregations) GetBucketOk() (*BucketAggregation, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *Aggregations) SetBucket(v BucketAggregation)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *Aggregations) HasBucket() bool`

HasBucket returns a boolean if a field has been set.


