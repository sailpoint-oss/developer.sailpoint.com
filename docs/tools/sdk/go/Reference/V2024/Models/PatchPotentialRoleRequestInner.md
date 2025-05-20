---
id: v2024-patch-potential-role-request-inner
title: PatchPotentialRoleRequestInner
pagination_label: PatchPotentialRoleRequestInner
sidebar_label: PatchPotentialRoleRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PatchPotentialRoleRequestInner', 'V2024PatchPotentialRoleRequestInner'] 
slug: /tools/sdk/go/v2024/models/patch-potential-role-request-inner
tags: ['SDK', 'Software Development Kit', 'PatchPotentialRoleRequestInner', 'V2024PatchPotentialRoleRequestInner']
---

# PatchPotentialRoleRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | Pointer to **string** | The operation to be performed | [optional] 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 

## Methods

### NewPatchPotentialRoleRequestInner

`func NewPatchPotentialRoleRequestInner(path string, ) *PatchPotentialRoleRequestInner`

NewPatchPotentialRoleRequestInner instantiates a new PatchPotentialRoleRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchPotentialRoleRequestInnerWithDefaults

`func NewPatchPotentialRoleRequestInnerWithDefaults() *PatchPotentialRoleRequestInner`

NewPatchPotentialRoleRequestInnerWithDefaults instantiates a new PatchPotentialRoleRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *PatchPotentialRoleRequestInner) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *PatchPotentialRoleRequestInner) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *PatchPotentialRoleRequestInner) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *PatchPotentialRoleRequestInner) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetPath

`func (o *PatchPotentialRoleRequestInner) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *PatchPotentialRoleRequestInner) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *PatchPotentialRoleRequestInner) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *PatchPotentialRoleRequestInner) GetValue() UpdateMultiHostSourcesRequestInnerValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PatchPotentialRoleRequestInner) GetValueOk() (*UpdateMultiHostSourcesRequestInnerValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PatchPotentialRoleRequestInner) SetValue(v UpdateMultiHostSourcesRequestInnerValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *PatchPotentialRoleRequestInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


