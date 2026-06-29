---
id: v1-metricaggregation
title: Metricaggregation
pagination_label: Metricaggregation
sidebar_label: Metricaggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Metricaggregation', 'V1Metricaggregation'] 
slug: /tools/sdk/go/accessmodelmetadata/models/metricaggregation
tags: ['SDK', 'Software Development Kit', 'Metricaggregation', 'V1Metricaggregation']
---

# Metricaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | 
**Type** | Pointer to [**Metrictype**](metrictype) |  | [optional] [default to METRICTYPE_UNIQUE_COUNT]
**Field** | **string** | The field the calculation is performed on.  Prefix the field name with '@' to reference a nested object.  | 

## Methods

### NewMetricaggregation

`func NewMetricaggregation(name string, field string, ) *Metricaggregation`

NewMetricaggregation instantiates a new Metricaggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricaggregationWithDefaults

`func NewMetricaggregationWithDefaults() *Metricaggregation`

NewMetricaggregationWithDefaults instantiates a new Metricaggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Metricaggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Metricaggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Metricaggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Metricaggregation) GetType() Metrictype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Metricaggregation) GetTypeOk() (*Metrictype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Metricaggregation) SetType(v Metrictype)`

SetType sets Type field to given value.

### HasType

`func (o *Metricaggregation) HasType() bool`

HasType returns a boolean if a field has been set.

### GetField

`func (o *Metricaggregation) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *Metricaggregation) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *Metricaggregation) SetField(v string)`

SetField sets Field field to given value.



