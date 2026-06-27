---
id: v1-reviewablerole
title: Reviewablerole
pagination_label: Reviewablerole
sidebar_label: Reviewablerole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewablerole', 'V1Reviewablerole'] 
slug: /tools/sdk/go/certifications/models/reviewablerole
tags: ['SDK', 'Software Development Kit', 'Reviewablerole', 'V1Reviewablerole']
---

# Reviewablerole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the Role | [optional] 
**Name** | Pointer to **string** | The name of the Role | [optional] 
**Description** | Pointer to **string** | Information about the Role | [optional] 
**Privileged** | Pointer to **bool** | Indicates if the entitlement is a privileged entitlement | [optional] 
**Owner** | Pointer to [**NullableIdentityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**Revocable** | Pointer to **bool** | Indicates whether the Role can be revoked or requested | [optional] 
**EndDate** | Pointer to **SailPointTime** | The date when a user's access expires. | [optional] 
**AccessProfiles** | Pointer to [**[]Reviewableaccessprofile**](reviewableaccessprofile) | The list of Access Profiles associated with this Role | [optional] 
**Entitlements** | Pointer to [**[]Reviewableentitlement**](reviewableentitlement) | The list of entitlements associated with this Role | [optional] 

## Methods

### NewReviewablerole

`func NewReviewablerole() *Reviewablerole`

NewReviewablerole instantiates a new Reviewablerole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableroleWithDefaults

`func NewReviewableroleWithDefaults() *Reviewablerole`

NewReviewableroleWithDefaults instantiates a new Reviewablerole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reviewablerole) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reviewablerole) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reviewablerole) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reviewablerole) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Reviewablerole) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reviewablerole) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reviewablerole) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reviewablerole) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Reviewablerole) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Reviewablerole) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Reviewablerole) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Reviewablerole) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrivileged

`func (o *Reviewablerole) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Reviewablerole) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Reviewablerole) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Reviewablerole) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetOwner

`func (o *Reviewablerole) GetOwner() Identityreferencewithnameandemail`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Reviewablerole) GetOwnerOk() (*Identityreferencewithnameandemail, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Reviewablerole) SetOwner(v Identityreferencewithnameandemail)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Reviewablerole) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Reviewablerole) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Reviewablerole) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetRevocable

`func (o *Reviewablerole) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Reviewablerole) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Reviewablerole) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *Reviewablerole) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.

### GetEndDate

`func (o *Reviewablerole) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Reviewablerole) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Reviewablerole) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Reviewablerole) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetAccessProfiles

`func (o *Reviewablerole) GetAccessProfiles() []Reviewableaccessprofile`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *Reviewablerole) GetAccessProfilesOk() (*[]Reviewableaccessprofile, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *Reviewablerole) SetAccessProfiles(v []Reviewableaccessprofile)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *Reviewablerole) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### GetEntitlements

`func (o *Reviewablerole) GetEntitlements() []Reviewableentitlement`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Reviewablerole) GetEntitlementsOk() (*[]Reviewableentitlement, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Reviewablerole) SetEntitlements(v []Reviewableentitlement)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Reviewablerole) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.


