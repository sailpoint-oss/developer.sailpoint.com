---
id: identity-profile
title: IdentityProfile
pagination_label: IdentityProfile
sidebar_label: IdentityProfile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityProfile', 'IdentityProfile'] 
slug: /tools/sdk/go/v3/models/identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentityProfile', 'IdentityProfile']
---

# IdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **time.Time** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **time.Time** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **NullableString** | Identity profile&#39;s description. | [optional] 
**Owner** | Pointer to [**NullableIdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**Priority** | Pointer to **int64** | Identity profile&#39;s priority. | [optional] 
**AuthoritativeSource** | [**IdentityProfileAllOfAuthoritativeSource**](identity-profile-all-of-authoritative-source) |  | 
**IdentityRefreshRequired** | Pointer to **bool** | Set this value to &#39;True&#39; if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to false]
**IdentityCount** | Pointer to **int32** | Number of identities belonging to the identity profile. | [optional] 
**IdentityAttributeConfig** | Pointer to [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
**IdentityExceptionReportReference** | Pointer to [**NullableIdentityExceptionReportReference**](identity-exception-report-reference) |  | [optional] 
**HasTimeBasedAttr** | Pointer to **bool** | Indicates the value of &#x60;requiresPeriodicRefresh&#x60; attribute for the identity profile. | [optional] [default to false]

## Methods

### NewIdentityProfile

`func NewIdentityProfile(name NullableString, authoritativeSource IdentityProfileAllOfAuthoritativeSource, ) *IdentityProfile`

NewIdentityProfile instantiates a new IdentityProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityProfileWithDefaults

`func NewIdentityProfileWithDefaults() *IdentityProfile`

NewIdentityProfileWithDefaults instantiates a new IdentityProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityProfile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityProfile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityProfile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityProfile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityProfile) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *IdentityProfile) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *IdentityProfile) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *IdentityProfile) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IdentityProfile) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IdentityProfile) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IdentityProfile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *IdentityProfile) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IdentityProfile) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IdentityProfile) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IdentityProfile) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *IdentityProfile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IdentityProfile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IdentityProfile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IdentityProfile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IdentityProfile) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IdentityProfile) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwner

`func (o *IdentityProfile) GetOwner() IdentityProfileAllOfOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *IdentityProfile) GetOwnerOk() (*IdentityProfileAllOfOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *IdentityProfile) SetOwner(v IdentityProfileAllOfOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *IdentityProfile) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *IdentityProfile) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *IdentityProfile) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetPriority

`func (o *IdentityProfile) GetPriority() int64`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *IdentityProfile) GetPriorityOk() (*int64, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *IdentityProfile) SetPriority(v int64)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *IdentityProfile) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetAuthoritativeSource

`func (o *IdentityProfile) GetAuthoritativeSource() IdentityProfileAllOfAuthoritativeSource`

GetAuthoritativeSource returns the AuthoritativeSource field if non-nil, zero value otherwise.

### GetAuthoritativeSourceOk

`func (o *IdentityProfile) GetAuthoritativeSourceOk() (*IdentityProfileAllOfAuthoritativeSource, bool)`

GetAuthoritativeSourceOk returns a tuple with the AuthoritativeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritativeSource

`func (o *IdentityProfile) SetAuthoritativeSource(v IdentityProfileAllOfAuthoritativeSource)`

SetAuthoritativeSource sets AuthoritativeSource field to given value.


### GetIdentityRefreshRequired

`func (o *IdentityProfile) GetIdentityRefreshRequired() bool`

GetIdentityRefreshRequired returns the IdentityRefreshRequired field if non-nil, zero value otherwise.

### GetIdentityRefreshRequiredOk

`func (o *IdentityProfile) GetIdentityRefreshRequiredOk() (*bool, bool)`

GetIdentityRefreshRequiredOk returns a tuple with the IdentityRefreshRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityRefreshRequired

`func (o *IdentityProfile) SetIdentityRefreshRequired(v bool)`

SetIdentityRefreshRequired sets IdentityRefreshRequired field to given value.

### HasIdentityRefreshRequired

`func (o *IdentityProfile) HasIdentityRefreshRequired() bool`

HasIdentityRefreshRequired returns a boolean if a field has been set.

### GetIdentityCount

`func (o *IdentityProfile) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *IdentityProfile) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *IdentityProfile) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *IdentityProfile) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetIdentityAttributeConfig

`func (o *IdentityProfile) GetIdentityAttributeConfig() IdentityAttributeConfig`

GetIdentityAttributeConfig returns the IdentityAttributeConfig field if non-nil, zero value otherwise.

### GetIdentityAttributeConfigOk

`func (o *IdentityProfile) GetIdentityAttributeConfigOk() (*IdentityAttributeConfig, bool)`

GetIdentityAttributeConfigOk returns a tuple with the IdentityAttributeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeConfig

`func (o *IdentityProfile) SetIdentityAttributeConfig(v IdentityAttributeConfig)`

SetIdentityAttributeConfig sets IdentityAttributeConfig field to given value.

### HasIdentityAttributeConfig

`func (o *IdentityProfile) HasIdentityAttributeConfig() bool`

HasIdentityAttributeConfig returns a boolean if a field has been set.

### GetIdentityExceptionReportReference

`func (o *IdentityProfile) GetIdentityExceptionReportReference() IdentityExceptionReportReference`

GetIdentityExceptionReportReference returns the IdentityExceptionReportReference field if non-nil, zero value otherwise.

### GetIdentityExceptionReportReferenceOk

`func (o *IdentityProfile) GetIdentityExceptionReportReferenceOk() (*IdentityExceptionReportReference, bool)`

GetIdentityExceptionReportReferenceOk returns a tuple with the IdentityExceptionReportReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityExceptionReportReference

`func (o *IdentityProfile) SetIdentityExceptionReportReference(v IdentityExceptionReportReference)`

SetIdentityExceptionReportReference sets IdentityExceptionReportReference field to given value.

### HasIdentityExceptionReportReference

`func (o *IdentityProfile) HasIdentityExceptionReportReference() bool`

HasIdentityExceptionReportReference returns a boolean if a field has been set.

### SetIdentityExceptionReportReferenceNil

`func (o *IdentityProfile) SetIdentityExceptionReportReferenceNil(b bool)`

 SetIdentityExceptionReportReferenceNil sets the value for IdentityExceptionReportReference to be an explicit nil

### UnsetIdentityExceptionReportReference
`func (o *IdentityProfile) UnsetIdentityExceptionReportReference()`

UnsetIdentityExceptionReportReference ensures that no value is present for IdentityExceptionReportReference, not even an explicit nil
### GetHasTimeBasedAttr

`func (o *IdentityProfile) GetHasTimeBasedAttr() bool`

GetHasTimeBasedAttr returns the HasTimeBasedAttr field if non-nil, zero value otherwise.

### GetHasTimeBasedAttrOk

`func (o *IdentityProfile) GetHasTimeBasedAttrOk() (*bool, bool)`

GetHasTimeBasedAttrOk returns a tuple with the HasTimeBasedAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasTimeBasedAttr

`func (o *IdentityProfile) SetHasTimeBasedAttr(v bool)`

SetHasTimeBasedAttr sets HasTimeBasedAttr field to given value.

### HasHasTimeBasedAttr

`func (o *IdentityProfile) HasHasTimeBasedAttr() bool`

HasHasTimeBasedAttr returns a boolean if a field has been set.


