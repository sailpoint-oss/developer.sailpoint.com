---
id: v2025-dimension
title: Dimension
pagination_label: Dimension
sidebar_label: Dimension
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimension', 'V2025Dimension'] 
slug: /tools/sdk/go/v2025/models/dimension
tags: ['SDK', 'Software Development Kit', 'Dimension', 'V2025Dimension']
---

# Dimension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | **string** | The human-readable display name of the Dimension | 
**Created** | Pointer to **SailPointTime** | Date the Dimension was created | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Date the Dimension was last modified. | [optional] [readonly] 
**Description** | Pointer to **NullableString** | A human-readable description of the Dimension | [optional] 
**Owner** | [**NullableOwnerReference**](owner-reference) |  | 
**AccessProfiles** | Pointer to [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**Entitlements** | Pointer to [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**Membership** | Pointer to [**NullableDimensionMembershipSelector**](dimension-membership-selector) |  | [optional] 
**ParentId** | Pointer to **NullableString** | The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call. | [optional] 

## Methods

### NewDimension

`func NewDimension(name string, owner NullableOwnerReference, ) *Dimension`

NewDimension instantiates a new Dimension object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionWithDefaults

`func NewDimensionWithDefaults() *Dimension`

NewDimensionWithDefaults instantiates a new Dimension object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Dimension) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Dimension) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Dimension) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Dimension) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Dimension) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Dimension) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Dimension) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *Dimension) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Dimension) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Dimension) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Dimension) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Dimension) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Dimension) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Dimension) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Dimension) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Dimension) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Dimension) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Dimension) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Dimension) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Dimension) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Dimension) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwner

`func (o *Dimension) GetOwner() OwnerReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Dimension) GetOwnerOk() (*OwnerReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Dimension) SetOwner(v OwnerReference)`

SetOwner sets Owner field to given value.


### SetOwnerNil

`func (o *Dimension) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Dimension) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetAccessProfiles

`func (o *Dimension) GetAccessProfiles() []AccessProfileRef`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *Dimension) GetAccessProfilesOk() (*[]AccessProfileRef, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *Dimension) SetAccessProfiles(v []AccessProfileRef)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *Dimension) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *Dimension) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *Dimension) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil
### GetEntitlements

`func (o *Dimension) GetEntitlements() []EntitlementRef`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Dimension) GetEntitlementsOk() (*[]EntitlementRef, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Dimension) SetEntitlements(v []EntitlementRef)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Dimension) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetMembership

`func (o *Dimension) GetMembership() DimensionMembershipSelector`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *Dimension) GetMembershipOk() (*DimensionMembershipSelector, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *Dimension) SetMembership(v DimensionMembershipSelector)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *Dimension) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### SetMembershipNil

`func (o *Dimension) SetMembershipNil(b bool)`

 SetMembershipNil sets the value for Membership to be an explicit nil

### UnsetMembership
`func (o *Dimension) UnsetMembership()`

UnsetMembership ensures that no value is present for Membership, not even an explicit nil
### GetParentId

`func (o *Dimension) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *Dimension) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *Dimension) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *Dimension) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### SetParentIdNil

`func (o *Dimension) SetParentIdNil(b bool)`

 SetParentIdNil sets the value for ParentId to be an explicit nil

### UnsetParentId
`func (o *Dimension) UnsetParentId()`

UnsetParentId ensures that no value is present for ParentId, not even an explicit nil

