---
id: v1-sourceapppatchdto
title: Sourceapppatchdto
pagination_label: Sourceapppatchdto
sidebar_label: Sourceapppatchdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceapppatchdto', 'V1Sourceapppatchdto'] 
slug: /tools/sdk/go/apps/models/sourceapppatchdto
tags: ['SDK', 'Software Development Kit', 'Sourceapppatchdto', 'V1Sourceapppatchdto']
---

# Sourceapppatchdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source app id | [optional] 
**CloudAppId** | Pointer to **string** | The deprecated source app id | [optional] 
**Name** | Pointer to **string** | The source app name | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the source app was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the source app was last modified | [optional] 
**Enabled** | Pointer to **bool** | True if the source app is enabled | [optional] [default to false]
**ProvisionRequestEnabled** | Pointer to **bool** | True if the app allows access request | [optional] [default to false]
**Description** | Pointer to **string** | The description of the source app | [optional] 
**MatchAllAccounts** | Pointer to **bool** | True if the source app match all accounts | [optional] [default to false]
**AppCenterEnabled** | Pointer to **bool** | True if the app is visible in the request center | [optional] [default to true]
**AccessProfiles** | Pointer to **[]string** | List of IDs of access profiles | [optional] 
**AccountSource** | Pointer to [**NullableSourceappAccountSource**](sourceapp-account-source) |  | [optional] 
**Owner** | Pointer to [**NullableBasereferencedto**](basereferencedto) | The owner of source app | [optional] 

## Methods

### NewSourceapppatchdto

`func NewSourceapppatchdto() *Sourceapppatchdto`

NewSourceapppatchdto instantiates a new Sourceapppatchdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceapppatchdtoWithDefaults

`func NewSourceapppatchdtoWithDefaults() *Sourceapppatchdto`

NewSourceapppatchdtoWithDefaults instantiates a new Sourceapppatchdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourceapppatchdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourceapppatchdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourceapppatchdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sourceapppatchdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCloudAppId

`func (o *Sourceapppatchdto) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *Sourceapppatchdto) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *Sourceapppatchdto) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *Sourceapppatchdto) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetName

`func (o *Sourceapppatchdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourceapppatchdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourceapppatchdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sourceapppatchdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Sourceapppatchdto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sourceapppatchdto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sourceapppatchdto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sourceapppatchdto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sourceapppatchdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sourceapppatchdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sourceapppatchdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sourceapppatchdto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *Sourceapppatchdto) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Sourceapppatchdto) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Sourceapppatchdto) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Sourceapppatchdto) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *Sourceapppatchdto) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *Sourceapppatchdto) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *Sourceapppatchdto) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *Sourceapppatchdto) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetDescription

`func (o *Sourceapppatchdto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sourceapppatchdto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sourceapppatchdto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Sourceapppatchdto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMatchAllAccounts

`func (o *Sourceapppatchdto) GetMatchAllAccounts() bool`

GetMatchAllAccounts returns the MatchAllAccounts field if non-nil, zero value otherwise.

### GetMatchAllAccountsOk

`func (o *Sourceapppatchdto) GetMatchAllAccountsOk() (*bool, bool)`

GetMatchAllAccountsOk returns a tuple with the MatchAllAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccounts

`func (o *Sourceapppatchdto) SetMatchAllAccounts(v bool)`

SetMatchAllAccounts sets MatchAllAccounts field to given value.

### HasMatchAllAccounts

`func (o *Sourceapppatchdto) HasMatchAllAccounts() bool`

HasMatchAllAccounts returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *Sourceapppatchdto) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *Sourceapppatchdto) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *Sourceapppatchdto) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *Sourceapppatchdto) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.

### GetAccessProfiles

`func (o *Sourceapppatchdto) GetAccessProfiles() []string`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *Sourceapppatchdto) GetAccessProfilesOk() (*[]string, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *Sourceapppatchdto) SetAccessProfiles(v []string)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *Sourceapppatchdto) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *Sourceapppatchdto) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *Sourceapppatchdto) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil
### GetAccountSource

`func (o *Sourceapppatchdto) GetAccountSource() SourceappAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *Sourceapppatchdto) GetAccountSourceOk() (*SourceappAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *Sourceapppatchdto) SetAccountSource(v SourceappAccountSource)`

SetAccountSource sets AccountSource field to given value.

### HasAccountSource

`func (o *Sourceapppatchdto) HasAccountSource() bool`

HasAccountSource returns a boolean if a field has been set.

### SetAccountSourceNil

`func (o *Sourceapppatchdto) SetAccountSourceNil(b bool)`

 SetAccountSourceNil sets the value for AccountSource to be an explicit nil

### UnsetAccountSource
`func (o *Sourceapppatchdto) UnsetAccountSource()`

UnsetAccountSource ensures that no value is present for AccountSource, not even an explicit nil
### GetOwner

`func (o *Sourceapppatchdto) GetOwner() Basereferencedto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Sourceapppatchdto) GetOwnerOk() (*Basereferencedto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Sourceapppatchdto) SetOwner(v Basereferencedto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Sourceapppatchdto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Sourceapppatchdto) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Sourceapppatchdto) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

