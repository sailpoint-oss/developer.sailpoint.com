---
id: v1-jsonpatch
title: Jsonpatch
pagination_label: Jsonpatch
sidebar_label: Jsonpatch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jsonpatch', 'V1Jsonpatch'] 
slug: /tools/sdk/go/customuserlevels/models/jsonpatch
tags: ['SDK', 'Software Development Kit', 'Jsonpatch', 'V1Jsonpatch']
---

# Jsonpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** | Pointer to [**[]Jsonpatchoperation**](jsonpatchoperation) | Operations to be applied | [optional] 

## Methods

### NewJsonpatch

`func NewJsonpatch() *Jsonpatch`

NewJsonpatch instantiates a new Jsonpatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJsonpatchWithDefaults

`func NewJsonpatchWithDefaults() *Jsonpatch`

NewJsonpatchWithDefaults instantiates a new Jsonpatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperations

`func (o *Jsonpatch) GetOperations() []Jsonpatchoperation`

GetOperations returns the Operations field if non-nil, zero value otherwise.

### GetOperationsOk

`func (o *Jsonpatch) GetOperationsOk() (*[]Jsonpatchoperation, bool)`

GetOperationsOk returns a tuple with the Operations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperations

`func (o *Jsonpatch) SetOperations(v []Jsonpatchoperation)`

SetOperations sets Operations field to given value.

### HasOperations

`func (o *Jsonpatch) HasOperations() bool`

HasOperations returns a boolean if a field has been set.


