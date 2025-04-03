---
id: v2025-role-mining-session-response
title: RoleMiningSessionResponse
pagination_label: RoleMiningSessionResponse
sidebar_label: RoleMiningSessionResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningSessionResponse', 'V2025RoleMiningSessionResponse'] 
slug: /tools/sdk/go/v2025/models/role-mining-session-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponse', 'V2025RoleMiningSessionResponse']
---

# RoleMiningSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**MinNumIdentitiesInPotentialRole** | Pointer to **NullableInt32** | Minimum number of identities in a potential role | [optional] 
**ScopingMethod** | Pointer to **NullableString** | The scoping method of the role mining session | [optional] 
**PrescribedPruneThreshold** | Pointer to **NullableInt32** | The computed (or prescribed) prune threshold for this session | [optional] 
**PruneThreshold** | Pointer to **NullableInt32** | The prune threshold to be used for this role mining session | [optional] 
**PotentialRoleCount** | Pointer to **int32** | The number of potential roles | [optional] 
**PotentialRolesReadyCount** | Pointer to **int32** | The number of potential roles which have completed processing | [optional] 
**Status** | Pointer to [**RoleMiningSessionStatus**](role-mining-session-status) |  | [optional] 
**EmailRecipientId** | Pointer to **NullableString** | The id of the user who will receive an email about the role mining session | [optional] 
**CreatedBy** | Pointer to [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities | [optional] 
**Saved** | Pointer to **bool** | The session's saved status | [optional] [default to false]
**Name** | Pointer to **NullableString** | The session's saved name | [optional] 
**DataFilePath** | Pointer to **NullableString** | The data file path of the role mining session | [optional] 
**Id** | Pointer to **string** | Session Id for this role mining session | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this role mining session was created. | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The date-time when this role mining session was completed. | [optional] 
**Type** | Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 

## Methods

### NewRoleMiningSessionResponse

`func NewRoleMiningSessionResponse() *RoleMiningSessionResponse`

NewRoleMiningSessionResponse instantiates a new RoleMiningSessionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningSessionResponseWithDefaults

`func NewRoleMiningSessionResponseWithDefaults() *RoleMiningSessionResponse`

NewRoleMiningSessionResponseWithDefaults instantiates a new RoleMiningSessionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScope

`func (o *RoleMiningSessionResponse) GetScope() RoleMiningSessionScope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *RoleMiningSessionResponse) GetScopeOk() (*RoleMiningSessionScope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *RoleMiningSessionResponse) SetScope(v RoleMiningSessionScope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *RoleMiningSessionResponse) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionResponse) GetMinNumIdentitiesInPotentialRole() int32`

GetMinNumIdentitiesInPotentialRole returns the MinNumIdentitiesInPotentialRole field if non-nil, zero value otherwise.

### GetMinNumIdentitiesInPotentialRoleOk

`func (o *RoleMiningSessionResponse) GetMinNumIdentitiesInPotentialRoleOk() (*int32, bool)`

GetMinNumIdentitiesInPotentialRoleOk returns a tuple with the MinNumIdentitiesInPotentialRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionResponse) SetMinNumIdentitiesInPotentialRole(v int32)`

SetMinNumIdentitiesInPotentialRole sets MinNumIdentitiesInPotentialRole field to given value.

### HasMinNumIdentitiesInPotentialRole

`func (o *RoleMiningSessionResponse) HasMinNumIdentitiesInPotentialRole() bool`

HasMinNumIdentitiesInPotentialRole returns a boolean if a field has been set.

### SetMinNumIdentitiesInPotentialRoleNil

`func (o *RoleMiningSessionResponse) SetMinNumIdentitiesInPotentialRoleNil(b bool)`

 SetMinNumIdentitiesInPotentialRoleNil sets the value for MinNumIdentitiesInPotentialRole to be an explicit nil

### UnsetMinNumIdentitiesInPotentialRole
`func (o *RoleMiningSessionResponse) UnsetMinNumIdentitiesInPotentialRole()`

UnsetMinNumIdentitiesInPotentialRole ensures that no value is present for MinNumIdentitiesInPotentialRole, not even an explicit nil
### GetScopingMethod

`func (o *RoleMiningSessionResponse) GetScopingMethod() string`

GetScopingMethod returns the ScopingMethod field if non-nil, zero value otherwise.

### GetScopingMethodOk

`func (o *RoleMiningSessionResponse) GetScopingMethodOk() (*string, bool)`

GetScopingMethodOk returns a tuple with the ScopingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopingMethod

`func (o *RoleMiningSessionResponse) SetScopingMethod(v string)`

SetScopingMethod sets ScopingMethod field to given value.

### HasScopingMethod

`func (o *RoleMiningSessionResponse) HasScopingMethod() bool`

HasScopingMethod returns a boolean if a field has been set.

### SetScopingMethodNil

`func (o *RoleMiningSessionResponse) SetScopingMethodNil(b bool)`

 SetScopingMethodNil sets the value for ScopingMethod to be an explicit nil

### UnsetScopingMethod
`func (o *RoleMiningSessionResponse) UnsetScopingMethod()`

UnsetScopingMethod ensures that no value is present for ScopingMethod, not even an explicit nil
### GetPrescribedPruneThreshold

`func (o *RoleMiningSessionResponse) GetPrescribedPruneThreshold() int32`

GetPrescribedPruneThreshold returns the PrescribedPruneThreshold field if non-nil, zero value otherwise.

### GetPrescribedPruneThresholdOk

`func (o *RoleMiningSessionResponse) GetPrescribedPruneThresholdOk() (*int32, bool)`

GetPrescribedPruneThresholdOk returns a tuple with the PrescribedPruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribedPruneThreshold

`func (o *RoleMiningSessionResponse) SetPrescribedPruneThreshold(v int32)`

SetPrescribedPruneThreshold sets PrescribedPruneThreshold field to given value.

### HasPrescribedPruneThreshold

`func (o *RoleMiningSessionResponse) HasPrescribedPruneThreshold() bool`

HasPrescribedPruneThreshold returns a boolean if a field has been set.

### SetPrescribedPruneThresholdNil

`func (o *RoleMiningSessionResponse) SetPrescribedPruneThresholdNil(b bool)`

 SetPrescribedPruneThresholdNil sets the value for PrescribedPruneThreshold to be an explicit nil

### UnsetPrescribedPruneThreshold
`func (o *RoleMiningSessionResponse) UnsetPrescribedPruneThreshold()`

UnsetPrescribedPruneThreshold ensures that no value is present for PrescribedPruneThreshold, not even an explicit nil
### GetPruneThreshold

`func (o *RoleMiningSessionResponse) GetPruneThreshold() int32`

GetPruneThreshold returns the PruneThreshold field if non-nil, zero value otherwise.

### GetPruneThresholdOk

`func (o *RoleMiningSessionResponse) GetPruneThresholdOk() (*int32, bool)`

GetPruneThresholdOk returns a tuple with the PruneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPruneThreshold

`func (o *RoleMiningSessionResponse) SetPruneThreshold(v int32)`

SetPruneThreshold sets PruneThreshold field to given value.

### HasPruneThreshold

`func (o *RoleMiningSessionResponse) HasPruneThreshold() bool`

HasPruneThreshold returns a boolean if a field has been set.

### SetPruneThresholdNil

`func (o *RoleMiningSessionResponse) SetPruneThresholdNil(b bool)`

 SetPruneThresholdNil sets the value for PruneThreshold to be an explicit nil

### UnsetPruneThreshold
`func (o *RoleMiningSessionResponse) UnsetPruneThreshold()`

UnsetPruneThreshold ensures that no value is present for PruneThreshold, not even an explicit nil
### GetPotentialRoleCount

`func (o *RoleMiningSessionResponse) GetPotentialRoleCount() int32`

GetPotentialRoleCount returns the PotentialRoleCount field if non-nil, zero value otherwise.

### GetPotentialRoleCountOk

`func (o *RoleMiningSessionResponse) GetPotentialRoleCountOk() (*int32, bool)`

GetPotentialRoleCountOk returns a tuple with the PotentialRoleCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleCount

`func (o *RoleMiningSessionResponse) SetPotentialRoleCount(v int32)`

SetPotentialRoleCount sets PotentialRoleCount field to given value.

### HasPotentialRoleCount

`func (o *RoleMiningSessionResponse) HasPotentialRoleCount() bool`

HasPotentialRoleCount returns a boolean if a field has been set.

### GetPotentialRolesReadyCount

`func (o *RoleMiningSessionResponse) GetPotentialRolesReadyCount() int32`

GetPotentialRolesReadyCount returns the PotentialRolesReadyCount field if non-nil, zero value otherwise.

### GetPotentialRolesReadyCountOk

`func (o *RoleMiningSessionResponse) GetPotentialRolesReadyCountOk() (*int32, bool)`

GetPotentialRolesReadyCountOk returns a tuple with the PotentialRolesReadyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRolesReadyCount

`func (o *RoleMiningSessionResponse) SetPotentialRolesReadyCount(v int32)`

SetPotentialRolesReadyCount sets PotentialRolesReadyCount field to given value.

### HasPotentialRolesReadyCount

`func (o *RoleMiningSessionResponse) HasPotentialRolesReadyCount() bool`

HasPotentialRolesReadyCount returns a boolean if a field has been set.

### GetStatus

`func (o *RoleMiningSessionResponse) GetStatus() RoleMiningSessionStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoleMiningSessionResponse) GetStatusOk() (*RoleMiningSessionStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoleMiningSessionResponse) SetStatus(v RoleMiningSessionStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoleMiningSessionResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEmailRecipientId

`func (o *RoleMiningSessionResponse) GetEmailRecipientId() string`

GetEmailRecipientId returns the EmailRecipientId field if non-nil, zero value otherwise.

### GetEmailRecipientIdOk

`func (o *RoleMiningSessionResponse) GetEmailRecipientIdOk() (*string, bool)`

GetEmailRecipientIdOk returns a tuple with the EmailRecipientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailRecipientId

`func (o *RoleMiningSessionResponse) SetEmailRecipientId(v string)`

SetEmailRecipientId sets EmailRecipientId field to given value.

### HasEmailRecipientId

`func (o *RoleMiningSessionResponse) HasEmailRecipientId() bool`

HasEmailRecipientId returns a boolean if a field has been set.

### SetEmailRecipientIdNil

`func (o *RoleMiningSessionResponse) SetEmailRecipientIdNil(b bool)`

 SetEmailRecipientIdNil sets the value for EmailRecipientId to be an explicit nil

### UnsetEmailRecipientId
`func (o *RoleMiningSessionResponse) UnsetEmailRecipientId()`

UnsetEmailRecipientId ensures that no value is present for EmailRecipientId, not even an explicit nil
### GetCreatedBy

`func (o *RoleMiningSessionResponse) GetCreatedBy() RoleMiningSessionResponseCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *RoleMiningSessionResponse) GetCreatedByOk() (*RoleMiningSessionResponseCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *RoleMiningSessionResponse) SetCreatedBy(v RoleMiningSessionResponseCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *RoleMiningSessionResponse) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetIdentityCount

`func (o *RoleMiningSessionResponse) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *RoleMiningSessionResponse) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *RoleMiningSessionResponse) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *RoleMiningSessionResponse) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetSaved

`func (o *RoleMiningSessionResponse) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *RoleMiningSessionResponse) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *RoleMiningSessionResponse) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *RoleMiningSessionResponse) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningSessionResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningSessionResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningSessionResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningSessionResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RoleMiningSessionResponse) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RoleMiningSessionResponse) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDataFilePath

`func (o *RoleMiningSessionResponse) GetDataFilePath() string`

GetDataFilePath returns the DataFilePath field if non-nil, zero value otherwise.

### GetDataFilePathOk

`func (o *RoleMiningSessionResponse) GetDataFilePathOk() (*string, bool)`

GetDataFilePathOk returns a tuple with the DataFilePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataFilePath

`func (o *RoleMiningSessionResponse) SetDataFilePath(v string)`

SetDataFilePath sets DataFilePath field to given value.

### HasDataFilePath

`func (o *RoleMiningSessionResponse) HasDataFilePath() bool`

HasDataFilePath returns a boolean if a field has been set.

### SetDataFilePathNil

`func (o *RoleMiningSessionResponse) SetDataFilePathNil(b bool)`

 SetDataFilePathNil sets the value for DataFilePath to be an explicit nil

### UnsetDataFilePath
`func (o *RoleMiningSessionResponse) UnsetDataFilePath()`

UnsetDataFilePath ensures that no value is present for DataFilePath, not even an explicit nil
### GetId

`func (o *RoleMiningSessionResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningSessionResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningSessionResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningSessionResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RoleMiningSessionResponse) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleMiningSessionResponse) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleMiningSessionResponse) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleMiningSessionResponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *RoleMiningSessionResponse) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *RoleMiningSessionResponse) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *RoleMiningSessionResponse) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *RoleMiningSessionResponse) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.

### GetType

`func (o *RoleMiningSessionResponse) GetType() RoleMiningRoleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMiningSessionResponse) GetTypeOk() (*RoleMiningRoleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMiningSessionResponse) SetType(v RoleMiningRoleType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMiningSessionResponse) HasType() bool`

HasType returns a boolean if a field has been set.


