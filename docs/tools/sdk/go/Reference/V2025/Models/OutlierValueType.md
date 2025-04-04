---
id: v2025-outlier-value-type
title: OutlierValueType
pagination_label: OutlierValueType
sidebar_label: OutlierValueType
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OutlierValueType', 'V2025OutlierValueType'] 
slug: /tools/sdk/go/v2025/models/outlier-value-type
tags: ['SDK', 'Software Development Kit', 'OutlierValueType', 'V2025OutlierValueType']
---

# OutlierValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The data type of the value field | [optional] 
**Ordinal** | Pointer to **int32** | The position of the value type | [optional] 

## Methods

### NewOutlierValueType

`func NewOutlierValueType() *OutlierValueType`

NewOutlierValueType instantiates a new OutlierValueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierValueTypeWithDefaults

`func NewOutlierValueTypeWithDefaults() *OutlierValueType`

NewOutlierValueTypeWithDefaults instantiates a new OutlierValueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *OutlierValueType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OutlierValueType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OutlierValueType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OutlierValueType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrdinal

`func (o *OutlierValueType) GetOrdinal() int32`

GetOrdinal returns the Ordinal field if non-nil, zero value otherwise.

### GetOrdinalOk

`func (o *OutlierValueType) GetOrdinalOk() (*int32, bool)`

GetOrdinalOk returns a tuple with the Ordinal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrdinal

`func (o *OutlierValueType) SetOrdinal(v int32)`

SetOrdinal sets Ordinal field to given value.

### HasOrdinal

`func (o *OutlierValueType) HasOrdinal() bool`

HasOrdinal returns a boolean if a field has been set.


