---
id: v1-sourceapp
title: Sourceapp
pagination_label: Sourceapp
sidebar_label: Sourceapp
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceapp', 'V1Sourceapp'] 
slug: /tools/sdk/go/apps/models/sourceapp
tags: ['SDK', 'Software Development Kit', 'Sourceapp', 'V1Sourceapp']
---

# Sourceapp

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
**AccountSource** | Pointer to [**NullableSourceappAccountSource**](sourceapp-account-source) |  | [optional] 
**Owner** | Pointer to [**NullableBasereferencedto**](basereferencedto) | The owner of source app | [optional] 

## Methods

### NewSourceapp

`func NewSourceapp() *Sourceapp`

NewSourceapp instantiates a new Sourceapp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceappWithDefaults

`func NewSourceappWithDefaults() *Sourceapp`

NewSourceappWithDefaults instantiates a new Sourceapp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourceapp) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourceapp) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourceapp) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sourceapp) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCloudAppId

`func (o *Sourceapp) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *Sourceapp) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *Sourceapp) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *Sourceapp) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetName

`func (o *Sourceapp) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourceapp) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourceapp) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sourceapp) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Sourceapp) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sourceapp) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sourceapp) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sourceapp) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sourceapp) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sourceapp) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sourceapp) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sourceapp) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *Sourceapp) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Sourceapp) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Sourceapp) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Sourceapp) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *Sourceapp) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *Sourceapp) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *Sourceapp) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *Sourceapp) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetDescription

`func (o *Sourceapp) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sourceapp) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sourceapp) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Sourceapp) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMatchAllAccounts

`func (o *Sourceapp) GetMatchAllAccounts() bool`

GetMatchAllAccounts returns the MatchAllAccounts field if non-nil, zero value otherwise.

### GetMatchAllAccountsOk

`func (o *Sourceapp) GetMatchAllAccountsOk() (*bool, bool)`

GetMatchAllAccountsOk returns a tuple with the MatchAllAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccounts

`func (o *Sourceapp) SetMatchAllAccounts(v bool)`

SetMatchAllAccounts sets MatchAllAccounts field to given value.

### HasMatchAllAccounts

`func (o *Sourceapp) HasMatchAllAccounts() bool`

HasMatchAllAccounts returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *Sourceapp) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *Sourceapp) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *Sourceapp) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *Sourceapp) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.

### GetAccountSource

`func (o *Sourceapp) GetAccountSource() SourceappAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *Sourceapp) GetAccountSourceOk() (*SourceappAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *Sourceapp) SetAccountSource(v SourceappAccountSource)`

SetAccountSource sets AccountSource field to given value.

### HasAccountSource

`func (o *Sourceapp) HasAccountSource() bool`

HasAccountSource returns a boolean if a field has been set.

### SetAccountSourceNil

`func (o *Sourceapp) SetAccountSourceNil(b bool)`

 SetAccountSourceNil sets the value for AccountSource to be an explicit nil

### UnsetAccountSource
`func (o *Sourceapp) UnsetAccountSource()`

UnsetAccountSource ensures that no value is present for AccountSource, not even an explicit nil
### GetOwner

`func (o *Sourceapp) GetOwner() Basereferencedto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Sourceapp) GetOwnerOk() (*Basereferencedto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Sourceapp) SetOwner(v Basereferencedto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Sourceapp) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Sourceapp) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Sourceapp) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

