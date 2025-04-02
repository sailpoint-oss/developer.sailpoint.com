---
id: search-aggregation-specification
title: SearchAggregationSpecification
pagination_label: SearchAggregationSpecification
sidebar_label: SearchAggregationSpecification
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchAggregationSpecification', 'SearchAggregationSpecification'] 
slug: /tools/sdk/go//models/search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SearchAggregationSpecification', 'SearchAggregationSpecification']
---

# SearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | Pointer to [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** | Pointer to [**MetricAggregation**](metric-aggregation) |  | [optional] 
**Filter** | Pointer to [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** | Pointer to [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** | Pointer to [**SubSearchAggregationSpecification**](sub-search-aggregation-specification) |  | [optional] 

## Methods

### NewSearchAggregationSpecification

`func NewSearchAggregationSpecification() *SearchAggregationSpecification`

NewSearchAggregationSpecification instantiates a new SearchAggregationSpecification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAggregationSpecificationWithDefaults

`func NewSearchAggregationSpecificationWithDefaults() *SearchAggregationSpecification`

NewSearchAggregationSpecificationWithDefaults instantiates a new SearchAggregationSpecification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNested

`func (o *SearchAggregationSpecification) GetNested() NestedAggregation`

GetNested returns the Nested field if non-nil, zero value otherwise.

### GetNestedOk

`func (o *SearchAggregationSpecification) GetNestedOk() (*NestedAggregation, bool)`

GetNestedOk returns a tuple with the Nested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNested

`func (o *SearchAggregationSpecification) SetNested(v NestedAggregation)`

SetNested sets Nested field to given value.

### HasNested

`func (o *SearchAggregationSpecification) HasNested() bool`

HasNested returns a boolean if a field has been set.

### GetMetric

`func (o *SearchAggregationSpecification) GetMetric() MetricAggregation`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *SearchAggregationSpecification) GetMetricOk() (*MetricAggregation, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *SearchAggregationSpecification) SetMetric(v MetricAggregation)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *SearchAggregationSpecification) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetFilter

`func (o *SearchAggregationSpecification) GetFilter() FilterAggregation`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *SearchAggregationSpecification) GetFilterOk() (*FilterAggregation, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *SearchAggregationSpecification) SetFilter(v FilterAggregation)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *SearchAggregationSpecification) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetBucket

`func (o *SearchAggregationSpecification) GetBucket() BucketAggregation`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *SearchAggregationSpecification) GetBucketOk() (*BucketAggregation, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *SearchAggregationSpecification) SetBucket(v BucketAggregation)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *SearchAggregationSpecification) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetSubAggregation

`func (o *SearchAggregationSpecification) GetSubAggregation() SubSearchAggregationSpecification`

GetSubAggregation returns the SubAggregation field if non-nil, zero value otherwise.

### GetSubAggregationOk

`func (o *SearchAggregationSpecification) GetSubAggregationOk() (*SubSearchAggregationSpecification, bool)`

GetSubAggregationOk returns a tuple with the SubAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubAggregation

`func (o *SearchAggregationSpecification) SetSubAggregation(v SubSearchAggregationSpecification)`

SetSubAggregation sets SubAggregation field to given value.

### HasSubAggregation

`func (o *SearchAggregationSpecification) HasSubAggregation() bool`

HasSubAggregation returns a boolean if a field has been set.


