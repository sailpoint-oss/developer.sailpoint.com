---
id: v1-identityprofile
title: Identityprofile
pagination_label: Identityprofile
sidebar_label: Identityprofile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityprofile', 'V1Identityprofile'] 
slug: /tools/sdk/go/identityprofiles/models/identityprofile
tags: ['SDK', 'Software Development Kit', 'Identityprofile', 'V1Identityprofile']
---

# Identityprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **NullableString** | Identity profile's description. | [optional] 
**Owner** | Pointer to [**NullableIdentityprofileAllOfOwner**](identityprofile-all-of-owner) |  | [optional] 
**Priority** | Pointer to **int64** | Identity profile's priority. | [optional] 
**AuthoritativeSource** | [**IdentityprofileAllOfAuthoritativeSource**](identityprofile-all-of-authoritative-source) |  | 
**IdentityRefreshRequired** | Pointer to **bool** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to false]
**IdentityCount** | Pointer to **int32** | Number of identities belonging to the identity profile. | [optional] 
**IdentityAttributeConfig** | Pointer to [**Identityattributeconfig**](identityattributeconfig) |  | [optional] 
**IdentityExceptionReportReference** | Pointer to [**NullableIdentityexceptionreportreference**](identityexceptionreportreference) |  | [optional] 
**HasTimeBasedAttr** | Pointer to **bool** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to false]

## Methods

### NewIdentityprofile

`func NewIdentityprofile(name NullableString, authoritativeSource IdentityprofileAllOfAuthoritativeSource, ) *Identityprofile`

NewIdentityprofile instantiates a new Identityprofile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityprofileWithDefaults

`func NewIdentityprofileWithDefaults() *Identityprofile`

NewIdentityprofileWithDefaults instantiates a new Identityprofile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identityprofile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityprofile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityprofile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityprofile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identityprofile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityprofile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityprofile) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Identityprofile) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Identityprofile) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Identityprofile) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Identityprofile) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Identityprofile) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Identityprofile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Identityprofile) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Identityprofile) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Identityprofile) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Identityprofile) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Identityprofile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Identityprofile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Identityprofile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Identityprofile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Identityprofile) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Identityprofile) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwner

`func (o *Identityprofile) GetOwner() IdentityprofileAllOfOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Identityprofile) GetOwnerOk() (*IdentityprofileAllOfOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Identityprofile) SetOwner(v IdentityprofileAllOfOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Identityprofile) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Identityprofile) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Identityprofile) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetPriority

`func (o *Identityprofile) GetPriority() int64`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *Identityprofile) GetPriorityOk() (*int64, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *Identityprofile) SetPriority(v int64)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *Identityprofile) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetAuthoritativeSource

`func (o *Identityprofile) GetAuthoritativeSource() IdentityprofileAllOfAuthoritativeSource`

GetAuthoritativeSource returns the AuthoritativeSource field if non-nil, zero value otherwise.

### GetAuthoritativeSourceOk

`func (o *Identityprofile) GetAuthoritativeSourceOk() (*IdentityprofileAllOfAuthoritativeSource, bool)`

GetAuthoritativeSourceOk returns a tuple with the AuthoritativeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritativeSource

`func (o *Identityprofile) SetAuthoritativeSource(v IdentityprofileAllOfAuthoritativeSource)`

SetAuthoritativeSource sets AuthoritativeSource field to given value.


### GetIdentityRefreshRequired

`func (o *Identityprofile) GetIdentityRefreshRequired() bool`

GetIdentityRefreshRequired returns the IdentityRefreshRequired field if non-nil, zero value otherwise.

### GetIdentityRefreshRequiredOk

`func (o *Identityprofile) GetIdentityRefreshRequiredOk() (*bool, bool)`

GetIdentityRefreshRequiredOk returns a tuple with the IdentityRefreshRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityRefreshRequired

`func (o *Identityprofile) SetIdentityRefreshRequired(v bool)`

SetIdentityRefreshRequired sets IdentityRefreshRequired field to given value.

### HasIdentityRefreshRequired

`func (o *Identityprofile) HasIdentityRefreshRequired() bool`

HasIdentityRefreshRequired returns a boolean if a field has been set.

### GetIdentityCount

`func (o *Identityprofile) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Identityprofile) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Identityprofile) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Identityprofile) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetIdentityAttributeConfig

`func (o *Identityprofile) GetIdentityAttributeConfig() Identityattributeconfig`

GetIdentityAttributeConfig returns the IdentityAttributeConfig field if non-nil, zero value otherwise.

### GetIdentityAttributeConfigOk

`func (o *Identityprofile) GetIdentityAttributeConfigOk() (*Identityattributeconfig, bool)`

GetIdentityAttributeConfigOk returns a tuple with the IdentityAttributeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeConfig

`func (o *Identityprofile) SetIdentityAttributeConfig(v Identityattributeconfig)`

SetIdentityAttributeConfig sets IdentityAttributeConfig field to given value.

### HasIdentityAttributeConfig

`func (o *Identityprofile) HasIdentityAttributeConfig() bool`

HasIdentityAttributeConfig returns a boolean if a field has been set.

### GetIdentityExceptionReportReference

`func (o *Identityprofile) GetIdentityExceptionReportReference() Identityexceptionreportreference`

GetIdentityExceptionReportReference returns the IdentityExceptionReportReference field if non-nil, zero value otherwise.

### GetIdentityExceptionReportReferenceOk

`func (o *Identityprofile) GetIdentityExceptionReportReferenceOk() (*Identityexceptionreportreference, bool)`

GetIdentityExceptionReportReferenceOk returns a tuple with the IdentityExceptionReportReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityExceptionReportReference

`func (o *Identityprofile) SetIdentityExceptionReportReference(v Identityexceptionreportreference)`

SetIdentityExceptionReportReference sets IdentityExceptionReportReference field to given value.

### HasIdentityExceptionReportReference

`func (o *Identityprofile) HasIdentityExceptionReportReference() bool`

HasIdentityExceptionReportReference returns a boolean if a field has been set.

### SetIdentityExceptionReportReferenceNil

`func (o *Identityprofile) SetIdentityExceptionReportReferenceNil(b bool)`

 SetIdentityExceptionReportReferenceNil sets the value for IdentityExceptionReportReference to be an explicit nil

### UnsetIdentityExceptionReportReference
`func (o *Identityprofile) UnsetIdentityExceptionReportReference()`

UnsetIdentityExceptionReportReference ensures that no value is present for IdentityExceptionReportReference, not even an explicit nil
### GetHasTimeBasedAttr

`func (o *Identityprofile) GetHasTimeBasedAttr() bool`

GetHasTimeBasedAttr returns the HasTimeBasedAttr field if non-nil, zero value otherwise.

### GetHasTimeBasedAttrOk

`func (o *Identityprofile) GetHasTimeBasedAttrOk() (*bool, bool)`

GetHasTimeBasedAttrOk returns a tuple with the HasTimeBasedAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasTimeBasedAttr

`func (o *Identityprofile) SetHasTimeBasedAttr(v bool)`

SetHasTimeBasedAttr sets HasTimeBasedAttr field to given value.

### HasHasTimeBasedAttr

`func (o *Identityprofile) HasHasTimeBasedAttr() bool`

HasHasTimeBasedAttr returns a boolean if a field has been set.


