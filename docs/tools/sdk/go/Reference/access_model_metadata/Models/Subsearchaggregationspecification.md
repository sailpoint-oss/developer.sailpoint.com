---
id: v1-subsearchaggregationspecification
title: Subsearchaggregationspecification
pagination_label: Subsearchaggregationspecification
sidebar_label: Subsearchaggregationspecification
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Subsearchaggregationspecification', 'V1Subsearchaggregationspecification'] 
slug: /tools/sdk/go/accessmodelmetadata/models/subsearchaggregationspecification
tags: ['SDK', 'Software Development Kit', 'Subsearchaggregationspecification', 'V1Subsearchaggregationspecification']
---

# Subsearchaggregationspecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | Pointer to [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**Metric** | Pointer to [**Metricaggregation**](metricaggregation) |  | [optional] 
**Filter** | Pointer to [**Filteraggregation**](filteraggregation) |  | [optional] 
**Bucket** | Pointer to [**Bucketaggregation**](bucketaggregation) |  | [optional] 
**SubAggregation** | Pointer to [**Aggregations**](aggregations) |  | [optional] 

## Methods

### NewSubsearchaggregationspecification

`func NewSubsearchaggregationspecification() *Subsearchaggregationspecification`

NewSubsearchaggregationspecification instantiates a new Subsearchaggregationspecification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubsearchaggregationspecificationWithDefaults

`func NewSubsearchaggregationspecificationWithDefaults() *Subsearchaggregationspecification`

NewSubsearchaggregationspecificationWithDefaults instantiates a new Subsearchaggregationspecification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNested

`func (o *Subsearchaggregationspecification) GetNested() Nestedaggregation`

GetNested returns the Nested field if non-nil, zero value otherwise.

### GetNestedOk

`func (o *Subsearchaggregationspecification) GetNestedOk() (*Nestedaggregation, bool)`

GetNestedOk returns a tuple with the Nested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNested

`func (o *Subsearchaggregationspecification) SetNested(v Nestedaggregation)`

SetNested sets Nested field to given value.

### HasNested

`func (o *Subsearchaggregationspecification) HasNested() bool`

HasNested returns a boolean if a field has been set.

### GetMetric

`func (o *Subsearchaggregationspecification) GetMetric() Metricaggregation`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *Subsearchaggregationspecification) GetMetricOk() (*Metricaggregation, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *Subsearchaggregationspecification) SetMetric(v Metricaggregation)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *Subsearchaggregationspecification) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetFilter

`func (o *Subsearchaggregationspecification) GetFilter() Filteraggregation`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Subsearchaggregationspecification) GetFilterOk() (*Filteraggregation, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Subsearchaggregationspecification) SetFilter(v Filteraggregation)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Subsearchaggregationspecification) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetBucket

`func (o *Subsearchaggregationspecification) GetBucket() Bucketaggregation`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *Subsearchaggregationspecification) GetBucketOk() (*Bucketaggregation, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *Subsearchaggregationspecification) SetBucket(v Bucketaggregation)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *Subsearchaggregationspecification) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetSubAggregation

`func (o *Subsearchaggregationspecification) GetSubAggregation() Aggregations`

GetSubAggregation returns the SubAggregation field if non-nil, zero value otherwise.

### GetSubAggregationOk

`func (o *Subsearchaggregationspecification) GetSubAggregationOk() (*Aggregations, bool)`

GetSubAggregationOk returns a tuple with the SubAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubAggregation

`func (o *Subsearchaggregationspecification) SetSubAggregation(v Aggregations)`

SetSubAggregation sets SubAggregation field to given value.

### HasSubAggregation

`func (o *Subsearchaggregationspecification) HasSubAggregation() bool`

HasSubAggregation returns a boolean if a field has been set.


