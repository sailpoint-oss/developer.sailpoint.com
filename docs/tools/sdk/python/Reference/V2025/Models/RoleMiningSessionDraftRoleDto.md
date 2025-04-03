---
id: v2025-role-mining-session-draft-role-dto
title: RoleMiningSessionDraftRoleDto
pagination_label: RoleMiningSessionDraftRoleDto
sidebar_label: RoleMiningSessionDraftRoleDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningSessionDraftRoleDto', 'V2025RoleMiningSessionDraftRoleDto'] 
slug: /tools/sdk/go/v2025/models/role-mining-session-draft-role-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDraftRoleDto', 'V2025RoleMiningSessionDraftRoleDto']
---

# RoleMiningSessionDraftRoleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the draft role | [optional] 
**Description** | Pointer to **string** | Draft role description | [optional] 
**IdentityIds** | Pointer to **[]string** | The list of identities for this role mining session. | [optional] 
**EntitlementIds** | Pointer to **[]string** | The list of entitlement ids for this role mining session. | [optional] 
**ExcludedEntitlements** | Pointer to **[]string** | The list of excluded entitlement ids. | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified date | [optional] 
**Type** | Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**Id** | Pointer to **string** | Id of the potential draft role | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this potential draft role was created. | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The date-time when this potential draft role was modified. | [optional] 

## Methods

### NewRoleMiningSessionDraftRoleDto

`func NewRoleMiningSessionDraftRoleDto() *RoleMiningSessionDraftRoleDto`

NewRoleMiningSessionDraftRoleDto instantiates a new RoleMiningSessionDraftRoleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningSessionDraftRoleDtoWithDefaults

`func NewRoleMiningSessionDraftRoleDtoWithDefaults() *RoleMiningSessionDraftRoleDto`

NewRoleMiningSessionDraftRoleDtoWithDefaults instantiates a new RoleMiningSessionDraftRoleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *RoleMiningSessionDraftRoleDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningSessionDraftRoleDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningSessionDraftRoleDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningSessionDraftRoleDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *RoleMiningSessionDraftRoleDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleMiningSessionDraftRoleDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleMiningSessionDraftRoleDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleMiningSessionDraftRoleDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIdentityIds

`func (o *RoleMiningSessionDraftRoleDto) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *RoleMiningSessionDraftRoleDto) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *RoleMiningSessionDraftRoleDto) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *RoleMiningSessionDraftRoleDto) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetEntitlementIds

`func (o *RoleMiningSessionDraftRoleDto) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *RoleMiningSessionDraftRoleDto) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *RoleMiningSessionDraftRoleDto) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.

### HasEntitlementIds

`func (o *RoleMiningSessionDraftRoleDto) HasEntitlementIds() bool`

HasEntitlementIds returns a boolean if a field has been set.

### GetExcludedEntitlements

`func (o *RoleMiningSessionDraftRoleDto) GetExcludedEntitlements() []string`

GetExcludedEntitlements returns the ExcludedEntitlements field if non-nil, zero value otherwise.

### GetExcludedEntitlementsOk

`func (o *RoleMiningSessionDraftRoleDto) GetExcludedEntitlementsOk() (*[]string, bool)`

GetExcludedEntitlementsOk returns a tuple with the ExcludedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedEntitlements

`func (o *RoleMiningSessionDraftRoleDto) SetExcludedEntitlements(v []string)`

SetExcludedEntitlements sets ExcludedEntitlements field to given value.

### HasExcludedEntitlements

`func (o *RoleMiningSessionDraftRoleDto) HasExcludedEntitlements() bool`

HasExcludedEntitlements returns a boolean if a field has been set.

### GetModified

`func (o *RoleMiningSessionDraftRoleDto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *RoleMiningSessionDraftRoleDto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *RoleMiningSessionDraftRoleDto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *RoleMiningSessionDraftRoleDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *RoleMiningSessionDraftRoleDto) GetType() RoleMiningRoleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMiningSessionDraftRoleDto) GetTypeOk() (*RoleMiningRoleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMiningSessionDraftRoleDto) SetType(v RoleMiningRoleType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMiningSessionDraftRoleDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RoleMiningSessionDraftRoleDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningSessionDraftRoleDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningSessionDraftRoleDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningSessionDraftRoleDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RoleMiningSessionDraftRoleDto) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleMiningSessionDraftRoleDto) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleMiningSessionDraftRoleDto) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleMiningSessionDraftRoleDto) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *RoleMiningSessionDraftRoleDto) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *RoleMiningSessionDraftRoleDto) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *RoleMiningSessionDraftRoleDto) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *RoleMiningSessionDraftRoleDto) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.


