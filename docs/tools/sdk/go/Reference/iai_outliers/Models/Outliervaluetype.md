---
id: v1-outliervaluetype
title: Outliervaluetype
pagination_label: Outliervaluetype
sidebar_label: Outliervaluetype
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Outliervaluetype', 'V1Outliervaluetype'] 
slug: /tools/sdk/go/iaioutliers/models/outliervaluetype
tags: ['SDK', 'Software Development Kit', 'Outliervaluetype', 'V1Outliervaluetype']
---

# Outliervaluetype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The data type of the value field | [optional] 
**Ordinal** | Pointer to **int32** | The position of the value type | [optional] 

## Methods

### NewOutliervaluetype

`func NewOutliervaluetype() *Outliervaluetype`

NewOutliervaluetype instantiates a new Outliervaluetype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutliervaluetypeWithDefaults

`func NewOutliervaluetypeWithDefaults() *Outliervaluetype`

NewOutliervaluetypeWithDefaults instantiates a new Outliervaluetype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Outliervaluetype) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Outliervaluetype) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Outliervaluetype) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Outliervaluetype) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrdinal

`func (o *Outliervaluetype) GetOrdinal() int32`

GetOrdinal returns the Ordinal field if non-nil, zero value otherwise.

### GetOrdinalOk

`func (o *Outliervaluetype) GetOrdinalOk() (*int32, bool)`

GetOrdinalOk returns a tuple with the Ordinal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrdinal

`func (o *Outliervaluetype) SetOrdinal(v int32)`

SetOrdinal sets Ordinal field to given value.

### HasOrdinal

`func (o *Outliervaluetype) HasOrdinal() bool`

HasOrdinal returns a boolean if a field has been set.


