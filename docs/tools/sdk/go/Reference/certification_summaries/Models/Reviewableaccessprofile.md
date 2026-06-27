---
id: v1-reviewableaccessprofile
title: Reviewableaccessprofile
pagination_label: Reviewableaccessprofile
sidebar_label: Reviewableaccessprofile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewableaccessprofile', 'V1Reviewableaccessprofile'] 
slug: /tools/sdk/go/certificationsummaries/models/reviewableaccessprofile
tags: ['SDK', 'Software Development Kit', 'Reviewableaccessprofile', 'V1Reviewableaccessprofile']
---

# Reviewableaccessprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **string** | Information about the Access Profile | [optional] 
**Privileged** | Pointer to **bool** | Indicates if the entitlement is a privileged entitlement | [optional] 
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] 
**EndDate** | Pointer to **NullableTime** | The date at which a user's access expires | [optional] 
**Owner** | Pointer to [**NullableIdentityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**Entitlements** | Pointer to [**[]Reviewableentitlement**](reviewableentitlement) | A list of entitlements associated with this Access Profile | [optional] 
**Created** | Pointer to **SailPointTime** | Date the Access Profile was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | Date the Access Profile was last modified. | [optional] 

## Methods

### NewReviewableaccessprofile

`func NewReviewableaccessprofile() *Reviewableaccessprofile`

NewReviewableaccessprofile instantiates a new Reviewableaccessprofile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableaccessprofileWithDefaults

`func NewReviewableaccessprofileWithDefaults() *Reviewableaccessprofile`

NewReviewableaccessprofileWithDefaults instantiates a new Reviewableaccessprofile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reviewableaccessprofile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reviewableaccessprofile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reviewableaccessprofile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reviewableaccessprofile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Reviewableaccessprofile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reviewableaccessprofile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reviewableaccessprofile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reviewableaccessprofile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Reviewableaccessprofile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Reviewableaccessprofile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Reviewableaccessprofile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Reviewableaccessprofile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrivileged

`func (o *Reviewableaccessprofile) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Reviewableaccessprofile) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Reviewableaccessprofile) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Reviewableaccessprofile) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *Reviewableaccessprofile) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Reviewableaccessprofile) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Reviewableaccessprofile) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Reviewableaccessprofile) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetEndDate

`func (o *Reviewableaccessprofile) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Reviewableaccessprofile) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Reviewableaccessprofile) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Reviewableaccessprofile) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### SetEndDateNil

`func (o *Reviewableaccessprofile) SetEndDateNil(b bool)`

 SetEndDateNil sets the value for EndDate to be an explicit nil

### UnsetEndDate
`func (o *Reviewableaccessprofile) UnsetEndDate()`

UnsetEndDate ensures that no value is present for EndDate, not even an explicit nil
### GetOwner

`func (o *Reviewableaccessprofile) GetOwner() Identityreferencewithnameandemail`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Reviewableaccessprofile) GetOwnerOk() (*Identityreferencewithnameandemail, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Reviewableaccessprofile) SetOwner(v Identityreferencewithnameandemail)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Reviewableaccessprofile) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Reviewableaccessprofile) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Reviewableaccessprofile) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetEntitlements

`func (o *Reviewableaccessprofile) GetEntitlements() []Reviewableentitlement`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Reviewableaccessprofile) GetEntitlementsOk() (*[]Reviewableentitlement, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Reviewableaccessprofile) SetEntitlements(v []Reviewableentitlement)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Reviewableaccessprofile) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetCreated

`func (o *Reviewableaccessprofile) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Reviewableaccessprofile) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Reviewableaccessprofile) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Reviewableaccessprofile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Reviewableaccessprofile) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Reviewableaccessprofile) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Reviewableaccessprofile) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Reviewableaccessprofile) HasModified() bool`

HasModified returns a boolean if a field has been set.


