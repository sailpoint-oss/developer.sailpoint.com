---
id: v1-aggregations
title: Aggregations
pagination_label: Aggregations
sidebar_label: Aggregations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Aggregations', 'V1Aggregations'] 
slug: /tools/sdk/go/accessmodelmetadata/models/aggregations
tags: ['SDK', 'Software Development Kit', 'Aggregations', 'V1Aggregations']
---

# Aggregations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | Pointer to [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**Metric** | Pointer to [**Metricaggregation**](metricaggregation) |  | [optional] 
**Filter** | Pointer to [**Filteraggregation**](filteraggregation) |  | [optional] 
**Bucket** | Pointer to [**Bucketaggregation**](bucketaggregation) |  | [optional] 

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

`func (o *Aggregations) GetNested() Nestedaggregation`

GetNested returns the Nested field if non-nil, zero value otherwise.

### GetNestedOk

`func (o *Aggregations) GetNestedOk() (*Nestedaggregation, bool)`

GetNestedOk returns a tuple with the Nested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNested

`func (o *Aggregations) SetNested(v Nestedaggregation)`

SetNested sets Nested field to given value.

### HasNested

`func (o *Aggregations) HasNested() bool`

HasNested returns a boolean if a field has been set.

### GetMetric

`func (o *Aggregations) GetMetric() Metricaggregation`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *Aggregations) GetMetricOk() (*Metricaggregation, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *Aggregations) SetMetric(v Metricaggregation)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *Aggregations) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetFilter

`func (o *Aggregations) GetFilter() Filteraggregation`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Aggregations) GetFilterOk() (*Filteraggregation, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Aggregations) SetFilter(v Filteraggregation)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Aggregations) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetBucket

`func (o *Aggregations) GetBucket() Bucketaggregation`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *Aggregations) GetBucketOk() (*Bucketaggregation, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *Aggregations) SetBucket(v Bucketaggregation)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *Aggregations) HasBucket() bool`

HasBucket returns a boolean if a field has been set.


