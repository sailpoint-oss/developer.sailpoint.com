---
id: v1-filteraggregation
title: Filteraggregation
pagination_label: Filteraggregation
sidebar_label: Filteraggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Filteraggregation', 'V1Filteraggregation'] 
slug: /tools/sdk/go/accessmodelmetadata/models/filteraggregation
tags: ['SDK', 'Software Development Kit', 'Filteraggregation', 'V1Filteraggregation']
---

# Filteraggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the filter aggregate to be included in the result. | 
**Type** | Pointer to [**Searchfiltertype**](searchfiltertype) |  | [optional] [default to SEARCHFILTERTYPE_TERM]
**Field** | **string** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | 
**Value** | **string** | The value to filter on. | 

## Methods

### NewFilteraggregation

`func NewFilteraggregation(name string, field string, value string, ) *Filteraggregation`

NewFilteraggregation instantiates a new Filteraggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFilteraggregationWithDefaults

`func NewFilteraggregationWithDefaults() *Filteraggregation`

NewFilteraggregationWithDefaults instantiates a new Filteraggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Filteraggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Filteraggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Filteraggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Filteraggregation) GetType() Searchfiltertype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Filteraggregation) GetTypeOk() (*Searchfiltertype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Filteraggregation) SetType(v Searchfiltertype)`

SetType sets Type field to given value.

### HasType

`func (o *Filteraggregation) HasType() bool`

HasType returns a boolean if a field has been set.

### GetField

`func (o *Filteraggregation) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *Filteraggregation) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *Filteraggregation) SetField(v string)`

SetField sets Field field to given value.


### GetValue

`func (o *Filteraggregation) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Filteraggregation) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Filteraggregation) SetValue(v string)`

SetValue sets Value field to given value.



