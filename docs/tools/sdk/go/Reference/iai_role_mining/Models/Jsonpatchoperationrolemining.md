---
id: v1-jsonpatchoperationrolemining
title: Jsonpatchoperationrolemining
pagination_label: Jsonpatchoperationrolemining
sidebar_label: Jsonpatchoperationrolemining
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jsonpatchoperationrolemining', 'V1Jsonpatchoperationrolemining'] 
slug: /tools/sdk/go/iairolemining/models/jsonpatchoperationrolemining
tags: ['SDK', 'Software Development Kit', 'Jsonpatchoperationrolemining', 'V1Jsonpatchoperationrolemining']
---

# Jsonpatchoperationrolemining

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**JsonpatchoperationroleminingValue**](jsonpatchoperationrolemining-value) |  | [optional] 

## Methods

### NewJsonpatchoperationrolemining

`func NewJsonpatchoperationrolemining(op string, path string, ) *Jsonpatchoperationrolemining`

NewJsonpatchoperationrolemining instantiates a new Jsonpatchoperationrolemining object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJsonpatchoperationroleminingWithDefaults

`func NewJsonpatchoperationroleminingWithDefaults() *Jsonpatchoperationrolemining`

NewJsonpatchoperationroleminingWithDefaults instantiates a new Jsonpatchoperationrolemining object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *Jsonpatchoperationrolemining) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Jsonpatchoperationrolemining) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Jsonpatchoperationrolemining) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *Jsonpatchoperationrolemining) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Jsonpatchoperationrolemining) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Jsonpatchoperationrolemining) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *Jsonpatchoperationrolemining) GetValue() JsonpatchoperationroleminingValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Jsonpatchoperationrolemining) GetValueOk() (*JsonpatchoperationroleminingValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Jsonpatchoperationrolemining) SetValue(v JsonpatchoperationroleminingValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *Jsonpatchoperationrolemining) HasValue() bool`

HasValue returns a boolean if a field has been set.


