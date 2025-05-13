---
id: beta-identity-profile1
title: IdentityProfile1
pagination_label: IdentityProfile1
sidebar_label: IdentityProfile1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityProfile1', 'BetaIdentityProfile1'] 
slug: /tools/sdk/go/beta/models/identity-profile1
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1', 'BetaIdentityProfile1']
---

# IdentityProfile1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **NullableString** | Identity profile's description. | [optional] 
**Owner** | Pointer to [**NullableIdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**Priority** | Pointer to **int64** | Identity profile's priority. | [optional] 
**AuthoritativeSource** | [**IdentityProfile1AllOfAuthoritativeSource**](identity-profile1-all-of-authoritative-source) |  | 
**IdentityRefreshRequired** | Pointer to **bool** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to false]
**IdentityCount** | Pointer to **int32** | Number of identities belonging to the identity profile. | [optional] 
**IdentityAttributeConfig** | Pointer to [**IdentityAttributeConfig1**](identity-attribute-config1) |  | [optional] 
**IdentityExceptionReportReference** | Pointer to [**NullableIdentityExceptionReportReference1**](identity-exception-report-reference1) |  | [optional] 
**HasTimeBasedAttr** | Pointer to **bool** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to false]

## Methods

### NewIdentityProfile1

`func NewIdentityProfile1(name NullableString, authoritativeSource IdentityProfile1AllOfAuthoritativeSource, ) *IdentityProfile1`

NewIdentityProfile1 instantiates a new IdentityProfile1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityProfile1WithDefaults

`func NewIdentityProfile1WithDefaults() *IdentityProfile1`

NewIdentityProfile1WithDefaults instantiates a new IdentityProfile1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityProfile1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityProfile1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityProfile1) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityProfile1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityProfile1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityProfile1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityProfile1) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *IdentityProfile1) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *IdentityProfile1) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *IdentityProfile1) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IdentityProfile1) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IdentityProfile1) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IdentityProfile1) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *IdentityProfile1) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IdentityProfile1) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IdentityProfile1) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IdentityProfile1) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *IdentityProfile1) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IdentityProfile1) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IdentityProfile1) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IdentityProfile1) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IdentityProfile1) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IdentityProfile1) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwner

`func (o *IdentityProfile1) GetOwner() IdentityProfileAllOfOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *IdentityProfile1) GetOwnerOk() (*IdentityProfileAllOfOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *IdentityProfile1) SetOwner(v IdentityProfileAllOfOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *IdentityProfile1) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *IdentityProfile1) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *IdentityProfile1) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetPriority

`func (o *IdentityProfile1) GetPriority() int64`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *IdentityProfile1) GetPriorityOk() (*int64, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *IdentityProfile1) SetPriority(v int64)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *IdentityProfile1) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetAuthoritativeSource

`func (o *IdentityProfile1) GetAuthoritativeSource() IdentityProfile1AllOfAuthoritativeSource`

GetAuthoritativeSource returns the AuthoritativeSource field if non-nil, zero value otherwise.

### GetAuthoritativeSourceOk

`func (o *IdentityProfile1) GetAuthoritativeSourceOk() (*IdentityProfile1AllOfAuthoritativeSource, bool)`

GetAuthoritativeSourceOk returns a tuple with the AuthoritativeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritativeSource

`func (o *IdentityProfile1) SetAuthoritativeSource(v IdentityProfile1AllOfAuthoritativeSource)`

SetAuthoritativeSource sets AuthoritativeSource field to given value.


### GetIdentityRefreshRequired

`func (o *IdentityProfile1) GetIdentityRefreshRequired() bool`

GetIdentityRefreshRequired returns the IdentityRefreshRequired field if non-nil, zero value otherwise.

### GetIdentityRefreshRequiredOk

`func (o *IdentityProfile1) GetIdentityRefreshRequiredOk() (*bool, bool)`

GetIdentityRefreshRequiredOk returns a tuple with the IdentityRefreshRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityRefreshRequired

`func (o *IdentityProfile1) SetIdentityRefreshRequired(v bool)`

SetIdentityRefreshRequired sets IdentityRefreshRequired field to given value.

### HasIdentityRefreshRequired

`func (o *IdentityProfile1) HasIdentityRefreshRequired() bool`

HasIdentityRefreshRequired returns a boolean if a field has been set.

### GetIdentityCount

`func (o *IdentityProfile1) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *IdentityProfile1) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *IdentityProfile1) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *IdentityProfile1) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetIdentityAttributeConfig

`func (o *IdentityProfile1) GetIdentityAttributeConfig() IdentityAttributeConfig1`

GetIdentityAttributeConfig returns the IdentityAttributeConfig field if non-nil, zero value otherwise.

### GetIdentityAttributeConfigOk

`func (o *IdentityProfile1) GetIdentityAttributeConfigOk() (*IdentityAttributeConfig1, bool)`

GetIdentityAttributeConfigOk returns a tuple with the IdentityAttributeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeConfig

`func (o *IdentityProfile1) SetIdentityAttributeConfig(v IdentityAttributeConfig1)`

SetIdentityAttributeConfig sets IdentityAttributeConfig field to given value.

### HasIdentityAttributeConfig

`func (o *IdentityProfile1) HasIdentityAttributeConfig() bool`

HasIdentityAttributeConfig returns a boolean if a field has been set.

### GetIdentityExceptionReportReference

`func (o *IdentityProfile1) GetIdentityExceptionReportReference() IdentityExceptionReportReference1`

GetIdentityExceptionReportReference returns the IdentityExceptionReportReference field if non-nil, zero value otherwise.

### GetIdentityExceptionReportReferenceOk

`func (o *IdentityProfile1) GetIdentityExceptionReportReferenceOk() (*IdentityExceptionReportReference1, bool)`

GetIdentityExceptionReportReferenceOk returns a tuple with the IdentityExceptionReportReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityExceptionReportReference

`func (o *IdentityProfile1) SetIdentityExceptionReportReference(v IdentityExceptionReportReference1)`

SetIdentityExceptionReportReference sets IdentityExceptionReportReference field to given value.

### HasIdentityExceptionReportReference

`func (o *IdentityProfile1) HasIdentityExceptionReportReference() bool`

HasIdentityExceptionReportReference returns a boolean if a field has been set.

### SetIdentityExceptionReportReferenceNil

`func (o *IdentityProfile1) SetIdentityExceptionReportReferenceNil(b bool)`

 SetIdentityExceptionReportReferenceNil sets the value for IdentityExceptionReportReference to be an explicit nil

### UnsetIdentityExceptionReportReference
`func (o *IdentityProfile1) UnsetIdentityExceptionReportReference()`

UnsetIdentityExceptionReportReference ensures that no value is present for IdentityExceptionReportReference, not even an explicit nil
### GetHasTimeBasedAttr

`func (o *IdentityProfile1) GetHasTimeBasedAttr() bool`

GetHasTimeBasedAttr returns the HasTimeBasedAttr field if non-nil, zero value otherwise.

### GetHasTimeBasedAttrOk

`func (o *IdentityProfile1) GetHasTimeBasedAttrOk() (*bool, bool)`

GetHasTimeBasedAttrOk returns a tuple with the HasTimeBasedAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasTimeBasedAttr

`func (o *IdentityProfile1) SetHasTimeBasedAttr(v bool)`

SetHasTimeBasedAttr sets HasTimeBasedAttr field to given value.

### HasHasTimeBasedAttr

`func (o *IdentityProfile1) HasHasTimeBasedAttr() bool`

HasHasTimeBasedAttr returns a boolean if a field has been set.


