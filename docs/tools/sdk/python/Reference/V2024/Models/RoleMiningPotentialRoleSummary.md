---
id: v2024-role-mining-potential-role-summary
title: RoleMiningPotentialRoleSummary
pagination_label: RoleMiningPotentialRoleSummary
sidebar_label: RoleMiningPotentialRoleSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningPotentialRoleSummary', 'V2024RoleMiningPotentialRoleSummary'] 
slug: /tools/sdk/go/v2024/models/role-mining-potential-role-summary
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSummary', 'V2024RoleMiningPotentialRoleSummary']
---

# RoleMiningPotentialRoleSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the potential role | [optional] 
**Name** | Pointer to **string** | Name of the potential role | [optional] 
**PotentialRoleRef** | Pointer to [**RoleMiningPotentialRoleRef**](role-mining-potential-role-ref) |  | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities in a potential role. | [optional] 
**EntitlementCount** | Pointer to **int32** | The number of entitlements in a potential role. | [optional] 
**IdentityGroupStatus** | Pointer to **string** | The status for this identity group which can be \"REQUESTED\" or \"OBTAINED\" | [optional] 
**ProvisionState** | Pointer to [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**RoleId** | Pointer to **NullableString** | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [optional] 
**Density** | Pointer to **int32** | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [optional] 
**Freshness** | Pointer to **int32** | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [optional] 
**Quality** | Pointer to **int32** | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [optional] 
**Type** | Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**CreatedBy** | Pointer to [**RoleMiningPotentialRoleSummaryCreatedBy**](role-mining-potential-role-summary-created-by) |  | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this potential role was created. | [optional] 
**Saved** | Pointer to **bool** | The potential role's saved status | [optional] [default to false]
**Description** | Pointer to **NullableString** | Description of the potential role | [optional] 
**Session** | Pointer to [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 

## Methods

### NewRoleMiningPotentialRoleSummary

`func NewRoleMiningPotentialRoleSummary() *RoleMiningPotentialRoleSummary`

NewRoleMiningPotentialRoleSummary instantiates a new RoleMiningPotentialRoleSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningPotentialRoleSummaryWithDefaults

`func NewRoleMiningPotentialRoleSummaryWithDefaults() *RoleMiningPotentialRoleSummary`

NewRoleMiningPotentialRoleSummaryWithDefaults instantiates a new RoleMiningPotentialRoleSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleMiningPotentialRoleSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningPotentialRoleSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningPotentialRoleSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningPotentialRoleSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningPotentialRoleSummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningPotentialRoleSummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningPotentialRoleSummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningPotentialRoleSummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPotentialRoleRef

`func (o *RoleMiningPotentialRoleSummary) GetPotentialRoleRef() RoleMiningPotentialRoleRef`

GetPotentialRoleRef returns the PotentialRoleRef field if non-nil, zero value otherwise.

### GetPotentialRoleRefOk

`func (o *RoleMiningPotentialRoleSummary) GetPotentialRoleRefOk() (*RoleMiningPotentialRoleRef, bool)`

GetPotentialRoleRefOk returns a tuple with the PotentialRoleRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleRef

`func (o *RoleMiningPotentialRoleSummary) SetPotentialRoleRef(v RoleMiningPotentialRoleRef)`

SetPotentialRoleRef sets PotentialRoleRef field to given value.

### HasPotentialRoleRef

`func (o *RoleMiningPotentialRoleSummary) HasPotentialRoleRef() bool`

HasPotentialRoleRef returns a boolean if a field has been set.

### GetIdentityCount

`func (o *RoleMiningPotentialRoleSummary) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *RoleMiningPotentialRoleSummary) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *RoleMiningPotentialRoleSummary) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *RoleMiningPotentialRoleSummary) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *RoleMiningPotentialRoleSummary) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *RoleMiningPotentialRoleSummary) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *RoleMiningPotentialRoleSummary) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *RoleMiningPotentialRoleSummary) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetIdentityGroupStatus

`func (o *RoleMiningPotentialRoleSummary) GetIdentityGroupStatus() string`

GetIdentityGroupStatus returns the IdentityGroupStatus field if non-nil, zero value otherwise.

### GetIdentityGroupStatusOk

`func (o *RoleMiningPotentialRoleSummary) GetIdentityGroupStatusOk() (*string, bool)`

GetIdentityGroupStatusOk returns a tuple with the IdentityGroupStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityGroupStatus

`func (o *RoleMiningPotentialRoleSummary) SetIdentityGroupStatus(v string)`

SetIdentityGroupStatus sets IdentityGroupStatus field to given value.

### HasIdentityGroupStatus

`func (o *RoleMiningPotentialRoleSummary) HasIdentityGroupStatus() bool`

HasIdentityGroupStatus returns a boolean if a field has been set.

### GetProvisionState

`func (o *RoleMiningPotentialRoleSummary) GetProvisionState() RoleMiningPotentialRoleProvisionState`

GetProvisionState returns the ProvisionState field if non-nil, zero value otherwise.

### GetProvisionStateOk

`func (o *RoleMiningPotentialRoleSummary) GetProvisionStateOk() (*RoleMiningPotentialRoleProvisionState, bool)`

GetProvisionStateOk returns a tuple with the ProvisionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionState

`func (o *RoleMiningPotentialRoleSummary) SetProvisionState(v RoleMiningPotentialRoleProvisionState)`

SetProvisionState sets ProvisionState field to given value.

### HasProvisionState

`func (o *RoleMiningPotentialRoleSummary) HasProvisionState() bool`

HasProvisionState returns a boolean if a field has been set.

### GetRoleId

`func (o *RoleMiningPotentialRoleSummary) GetRoleId() string`

GetRoleId returns the RoleId field if non-nil, zero value otherwise.

### GetRoleIdOk

`func (o *RoleMiningPotentialRoleSummary) GetRoleIdOk() (*string, bool)`

GetRoleIdOk returns a tuple with the RoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleId

`func (o *RoleMiningPotentialRoleSummary) SetRoleId(v string)`

SetRoleId sets RoleId field to given value.

### HasRoleId

`func (o *RoleMiningPotentialRoleSummary) HasRoleId() bool`

HasRoleId returns a boolean if a field has been set.

### SetRoleIdNil

`func (o *RoleMiningPotentialRoleSummary) SetRoleIdNil(b bool)`

 SetRoleIdNil sets the value for RoleId to be an explicit nil

### UnsetRoleId
`func (o *RoleMiningPotentialRoleSummary) UnsetRoleId()`

UnsetRoleId ensures that no value is present for RoleId, not even an explicit nil
### GetDensity

`func (o *RoleMiningPotentialRoleSummary) GetDensity() int32`

GetDensity returns the Density field if non-nil, zero value otherwise.

### GetDensityOk

`func (o *RoleMiningPotentialRoleSummary) GetDensityOk() (*int32, bool)`

GetDensityOk returns a tuple with the Density field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDensity

`func (o *RoleMiningPotentialRoleSummary) SetDensity(v int32)`

SetDensity sets Density field to given value.

### HasDensity

`func (o *RoleMiningPotentialRoleSummary) HasDensity() bool`

HasDensity returns a boolean if a field has been set.

### GetFreshness

`func (o *RoleMiningPotentialRoleSummary) GetFreshness() int32`

GetFreshness returns the Freshness field if non-nil, zero value otherwise.

### GetFreshnessOk

`func (o *RoleMiningPotentialRoleSummary) GetFreshnessOk() (*int32, bool)`

GetFreshnessOk returns a tuple with the Freshness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreshness

`func (o *RoleMiningPotentialRoleSummary) SetFreshness(v int32)`

SetFreshness sets Freshness field to given value.

### HasFreshness

`func (o *RoleMiningPotentialRoleSummary) HasFreshness() bool`

HasFreshness returns a boolean if a field has been set.

### GetQuality

`func (o *RoleMiningPotentialRoleSummary) GetQuality() int32`

GetQuality returns the Quality field if non-nil, zero value otherwise.

### GetQualityOk

`func (o *RoleMiningPotentialRoleSummary) GetQualityOk() (*int32, bool)`

GetQualityOk returns a tuple with the Quality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuality

`func (o *RoleMiningPotentialRoleSummary) SetQuality(v int32)`

SetQuality sets Quality field to given value.

### HasQuality

`func (o *RoleMiningPotentialRoleSummary) HasQuality() bool`

HasQuality returns a boolean if a field has been set.

### GetType

`func (o *RoleMiningPotentialRoleSummary) GetType() RoleMiningRoleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMiningPotentialRoleSummary) GetTypeOk() (*RoleMiningRoleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMiningPotentialRoleSummary) SetType(v RoleMiningRoleType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMiningPotentialRoleSummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCreatedBy

`func (o *RoleMiningPotentialRoleSummary) GetCreatedBy() RoleMiningPotentialRoleSummaryCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *RoleMiningPotentialRoleSummary) GetCreatedByOk() (*RoleMiningPotentialRoleSummaryCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *RoleMiningPotentialRoleSummary) SetCreatedBy(v RoleMiningPotentialRoleSummaryCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *RoleMiningPotentialRoleSummary) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RoleMiningPotentialRoleSummary) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleMiningPotentialRoleSummary) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleMiningPotentialRoleSummary) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleMiningPotentialRoleSummary) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetSaved

`func (o *RoleMiningPotentialRoleSummary) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *RoleMiningPotentialRoleSummary) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *RoleMiningPotentialRoleSummary) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *RoleMiningPotentialRoleSummary) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetDescription

`func (o *RoleMiningPotentialRoleSummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleMiningPotentialRoleSummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleMiningPotentialRoleSummary) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleMiningPotentialRoleSummary) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleMiningPotentialRoleSummary) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleMiningPotentialRoleSummary) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSession

`func (o *RoleMiningPotentialRoleSummary) GetSession() RoleMiningSessionParametersDto`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *RoleMiningPotentialRoleSummary) GetSessionOk() (*RoleMiningSessionParametersDto, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *RoleMiningPotentialRoleSummary) SetSession(v RoleMiningSessionParametersDto)`

SetSession sets Session field to given value.

### HasSession

`func (o *RoleMiningPotentialRoleSummary) HasSession() bool`

HasSession returns a boolean if a field has been set.


