---
id: beta-json-patch-operations
title: JsonPatchOperations
pagination_label: JsonPatchOperations
sidebar_label: JsonPatchOperations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JsonPatchOperations', 'BetaJsonPatchOperations'] 
slug: /tools/sdk/go/beta/models/json-patch-operations
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperations', 'BetaJsonPatchOperations']
---

# JsonPatchOperations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**JsonPatchOperationsValue**](json-patch-operations-value) |  | [optional] 

## Methods

### NewJsonPatchOperations

`func NewJsonPatchOperations(op string, path string, ) *JsonPatchOperations`

NewJsonPatchOperations instantiates a new JsonPatchOperations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJsonPatchOperationsWithDefaults

`func NewJsonPatchOperationsWithDefaults() *JsonPatchOperations`

NewJsonPatchOperationsWithDefaults instantiates a new JsonPatchOperations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *JsonPatchOperations) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *JsonPatchOperations) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *JsonPatchOperations) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *JsonPatchOperations) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *JsonPatchOperations) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *JsonPatchOperations) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *JsonPatchOperations) GetValue() JsonPatchOperationsValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *JsonPatchOperations) GetValueOk() (*JsonPatchOperationsValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *JsonPatchOperations) SetValue(v JsonPatchOperationsValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *JsonPatchOperations) HasValue() bool`

HasValue returns a boolean if a field has been set.


