---
id: beta-patch-role-mining-potential-role-request-inner
title: PatchRoleMiningPotentialRoleRequestInner
pagination_label: PatchRoleMiningPotentialRoleRequestInner
sidebar_label: PatchRoleMiningPotentialRoleRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PatchRoleMiningPotentialRoleRequestInner', 'BetaPatchRoleMiningPotentialRoleRequestInner'] 
slug: /tools/sdk/go/beta/models/patch-role-mining-potential-role-request-inner
tags: ['SDK', 'Software Development Kit', 'PatchRoleMiningPotentialRoleRequestInner', 'BetaPatchRoleMiningPotentialRoleRequestInner']
---

# PatchRoleMiningPotentialRoleRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | Pointer to **string** | The operation to be performed | [optional] 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 

## Methods

### NewPatchRoleMiningPotentialRoleRequestInner

`func NewPatchRoleMiningPotentialRoleRequestInner(path string, ) *PatchRoleMiningPotentialRoleRequestInner`

NewPatchRoleMiningPotentialRoleRequestInner instantiates a new PatchRoleMiningPotentialRoleRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchRoleMiningPotentialRoleRequestInnerWithDefaults

`func NewPatchRoleMiningPotentialRoleRequestInnerWithDefaults() *PatchRoleMiningPotentialRoleRequestInner`

NewPatchRoleMiningPotentialRoleRequestInnerWithDefaults instantiates a new PatchRoleMiningPotentialRoleRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *PatchRoleMiningPotentialRoleRequestInner) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *PatchRoleMiningPotentialRoleRequestInner) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *PatchRoleMiningPotentialRoleRequestInner) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *PatchRoleMiningPotentialRoleRequestInner) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetPath

`func (o *PatchRoleMiningPotentialRoleRequestInner) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *PatchRoleMiningPotentialRoleRequestInner) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *PatchRoleMiningPotentialRoleRequestInner) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *PatchRoleMiningPotentialRoleRequestInner) GetValue() UpdateMultiHostSourcesRequestInnerValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PatchRoleMiningPotentialRoleRequestInner) GetValueOk() (*UpdateMultiHostSourcesRequestInnerValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PatchRoleMiningPotentialRoleRequestInner) SetValue(v UpdateMultiHostSourcesRequestInnerValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *PatchRoleMiningPotentialRoleRequestInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


