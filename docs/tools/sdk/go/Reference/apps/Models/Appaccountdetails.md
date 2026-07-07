---
id: v1-appaccountdetails
title: Appaccountdetails
pagination_label: Appaccountdetails
sidebar_label: Appaccountdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Appaccountdetails', 'V1Appaccountdetails'] 
slug: /tools/sdk/go/apps/models/appaccountdetails
tags: ['SDK', 'Software Development Kit', 'Appaccountdetails', 'V1Appaccountdetails']
---

# Appaccountdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | Pointer to **string** | The source app ID | [optional] 
**AppDisplayName** | Pointer to **string** | The source app display name | [optional] 
**SourceAccount** | Pointer to [**AppaccountdetailsSourceAccount**](appaccountdetails-source-account) |  | [optional] 

## Methods

### NewAppaccountdetails

`func NewAppaccountdetails() *Appaccountdetails`

NewAppaccountdetails instantiates a new Appaccountdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppaccountdetailsWithDefaults

`func NewAppaccountdetailsWithDefaults() *Appaccountdetails`

NewAppaccountdetailsWithDefaults instantiates a new Appaccountdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppId

`func (o *Appaccountdetails) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *Appaccountdetails) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *Appaccountdetails) SetAppId(v string)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *Appaccountdetails) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetAppDisplayName

`func (o *Appaccountdetails) GetAppDisplayName() string`

GetAppDisplayName returns the AppDisplayName field if non-nil, zero value otherwise.

### GetAppDisplayNameOk

`func (o *Appaccountdetails) GetAppDisplayNameOk() (*string, bool)`

GetAppDisplayNameOk returns a tuple with the AppDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppDisplayName

`func (o *Appaccountdetails) SetAppDisplayName(v string)`

SetAppDisplayName sets AppDisplayName field to given value.

### HasAppDisplayName

`func (o *Appaccountdetails) HasAppDisplayName() bool`

HasAppDisplayName returns a boolean if a field has been set.

### GetSourceAccount

`func (o *Appaccountdetails) GetSourceAccount() AppaccountdetailsSourceAccount`

GetSourceAccount returns the SourceAccount field if non-nil, zero value otherwise.

### GetSourceAccountOk

`func (o *Appaccountdetails) GetSourceAccountOk() (*AppaccountdetailsSourceAccount, bool)`

GetSourceAccountOk returns a tuple with the SourceAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAccount

`func (o *Appaccountdetails) SetSourceAccount(v AppaccountdetailsSourceAccount)`

SetSourceAccount sets SourceAccount field to given value.

### HasSourceAccount

`func (o *Appaccountdetails) HasSourceAccount() bool`

HasSourceAccount returns a boolean if a field has been set.


