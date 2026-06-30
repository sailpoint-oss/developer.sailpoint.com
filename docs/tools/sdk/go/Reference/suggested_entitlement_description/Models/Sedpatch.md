---
id: v1-sedpatch
title: Sedpatch
pagination_label: Sedpatch
sidebar_label: Sedpatch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedpatch', 'V1Sedpatch'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedpatch
tags: ['SDK', 'Software Development Kit', 'Sedpatch', 'V1Sedpatch']
---

# Sedpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | Pointer to **string** | desired operation | [optional] 
**Path** | Pointer to **string** | field to be patched | [optional] 
**Value** | Pointer to **interface{}** | value to replace with | [optional] 

## Methods

### NewSedpatch

`func NewSedpatch() *Sedpatch`

NewSedpatch instantiates a new Sedpatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedpatchWithDefaults

`func NewSedpatchWithDefaults() *Sedpatch`

NewSedpatchWithDefaults instantiates a new Sedpatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *Sedpatch) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Sedpatch) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Sedpatch) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *Sedpatch) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetPath

`func (o *Sedpatch) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Sedpatch) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Sedpatch) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *Sedpatch) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetValue

`func (o *Sedpatch) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Sedpatch) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Sedpatch) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *Sedpatch) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Sedpatch) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Sedpatch) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

