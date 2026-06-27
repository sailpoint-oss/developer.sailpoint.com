---
id: v1-metricresponse
title: Metricresponse
pagination_label: Metricresponse
sidebar_label: Metricresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Metricresponse', 'V1Metricresponse'] 
slug: /tools/sdk/go/identityhistory/models/metricresponse
tags: ['SDK', 'Software Development Kit', 'Metricresponse', 'V1Metricresponse']
---

# Metricresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | the name of metric | [optional] 
**Value** | Pointer to **float32** | the value associated to the metric | [optional] 

## Methods

### NewMetricresponse

`func NewMetricresponse() *Metricresponse`

NewMetricresponse instantiates a new Metricresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricresponseWithDefaults

`func NewMetricresponseWithDefaults() *Metricresponse`

NewMetricresponseWithDefaults instantiates a new Metricresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Metricresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Metricresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Metricresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Metricresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *Metricresponse) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Metricresponse) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Metricresponse) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *Metricresponse) HasValue() bool`

HasValue returns a boolean if a field has been set.


