---
id: role-mining-session-response
title: RoleMiningSessionResponse
pagination_label: RoleMiningSessionResponse
sidebar_label: RoleMiningSessionResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionResponse'] 
slug: /tools/sdk/go/beta/models/role-mining-session-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponse']
---

# RoleMiningSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** |  Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**MinNumIdentitiesInPotentialRole** |  Pointer to **int32** | Minimum number of identities in a potential role | [optional] 
**PrescribedPruneThreshold** |  Pointer to **int32** | The computed (or prescribed) prune threshold for this session | [optional] 
**PruneThreshold** |  Pointer to **int32** | The prune threshold to be used for this role mining session | [optional] 
**PotentialRoleCount** |  Pointer to **int32** | The number of potential roles | [optional] 
**PotentialRolesReadyCount** |  Pointer to **int32** | The number of potential roles which have completed processing | [optional] 
**Status** |  Pointer to [**RoleMiningSessionStatus**](role-mining-session-status) |  | [optional] 
**Id** |  Pointer to **string** | Session Id for this role mining session | [optional] 
**CreatedDate** |  Pointer to **time.Time** | The date-time when this role mining session was created. | [optional] 
**ModifiedDate** |  Pointer to **time.Time** | The date-time when this role mining session was completed. | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 

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

`func (o *RoleMiningSessionResponse) GetCreatedDate() time.Time`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleMiningSessionResponse) GetCreatedDateOk() (*time.Time, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleMiningSessionResponse) SetCreatedDate(v time.Time)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleMiningSessionResponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *RoleMiningSessionResponse) GetModifiedDate() time.Time`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *RoleMiningSessionResponse) GetModifiedDateOk() (*time.Time, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *RoleMiningSessionResponse) SetModifiedDate(v time.Time)`

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


[[Back to top]](#) 


