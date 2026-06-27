---
id: v1-jsonpatchoperation
title: Jsonpatchoperation
pagination_label: Jsonpatchoperation
sidebar_label: Jsonpatchoperation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jsonpatchoperation', 'V1Jsonpatchoperation'] 
slug: /tools/sdk/go/accessprofiles/models/jsonpatchoperation
tags: ['SDK', 'Software Development Kit', 'Jsonpatchoperation', 'V1Jsonpatchoperation']
---

# Jsonpatchoperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**JsonpatchoperationValue**](jsonpatchoperation-value) |  | [optional] 

## Methods

### NewJsonpatchoperation

`func NewJsonpatchoperation(op string, path string, ) *Jsonpatchoperation`

NewJsonpatchoperation instantiates a new Jsonpatchoperation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJsonpatchoperationWithDefaults

`func NewJsonpatchoperationWithDefaults() *Jsonpatchoperation`

NewJsonpatchoperationWithDefaults instantiates a new Jsonpatchoperation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *Jsonpatchoperation) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Jsonpatchoperation) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Jsonpatchoperation) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *Jsonpatchoperation) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Jsonpatchoperation) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Jsonpatchoperation) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *Jsonpatchoperation) GetValue() JsonpatchoperationValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Jsonpatchoperation) GetValueOk() (*JsonpatchoperationValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Jsonpatchoperation) SetValue(v JsonpatchoperationValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *Jsonpatchoperation) HasValue() bool`

HasValue returns a boolean if a field has been set.


