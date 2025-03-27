---
id: metric-aggregation
title: MetricAggregation
pagination_label: MetricAggregation
sidebar_label: MetricAggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MetricAggregation', 'MetricAggregation'] 
slug: /tools/sdk/go/v3/models/metric-aggregation
tags: ['SDK', 'Software Development Kit', 'MetricAggregation', 'MetricAggregation']
---

# MetricAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | 
**Type** | Pointer to [**MetricType**](metric-type) |  | [optional] [default to METRICTYPE_UNIQUE_COUNT]
**Field** | **string** | The field the calculation is performed on.  Prefix the field name with &#39;@&#39; to reference a nested object.  | 

## Methods

### NewMetricAggregation

`func NewMetricAggregation(name string, field string, ) *MetricAggregation`

NewMetricAggregation instantiates a new MetricAggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricAggregationWithDefaults

`func NewMetricAggregationWithDefaults() *MetricAggregation`

NewMetricAggregationWithDefaults instantiates a new MetricAggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MetricAggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MetricAggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MetricAggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *MetricAggregation) GetType() MetricType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MetricAggregation) GetTypeOk() (*MetricType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MetricAggregation) SetType(v MetricType)`

SetType sets Type field to given value.

### HasType

`func (o *MetricAggregation) HasType() bool`

HasType returns a boolean if a field has been set.

### GetField

`func (o *MetricAggregation) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *MetricAggregation) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *MetricAggregation) SetField(v string)`

SetField sets Field field to given value.



