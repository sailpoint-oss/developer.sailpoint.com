---
id: v2024-user-app
title: UserApp
pagination_label: UserApp
sidebar_label: UserApp
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserApp', 'V2024UserApp'] 
slug: /tools/sdk/go/v2024/models/user-app
tags: ['SDK', 'Software Development Kit', 'UserApp', 'V2024UserApp']
---

# UserApp

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
**SourceApp** | Pointer to [**UserAppSourceApp**](user-app-source-app) |  | [optional] 
**Source** | Pointer to [**UserAppSource**](user-app-source) |  | [optional] 
**Account** | Pointer to [**UserAppAccount**](user-app-account) |  | [optional] 
**Owner** | Pointer to [**UserAppOwner**](user-app-owner) |  | [optional] 

## Methods

### NewUserApp

`func NewUserApp() *UserApp`

NewUserApp instantiates a new UserApp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserAppWithDefaults

`func NewUserAppWithDefaults() *UserApp`

NewUserAppWithDefaults instantiates a new UserApp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserApp) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserApp) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserApp) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserApp) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *UserApp) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *UserApp) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *UserApp) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *UserApp) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *UserApp) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *UserApp) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *UserApp) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *UserApp) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetHasMultipleAccounts

`func (o *UserApp) GetHasMultipleAccounts() bool`

GetHasMultipleAccounts returns the HasMultipleAccounts field if non-nil, zero value otherwise.

### GetHasMultipleAccountsOk

`func (o *UserApp) GetHasMultipleAccountsOk() (*bool, bool)`

GetHasMultipleAccountsOk returns a tuple with the HasMultipleAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMultipleAccounts

`func (o *UserApp) SetHasMultipleAccounts(v bool)`

SetHasMultipleAccounts sets HasMultipleAccounts field to given value.

### HasHasMultipleAccounts

`func (o *UserApp) HasHasMultipleAccounts() bool`

HasHasMultipleAccounts returns a boolean if a field has been set.

### GetUseForPasswordManagement

`func (o *UserApp) GetUseForPasswordManagement() bool`

GetUseForPasswordManagement returns the UseForPasswordManagement field if non-nil, zero value otherwise.

### GetUseForPasswordManagementOk

`func (o *UserApp) GetUseForPasswordManagementOk() (*bool, bool)`

GetUseForPasswordManagementOk returns a tuple with the UseForPasswordManagement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPasswordManagement

`func (o *UserApp) SetUseForPasswordManagement(v bool)`

SetUseForPasswordManagement sets UseForPasswordManagement field to given value.

### HasUseForPasswordManagement

`func (o *UserApp) HasUseForPasswordManagement() bool`

HasUseForPasswordManagement returns a boolean if a field has been set.

### GetProvisionRequestEnabled

`func (o *UserApp) GetProvisionRequestEnabled() bool`

GetProvisionRequestEnabled returns the ProvisionRequestEnabled field if non-nil, zero value otherwise.

### GetProvisionRequestEnabledOk

`func (o *UserApp) GetProvisionRequestEnabledOk() (*bool, bool)`

GetProvisionRequestEnabledOk returns a tuple with the ProvisionRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionRequestEnabled

`func (o *UserApp) SetProvisionRequestEnabled(v bool)`

SetProvisionRequestEnabled sets ProvisionRequestEnabled field to given value.

### HasProvisionRequestEnabled

`func (o *UserApp) HasProvisionRequestEnabled() bool`

HasProvisionRequestEnabled returns a boolean if a field has been set.

### GetAppCenterEnabled

`func (o *UserApp) GetAppCenterEnabled() bool`

GetAppCenterEnabled returns the AppCenterEnabled field if non-nil, zero value otherwise.

### GetAppCenterEnabledOk

`func (o *UserApp) GetAppCenterEnabledOk() (*bool, bool)`

GetAppCenterEnabledOk returns a tuple with the AppCenterEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCenterEnabled

`func (o *UserApp) SetAppCenterEnabled(v bool)`

SetAppCenterEnabled sets AppCenterEnabled field to given value.

### HasAppCenterEnabled

`func (o *UserApp) HasAppCenterEnabled() bool`

HasAppCenterEnabled returns a boolean if a field has been set.

### GetSourceApp

`func (o *UserApp) GetSourceApp() UserAppSourceApp`

GetSourceApp returns the SourceApp field if non-nil, zero value otherwise.

### GetSourceAppOk

`func (o *UserApp) GetSourceAppOk() (*UserAppSourceApp, bool)`

GetSourceAppOk returns a tuple with the SourceApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceApp

`func (o *UserApp) SetSourceApp(v UserAppSourceApp)`

SetSourceApp sets SourceApp field to given value.

### HasSourceApp

`func (o *UserApp) HasSourceApp() bool`

HasSourceApp returns a boolean if a field has been set.

### GetSource

`func (o *UserApp) GetSource() UserAppSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *UserApp) GetSourceOk() (*UserAppSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *UserApp) SetSource(v UserAppSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *UserApp) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAccount

`func (o *UserApp) GetAccount() UserAppAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *UserApp) GetAccountOk() (*UserAppAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *UserApp) SetAccount(v UserAppAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *UserApp) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetOwner

`func (o *UserApp) GetOwner() UserAppOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *UserApp) GetOwnerOk() (*UserAppOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *UserApp) SetOwner(v UserAppOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *UserApp) HasOwner() bool`

HasOwner returns a boolean if a field has been set.


