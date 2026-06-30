---
id: v1-parameterstoragejsonpatch
title: Parameterstoragejsonpatch
pagination_label: Parameterstoragejsonpatch
sidebar_label: Parameterstoragejsonpatch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Parameterstoragejsonpatch', 'V1Parameterstoragejsonpatch'] 
slug: /tools/sdk/go/parameterstorage/models/parameterstoragejsonpatch
tags: ['SDK', 'Software Development Kit', 'Parameterstoragejsonpatch', 'V1Parameterstoragejsonpatch']
---

# Parameterstoragejsonpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to perform (add, remove, replace, move, copy, test) | 
**Path** | **string** | A JSON-Pointer describing the target location | 
**Value** | Pointer to **interface{}** | The value to be used within the operations. Required for add/replace/test. | [optional] 
**From** | Pointer to **string** | A JSON-Pointer describing the source location for move/copy. | [optional] 

## Methods

### NewParameterstoragejsonpatch

`func NewParameterstoragejsonpatch(op string, path string, ) *Parameterstoragejsonpatch`

NewParameterstoragejsonpatch instantiates a new Parameterstoragejsonpatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterstoragejsonpatchWithDefaults

`func NewParameterstoragejsonpatchWithDefaults() *Parameterstoragejsonpatch`

NewParameterstoragejsonpatchWithDefaults instantiates a new Parameterstoragejsonpatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *Parameterstoragejsonpatch) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Parameterstoragejsonpatch) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Parameterstoragejsonpatch) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *Parameterstoragejsonpatch) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Parameterstoragejsonpatch) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Parameterstoragejsonpatch) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *Parameterstoragejsonpatch) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Parameterstoragejsonpatch) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Parameterstoragejsonpatch) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *Parameterstoragejsonpatch) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Parameterstoragejsonpatch) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Parameterstoragejsonpatch) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetFrom

`func (o *Parameterstoragejsonpatch) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *Parameterstoragejsonpatch) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *Parameterstoragejsonpatch) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *Parameterstoragejsonpatch) HasFrom() bool`

HasFrom returns a boolean if a field has been set.


