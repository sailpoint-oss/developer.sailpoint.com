---
id: v2024-role-mining-session-parameters-dto
title: RoleMiningSessionParametersDto
pagination_label: RoleMiningSessionParametersDto
sidebar_label: RoleMiningSessionParametersDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningSessionParametersDto', 'V2024RoleMiningSessionParametersDto'] 
slug: /tools/sdk/go/v2024/models/role-mining-session-parameters-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionParametersDto', 'V2024RoleMiningSessionParametersDto']
---

# RoleMiningSessionParametersDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the role mining session | [optional] 
**Name** | Pointer to **NullableString** | The session&#39;s saved name | [optional] 
**MinNumIdentitiesInPotentialRole** | Pointer to **NullableInt32** | Minimum number of identities in a potential role | [optional] 
**PruneThreshold** | Pointer to **NullableInt32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**Saved** | Pointer to **bool** | The session&#39;s saved status | [optional] [default to true]
**Scope** | Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**Type** | Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**State** | Pointer to [**RoleMiningSessionState**](role-mining-session-state) |  | [optional] 
**ScopingMethod** | Pointer to [**RoleMiningSessionScopingMethod**](role-mining-session-scoping-method) |  | [optional] 

## Methods

### NewRoleMiningSessionParametersDto

`func NewRoleMiningSessionParametersDto() *RoleMiningSessionParametersDto`

NewRoleMiningSessionParametersDto instantiates a new RoleMiningSessionParametersDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningSessionParametersDtoWithDefaults

`func NewRoleMiningSessionParametersDtoWithDefaults() *RoleMiningSessionParametersDto`

NewRoleMiningSessionParametersDtoWithDefaults instantiates a new RoleMiningSessionParametersDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleMiningSessionParametersDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningSessionParametersDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningSessionParametersDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningSessionParametersDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningSessionParametersDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningSessionParametersDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningSessionParametersDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningSessionParametersDto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RoleMiningSessionParametersDto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RoleMiningSessionParametersDto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionParametersDto) GetMinNumIdentitiesInPotentialRole() int32`

GetMinNumIdentitiesInPotentialRole returns the MinNumIdentitiesInPotentialRole field if non-nil, zero value otherwise.

### GetMinNumIdentitiesInPotentialRoleOk

`func (o *RoleMiningSessionParametersDto) GetMinNumIdentitiesInPotentialRoleOk() (*int32, bool)`

GetMinNumIdentitiesInPotentialRoleOk returns a tuple with the MinNumIdentitiesInPotentialRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionParametersDto) SetMinNumIdentitiesInPotentialRole(v int32)`

SetMinNumIdentitiesInPotentialRole sets MinNumIdentitiesInPotentialRole field to given value.

### HasMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionParametersDto) HasMinNumIdentitiesInPotentialRole() bool`

HasMinNumIdentitiesInPotentialRole returns a boolean if a field has been set.

### SetMinNumIdentitiesInPotentialRoleNil

`func (o *RoleMiningSessionParametersDto) SetMinNumIdentitiesInPotentialRoleNil(b bool)`

 SetMinNumIdentitiesInPotentialRoleNil sets the value for MinNumIdentitiesInPotentialRole to be an explicit nil

### UnsetMinNumIdentitiesInPotentialRole
`func (o *RoleMiningSessionParametersDto) UnsetMinNumIdentitiesInPotentialRole()`

UnsetMinNumIdentitiesInPotentialRole ensures that no value is present for MinNumIdentitiesInPotentialRole, not even an explicit nil
### GetPruneThreshold

`func (o *RoleMiningSessionParametersDto) GetPruneThreshold() int32`

GetPruneThreshold returns the PruneThreshold field if non-nil, zero value otherwise.

### GetPruneThresholdOk

`func (o *RoleMiningSessionParametersDto) GetPruneThresholdOk() (*int32, bool)`

GetPruneThresholdOk returns a tuple with the PruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPruneThreshold

`func (o *RoleMiningSessionParametersDto) SetPruneThreshold(v int32)`

SetPruneThreshold sets PruneThreshold field to given value.

### HasPruneThreshold

`func (o *RoleMiningSessionParametersDto) HasPruneThreshold() bool`

HasPruneThreshold returns a boolean if a field has been set.

### SetPruneThresholdNil

`func (o *RoleMiningSessionParametersDto) SetPruneThresholdNil(b bool)`

 SetPruneThresholdNil sets the value for PruneThreshold to be an explicit nil

### UnsetPruneThreshold
`func (o *RoleMiningSessionParametersDto) UnsetPruneThreshold()`

UnsetPruneThreshold ensures that no value is present for PruneThreshold, not even an explicit nil
### GetSaved

`func (o *RoleMiningSessionParametersDto) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *RoleMiningSessionParametersDto) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *RoleMiningSessionParametersDto) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *RoleMiningSessionParametersDto) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetScope

`func (o *RoleMiningSessionParametersDto) GetScope() RoleMiningSessionScope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *RoleMiningSessionParametersDto) GetScopeOk() (*RoleMiningSessionScope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *RoleMiningSessionParametersDto) SetScope(v RoleMiningSessionScope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *RoleMiningSessionParametersDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetType

`func (o *RoleMiningSessionParametersDto) GetType() RoleMiningRoleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMiningSessionParametersDto) GetTypeOk() (*RoleMiningRoleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMiningSessionParametersDto) SetType(v RoleMiningRoleType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMiningSessionParametersDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetState

`func (o *RoleMiningSessionParametersDto) GetState() RoleMiningSessionState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *RoleMiningSessionParametersDto) GetStateOk() (*RoleMiningSessionState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *RoleMiningSessionParametersDto) SetState(v RoleMiningSessionState)`

SetState sets State field to given value.

### HasState

`func (o *RoleMiningSessionParametersDto) HasState() bool`

HasState returns a boolean if a field has been set.

### GetScopingMethod

`func (o *RoleMiningSessionParametersDto) GetScopingMethod() RoleMiningSessionScopingMethod`

GetScopingMethod returns the ScopingMethod field if non-nil, zero value otherwise.

### GetScopingMethodOk

`func (o *RoleMiningSessionParametersDto) GetScopingMethodOk() (*RoleMiningSessionScopingMethod, bool)`

GetScopingMethodOk returns a tuple with the ScopingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopingMethod

`func (o *RoleMiningSessionParametersDto) SetScopingMethod(v RoleMiningSessionScopingMethod)`

SetScopingMethod sets ScopingMethod field to given value.

### HasScopingMethod

`func (o *RoleMiningSessionParametersDto) HasScopingMethod() bool`

HasScopingMethod returns a boolean if a field has been set.


