---
id: beta-app-account-details
title: AppAccountDetails
pagination_label: AppAccountDetails
sidebar_label: AppAccountDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppAccountDetails', 'BetaAppAccountDetails'] 
slug: /tools/sdk/go/beta/models/app-account-details
tags: ['SDK', 'Software Development Kit', 'AppAccountDetails', 'BetaAppAccountDetails']
---

# AppAccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | Pointer to **string** | The source app ID | [optional] 
**AppDisplayName** | Pointer to **string** | The source app display name | [optional] 
**SourceAccount** | Pointer to [**AppAccountDetailsSourceAccount**](app-account-details-source-account) |  | [optional] 

## Methods

### NewAppAccountDetails

`func NewAppAccountDetails() *AppAccountDetails`

NewAppAccountDetails instantiates a new AppAccountDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppAccountDetailsWithDefaults

`func NewAppAccountDetailsWithDefaults() *AppAccountDetails`

NewAppAccountDetailsWithDefaults instantiates a new AppAccountDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppId

`func (o *AppAccountDetails) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *AppAccountDetails) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *AppAccountDetails) SetAppId(v string)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *AppAccountDetails) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetAppDisplayName

`func (o *AppAccountDetails) GetAppDisplayName() string`

GetAppDisplayName returns the AppDisplayName field if non-nil, zero value otherwise.

### GetAppDisplayNameOk

`func (o *AppAccountDetails) GetAppDisplayNameOk() (*string, bool)`

GetAppDisplayNameOk returns a tuple with the AppDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppDisplayName

`func (o *AppAccountDetails) SetAppDisplayName(v string)`

SetAppDisplayName sets AppDisplayName field to given value.

### HasAppDisplayName

`func (o *AppAccountDetails) HasAppDisplayName() bool`

HasAppDisplayName returns a boolean if a field has been set.

### GetSourceAccount

`func (o *AppAccountDetails) GetSourceAccount() AppAccountDetailsSourceAccount`

GetSourceAccount returns the SourceAccount field if non-nil, zero value otherwise.

### GetSourceAccountOk

`func (o *AppAccountDetails) GetSourceAccountOk() (*AppAccountDetailsSourceAccount, bool)`

GetSourceAccountOk returns a tuple with the SourceAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAccount

`func (o *AppAccountDetails) SetSourceAccount(v AppAccountDetailsSourceAccount)`

SetSourceAccount sets SourceAccount field to given value.

### HasSourceAccount

`func (o *AppAccountDetails) HasSourceAccount() bool`

HasSourceAccount returns a boolean if a field has been set.


