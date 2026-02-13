---
id: beta-source-app
title: SourceApp
pagination_label: SourceApp
sidebar_label: SourceApp
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceApp', 'BetaSourceApp'] 
slug: /tools/sdk/go/beta/models/source-app
tags: ['SDK', 'Software Development Kit', 'SourceApp', 'BetaSourceApp']
---

# SourceApp

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
**AccountSource** | Pointer to [**NullableSourceAppAccountSource**](source-app-account-source) |  | [optional] 
**Owner** | Pointer to [**NullableBaseReferenceDto**](base-reference-dto) | The owner of source app | [optional] 

## Methods

### NewSourceApp

`func NewSourceApp() *SourceApp`

NewSourceApp instantiates a new SourceApp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAppWithDefaults

`func NewSourceAppWithDefaults() *SourceApp`

NewSourceAppWithDefaults instantiates a new SourceApp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceApp) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceApp) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceApp) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceApp) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCloudAppId

`func (o *SourceApp) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *SourceApp) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *SourceApp) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *SourceApp) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetName

`func (o *SourceApp) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceApp) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceApp) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceApp) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *SourceApp) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceApp) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceApp) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceApp) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceApp) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceApp) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceApp) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceApp) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *SourceApp) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *SourceApp) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *SourceApp) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *SourceApp) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *SourceApp) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *SourceApp) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *SourceApp) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *SourceApp) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetDescription

`func (o *SourceApp) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceApp) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceApp) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceApp) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMatchAllAccounts

`func (o *SourceApp) GetMatchAllAccounts() bool`

GetMatchAllAccounts returns the MatchAllAccounts field if non-nil, zero value otherwise.

### GetMatchAllAccountsOk

`func (o *SourceApp) GetMatchAllAccountsOk() (*bool, bool)`

GetMatchAllAccountsOk returns a tuple with the MatchAllAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccounts

`func (o *SourceApp) SetMatchAllAccounts(v bool)`

SetMatchAllAccounts sets MatchAllAccounts field to given value.

### HasMatchAllAccounts

`func (o *SourceApp) HasMatchAllAccounts() bool`

HasMatchAllAccounts returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *SourceApp) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *SourceApp) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *SourceApp) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *SourceApp) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.

### GetAccountSource

`func (o *SourceApp) GetAccountSource() SourceAppAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *SourceApp) GetAccountSourceOk() (*SourceAppAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *SourceApp) SetAccountSource(v SourceAppAccountSource)`

SetAccountSource sets AccountSource field to given value.

### HasAccountSource

`func (o *SourceApp) HasAccountSource() bool`

HasAccountSource returns a boolean if a field has been set.

### SetAccountSourceNil

`func (o *SourceApp) SetAccountSourceNil(b bool)`

 SetAccountSourceNil sets the value for AccountSource to be an explicit nil

### UnsetAccountSource
`func (o *SourceApp) UnsetAccountSource()`

UnsetAccountSource ensures that no value is present for AccountSource, not even an explicit nil
### GetOwner

`func (o *SourceApp) GetOwner() BaseReferenceDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SourceApp) GetOwnerOk() (*BaseReferenceDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SourceApp) SetOwner(v BaseReferenceDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SourceApp) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *SourceApp) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *SourceApp) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

