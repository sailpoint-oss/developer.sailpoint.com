---
id: v1-roleminingsessiondto
title: Roleminingsessiondto
pagination_label: Roleminingsessiondto
sidebar_label: Roleminingsessiondto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingsessiondto', 'V1Roleminingsessiondto'] 
slug: /tools/sdk/go/iairolemining/models/roleminingsessiondto
tags: ['SDK', 'Software Development Kit', 'Roleminingsessiondto', 'V1Roleminingsessiondto']
---

# Roleminingsessiondto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | Pointer to [**Roleminingsessionscope**](roleminingsessionscope) |  | [optional] 
**PruneThreshold** | Pointer to **NullableInt32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**PrescribedPruneThreshold** | Pointer to **NullableInt32** | The calculated prescribedPruneThreshold | [optional] 
**MinNumIdentitiesInPotentialRole** | Pointer to **NullableInt32** | Minimum number of identities in a potential role | [optional] 
**PotentialRoleCount** | Pointer to **int32** | Number of potential roles | [optional] 
**PotentialRolesReadyCount** | Pointer to **int32** | Number of potential roles ready | [optional] 
**Type** | Pointer to [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**EmailRecipientId** | Pointer to **NullableString** | The id of the user who will receive an email about the role mining session | [optional] 
**IdentityCount** | Pointer to **int32** | Number of identities in the population which meet the search criteria or identity list provided | [optional] 
**Saved** | Pointer to **bool** | The session's saved status | [optional] [default to false]
**Name** | Pointer to **NullableString** | The session's saved name | [optional] 

## Methods

### NewRoleminingsessiondto

`func NewRoleminingsessiondto() *Roleminingsessiondto`

NewRoleminingsessiondto instantiates a new Roleminingsessiondto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingsessiondtoWithDefaults

`func NewRoleminingsessiondtoWithDefaults() *Roleminingsessiondto`

NewRoleminingsessiondtoWithDefaults instantiates a new Roleminingsessiondto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScope

`func (o *Roleminingsessiondto) GetScope() Roleminingsessionscope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Roleminingsessiondto) GetScopeOk() (*Roleminingsessionscope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Roleminingsessiondto) SetScope(v Roleminingsessionscope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *Roleminingsessiondto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetPruneThreshold

`func (o *Roleminingsessiondto) GetPruneThreshold() int32`

GetPruneThreshold returns the PruneThreshold field if non-nil, zero value otherwise.

### GetPruneThresholdOk

`func (o *Roleminingsessiondto) GetPruneThresholdOk() (*int32, bool)`

GetPruneThresholdOk returns a tuple with the PruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPruneThreshold

`func (o *Roleminingsessiondto) SetPruneThreshold(v int32)`

SetPruneThreshold sets PruneThreshold field to given value.

### HasPruneThreshold

`func (o *Roleminingsessiondto) HasPruneThreshold() bool`

HasPruneThreshold returns a boolean if a field has been set.

### SetPruneThresholdNil

`func (o *Roleminingsessiondto) SetPruneThresholdNil(b bool)`

 SetPruneThresholdNil sets the value for PruneThreshold to be an explicit nil

### UnsetPruneThreshold
`func (o *Roleminingsessiondto) UnsetPruneThreshold()`

UnsetPruneThreshold ensures that no value is present for PruneThreshold, not even an explicit nil
### GetPrescribedPruneThreshold

`func (o *Roleminingsessiondto) GetPrescribedPruneThreshold() int32`

GetPrescribedPruneThreshold returns the PrescribedPruneThreshold field if non-nil, zero value otherwise.

### GetPrescribedPruneThresholdOk

`func (o *Roleminingsessiondto) GetPrescribedPruneThresholdOk() (*int32, bool)`

GetPrescribedPruneThresholdOk returns a tuple with the PrescribedPruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribedPruneThreshold

`func (o *Roleminingsessiondto) SetPrescribedPruneThreshold(v int32)`

SetPrescribedPruneThreshold sets PrescribedPruneThreshold field to given value.

### HasPrescribedPruneThreshold

`func (o *Roleminingsessiondto) HasPrescribedPruneThreshold() bool`

HasPrescribedPruneThreshold returns a boolean if a field has been set.

### SetPrescribedPruneThresholdNil

`func (o *Roleminingsessiondto) SetPrescribedPruneThresholdNil(b bool)`

 SetPrescribedPruneThresholdNil sets the value for PrescribedPruneThreshold to be an explicit nil

### UnsetPrescribedPruneThreshold
`func (o *Roleminingsessiondto) UnsetPrescribedPruneThreshold()`

UnsetPrescribedPruneThreshold ensures that no value is present for PrescribedPruneThreshold, not even an explicit nil
### GetMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessiondto) GetMinNumIdentitiesInPotentialRole() int32`

GetMinNumIdentitiesInPotentialRole returns the MinNumIdentitiesInPotentialRole field if non-nil, zero value otherwise.

### GetMinNumIdentitiesInPotentialRoleOk

`func (o *Roleminingsessiondto) GetMinNumIdentitiesInPotentialRoleOk() (*int32, bool)`

GetMinNumIdentitiesInPotentialRoleOk returns a tuple with the MinNumIdentitiesInPotentialRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessiondto) SetMinNumIdentitiesInPotentialRole(v int32)`

SetMinNumIdentitiesInPotentialRole sets MinNumIdentitiesInPotentialRole field to given value.

### HasMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessiondto) HasMinNumIdentitiesInPotentialRole() bool`

HasMinNumIdentitiesInPotentialRole returns a boolean if a field has been set.

### SetMinNumIdentitiesInPotentialRoleNil

`func (o *Roleminingsessiondto) SetMinNumIdentitiesInPotentialRoleNil(b bool)`

 SetMinNumIdentitiesInPotentialRoleNil sets the value for MinNumIdentitiesInPotentialRole to be an explicit nil

### UnsetMinNumIdentitiesInPotentialRole
`func (o *Roleminingsessiondto) UnsetMinNumIdentitiesInPotentialRole()`

UnsetMinNumIdentitiesInPotentialRole ensures that no value is present for MinNumIdentitiesInPotentialRole, not even an explicit nil
### GetPotentialRoleCount

`func (o *Roleminingsessiondto) GetPotentialRoleCount() int32`

GetPotentialRoleCount returns the PotentialRoleCount field if non-nil, zero value otherwise.

### GetPotentialRoleCountOk

`func (o *Roleminingsessiondto) GetPotentialRoleCountOk() (*int32, bool)`

GetPotentialRoleCountOk returns a tuple with the PotentialRoleCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleCount

`func (o *Roleminingsessiondto) SetPotentialRoleCount(v int32)`

SetPotentialRoleCount sets PotentialRoleCount field to given value.

### HasPotentialRoleCount

`func (o *Roleminingsessiondto) HasPotentialRoleCount() bool`

HasPotentialRoleCount returns a boolean if a field has been set.

### GetPotentialRolesReadyCount

`func (o *Roleminingsessiondto) GetPotentialRolesReadyCount() int32`

GetPotentialRolesReadyCount returns the PotentialRolesReadyCount field if non-nil, zero value otherwise.

### GetPotentialRolesReadyCountOk

`func (o *Roleminingsessiondto) GetPotentialRolesReadyCountOk() (*int32, bool)`

GetPotentialRolesReadyCountOk returns a tuple with the PotentialRolesReadyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRolesReadyCount

`func (o *Roleminingsessiondto) SetPotentialRolesReadyCount(v int32)`

SetPotentialRolesReadyCount sets PotentialRolesReadyCount field to given value.

### HasPotentialRolesReadyCount

`func (o *Roleminingsessiondto) HasPotentialRolesReadyCount() bool`

HasPotentialRolesReadyCount returns a boolean if a field has been set.

### GetType

`func (o *Roleminingsessiondto) GetType() Roleminingroletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Roleminingsessiondto) GetTypeOk() (*Roleminingroletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Roleminingsessiondto) SetType(v Roleminingroletype)`

SetType sets Type field to given value.

### HasType

`func (o *Roleminingsessiondto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetEmailRecipientId

`func (o *Roleminingsessiondto) GetEmailRecipientId() string`

GetEmailRecipientId returns the EmailRecipientId field if non-nil, zero value otherwise.

### GetEmailRecipientIdOk

`func (o *Roleminingsessiondto) GetEmailRecipientIdOk() (*string, bool)`

GetEmailRecipientIdOk returns a tuple with the EmailRecipientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailRecipientId

`func (o *Roleminingsessiondto) SetEmailRecipientId(v string)`

SetEmailRecipientId sets EmailRecipientId field to given value.

### HasEmailRecipientId

`func (o *Roleminingsessiondto) HasEmailRecipientId() bool`

HasEmailRecipientId returns a boolean if a field has been set.

### SetEmailRecipientIdNil

`func (o *Roleminingsessiondto) SetEmailRecipientIdNil(b bool)`

 SetEmailRecipientIdNil sets the value for EmailRecipientId to be an explicit nil

### UnsetEmailRecipientId
`func (o *Roleminingsessiondto) UnsetEmailRecipientId()`

UnsetEmailRecipientId ensures that no value is present for EmailRecipientId, not even an explicit nil
### GetIdentityCount

`func (o *Roleminingsessiondto) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Roleminingsessiondto) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Roleminingsessiondto) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Roleminingsessiondto) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetSaved

`func (o *Roleminingsessiondto) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *Roleminingsessiondto) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *Roleminingsessiondto) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *Roleminingsessiondto) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetName

`func (o *Roleminingsessiondto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingsessiondto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingsessiondto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingsessiondto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Roleminingsessiondto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Roleminingsessiondto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

