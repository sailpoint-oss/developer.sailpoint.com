---
id: v2025-role-mining-potential-role
title: RoleMiningPotentialRole
pagination_label: RoleMiningPotentialRole
sidebar_label: RoleMiningPotentialRole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningPotentialRole', 'V2025RoleMiningPotentialRole'] 
slug: /tools/sdk/go/v2025/models/role-mining-potential-role
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRole', 'V2025RoleMiningPotentialRole']
---

# RoleMiningPotentialRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | Pointer to [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**Density** | Pointer to **int32** | The density of a potential role. | [optional] 
**Description** | Pointer to **NullableString** | The description of a potential role. | [optional] 
**EntitlementCount** | Pointer to **int32** | The number of entitlements in a potential role. | [optional] 
**ExcludedEntitlements** | Pointer to **[]string** | The list of entitlement ids to be excluded. | [optional] 
**Freshness** | Pointer to **int32** | The freshness of a potential role. | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities in a potential role. | [optional] 
**IdentityDistribution** | Pointer to [**[]RoleMiningIdentityDistribution**](role-mining-identity-distribution) | Identity attribute distribution. | [optional] 
**IdentityIds** | Pointer to **[]string** | The list of ids in a potential role. | [optional] 
**Name** | Pointer to **string** | Name of the potential role. | [optional] 
**ProvisionState** | Pointer to [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**Quality** | Pointer to **int32** | The quality of a potential role. | [optional] 
**RoleId** | Pointer to **NullableString** | The roleId of a potential role. | [optional] 
**Saved** | Pointer to **bool** | The potential role's saved status. | [optional] 
**Session** | Pointer to [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 
**Type** | Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**Id** | Pointer to **string** | Id of the potential role | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this potential role was created. | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The date-time when this potential role was modified. | [optional] 

## Methods

### NewRoleMiningPotentialRole

`func NewRoleMiningPotentialRole() *RoleMiningPotentialRole`

NewRoleMiningPotentialRole instantiates a new RoleMiningPotentialRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningPotentialRoleWithDefaults

`func NewRoleMiningPotentialRoleWithDefaults() *RoleMiningPotentialRole`

NewRoleMiningPotentialRoleWithDefaults instantiates a new RoleMiningPotentialRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedBy

`func (o *RoleMiningPotentialRole) GetCreatedBy() RoleMiningSessionResponseCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *RoleMiningPotentialRole) GetCreatedByOk() (*RoleMiningSessionResponseCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *RoleMiningPotentialRole) SetCreatedBy(v RoleMiningSessionResponseCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *RoleMiningPotentialRole) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetDensity

`func (o *RoleMiningPotentialRole) GetDensity() int32`

GetDensity returns the Density field if non-nil, zero value otherwise.

### GetDensityOk

`func (o *RoleMiningPotentialRole) GetDensityOk() (*int32, bool)`

GetDensityOk returns a tuple with the Density field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDensity

`func (o *RoleMiningPotentialRole) SetDensity(v int32)`

SetDensity sets Density field to given value.

### HasDensity

`func (o *RoleMiningPotentialRole) HasDensity() bool`

HasDensity returns a boolean if a field has been set.

### GetDescription

`func (o *RoleMiningPotentialRole) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleMiningPotentialRole) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleMiningPotentialRole) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleMiningPotentialRole) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleMiningPotentialRole) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleMiningPotentialRole) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetEntitlementCount

`func (o *RoleMiningPotentialRole) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *RoleMiningPotentialRole) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *RoleMiningPotentialRole) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *RoleMiningPotentialRole) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetExcludedEntitlements

`func (o *RoleMiningPotentialRole) GetExcludedEntitlements() []string`

GetExcludedEntitlements returns the ExcludedEntitlements field if non-nil, zero value otherwise.

### GetExcludedEntitlementsOk

`func (o *RoleMiningPotentialRole) GetExcludedEntitlementsOk() (*[]string, bool)`

GetExcludedEntitlementsOk returns a tuple with the ExcludedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedEntitlements

`func (o *RoleMiningPotentialRole) SetExcludedEntitlements(v []string)`

SetExcludedEntitlements sets ExcludedEntitlements field to given value.

### HasExcludedEntitlements

`func (o *RoleMiningPotentialRole) HasExcludedEntitlements() bool`

HasExcludedEntitlements returns a boolean if a field has been set.

### SetExcludedEntitlementsNil

`func (o *RoleMiningPotentialRole) SetExcludedEntitlementsNil(b bool)`

 SetExcludedEntitlementsNil sets the value for ExcludedEntitlements to be an explicit nil

### UnsetExcludedEntitlements
`func (o *RoleMiningPotentialRole) UnsetExcludedEntitlements()`

UnsetExcludedEntitlements ensures that no value is present for ExcludedEntitlements, not even an explicit nil
### GetFreshness

`func (o *RoleMiningPotentialRole) GetFreshness() int32`

GetFreshness returns the Freshness field if non-nil, zero value otherwise.

### GetFreshnessOk

`func (o *RoleMiningPotentialRole) GetFreshnessOk() (*int32, bool)`

GetFreshnessOk returns a tuple with the Freshness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreshness

`func (o *RoleMiningPotentialRole) SetFreshness(v int32)`

SetFreshness sets Freshness field to given value.

### HasFreshness

`func (o *RoleMiningPotentialRole) HasFreshness() bool`

HasFreshness returns a boolean if a field has been set.

### GetIdentityCount

`func (o *RoleMiningPotentialRole) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *RoleMiningPotentialRole) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *RoleMiningPotentialRole) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *RoleMiningPotentialRole) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetIdentityDistribution

`func (o *RoleMiningPotentialRole) GetIdentityDistribution() []RoleMiningIdentityDistribution`

GetIdentityDistribution returns the IdentityDistribution field if non-nil, zero value otherwise.

### GetIdentityDistributionOk

`func (o *RoleMiningPotentialRole) GetIdentityDistributionOk() (*[]RoleMiningIdentityDistribution, bool)`

GetIdentityDistributionOk returns a tuple with the IdentityDistribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityDistribution

`func (o *RoleMiningPotentialRole) SetIdentityDistribution(v []RoleMiningIdentityDistribution)`

SetIdentityDistribution sets IdentityDistribution field to given value.

### HasIdentityDistribution

`func (o *RoleMiningPotentialRole) HasIdentityDistribution() bool`

HasIdentityDistribution returns a boolean if a field has been set.

### SetIdentityDistributionNil

`func (o *RoleMiningPotentialRole) SetIdentityDistributionNil(b bool)`

 SetIdentityDistributionNil sets the value for IdentityDistribution to be an explicit nil

### UnsetIdentityDistribution
`func (o *RoleMiningPotentialRole) UnsetIdentityDistribution()`

UnsetIdentityDistribution ensures that no value is present for IdentityDistribution, not even an explicit nil
### GetIdentityIds

`func (o *RoleMiningPotentialRole) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *RoleMiningPotentialRole) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *RoleMiningPotentialRole) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *RoleMiningPotentialRole) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningPotentialRole) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningPotentialRole) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningPotentialRole) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningPotentialRole) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProvisionState

`func (o *RoleMiningPotentialRole) GetProvisionState() RoleMiningPotentialRoleProvisionState`

GetProvisionState returns the ProvisionState field if non-nil, zero value otherwise.

### GetProvisionStateOk

`func (o *RoleMiningPotentialRole) GetProvisionStateOk() (*RoleMiningPotentialRoleProvisionState, bool)`

GetProvisionStateOk returns a tuple with the ProvisionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionState

`func (o *RoleMiningPotentialRole) SetProvisionState(v RoleMiningPotentialRoleProvisionState)`

SetProvisionState sets ProvisionState field to given value.

### HasProvisionState

`func (o *RoleMiningPotentialRole) HasProvisionState() bool`

HasProvisionState returns a boolean if a field has been set.

### GetQuality

`func (o *RoleMiningPotentialRole) GetQuality() int32`

GetQuality returns the Quality field if non-nil, zero value otherwise.

### GetQualityOk

`func (o *RoleMiningPotentialRole) GetQualityOk() (*int32, bool)`

GetQualityOk returns a tuple with the Quality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuality

`func (o *RoleMiningPotentialRole) SetQuality(v int32)`

SetQuality sets Quality field to given value.

### HasQuality

`func (o *RoleMiningPotentialRole) HasQuality() bool`

HasQuality returns a boolean if a field has been set.

### GetRoleId

`func (o *RoleMiningPotentialRole) GetRoleId() string`

GetRoleId returns the RoleId field if non-nil, zero value otherwise.

### GetRoleIdOk

`func (o *RoleMiningPotentialRole) GetRoleIdOk() (*string, bool)`

GetRoleIdOk returns a tuple with the RoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleId

`func (o *RoleMiningPotentialRole) SetRoleId(v string)`

SetRoleId sets RoleId field to given value.

### HasRoleId

`func (o *RoleMiningPotentialRole) HasRoleId() bool`

HasRoleId returns a boolean if a field has been set.

### SetRoleIdNil

`func (o *RoleMiningPotentialRole) SetRoleIdNil(b bool)`

 SetRoleIdNil sets the value for RoleId to be an explicit nil

### UnsetRoleId
`func (o *RoleMiningPotentialRole) UnsetRoleId()`

UnsetRoleId ensures that no value is present for RoleId, not even an explicit nil
### GetSaved

`func (o *RoleMiningPotentialRole) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *RoleMiningPotentialRole) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *RoleMiningPotentialRole) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *RoleMiningPotentialRole) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetSession

`func (o *RoleMiningPotentialRole) GetSession() RoleMiningSessionParametersDto`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *RoleMiningPotentialRole) GetSessionOk() (*RoleMiningSessionParametersDto, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *RoleMiningPotentialRole) SetSession(v RoleMiningSessionParametersDto)`

SetSession sets Session field to given value.

### HasSession

`func (o *RoleMiningPotentialRole) HasSession() bool`

HasSession returns a boolean if a field has been set.

### GetType

`func (o *RoleMiningPotentialRole) GetType() RoleMiningRoleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMiningPotentialRole) GetTypeOk() (*RoleMiningRoleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMiningPotentialRole) SetType(v RoleMiningRoleType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMiningPotentialRole) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RoleMiningPotentialRole) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningPotentialRole) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningPotentialRole) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningPotentialRole) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RoleMiningPotentialRole) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleMiningPotentialRole) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleMiningPotentialRole) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleMiningPotentialRole) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *RoleMiningPotentialRole) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *RoleMiningPotentialRole) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *RoleMiningPotentialRole) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *RoleMiningPotentialRole) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.


