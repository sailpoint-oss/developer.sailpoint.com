---
id: metric-response
title: MetricResponse
pagination_label: MetricResponse
sidebar_label: MetricResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'MetricResponse'] 
slug: /tools/sdk/go/beta/models/metric-response
tags: ['SDK', 'Software Development Kit', 'MetricResponse']
---

# MetricResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **string** | the name of metric | [optional] 
**Value** |  Pointer to **float32** | the value associated to the metric | [optional] 

## Methods

### NewMetricResponse

`func NewMetricResponse() *MetricResponse`

NewMetricResponse instantiates a new MetricResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricResponseWithDefaults

`func NewMetricResponseWithDefaults() *MetricResponse`

NewMetricResponseWithDefaults instantiates a new MetricResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MetricResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MetricResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MetricResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MetricResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *MetricResponse) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *MetricResponse) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *MetricResponse) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *MetricResponse) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to top]](#) 


