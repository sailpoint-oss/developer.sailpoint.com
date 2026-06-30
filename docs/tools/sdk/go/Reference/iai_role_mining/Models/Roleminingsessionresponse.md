---
id: v1-roleminingsessionresponse
title: Roleminingsessionresponse
pagination_label: Roleminingsessionresponse
sidebar_label: Roleminingsessionresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingsessionresponse', 'V1Roleminingsessionresponse'] 
slug: /tools/sdk/go/iairolemining/models/roleminingsessionresponse
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionresponse', 'V1Roleminingsessionresponse']
---

# Roleminingsessionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | Pointer to [**Roleminingsessionscope**](roleminingsessionscope) |  | [optional] 
**MinNumIdentitiesInPotentialRole** | Pointer to **NullableInt32** | Minimum number of identities in a potential role | [optional] 
**ScopingMethod** | Pointer to **NullableString** | The scoping method of the role mining session | [optional] 
**PrescribedPruneThreshold** | Pointer to **NullableInt32** | The computed (or prescribed) prune threshold for this session | [optional] 
**PruneThreshold** | Pointer to **NullableInt32** | The prune threshold to be used for this role mining session | [optional] 
**PotentialRoleCount** | Pointer to **int32** | The number of potential roles | [optional] 
**PotentialRolesReadyCount** | Pointer to **int32** | The number of potential roles which have completed processing | [optional] 
**Status** | Pointer to [**Roleminingsessionstatus**](roleminingsessionstatus) |  | [optional] 
**EmailRecipientId** | Pointer to **NullableString** | The id of the user who will receive an email about the role mining session | [optional] 
**CreatedBy** | Pointer to [**RoleminingsessionresponseCreatedBy**](roleminingsessionresponse-created-by) |  | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities | [optional] 
**Saved** | Pointer to **bool** | The session's saved status | [optional] [default to false]
**Name** | Pointer to **NullableString** | The session's saved name | [optional] 
**DataFilePath** | Pointer to **NullableString** | The data file path of the role mining session | [optional] 
**Id** | Pointer to **string** | Session Id for this role mining session | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this role mining session was created. | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The date-time when this role mining session was completed. | [optional] 
**Type** | Pointer to [**Roleminingroletype**](roleminingroletype) |  | [optional] 

## Methods

### NewRoleminingsessionresponse

`func NewRoleminingsessionresponse() *Roleminingsessionresponse`

NewRoleminingsessionresponse instantiates a new Roleminingsessionresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingsessionresponseWithDefaults

`func NewRoleminingsessionresponseWithDefaults() *Roleminingsessionresponse`

NewRoleminingsessionresponseWithDefaults instantiates a new Roleminingsessionresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScope

`func (o *Roleminingsessionresponse) GetScope() Roleminingsessionscope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Roleminingsessionresponse) GetScopeOk() (*Roleminingsessionscope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Roleminingsessionresponse) SetScope(v Roleminingsessionscope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *Roleminingsessionresponse) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessionresponse) GetMinNumIdentitiesInPotentialRole() int32`

GetMinNumIdentitiesInPotentialRole returns the MinNumIdentitiesInPotentialRole field if non-nil, zero value otherwise.

### GetMinNumIdentitiesInPotentialRoleOk

`func (o *Roleminingsessionresponse) GetMinNumIdentitiesInPotentialRoleOk() (*int32, bool)`

GetMinNumIdentitiesInPotentialRoleOk returns a tuple with the MinNumIdentitiesInPotentialRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessionresponse) SetMinNumIdentitiesInPotentialRole(v int32)`

SetMinNumIdentitiesInPotentialRole sets MinNumIdentitiesInPotentialRole field to given value.

### HasMinNumIdentitiesInPotentialRole

`func (o *Roleminingsessionresponse) HasMinNumIdentitiesInPotentialRole() bool`

HasMinNumIdentitiesInPotentialRole returns a boolean if a field has been set.

### SetMinNumIdentitiesInPotentialRoleNil

`func (o *Roleminingsessionresponse) SetMinNumIdentitiesInPotentialRoleNil(b bool)`

 SetMinNumIdentitiesInPotentialRoleNil sets the value for MinNumIdentitiesInPotentialRole to be an explicit nil

### UnsetMinNumIdentitiesInPotentialRole
`func (o *Roleminingsessionresponse) UnsetMinNumIdentitiesInPotentialRole()`

UnsetMinNumIdentitiesInPotentialRole ensures that no value is present for MinNumIdentitiesInPotentialRole, not even an explicit nil
### GetScopingMethod

`func (o *Roleminingsessionresponse) GetScopingMethod() string`

GetScopingMethod returns the ScopingMethod field if non-nil, zero value otherwise.

### GetScopingMethodOk

`func (o *Roleminingsessionresponse) GetScopingMethodOk() (*string, bool)`

GetScopingMethodOk returns a tuple with the ScopingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopingMethod

`func (o *Roleminingsessionresponse) SetScopingMethod(v string)`

SetScopingMethod sets ScopingMethod field to given value.

### HasScopingMethod

`func (o *Roleminingsessionresponse) HasScopingMethod() bool`

HasScopingMethod returns a boolean if a field has been set.

### SetScopingMethodNil

`func (o *Roleminingsessionresponse) SetScopingMethodNil(b bool)`

 SetScopingMethodNil sets the value for ScopingMethod to be an explicit nil

### UnsetScopingMethod
`func (o *Roleminingsessionresponse) UnsetScopingMethod()`

UnsetScopingMethod ensures that no value is present for ScopingMethod, not even an explicit nil
### GetPrescribedPruneThreshold

`func (o *Roleminingsessionresponse) GetPrescribedPruneThreshold() int32`

GetPrescribedPruneThreshold returns the PrescribedPruneThreshold field if non-nil, zero value otherwise.

### GetPrescribedPruneThresholdOk

`func (o *Roleminingsessionresponse) GetPrescribedPruneThresholdOk() (*int32, bool)`

GetPrescribedPruneThresholdOk returns a tuple with the PrescribedPruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribedPruneThreshold

`func (o *Roleminingsessionresponse) SetPrescribedPruneThreshold(v int32)`

SetPrescribedPruneThreshold sets PrescribedPruneThreshold field to given value.

### HasPrescribedPruneThreshold

`func (o *Roleminingsessionresponse) HasPrescribedPruneThreshold() bool`

HasPrescribedPruneThreshold returns a boolean if a field has been set.

### SetPrescribedPruneThresholdNil

`func (o *Roleminingsessionresponse) SetPrescribedPruneThresholdNil(b bool)`

 SetPrescribedPruneThresholdNil sets the value for PrescribedPruneThreshold to be an explicit nil

### UnsetPrescribedPruneThreshold
`func (o *Roleminingsessionresponse) UnsetPrescribedPruneThreshold()`

UnsetPrescribedPruneThreshold ensures that no value is present for PrescribedPruneThreshold, not even an explicit nil
### GetPruneThreshold

`func (o *Roleminingsessionresponse) GetPruneThreshold() int32`

GetPruneThreshold returns the PruneThreshold field if non-nil, zero value otherwise.

### GetPruneThresholdOk

`func (o *Roleminingsessionresponse) GetPruneThresholdOk() (*int32, bool)`

GetPruneThresholdOk returns a tuple with the PruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPruneThreshold

`func (o *Roleminingsessionresponse) SetPruneThreshold(v int32)`

SetPruneThreshold sets PruneThreshold field to given value.

### HasPruneThreshold

`func (o *Roleminingsessionresponse) HasPruneThreshold() bool`

HasPruneThreshold returns a boolean if a field has been set.

### SetPruneThresholdNil

`func (o *Roleminingsessionresponse) SetPruneThresholdNil(b bool)`

 SetPruneThresholdNil sets the value for PruneThreshold to be an explicit nil

### UnsetPruneThreshold
`func (o *Roleminingsessionresponse) UnsetPruneThreshold()`

UnsetPruneThreshold ensures that no value is present for PruneThreshold, not even an explicit nil
### GetPotentialRoleCount

`func (o *Roleminingsessionresponse) GetPotentialRoleCount() int32`

GetPotentialRoleCount returns the PotentialRoleCount field if non-nil, zero value otherwise.

### GetPotentialRoleCountOk

`func (o *Roleminingsessionresponse) GetPotentialRoleCountOk() (*int32, bool)`

GetPotentialRoleCountOk returns a tuple with the PotentialRoleCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleCount

`func (o *Roleminingsessionresponse) SetPotentialRoleCount(v int32)`

SetPotentialRoleCount sets PotentialRoleCount field to given value.

### HasPotentialRoleCount

`func (o *Roleminingsessionresponse) HasPotentialRoleCount() bool`

HasPotentialRoleCount returns a boolean if a field has been set.

### GetPotentialRolesReadyCount

`func (o *Roleminingsessionresponse) GetPotentialRolesReadyCount() int32`

GetPotentialRolesReadyCount returns the PotentialRolesReadyCount field if non-nil, zero value otherwise.

### GetPotentialRolesReadyCountOk

`func (o *Roleminingsessionresponse) GetPotentialRolesReadyCountOk() (*int32, bool)`

GetPotentialRolesReadyCountOk returns a tuple with the PotentialRolesReadyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRolesReadyCount

`func (o *Roleminingsessionresponse) SetPotentialRolesReadyCount(v int32)`

SetPotentialRolesReadyCount sets PotentialRolesReadyCount field to given value.

### HasPotentialRolesReadyCount

`func (o *Roleminingsessionresponse) HasPotentialRolesReadyCount() bool`

HasPotentialRolesReadyCount returns a boolean if a field has been set.

### GetStatus

`func (o *Roleminingsessionresponse) GetStatus() Roleminingsessionstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Roleminingsessionresponse) GetStatusOk() (*Roleminingsessionstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Roleminingsessionresponse) SetStatus(v Roleminingsessionstatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Roleminingsessionresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEmailRecipientId

`func (o *Roleminingsessionresponse) GetEmailRecipientId() string`

GetEmailRecipientId returns the EmailRecipientId field if non-nil, zero value otherwise.

### GetEmailRecipientIdOk

`func (o *Roleminingsessionresponse) GetEmailRecipientIdOk() (*string, bool)`

GetEmailRecipientIdOk returns a tuple with the EmailRecipientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailRecipientId

`func (o *Roleminingsessionresponse) SetEmailRecipientId(v string)`

SetEmailRecipientId sets EmailRecipientId field to given value.

### HasEmailRecipientId

`func (o *Roleminingsessionresponse) HasEmailRecipientId() bool`

HasEmailRecipientId returns a boolean if a field has been set.

### SetEmailRecipientIdNil

`func (o *Roleminingsessionresponse) SetEmailRecipientIdNil(b bool)`

 SetEmailRecipientIdNil sets the value for EmailRecipientId to be an explicit nil

### UnsetEmailRecipientId
`func (o *Roleminingsessionresponse) UnsetEmailRecipientId()`

UnsetEmailRecipientId ensures that no value is present for EmailRecipientId, not even an explicit nil
### GetCreatedBy

`func (o *Roleminingsessionresponse) GetCreatedBy() RoleminingsessionresponseCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Roleminingsessionresponse) GetCreatedByOk() (*RoleminingsessionresponseCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Roleminingsessionresponse) SetCreatedBy(v RoleminingsessionresponseCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Roleminingsessionresponse) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetIdentityCount

`func (o *Roleminingsessionresponse) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Roleminingsessionresponse) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Roleminingsessionresponse) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Roleminingsessionresponse) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetSaved

`func (o *Roleminingsessionresponse) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *Roleminingsessionresponse) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *Roleminingsessionresponse) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *Roleminingsessionresponse) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetName

`func (o *Roleminingsessionresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingsessionresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingsessionresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingsessionresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Roleminingsessionresponse) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Roleminingsessionresponse) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDataFilePath

`func (o *Roleminingsessionresponse) GetDataFilePath() string`

GetDataFilePath returns the DataFilePath field if non-nil, zero value otherwise.

### GetDataFilePathOk

`func (o *Roleminingsessionresponse) GetDataFilePathOk() (*string, bool)`

GetDataFilePathOk returns a tuple with the DataFilePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataFilePath

`func (o *Roleminingsessionresponse) SetDataFilePath(v string)`

SetDataFilePath sets DataFilePath field to given value.

### HasDataFilePath

`func (o *Roleminingsessionresponse) HasDataFilePath() bool`

HasDataFilePath returns a boolean if a field has been set.

### SetDataFilePathNil

`func (o *Roleminingsessionresponse) SetDataFilePathNil(b bool)`

 SetDataFilePathNil sets the value for DataFilePath to be an explicit nil

### UnsetDataFilePath
`func (o *Roleminingsessionresponse) UnsetDataFilePath()`

UnsetDataFilePath ensures that no value is present for DataFilePath, not even an explicit nil
### GetId

`func (o *Roleminingsessionresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingsessionresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingsessionresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingsessionresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Roleminingsessionresponse) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Roleminingsessionresponse) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Roleminingsessionresponse) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Roleminingsessionresponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Roleminingsessionresponse) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Roleminingsessionresponse) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Roleminingsessionresponse) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Roleminingsessionresponse) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.

### GetType

`func (o *Roleminingsessionresponse) GetType() Roleminingroletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Roleminingsessionresponse) GetTypeOk() (*Roleminingroletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Roleminingsessionresponse) SetType(v Roleminingroletype)`

SetType sets Type field to given value.

### HasType

`func (o *Roleminingsessionresponse) HasType() bool`

HasType returns a boolean if a field has been set.


