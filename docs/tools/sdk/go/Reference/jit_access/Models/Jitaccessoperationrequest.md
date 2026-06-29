---
id: v1-jitaccessoperationrequest
title: Jitaccessoperationrequest
pagination_label: Jitaccessoperationrequest
sidebar_label: Jitaccessoperationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitaccessoperationrequest', 'V1Jitaccessoperationrequest'] 
slug: /tools/sdk/go/jitaccess/models/jitaccessoperationrequest
tags: ['SDK', 'Software Development Kit', 'Jitaccessoperationrequest', 'V1Jitaccessoperationrequest']
---

# Jitaccessoperationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | Pointer to **string** | Operation type. Defaults to `replace` if omitted. | [optional] [default to "replace"]
**Path** | **string** | Path to replace. Only the following JSON Pointer-style paths are supported.  | 
**Value** | [**NullableJitaccessoperationrequestValue**](jitaccessoperationrequest-value) |  | 

## Methods

### NewJitaccessoperationrequest

`func NewJitaccessoperationrequest(path string, value NullableJitaccessoperationrequestValue, ) *Jitaccessoperationrequest`

NewJitaccessoperationrequest instantiates a new Jitaccessoperationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitaccessoperationrequestWithDefaults

`func NewJitaccessoperationrequestWithDefaults() *Jitaccessoperationrequest`

NewJitaccessoperationrequestWithDefaults instantiates a new Jitaccessoperationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *Jitaccessoperationrequest) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Jitaccessoperationrequest) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Jitaccessoperationrequest) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *Jitaccessoperationrequest) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetPath

`func (o *Jitaccessoperationrequest) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Jitaccessoperationrequest) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Jitaccessoperationrequest) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *Jitaccessoperationrequest) GetValue() JitaccessoperationrequestValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Jitaccessoperationrequest) GetValueOk() (*JitaccessoperationrequestValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Jitaccessoperationrequest) SetValue(v JitaccessoperationrequestValue)`

SetValue sets Value field to given value.


### SetValueNil

`func (o *Jitaccessoperationrequest) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Jitaccessoperationrequest) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

