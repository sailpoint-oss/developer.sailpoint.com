---
id: sub-search-aggregation-specification
title: SubSearchAggregationSpecification
pagination_label: SubSearchAggregationSpecification
sidebar_label: SubSearchAggregationSpecification
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SubSearchAggregationSpecification', 'SubSearchAggregationSpecification'] 
slug: /tools/sdk/go/v3/models/sub-search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SubSearchAggregationSpecification', 'SubSearchAggregationSpecification']
---

# SubSearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | Pointer to [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** | Pointer to [**MetricAggregation**](metric-aggregation) |  | [optional] 
**Filter** | Pointer to [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** | Pointer to [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** | Pointer to [**Aggregations**](aggregations) |  | [optional] 

## Methods

### NewSubSearchAggregationSpecification

`func NewSubSearchAggregationSpecification() *SubSearchAggregationSpecification`

NewSubSearchAggregationSpecification instantiates a new SubSearchAggregationSpecification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubSearchAggregationSpecificationWithDefaults

`func NewSubSearchAggregationSpecificationWithDefaults() *SubSearchAggregationSpecification`

NewSubSearchAggregationSpecificationWithDefaults instantiates a new SubSearchAggregationSpecification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNested

`func (o *SubSearchAggregationSpecification) GetNested() NestedAggregation`

GetNested returns the Nested field if non-nil, zero value otherwise.

### GetNestedOk

`func (o *SubSearchAggregationSpecification) GetNestedOk() (*NestedAggregation, bool)`

GetNestedOk returns a tuple with the Nested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNested

`func (o *SubSearchAggregationSpecification) SetNested(v NestedAggregation)`

SetNested sets Nested field to given value.

### HasNested

`func (o *SubSearchAggregationSpecification) HasNested() bool`

HasNested returns a boolean if a field has been set.

### GetMetric

`func (o *SubSearchAggregationSpecification) GetMetric() MetricAggregation`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *SubSearchAggregationSpecification) GetMetricOk() (*MetricAggregation, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *SubSearchAggregationSpecification) SetMetric(v MetricAggregation)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *SubSearchAggregationSpecification) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetFilter

`func (o *SubSearchAggregationSpecification) GetFilter() FilterAggregation`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *SubSearchAggregationSpecification) GetFilterOk() (*FilterAggregation, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *SubSearchAggregationSpecification) SetFilter(v FilterAggregation)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *SubSearchAggregationSpecification) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetBucket

`func (o *SubSearchAggregationSpecification) GetBucket() BucketAggregation`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *SubSearchAggregationSpecification) GetBucketOk() (*BucketAggregation, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *SubSearchAggregationSpecification) SetBucket(v BucketAggregation)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *SubSearchAggregationSpecification) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetSubAggregation

`func (o *SubSearchAggregationSpecification) GetSubAggregation() Aggregations`

GetSubAggregation returns the SubAggregation field if non-nil, zero value otherwise.

### GetSubAggregationOk

`func (o *SubSearchAggregationSpecification) GetSubAggregationOk() (*Aggregations, bool)`

GetSubAggregationOk returns a tuple with the SubAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubAggregation

`func (o *SubSearchAggregationSpecification) SetSubAggregation(v Aggregations)`

SetSubAggregation sets SubAggregation field to given value.

### HasSubAggregation

`func (o *SubSearchAggregationSpecification) HasSubAggregation() bool`

HasSubAggregation returns a boolean if a field has been set.


