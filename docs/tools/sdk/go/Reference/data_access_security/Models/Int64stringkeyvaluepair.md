---
id: v1-int64stringkeyvaluepair
title: Int64stringkeyvaluepair
pagination_label: Int64stringkeyvaluepair
sidebar_label: Int64stringkeyvaluepair
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Int64stringkeyvaluepair', 'V1Int64stringkeyvaluepair'] 
slug: /tools/sdk/go/dataaccesssecurity/models/int64stringkeyvaluepair
tags: ['SDK', 'Software Development Kit', 'Int64stringkeyvaluepair', 'V1Int64stringkeyvaluepair']
---

# Int64stringkeyvaluepair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **int64** | The key for the tag or pair. | [optional] 
**Value** | Pointer to **NullableString** | The value for the tag or pair. | [optional] 

## Methods

### NewInt64stringkeyvaluepair

`func NewInt64stringkeyvaluepair() *Int64stringkeyvaluepair`

NewInt64stringkeyvaluepair instantiates a new Int64stringkeyvaluepair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInt64stringkeyvaluepairWithDefaults

`func NewInt64stringkeyvaluepairWithDefaults() *Int64stringkeyvaluepair`

NewInt64stringkeyvaluepairWithDefaults instantiates a new Int64stringkeyvaluepair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Int64stringkeyvaluepair) GetKey() int64`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Int64stringkeyvaluepair) GetKeyOk() (*int64, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Int64stringkeyvaluepair) SetKey(v int64)`

SetKey sets Key field to given value.

### HasKey

`func (o *Int64stringkeyvaluepair) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *Int64stringkeyvaluepair) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Int64stringkeyvaluepair) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Int64stringkeyvaluepair) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Int64stringkeyvaluepair) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Int64stringkeyvaluepair) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Int64stringkeyvaluepair) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

