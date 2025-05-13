---
id: v2024-reviewable-access-profile
title: ReviewableAccessProfile
pagination_label: ReviewableAccessProfile
sidebar_label: ReviewableAccessProfile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewableAccessProfile', 'V2024ReviewableAccessProfile'] 
slug: /tools/sdk/go/v2024/models/reviewable-access-profile
tags: ['SDK', 'Software Development Kit', 'ReviewableAccessProfile', 'V2024ReviewableAccessProfile']
---

# ReviewableAccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **string** | Information about the Access Profile | [optional] 
**Privileged** | Pointer to **bool** | Indicates if the entitlement is a privileged entitlement | [optional] 
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] 
**EndDate** | Pointer to **NullableTime** | The date at which a user's access expires | [optional] 
**Owner** | Pointer to [**NullableIdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**Entitlements** | Pointer to [**[]ReviewableEntitlement**](reviewable-entitlement) | A list of entitlements associated with this Access Profile | [optional] 
**Created** | Pointer to **SailPointTime** | Date the Access Profile was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | Date the Access Profile was last modified. | [optional] 

## Methods

### NewReviewableAccessProfile

`func NewReviewableAccessProfile() *ReviewableAccessProfile`

NewReviewableAccessProfile instantiates a new ReviewableAccessProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableAccessProfileWithDefaults

`func NewReviewableAccessProfileWithDefaults() *ReviewableAccessProfile`

NewReviewableAccessProfileWithDefaults instantiates a new ReviewableAccessProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReviewableAccessProfile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewableAccessProfile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewableAccessProfile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewableAccessProfile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ReviewableAccessProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReviewableAccessProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReviewableAccessProfile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReviewableAccessProfile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ReviewableAccessProfile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReviewableAccessProfile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReviewableAccessProfile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReviewableAccessProfile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrivileged

`func (o *ReviewableAccessProfile) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *ReviewableAccessProfile) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *ReviewableAccessProfile) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *ReviewableAccessProfile) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *ReviewableAccessProfile) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *ReviewableAccessProfile) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *ReviewableAccessProfile) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *ReviewableAccessProfile) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetEndDate

`func (o *ReviewableAccessProfile) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ReviewableAccessProfile) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ReviewableAccessProfile) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ReviewableAccessProfile) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### SetEndDateNil

`func (o *ReviewableAccessProfile) SetEndDateNil(b bool)`

 SetEndDateNil sets the value for EndDate to be an explicit nil

### UnsetEndDate
`func (o *ReviewableAccessProfile) UnsetEndDate()`

UnsetEndDate ensures that no value is present for EndDate, not even an explicit nil
### GetOwner

`func (o *ReviewableAccessProfile) GetOwner() IdentityReferenceWithNameAndEmail`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ReviewableAccessProfile) GetOwnerOk() (*IdentityReferenceWithNameAndEmail, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ReviewableAccessProfile) SetOwner(v IdentityReferenceWithNameAndEmail)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *ReviewableAccessProfile) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *ReviewableAccessProfile) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *ReviewableAccessProfile) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetEntitlements

`func (o *ReviewableAccessProfile) GetEntitlements() []ReviewableEntitlement`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *ReviewableAccessProfile) GetEntitlementsOk() (*[]ReviewableEntitlement, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *ReviewableAccessProfile) SetEntitlements(v []ReviewableEntitlement)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *ReviewableAccessProfile) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetCreated

`func (o *ReviewableAccessProfile) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ReviewableAccessProfile) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ReviewableAccessProfile) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ReviewableAccessProfile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *ReviewableAccessProfile) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ReviewableAccessProfile) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ReviewableAccessProfile) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ReviewableAccessProfile) HasModified() bool`

HasModified returns a boolean if a field has been set.


