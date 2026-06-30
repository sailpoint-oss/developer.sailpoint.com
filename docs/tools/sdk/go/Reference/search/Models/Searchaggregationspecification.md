---
id: v1-searchaggregationspecification
title: Searchaggregationspecification
pagination_label: Searchaggregationspecification
sidebar_label: Searchaggregationspecification
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Searchaggregationspecification', 'V1Searchaggregationspecification'] 
slug: /tools/sdk/go/search/models/searchaggregationspecification
tags: ['SDK', 'Software Development Kit', 'Searchaggregationspecification', 'V1Searchaggregationspecification']
---

# Searchaggregationspecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | Pointer to [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**Metric** | Pointer to [**Metricaggregation**](metricaggregation) |  | [optional] 
**Filter** | Pointer to [**Filteraggregation**](filteraggregation) |  | [optional] 
**Bucket** | Pointer to [**Bucketaggregation**](bucketaggregation) |  | [optional] 
**SubAggregation** | Pointer to [**Subsearchaggregationspecification**](subsearchaggregationspecification) |  | [optional] 

## Methods

### NewSearchaggregationspecification

`func NewSearchaggregationspecification() *Searchaggregationspecification`

NewSearchaggregationspecification instantiates a new Searchaggregationspecification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchaggregationspecificationWithDefaults

`func NewSearchaggregationspecificationWithDefaults() *Searchaggregationspecification`

NewSearchaggregationspecificationWithDefaults instantiates a new Searchaggregationspecification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNested

`func (o *Searchaggregationspecification) GetNested() Nestedaggregation`

GetNested returns the Nested field if non-nil, zero value otherwise.

### GetNestedOk

`func (o *Searchaggregationspecification) GetNestedOk() (*Nestedaggregation, bool)`

GetNestedOk returns a tuple with the Nested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNested

`func (o *Searchaggregationspecification) SetNested(v Nestedaggregation)`

SetNested sets Nested field to given value.

### HasNested

`func (o *Searchaggregationspecification) HasNested() bool`

HasNested returns a boolean if a field has been set.

### GetMetric

`func (o *Searchaggregationspecification) GetMetric() Metricaggregation`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *Searchaggregationspecification) GetMetricOk() (*Metricaggregation, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *Searchaggregationspecification) SetMetric(v Metricaggregation)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *Searchaggregationspecification) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetFilter

`func (o *Searchaggregationspecification) GetFilter() Filteraggregation`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Searchaggregationspecification) GetFilterOk() (*Filteraggregation, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Searchaggregationspecification) SetFilter(v Filteraggregation)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Searchaggregationspecification) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetBucket

`func (o *Searchaggregationspecification) GetBucket() Bucketaggregation`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *Searchaggregationspecification) GetBucketOk() (*Bucketaggregation, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *Searchaggregationspecification) SetBucket(v Bucketaggregation)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *Searchaggregationspecification) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetSubAggregation

`func (o *Searchaggregationspecification) GetSubAggregation() Subsearchaggregationspecification`

GetSubAggregation returns the SubAggregation field if non-nil, zero value otherwise.

### GetSubAggregationOk

`func (o *Searchaggregationspecification) GetSubAggregationOk() (*Subsearchaggregationspecification, bool)`

GetSubAggregationOk returns a tuple with the SubAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubAggregation

`func (o *Searchaggregationspecification) SetSubAggregation(v Subsearchaggregationspecification)`

SetSubAggregation sets SubAggregation field to given value.

### HasSubAggregation

`func (o *Searchaggregationspecification) HasSubAggregation() bool`

HasSubAggregation returns a boolean if a field has been set.


