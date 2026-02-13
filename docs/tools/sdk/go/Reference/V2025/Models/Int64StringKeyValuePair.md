---
id: v2025-int64-string-key-value-pair
title: Int64StringKeyValuePair
pagination_label: Int64StringKeyValuePair
sidebar_label: Int64StringKeyValuePair
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Int64StringKeyValuePair', 'V2025Int64StringKeyValuePair'] 
slug: /tools/sdk/go/v2025/models/int64-string-key-value-pair
tags: ['SDK', 'Software Development Kit', 'Int64StringKeyValuePair', 'V2025Int64StringKeyValuePair']
---

# Int64StringKeyValuePair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **int64** | The key for the tag or pair. | [optional] 
**Value** | Pointer to **NullableString** | The value for the tag or pair. | [optional] 

## Methods

### NewInt64StringKeyValuePair

`func NewInt64StringKeyValuePair() *Int64StringKeyValuePair`

NewInt64StringKeyValuePair instantiates a new Int64StringKeyValuePair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInt64StringKeyValuePairWithDefaults

`func NewInt64StringKeyValuePairWithDefaults() *Int64StringKeyValuePair`

NewInt64StringKeyValuePairWithDefaults instantiates a new Int64StringKeyValuePair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Int64StringKeyValuePair) GetKey() int64`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Int64StringKeyValuePair) GetKeyOk() (*int64, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Int64StringKeyValuePair) SetKey(v int64)`

SetKey sets Key field to given value.

### HasKey

`func (o *Int64StringKeyValuePair) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *Int64StringKeyValuePair) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Int64StringKeyValuePair) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Int64StringKeyValuePair) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Int64StringKeyValuePair) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Int64StringKeyValuePair) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Int64StringKeyValuePair) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

