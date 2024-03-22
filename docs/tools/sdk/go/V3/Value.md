---
id: value
title: Value
pagination_label: Value
sidebar_label: Value
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Value'] 
slug: /tools/sdk/go/v3/models/value
tags: ['SDK', 'Software Development Kit', 'Value']
---

# Value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | The type of attribute value | [optional] 
**Value** |  Pointer to **string** | The attribute value | [optional] 

## Methods

### NewValue

`func NewValue() *Value`

NewValue instantiates a new Value object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValueWithDefaults

`func NewValueWithDefaults() *Value`

NewValueWithDefaults instantiates a new Value object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Value) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Value) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Value) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Value) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValue

`func (o *Value) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Value) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Value) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Value) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to top]](#) 


