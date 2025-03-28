---
id: v2024-json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JsonPatchOperation', 'V2024JsonPatchOperation'] 
slug: /tools/sdk/go/v2024/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation', 'V2024JsonPatchOperation']
---

# JsonPatchOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**JsonPatchOperationValue**](json-patch-operation-value) |  | [optional] 

## Methods

### NewJsonPatchOperation

`func NewJsonPatchOperation(op string, path string, ) *JsonPatchOperation`

NewJsonPatchOperation instantiates a new JsonPatchOperation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJsonPatchOperationWithDefaults

`func NewJsonPatchOperationWithDefaults() *JsonPatchOperation`

NewJsonPatchOperationWithDefaults instantiates a new JsonPatchOperation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *JsonPatchOperation) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *JsonPatchOperation) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *JsonPatchOperation) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *JsonPatchOperation) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *JsonPatchOperation) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *JsonPatchOperation) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *JsonPatchOperation) GetValue() JsonPatchOperationValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *JsonPatchOperation) GetValueOk() (*JsonPatchOperationValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *JsonPatchOperation) SetValue(v JsonPatchOperationValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *JsonPatchOperation) HasValue() bool`

HasValue returns a boolean if a field has been set.


