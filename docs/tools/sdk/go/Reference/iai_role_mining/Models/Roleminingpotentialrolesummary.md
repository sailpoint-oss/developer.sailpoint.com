---
id: v1-roleminingpotentialrolesummary
title: Roleminingpotentialrolesummary
pagination_label: Roleminingpotentialrolesummary
sidebar_label: Roleminingpotentialrolesummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingpotentialrolesummary', 'V1Roleminingpotentialrolesummary'] 
slug: /tools/sdk/go/iairolemining/models/roleminingpotentialrolesummary
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrolesummary', 'V1Roleminingpotentialrolesummary']
---

# Roleminingpotentialrolesummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the potential role | [optional] 
**Name** | Pointer to **string** | Name of the potential role | [optional] 
**PotentialRoleRef** | Pointer to [**Roleminingpotentialroleref**](roleminingpotentialroleref) |  | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities in a potential role. | [optional] 
**EntitlementCount** | Pointer to **int32** | The number of entitlements in a potential role. | [optional] 
**IdentityGroupStatus** | Pointer to **string** | The status for this identity group which can be \"REQUESTED\" or \"OBTAINED\" | [optional] 
**ProvisionState** | Pointer to [**Roleminingpotentialroleprovisionstate**](roleminingpotentialroleprovisionstate) |  | [optional] 
**RoleId** | Pointer to **NullableString** | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [optional] 
**Density** | Pointer to **int32** | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [optional] 
**Freshness** | Pointer to **int32** | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [optional] 
**Quality** | Pointer to **int32** | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [optional] 
**Type** | Pointer to [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**CreatedBy** | Pointer to [**RoleminingpotentialrolesummaryCreatedBy**](roleminingpotentialrolesummary-created-by) |  | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this potential role was created. | [optional] 
**Saved** | Pointer to **bool** | The potential role's saved status | [optional] [default to false]
**Description** | Pointer to **NullableString** | Description of the potential role | [optional] 
**Session** | Pointer to [**Roleminingsessionparametersdto**](roleminingsessionparametersdto) |  | [optional] 

## Methods

### NewRoleminingpotentialrolesummary

`func NewRoleminingpotentialrolesummary() *Roleminingpotentialrolesummary`

NewRoleminingpotentialrolesummary instantiates a new Roleminingpotentialrolesummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingpotentialrolesummaryWithDefaults

`func NewRoleminingpotentialrolesummaryWithDefaults() *Roleminingpotentialrolesummary`

NewRoleminingpotentialrolesummaryWithDefaults instantiates a new Roleminingpotentialrolesummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleminingpotentialrolesummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingpotentialrolesummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingpotentialrolesummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingpotentialrolesummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Roleminingpotentialrolesummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingpotentialrolesummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingpotentialrolesummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingpotentialrolesummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPotentialRoleRef

`func (o *Roleminingpotentialrolesummary) GetPotentialRoleRef() Roleminingpotentialroleref`

GetPotentialRoleRef returns the PotentialRoleRef field if non-nil, zero value otherwise.

### GetPotentialRoleRefOk

`func (o *Roleminingpotentialrolesummary) GetPotentialRoleRefOk() (*Roleminingpotentialroleref, bool)`

GetPotentialRoleRefOk returns a tuple with the PotentialRoleRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialRoleRef

`func (o *Roleminingpotentialrolesummary) SetPotentialRoleRef(v Roleminingpotentialroleref)`

SetPotentialRoleRef sets PotentialRoleRef field to given value.

### HasPotentialRoleRef

`func (o *Roleminingpotentialrolesummary) HasPotentialRoleRef() bool`

HasPotentialRoleRef returns a boolean if a field has been set.

### GetIdentityCount

`func (o *Roleminingpotentialrolesummary) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Roleminingpotentialrolesummary) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Roleminingpotentialrolesummary) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Roleminingpotentialrolesummary) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *Roleminingpotentialrolesummary) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Roleminingpotentialrolesummary) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Roleminingpotentialrolesummary) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *Roleminingpotentialrolesummary) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetIdentityGroupStatus

`func (o *Roleminingpotentialrolesummary) GetIdentityGroupStatus() string`

GetIdentityGroupStatus returns the IdentityGroupStatus field if non-nil, zero value otherwise.

### GetIdentityGroupStatusOk

`func (o *Roleminingpotentialrolesummary) GetIdentityGroupStatusOk() (*string, bool)`

GetIdentityGroupStatusOk returns a tuple with the IdentityGroupStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityGroupStatus

`func (o *Roleminingpotentialrolesummary) SetIdentityGroupStatus(v string)`

SetIdentityGroupStatus sets IdentityGroupStatus field to given value.

### HasIdentityGroupStatus

`func (o *Roleminingpotentialrolesummary) HasIdentityGroupStatus() bool`

HasIdentityGroupStatus returns a boolean if a field has been set.

### GetProvisionState

`func (o *Roleminingpotentialrolesummary) GetProvisionState() Roleminingpotentialroleprovisionstate`

GetProvisionState returns the ProvisionState field if non-nil, zero value otherwise.

### GetProvisionStateOk

`func (o *Roleminingpotentialrolesummary) GetProvisionStateOk() (*Roleminingpotentialroleprovisionstate, bool)`

GetProvisionStateOk returns a tuple with the ProvisionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionState

`func (o *Roleminingpotentialrolesummary) SetProvisionState(v Roleminingpotentialroleprovisionstate)`

SetProvisionState sets ProvisionState field to given value.

### HasProvisionState

`func (o *Roleminingpotentialrolesummary) HasProvisionState() bool`

HasProvisionState returns a boolean if a field has been set.

### GetRoleId

`func (o *Roleminingpotentialrolesummary) GetRoleId() string`

GetRoleId returns the RoleId field if non-nil, zero value otherwise.

### GetRoleIdOk

`func (o *Roleminingpotentialrolesummary) GetRoleIdOk() (*string, bool)`

GetRoleIdOk returns a tuple with the RoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleId

`func (o *Roleminingpotentialrolesummary) SetRoleId(v string)`

SetRoleId sets RoleId field to given value.

### HasRoleId

`func (o *Roleminingpotentialrolesummary) HasRoleId() bool`

HasRoleId returns a boolean if a field has been set.

### SetRoleIdNil

`func (o *Roleminingpotentialrolesummary) SetRoleIdNil(b bool)`

 SetRoleIdNil sets the value for RoleId to be an explicit nil

### UnsetRoleId
`func (o *Roleminingpotentialrolesummary) UnsetRoleId()`

UnsetRoleId ensures that no value is present for RoleId, not even an explicit nil
### GetDensity

`func (o *Roleminingpotentialrolesummary) GetDensity() int32`

GetDensity returns the Density field if non-nil, zero value otherwise.

### GetDensityOk

`func (o *Roleminingpotentialrolesummary) GetDensityOk() (*int32, bool)`

GetDensityOk returns a tuple with the Density field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDensity

`func (o *Roleminingpotentialrolesummary) SetDensity(v int32)`

SetDensity sets Density field to given value.

### HasDensity

`func (o *Roleminingpotentialrolesummary) HasDensity() bool`

HasDensity returns a boolean if a field has been set.

### GetFreshness

`func (o *Roleminingpotentialrolesummary) GetFreshness() int32`

GetFreshness returns the Freshness field if non-nil, zero value otherwise.

### GetFreshnessOk

`func (o *Roleminingpotentialrolesummary) GetFreshnessOk() (*int32, bool)`

GetFreshnessOk returns a tuple with the Freshness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreshness

`func (o *Roleminingpotentialrolesummary) SetFreshness(v int32)`

SetFreshness sets Freshness field to given value.

### HasFreshness

`func (o *Roleminingpotentialrolesummary) HasFreshness() bool`

HasFreshness returns a boolean if a field has been set.

### GetQuality

`func (o *Roleminingpotentialrolesummary) GetQuality() int32`

GetQuality returns the Quality field if non-nil, zero value otherwise.

### GetQualityOk

`func (o *Roleminingpotentialrolesummary) GetQualityOk() (*int32, bool)`

GetQualityOk returns a tuple with the Quality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuality

`func (o *Roleminingpotentialrolesummary) SetQuality(v int32)`

SetQuality sets Quality field to given value.

### HasQuality

`func (o *Roleminingpotentialrolesummary) HasQuality() bool`

HasQuality returns a boolean if a field has been set.

### GetType

`func (o *Roleminingpotentialrolesummary) GetType() Roleminingroletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Roleminingpotentialrolesummary) GetTypeOk() (*Roleminingroletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Roleminingpotentialrolesummary) SetType(v Roleminingroletype)`

SetType sets Type field to given value.

### HasType

`func (o *Roleminingpotentialrolesummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCreatedBy

`func (o *Roleminingpotentialrolesummary) GetCreatedBy() RoleminingpotentialrolesummaryCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Roleminingpotentialrolesummary) GetCreatedByOk() (*RoleminingpotentialrolesummaryCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Roleminingpotentialrolesummary) SetCreatedBy(v RoleminingpotentialrolesummaryCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Roleminingpotentialrolesummary) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Roleminingpotentialrolesummary) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Roleminingpotentialrolesummary) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Roleminingpotentialrolesummary) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Roleminingpotentialrolesummary) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetSaved

`func (o *Roleminingpotentialrolesummary) GetSaved() bool`

GetSaved returns the Saved field if non-nil, zero value otherwise.

### GetSavedOk

`func (o *Roleminingpotentialrolesummary) GetSavedOk() (*bool, bool)`

GetSavedOk returns a tuple with the Saved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaved

`func (o *Roleminingpotentialrolesummary) SetSaved(v bool)`

SetSaved sets Saved field to given value.

### HasSaved

`func (o *Roleminingpotentialrolesummary) HasSaved() bool`

HasSaved returns a boolean if a field has been set.

### GetDescription

`func (o *Roleminingpotentialrolesummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Roleminingpotentialrolesummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Roleminingpotentialrolesummary) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Roleminingpotentialrolesummary) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Roleminingpotentialrolesummary) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Roleminingpotentialrolesummary) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSession

`func (o *Roleminingpotentialrolesummary) GetSession() Roleminingsessionparametersdto`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *Roleminingpotentialrolesummary) GetSessionOk() (*Roleminingsessionparametersdto, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *Roleminingpotentialrolesummary) SetSession(v Roleminingsessionparametersdto)`

SetSession sets Session field to given value.

### HasSession

`func (o *Roleminingpotentialrolesummary) HasSession() bool`

HasSession returns a boolean if a field has been set.


