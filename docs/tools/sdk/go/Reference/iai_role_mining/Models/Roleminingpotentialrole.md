---
id: v1-roleminingpotentialrole
title: Roleminingpotentialrole
pagination_label: Roleminingpotentialrole
sidebar_label: Roleminingpotentialrole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingpotentialrole', 'V1Roleminingpotentialrole'] 
slug: /tools/sdk/go/iairolemining/models/roleminingpotentialrole
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrole', 'V1Roleminingpotentialrole']
---

# Roleminingpotentialrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | Pointer to [**RoleminingsessionresponseCreatedBy**](roleminingsessionresponse-created-by) |  | [optional] 
**Density** | Pointer to **int32** | The density of a potential role. | [optional] 
**Description** | Pointer to **NullableString** | The description of a potential role. | [optional] 
**EntitlementCount** | Pointer to **int32** | The number of entitlements in a potential role. | [optional] 
**ExcludedEntitlements** | Pointer to **[]string** | The list of entitlement ids to be excluded. | [optional] 
**Freshness** | Pointer to **int32** | The freshness of a potential role. | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities in a potential role. | [optional] 
**IdentityDistribution** | Pointer to [**[]Roleminingidentitydistribution**](roleminingidentitydistribution) | Identity attribute distribution. | [optional] 
**IdentityIds** | Pointer to **[]string** | The list of ids in a potential role. | [optional] 
**IdentityGroupStatus** | Pointer to **NullableString** | The status for this identity group which can be OBTAINED or COMPRESSED | [optional] 
**Name** | Pointer to **string** | Name of the potential role. | [optional] 
**PotentialRoleRef** | Pointer to [**NullableRoleminingpotentialrolePotentialRoleRef**](roleminingpotentialrole-potential-role-ref) |  | [optional] 
**ProvisionState** | Pointer to [**Roleminingpotentialroleprovisionstate**](roleminingpotentialroleprovisionstate) |  | [optional] 
**Quality** | Pointer to **int32** | The quality of a potential role. | [optional] 
**RoleId** | Pointer to **NullableString** | The roleId of a potential role. | [optional] 
**Saved** | Pointer to **bool** | The potential role's saved status. | [optional] [default to false]
**Session** | Pointer to [**Roleminingsessionparametersdto**](roleminingsessionparametersdto) |  | [optional] 
**Type** | Pointer to [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**Id** | Pointer to **string** | Id of the potential role | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this potential role was created. | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The date-time when this potential role was modified. | [optional] 

## Methods

### NewRoleminingpotentialrole

`func NewRoleminingpotentialrole() *Roleminingpotentialrole`

NewRoleminingpotentialrole instantiates a new Roleminingpotentialrole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingpotentialroleWithDefaults

`func NewRoleminingpotentialroleWithDefaults() *Roleminingpotentialrole`

NewRoleminingpotentialroleWithDefaults instantiates a new Roleminingpotentialrole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedBy

`func (o *Roleminingpotentialrole) GetCreatedBy() RoleminingsessionresponseCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Roleminingpotentialrole) GetCreatedByOk() (*RoleminingsessionresponseCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Roleminingpotentialrole) SetCreatedBy(v RoleminingsessionresponseCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Roleminingpotentialrole) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetDensity

`func (o *Roleminingpotentialrole) GetDensity() int32`

GetDensity returns the Density field if non-nil, zero value otherwise.

### GetDensityOk

`func (o *Roleminingpotentialrole) GetDensityOk() (*int32, bool)`

GetDensityOk returns a tuple with the Density field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDensity

`func (o *Roleminingpotentialrole) SetDensity(v int32)`

SetDensity sets Density field to given value.

### HasDensity

`func (o *Roleminingpotentialrole) HasDensity() bool`

HasDensity returns a boolean if a field has been set.

### GetDescription

`func (o *Roleminingpotentialrole) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Roleminingpotentialrole) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Roleminingpotentialrole) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Roleminingpotentialrole) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Roleminingpotentialrole) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Roleminingpotentialrole) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetEntitlementCount

`func (o *Roleminingpotentialrole) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Roleminingpotentialrole) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Roleminingpotentialrole) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *Roleminingpotentialrole) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetExcludedEntitlements

`func (o *Roleminingpotentialrole) GetExcludedEntitlements() []string`

GetExcludedEntitlements returns the ExcludedEntitlements field if non-nil, zero value otherwise.

### GetExcludedEntitlementsOk

`func (o *Roleminingpotentialrole) GetExcludedEntitlementsOk() (*[]string, bool)`

GetExcludedEntitlementsOk returns a tuple with the ExcludedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedEntitlements

`func (o *Roleminingpotentialrole) SetExcludedEntitlements(v []string)`

SetExcludedEntitlements sets ExcludedEntitlements field to given value.

### HasExcludedEntitlements

`func (o *Roleminingpotentialrole) HasExcludedEntitlements() bool`

HasExcludedEntitlements returns a boolean if a field has been set.

### SetExcludedEntitlementsNil

`func (o *Roleminingpotentialrole) SetExcludedEntitlementsNil(b bool)`

 SetExcludedEntitlementsNil sets the value for ExcludedEntitlements to be an explicit nil

### UnsetExcludedEntitlements
`func (o *Roleminingpotentialrole) UnsetExcludedEntitlements()`

UnsetExcludedEntitlements ensures that no value is present for ExcludedEntitlements, not even an explicit nil
### GetFreshness

`func (o *Roleminingpotentialrole) GetFreshness() int32`

GetFreshness returns the Freshness field if non-nil, zero value otherwise.

### GetFreshnessOk

`func (o *Roleminingpotentialrole) GetFreshnessOk() (*int32, bool)`

GetFreshnessOk returns a tuple with the Freshness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreshness

`func (o *Roleminingpotentialrole) SetFreshness(v int32)`

SetFreshness sets Freshness field to given value.

### HasFreshness

`func (o *Roleminingpotentialrole) HasFreshness() bool`

HasFreshness returns a boolean if a field has been set.

### GetIdentityCount

`func (o *Roleminingpotentialrole) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Roleminingpotentialrole) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Roleminingpotentialrole) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Roleminingpotentialrole) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetIdentityDistribution

`func (o *Roleminingpotentialrole) GetIdentityDistribution() []Roleminingidentitydistribution`

GetIdentityDistribution returns the IdentityDistribution field if non-nil, zero value otherwise.

### GetIdentityDistributionOk

`func (o *Roleminingpotentialrole) GetIdentityDistributionOk() (*[]Roleminingidentitydistribution, bool)`

GetIdentityDistributionOk returns a tuple with the IdentityDistribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityDistribution

`func (o *Roleminingpotentialrole) SetIdentityDistribution(v []Roleminingidentitydistribution)`

SetIdentityDistribution sets IdentityDistribution field to given value.

### HasIdentityDistribution

`func (o *Roleminingpotentialrole) HasIdentityDistribution() bool`

HasIdentityDistribution returns a boolean if a field has been set.

### SetIdentityDistributionNil

`func (o *Roleminingpotentialrole) SetIdentityDistributionNil(b bool)`

 SetIdentityDistributionNil sets the value for IdentityDistribution to be an explicit nil

### UnsetIdentityDistribution
`func (o *Roleminingpotentialrole) UnsetIdentityDistribution()`

UnsetIdentityDistribution ensures that no value is present for IdentityDistribution, not even an explicit nil
### GetIdentityIds

`func (o *Roleminingpotentialrole) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *Roleminingpotentialrole) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *Roleminingpotentialrole) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *Roleminingpotentialrole) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetIdentityGroupStatus

`func (o *Roleminingpotentialrole) GetIdentityGroupStatus() string`

GetIdentityGroupStatus returns the IdentityGroupStatus field if non-nil, zero value otherwise.

### GetIdentityGroupStatusOk

`func (o *Roleminingpotentialrole) GetIdentityGroupStatusOk() (*string, bool)`

GetIdentityGroupStatusOk returns a tuple with the IdentityGroupStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityGroupStatus

`func (o *Roleminingpotentialrole) SetIdentityGroupStatus(v string)`

SetIdentityGroupStatus sets IdentityGroupStatus field to given value.

### HasIdentityGroupStatus

`func (o *Roleminingpotentialrole) HasIdentityGroupStatus() bool`

HasIdentityGroupStatus returns a boolean if a field has been set.

### SetIdentityGroupStatusNil

`func (o *Roleminingpotentialrole) SetIdentityGroupStatusNil(b bool)`

 SetIdentityGroupStatusNil sets the value for IdentityGroupStatus to be an explicit nil

### UnsetIdentityGroupStatus
`func (o *Roleminingpotentialrole) UnsetIdentityGroupStatus()`

UnsetIdentityGroupStatus ensures that no value is present for IdentityGroupStatus, not even an explicit nil
### GetName

`func (o *Roleminingpotentialrole) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingpotentialrole) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingpotentialrole) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingpotentialrole) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPotentialRoleRef

`func (o *Roleminingpotentialrole) GetPotentialRoleRef() RoleminingpotentialrolePotentialRoleRef`

GetPotentialRoleRef returns the PotentialRoleRef field if non-nil, zero value otherwise.

### GetPotentialRoleRefOk

`func (o *Roleminingpotentialrole) GetPotentialRoleRefOk() (*RoleminingpotentialrolePotentialRoleRef, bool)`

GetPotentialRoleRefOk returns a tuple with the PotentialRoleRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleRef

`func (o *Roleminingpotentialrole) SetPotentialRoleRef(v RoleminingpotentialrolePotentialRoleRef)`

SetPotentialRoleRef sets PotentialRoleRef field to given value.

### HasPotentialRoleRef

`func (o *Roleminingpotentialrole) HasPotentialRoleRef() bool`

HasPotentialRoleRef returns a boolean if a field has been set.

### SetPotentialRoleRefNil

`func (o *Roleminingpotentialrole) SetPotentialRoleRefNil(b bool)`

 SetPotentialRoleRefNil sets the value for PotentialRoleRef to be an explicit nil

### UnsetPotentialRoleRef
`func (o *Roleminingpotentialrole) UnsetPotentialRoleRef()`

UnsetPotentialRoleRef ensures that no value is present for PotentialRoleRef, not even an explicit nil
### GetProvisionState

`func (o *Roleminingpotentialrole) GetProvisionState() Roleminingpotentialroleprovisionstate`

GetProvisionState returns the ProvisionState field if non-nil, zero value otherwise.

### GetProvisionStateOk

`func (o *Roleminingpotentialrole) GetProvisionStateOk() (*Roleminingpotentialroleprovisionstate, bool)`

GetProvisionStateOk returns a tuple with the ProvisionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionState

`func (o *Roleminingpotentialrole) SetProvisionState(v Roleminingpotentialroleprovisionstate)`

SetProvisionState sets ProvisionState field to given value.

### HasProvisionState

`func (o *Roleminingpotentialrole) HasProvisionState() bool`

HasProvisionState returns a boolean if a field has been set.

### GetQuality

`func (o *Roleminingpotentialrole) GetQuality() int32`

GetQuality returns the Quality field if non-nil, zero value otherwise.

### GetQualityOk

`func (o *Roleminingpotentialrole) GetQualityOk() (*int32, bool)`

GetQualityOk returns a tuple with the Quality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuality

`func (o *Roleminingpotentialrole) SetQuality(v int32)`

SetQuality sets Quality field to given value.

### HasQuality

`func (o *Roleminingpotentialrole) HasQuality() bool`

HasQuality returns a boolean if a field has been set.

### GetRoleId

`func (o *Roleminingpotentialrole) GetRoleId() string`

GetRoleId returns the RoleId field if non-nil, zero value otherwise.

### GetRoleIdOk

`func (o *Roleminingpotentialrole) GetRoleIdOk() (*string, bool)`

GetRoleIdOk returns a tuple with the RoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleId

`func (o *Roleminingpotentialrole) SetRoleId(v string)`

SetRoleId sets RoleId field to given value.

### HasRoleId

`func (o *Roleminingpotentialrole) HasRoleId() bool`

HasRoleId returns a boolean if a field has been set.

### SetRoleIdNil

`func (o *Roleminingpotentialrole) SetRoleIdNil(b bool)`

 SetRoleIdNil sets the value for RoleId to be an explicit nil

### UnsetRoleId
`func (o *Roleminingpotentialrole) UnsetRoleId()`

UnsetRoleId ensures that no value is present for RoleId, not even an explicit nil
### GetSaved

`func (o *Roleminingpotentialrole) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *Roleminingpotentialrole) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *Roleminingpotentialrole) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *Roleminingpotentialrole) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetSession

`func (o *Roleminingpotentialrole) GetSession() Roleminingsessionparametersdto`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *Roleminingpotentialrole) GetSessionOk() (*Roleminingsessionparametersdto, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *Roleminingpotentialrole) SetSession(v Roleminingsessionparametersdto)`

SetSession sets Session field to given value.

### HasSession

`func (o *Roleminingpotentialrole) HasSession() bool`

HasSession returns a boolean if a field has been set.

### GetType

`func (o *Roleminingpotentialrole) GetType() Roleminingroletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Roleminingpotentialrole) GetTypeOk() (*Roleminingroletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Roleminingpotentialrole) SetType(v Roleminingroletype)`

SetType sets Type field to given value.

### HasType

`func (o *Roleminingpotentialrole) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Roleminingpotentialrole) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingpotentialrole) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingpotentialrole) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingpotentialrole) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Roleminingpotentialrole) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Roleminingpotentialrole) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Roleminingpotentialrole) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Roleminingpotentialrole) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Roleminingpotentialrole) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Roleminingpotentialrole) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Roleminingpotentialrole) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Roleminingpotentialrole) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.


