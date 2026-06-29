---
id: v1-userapp
title: Userapp
pagination_label: Userapp
sidebar_label: Userapp
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Userapp', 'V1Userapp'] 
slug: /tools/sdk/go/apps/models/userapp
tags: ['SDK', 'Software Development Kit', 'Userapp', 'V1Userapp']
---

# Userapp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The user app id | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the user app was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the user app was last modified | [optional] 
**HasMultipleAccounts** | Pointer to **bool** | True if the owner has multiple accounts for the source | [optional] [default to false]
**UseForPasswordManagement** | Pointer to **bool** | True if the source has password feature | [optional] [default to false]
**ProvisionRequestEnabled** | Pointer to **bool** | True if the app allows access request | [optional] [default to false]
**AppCenterEnabled** | Pointer to **bool** | True if the app is visible in the request center | [optional] [default to true]
**SourceApp** | Pointer to [**UserappSourceApp**](userapp-source-app) |  | [optional] 
**Source** | Pointer to [**UserappSource**](userapp-source) |  | [optional] 
**Account** | Pointer to [**UserappAccount**](userapp-account) |  | [optional] 
**Owner** | Pointer to [**UserappOwner**](userapp-owner) |  | [optional] 

## Methods

### NewUserapp

`func NewUserapp() *Userapp`

NewUserapp instantiates a new Userapp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserappWithDefaults

`func NewUserappWithDefaults() *Userapp`

NewUserappWithDefaults instantiates a new Userapp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Userapp) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Userapp) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Userapp) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Userapp) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *Userapp) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Userapp) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Userapp) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Userapp) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Userapp) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Userapp) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Userapp) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Userapp) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetHasMultipleAccounts

`func (o *Userapp) GetHasMultipleAccounts() bool`

GetHasMultipleAccounts returns the HasMultipleAccounts field if non-nil, zero value otherwise.

### GetHasMultipleAccountsOk

`func (o *Userapp) GetHasMultipleAccountsOk() (*bool, bool)`

GetHasMultipleAccountsOk returns a tuple with the HasMultipleAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMultipleAccounts

`func (o *Userapp) SetHasMultipleAccounts(v bool)`

SetHasMultipleAccounts sets HasMultipleAccounts field to given value.

### HasHasMultipleAccounts

`func (o *Userapp) HasHasMultipleAccounts() bool`

HasHasMultipleAccounts returns a boolean if a field has been set.

### GetUseForPasswordManagement

`func (o *Userapp) GetUseForPasswordManagement() bool`

GetUseForPasswordManagement returns the UseForPasswordManagement field if non-nil, zero value otherwise.

### GetUseForPasswordManagementOk

`func (o *Userapp) GetUseForPasswordManagementOk() (*bool, bool)`

GetUseForPasswordManagementOk returns a tuple with the UseForPasswordManagement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPasswordManagement

`func (o *Userapp) SetUseForPasswordManagement(v bool)`

SetUseForPasswordManagement sets UseForPasswordManagement field to given value.

### HasUseForPasswordManagement

`func (o *Userapp) HasUseForPasswordManagement() bool`

HasUseForPasswordManagement returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *Userapp) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *Userapp) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *Userapp) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *Userapp) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *Userapp) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *Userapp) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *Userapp) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *Userapp) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.

### GetSourceApp

`func (o *Userapp) GetSourceApp() UserappSourceApp`

GetSourceApp returns the SourceApp field if non-nil, zero value otherwise.

### GetSourceAppOk

`func (o *Userapp) GetSourceAppOk() (*UserappSourceApp, bool)`

GetSourceAppOk returns a tuple with the SourceApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceApp

`func (o *Userapp) SetSourceApp(v UserappSourceApp)`

SetSourceApp sets SourceApp field to given value.

### HasSourceApp

`func (o *Userapp) HasSourceApp() bool`

HasSourceApp returns a boolean if a field has been set.

### GetSource

`func (o *Userapp) GetSource() UserappSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Userapp) GetSourceOk() (*UserappSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Userapp) SetSource(v UserappSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Userapp) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAccount

`func (o *Userapp) GetAccount() UserappAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Userapp) GetAccountOk() (*UserappAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Userapp) SetAccount(v UserappAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *Userapp) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetOwner

`func (o *Userapp) GetOwner() UserappOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Userapp) GetOwnerOk() (*UserappOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Userapp) SetOwner(v UserappOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Userapp) HasOwner() bool`

HasOwner returns a boolean if a field has been set.


