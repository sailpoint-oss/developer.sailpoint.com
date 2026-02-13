---
id: v2025-source-app-patch-dto
title: SourceAppPatchDto
pagination_label: SourceAppPatchDto
sidebar_label: SourceAppPatchDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAppPatchDto', 'V2025SourceAppPatchDto'] 
slug: /tools/sdk/go/v2025/models/source-app-patch-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppPatchDto', 'V2025SourceAppPatchDto']
---

# SourceAppPatchDto

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
**AccountSource** | Pointer to [**NullableSourceAppAccountSource**](source-app-account-source) |  | [optional] 
**Owner** | Pointer to [**NullableBaseReferenceDto**](base-reference-dto) | The owner of source app | [optional] 

## Methods

### NewSourceAppPatchDto

`func NewSourceAppPatchDto() *SourceAppPatchDto`

NewSourceAppPatchDto instantiates a new SourceAppPatchDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAppPatchDtoWithDefaults

`func NewSourceAppPatchDtoWithDefaults() *SourceAppPatchDto`

NewSourceAppPatchDtoWithDefaults instantiates a new SourceAppPatchDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceAppPatchDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAppPatchDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAppPatchDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceAppPatchDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCloudAppId

`func (o *SourceAppPatchDto) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *SourceAppPatchDto) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *SourceAppPatchDto) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *SourceAppPatchDto) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetName

`func (o *SourceAppPatchDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAppPatchDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAppPatchDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceAppPatchDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *SourceAppPatchDto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceAppPatchDto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceAppPatchDto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceAppPatchDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceAppPatchDto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceAppPatchDto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceAppPatchDto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceAppPatchDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *SourceAppPatchDto) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *SourceAppPatchDto) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *SourceAppPatchDto) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *SourceAppPatchDto) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *SourceAppPatchDto) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *SourceAppPatchDto) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *SourceAppPatchDto) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *SourceAppPatchDto) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetDescription

`func (o *SourceAppPatchDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceAppPatchDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceAppPatchDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceAppPatchDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMatchAllAccounts

`func (o *SourceAppPatchDto) GetMatchAllAccounts() bool`

GetMatchAllAccounts returns the MatchAllAccounts field if non-nil, zero value otherwise.

### GetMatchAllAccountsOk

`func (o *SourceAppPatchDto) GetMatchAllAccountsOk() (*bool, bool)`

GetMatchAllAccountsOk returns a tuple with the MatchAllAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccounts

`func (o *SourceAppPatchDto) SetMatchAllAccounts(v bool)`

SetMatchAllAccounts sets MatchAllAccounts field to given value.

### HasMatchAllAccounts

`func (o *SourceAppPatchDto) HasMatchAllAccounts() bool`

HasMatchAllAccounts returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *SourceAppPatchDto) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *SourceAppPatchDto) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *SourceAppPatchDto) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *SourceAppPatchDto) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.

### GetAccessProfiles

`func (o *SourceAppPatchDto) GetAccessProfiles() []string`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *SourceAppPatchDto) GetAccessProfilesOk() (*[]string, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *SourceAppPatchDto) SetAccessProfiles(v []string)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *SourceAppPatchDto) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *SourceAppPatchDto) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *SourceAppPatchDto) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil
### GetAccountSource

`func (o *SourceAppPatchDto) GetAccountSource() SourceAppAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *SourceAppPatchDto) GetAccountSourceOk() (*SourceAppAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *SourceAppPatchDto) SetAccountSource(v SourceAppAccountSource)`

SetAccountSource sets AccountSource field to given value.

### HasAccountSource

`func (o *SourceAppPatchDto) HasAccountSource() bool`

HasAccountSource returns a boolean if a field has been set.

### SetAccountSourceNil

`func (o *SourceAppPatchDto) SetAccountSourceNil(b bool)`

 SetAccountSourceNil sets the value for AccountSource to be an explicit nil

### UnsetAccountSource
`func (o *SourceAppPatchDto) UnsetAccountSource()`

UnsetAccountSource ensures that no value is present for AccountSource, not even an explicit nil
### GetOwner

`func (o *SourceAppPatchDto) GetOwner() BaseReferenceDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SourceAppPatchDto) GetOwnerOk() (*BaseReferenceDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SourceAppPatchDto) SetOwner(v BaseReferenceDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SourceAppPatchDto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *SourceAppPatchDto) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *SourceAppPatchDto) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

