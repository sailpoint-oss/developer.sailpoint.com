---
id: role-mining-session-dto
title: RoleMiningSessionDto
pagination_label: RoleMiningSessionDto
sidebar_label: RoleMiningSessionDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningSessionDto', 'RoleMiningSessionDto'] 
slug: /tools/sdk/go//models/role-mining-session-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDto', 'RoleMiningSessionDto']
---

# RoleMiningSessionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**PruneThreshold** | Pointer to **NullableInt32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**PrescribedPruneThreshold** | Pointer to **NullableInt32** | The calculated prescribedPruneThreshold | [optional] 
**MinNumIdentitiesInPotentialRole** | Pointer to **NullableInt32** | Minimum number of identities in a potential role | [optional] 
**PotentialRoleCount** | Pointer to **int32** | Number of potential roles | [optional] 
**PotentialRolesReadyCount** | Pointer to **int32** | Number of potential roles ready | [optional] 
**Type** | Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**EmailRecipientId** | Pointer to **NullableString** | The id of the user who will receive an email about the role mining session | [optional] 
**IdentityCount** | Pointer to **int32** | Number of identities in the population which meet the search criteria or identity list provided | [optional] 
**Saved** | Pointer to **bool** | The session's saved status | [optional] [default to false]
**Name** | Pointer to **NullableString** | The session's saved name | [optional] 

## Methods

### NewRoleMiningSessionDto

`func NewRoleMiningSessionDto() *RoleMiningSessionDto`

NewRoleMiningSessionDto instantiates a new RoleMiningSessionDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningSessionDtoWithDefaults

`func NewRoleMiningSessionDtoWithDefaults() *RoleMiningSessionDto`

NewRoleMiningSessionDtoWithDefaults instantiates a new RoleMiningSessionDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScope

`func (o *RoleMiningSessionDto) GetScope() RoleMiningSessionScope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *RoleMiningSessionDto) GetScopeOk() (*RoleMiningSessionScope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *RoleMiningSessionDto) SetScope(v RoleMiningSessionScope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *RoleMiningSessionDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetPruneThreshold

`func (o *RoleMiningSessionDto) GetPruneThreshold() int32`

GetPruneThreshold returns the PruneThreshold field if non-nil, zero value otherwise.

### GetPruneThresholdOk

`func (o *RoleMiningSessionDto) GetPruneThresholdOk() (*int32, bool)`

GetPruneThresholdOk returns a tuple with the PruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPruneThreshold

`func (o *RoleMiningSessionDto) SetPruneThreshold(v int32)`

SetPruneThreshold sets PruneThreshold field to given value.

### HasPruneThreshold

`func (o *RoleMiningSessionDto) HasPruneThreshold() bool`

HasPruneThreshold returns a boolean if a field has been set.

### SetPruneThresholdNil

`func (o *RoleMiningSessionDto) SetPruneThresholdNil(b bool)`

 SetPruneThresholdNil sets the value for PruneThreshold to be an explicit nil

### UnsetPruneThreshold
`func (o *RoleMiningSessionDto) UnsetPruneThreshold()`

UnsetPruneThreshold ensures that no value is present for PruneThreshold, not even an explicit nil
### GetPrescribedPruneThreshold

`func (o *RoleMiningSessionDto) GetPrescribedPruneThreshold() int32`

GetPrescribedPruneThreshold returns the PrescribedPruneThreshold field if non-nil, zero value otherwise.

### GetPrescribedPruneThresholdOk

`func (o *RoleMiningSessionDto) GetPrescribedPruneThresholdOk() (*int32, bool)`

GetPrescribedPruneThresholdOk returns a tuple with the PrescribedPruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribedPruneThreshold

`func (o *RoleMiningSessionDto) SetPrescribedPruneThreshold(v int32)`

SetPrescribedPruneThreshold sets PrescribedPruneThreshold field to given value.

### HasPrescribedPruneThreshold

`func (o *RoleMiningSessionDto) HasPrescribedPruneThreshold() bool`

HasPrescribedPruneThreshold returns a boolean if a field has been set.

### SetPrescribedPruneThresholdNil

`func (o *RoleMiningSessionDto) SetPrescribedPruneThresholdNil(b bool)`

 SetPrescribedPruneThresholdNil sets the value for PrescribedPruneThreshold to be an explicit nil

### UnsetPrescribedPruneThreshold
`func (o *RoleMiningSessionDto) UnsetPrescribedPruneThreshold()`

UnsetPrescribedPruneThreshold ensures that no value is present for PrescribedPruneThreshold, not even an explicit nil
### GetMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionDto) GetMinNumIdentitiesInPotentialRole() int32`

GetMinNumIdentitiesInPotentialRole returns the MinNumIdentitiesInPotentialRole field if non-nil, zero value otherwise.

### GetMinNumIdentitiesInPotentialRoleOk

`func (o *RoleMiningSessionDto) GetMinNumIdentitiesInPotentialRoleOk() (*int32, bool)`

GetMinNumIdentitiesInPotentialRoleOk returns a tuple with the MinNumIdentitiesInPotentialRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionDto) SetMinNumIdentitiesInPotentialRole(v int32)`

SetMinNumIdentitiesInPotentialRole sets MinNumIdentitiesInPotentialRole field to given value.

### HasMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionDto) HasMinNumIdentitiesInPotentialRole() bool`

HasMinNumIdentitiesInPotentialRole returns a boolean if a field has been set.

### SetMinNumIdentitiesInPotentialRoleNil

`func (o *RoleMiningSessionDto) SetMinNumIdentitiesInPotentialRoleNil(b bool)`

 SetMinNumIdentitiesInPotentialRoleNil sets the value for MinNumIdentitiesInPotentialRole to be an explicit nil

### UnsetMinNumIdentitiesInPotentialRole
`func (o *RoleMiningSessionDto) UnsetMinNumIdentitiesInPotentialRole()`

UnsetMinNumIdentitiesInPotentialRole ensures that no value is present for MinNumIdentitiesInPotentialRole, not even an explicit nil
### GetPotentialRoleCount

`func (o *RoleMiningSessionDto) GetPotentialRoleCount() int32`

GetPotentialRoleCount returns the PotentialRoleCount field if non-nil, zero value otherwise.

### GetPotentialRoleCountOk

`func (o *RoleMiningSessionDto) GetPotentialRoleCountOk() (*int32, bool)`

GetPotentialRoleCountOk returns a tuple with the PotentialRoleCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleCount

`func (o *RoleMiningSessionDto) SetPotentialRoleCount(v int32)`

SetPotentialRoleCount sets PotentialRoleCount field to given value.

### HasPotentialRoleCount

`func (o *RoleMiningSessionDto) HasPotentialRoleCount() bool`

HasPotentialRoleCount returns a boolean if a field has been set.

### GetPotentialRolesReadyCount

`func (o *RoleMiningSessionDto) GetPotentialRolesReadyCount() int32`

GetPotentialRolesReadyCount returns the PotentialRolesReadyCount field if non-nil, zero value otherwise.

### GetPotentialRolesReadyCountOk

`func (o *RoleMiningSessionDto) GetPotentialRolesReadyCountOk() (*int32, bool)`

GetPotentialRolesReadyCountOk returns a tuple with the PotentialRolesReadyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRolesReadyCount

`func (o *RoleMiningSessionDto) SetPotentialRolesReadyCount(v int32)`

SetPotentialRolesReadyCount sets PotentialRolesReadyCount field to given value.

### HasPotentialRolesReadyCount

`func (o *RoleMiningSessionDto) HasPotentialRolesReadyCount() bool`

HasPotentialRolesReadyCount returns a boolean if a field has been set.

### GetType

`func (o *RoleMiningSessionDto) GetType() RoleMiningRoleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMiningSessionDto) GetTypeOk() (*RoleMiningRoleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMiningSessionDto) SetType(v RoleMiningRoleType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMiningSessionDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetEmailRecipientId

`func (o *RoleMiningSessionDto) GetEmailRecipientId() string`

GetEmailRecipientId returns the EmailRecipientId field if non-nil, zero value otherwise.

### GetEmailRecipientIdOk

`func (o *RoleMiningSessionDto) GetEmailRecipientIdOk() (*string, bool)`

GetEmailRecipientIdOk returns a tuple with the EmailRecipientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailRecipientId

`func (o *RoleMiningSessionDto) SetEmailRecipientId(v string)`

SetEmailRecipientId sets EmailRecipientId field to given value.

### HasEmailRecipientId

`func (o *RoleMiningSessionDto) HasEmailRecipientId() bool`

HasEmailRecipientId returns a boolean if a field has been set.

### SetEmailRecipientIdNil

`func (o *RoleMiningSessionDto) SetEmailRecipientIdNil(b bool)`

 SetEmailRecipientIdNil sets the value for EmailRecipientId to be an explicit nil

### UnsetEmailRecipientId
`func (o *RoleMiningSessionDto) UnsetEmailRecipientId()`

UnsetEmailRecipientId ensures that no value is present for EmailRecipientId, not even an explicit nil
### GetIdentityCount

`func (o *RoleMiningSessionDto) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *RoleMiningSessionDto) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *RoleMiningSessionDto) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *RoleMiningSessionDto) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetSaved

`func (o *RoleMiningSessionDto) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *RoleMiningSessionDto) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *RoleMiningSessionDto) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *RoleMiningSessionDto) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningSessionDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningSessionDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningSessionDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningSessionDto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RoleMiningSessionDto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RoleMiningSessionDto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

