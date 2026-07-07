---
id: v1-roleminingsessionparametersdto
title: Roleminingsessionparametersdto
pagination_label: Roleminingsessionparametersdto
sidebar_label: Roleminingsessionparametersdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingsessionparametersdto', 'V1Roleminingsessionparametersdto'] 
slug: /tools/sdk/go/iairolemining/models/roleminingsessionparametersdto
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionparametersdto', 'V1Roleminingsessionparametersdto']
---

# Roleminingsessionparametersdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the role mining session | [optional] 
**Name** | Pointer to **NullableString** | The session's saved name | [optional] 
**MinNumIdentitiesInPotentialRole** | Pointer to **NullableInt32** | Minimum number of identities in a potential role | [optional] 
**PruneThreshold** | Pointer to **NullableInt32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**Saved** | Pointer to **bool** | The session's saved status | [optional] [default to true]
**Scope** | Pointer to [**Roleminingsessionscope**](roleminingsessionscope) |  | [optional] 
**Type** | Pointer to [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**State** | Pointer to [**Roleminingsessionstate**](roleminingsessionstate) |  | [optional] 
**ScopingMethod** | Pointer to [**Roleminingsessionscopingmethod**](roleminingsessionscopingmethod) |  | [optional] 

## Methods

### NewRoleminingsessionparametersdto

`func NewRoleminingsessionparametersdto() *Roleminingsessionparametersdto`

NewRoleminingsessionparametersdto instantiates a new Roleminingsessionparametersdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingsessionparametersdtoWithDefaults

`func NewRoleminingsessionparametersdtoWithDefaults() *Roleminingsessionparametersdto`

NewRoleminingsessionparametersdtoWithDefaults instantiates a new Roleminingsessionparametersdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleminingsessionparametersdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingsessionparametersdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingsessionparametersdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingsessionparametersdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Roleminingsessionparametersdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingsessionparametersdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingsessionparametersdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingsessionparametersdto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Roleminingsessionparametersdto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Roleminingsessionparametersdto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessionparametersdto) GetMinNumIdentitiesInPotentialRole() int32`

GetMinNumIdentitiesInPotentialRole returns the MinNumIdentitiesInPotentialRole field if non-nil, zero value otherwise.

### GetMinNumIdentitiesInPotentialRoleOk

`func (o *Roleminingsessionparametersdto) GetMinNumIdentitiesInPotentialRoleOk() (*int32, bool)`

GetMinNumIdentitiesInPotentialRoleOk returns a tuple with the MinNumIdentitiesInPotentialRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessionparametersdto) SetMinNumIdentitiesInPotentialRole(v int32)`

SetMinNumIdentitiesInPotentialRole sets MinNumIdentitiesInPotentialRole field to given value.

### HasMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessionparametersdto) HasMinNumIdentitiesInPotentialRole() bool`

HasMinNumIdentitiesInPotentialRole returns a boolean if a field has been set.

### SetMinNumIdentitiesInPotentialRoleNil

`func (o *Roleminingsessionparametersdto) SetMinNumIdentitiesInPotentialRoleNil(b bool)`

 SetMinNumIdentitiesInPotentialRoleNil sets the value for MinNumIdentitiesInPotentialRole to be an explicit nil

### UnsetMinNumIdentitiesInPotentialRole
`func (o *Roleminingsessionparametersdto) UnsetMinNumIdentitiesInPotentialRole()`

UnsetMinNumIdentitiesInPotentialRole ensures that no value is present for MinNumIdentitiesInPotentialRole, not even an explicit nil
### GetPruneThreshold

`func (o *Roleminingsessionparametersdto) GetPruneThreshold() int32`

GetPruneThreshold returns the PruneThreshold field if non-nil, zero value otherwise.

### GetPruneThresholdOk

`func (o *Roleminingsessionparametersdto) GetPruneThresholdOk() (*int32, bool)`

GetPruneThresholdOk returns a tuple with the PruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPruneThreshold

`func (o *Roleminingsessionparametersdto) SetPruneThreshold(v int32)`

SetPruneThreshold sets PruneThreshold field to given value.

### HasPruneThreshold

`func (o *Roleminingsessionparametersdto) HasPruneThreshold() bool`

HasPruneThreshold returns a boolean if a field has been set.

### SetPruneThresholdNil

`func (o *Roleminingsessionparametersdto) SetPruneThresholdNil(b bool)`

 SetPruneThresholdNil sets the value for PruneThreshold to be an explicit nil

### UnsetPruneThreshold
`func (o *Roleminingsessionparametersdto) UnsetPruneThreshold()`

UnsetPruneThreshold ensures that no value is present for PruneThreshold, not even an explicit nil
### GetSaved

`func (o *Roleminingsessionparametersdto) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *Roleminingsessionparametersdto) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *Roleminingsessionparametersdto) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *Roleminingsessionparametersdto) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetScope

`func (o *Roleminingsessionparametersdto) GetScope() Roleminingsessionscope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Roleminingsessionparametersdto) GetScopeOk() (*Roleminingsessionscope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Roleminingsessionparametersdto) SetScope(v Roleminingsessionscope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *Roleminingsessionparametersdto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetType

`func (o *Roleminingsessionparametersdto) GetType() Roleminingroletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Roleminingsessionparametersdto) GetTypeOk() (*Roleminingroletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Roleminingsessionparametersdto) SetType(v Roleminingroletype)`

SetType sets Type field to given value.

### HasType

`func (o *Roleminingsessionparametersdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetState

`func (o *Roleminingsessionparametersdto) GetState() Roleminingsessionstate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Roleminingsessionparametersdto) GetStateOk() (*Roleminingsessionstate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Roleminingsessionparametersdto) SetState(v Roleminingsessionstate)`

SetState sets State field to given value.

### HasState

`func (o *Roleminingsessionparametersdto) HasState() bool`

HasState returns a boolean if a field has been set.

### GetScopingMethod

`func (o *Roleminingsessionparametersdto) GetScopingMethod() Roleminingsessionscopingmethod`

GetScopingMethod returns the ScopingMethod field if non-nil, zero value otherwise.

### GetScopingMethodOk

`func (o *Roleminingsessionparametersdto) GetScopingMethodOk() (*Roleminingsessionscopingmethod, bool)`

GetScopingMethodOk returns a tuple with the ScopingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopingMethod

`func (o *Roleminingsessionparametersdto) SetScopingMethod(v Roleminingsessionscopingmethod)`

SetScopingMethod sets ScopingMethod field to given value.

### HasScopingMethod

`func (o *Roleminingsessionparametersdto) HasScopingMethod() bool`

HasScopingMethod returns a boolean if a field has been set.


