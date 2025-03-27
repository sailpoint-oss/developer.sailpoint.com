---
id: v2024-account-uncorrelated-source
title: AccountUncorrelatedSource
pagination_label: AccountUncorrelatedSource
sidebar_label: AccountUncorrelatedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUncorrelatedSource', 'V2024AccountUncorrelatedSource'] 
slug: /tools/sdk/go/v2024/models/account-uncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedSource', 'V2024AccountUncorrelatedSource']
---

# AccountUncorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The DTO type of the source the accounts are uncorrelated from. | 
**Id** | **string** | The ID of the source the accounts are uncorrelated from. | 
**Name** | **string** | Display name of the source the accounts are uncorrelated from. | 

## Methods

### NewAccountUncorrelatedSource

`func NewAccountUncorrelatedSource(type_ string, id string, name string, ) *AccountUncorrelatedSource`

NewAccountUncorrelatedSource instantiates a new AccountUncorrelatedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUncorrelatedSourceWithDefaults

`func NewAccountUncorrelatedSourceWithDefaults() *AccountUncorrelatedSource`

NewAccountUncorrelatedSourceWithDefaults instantiates a new AccountUncorrelatedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountUncorrelatedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountUncorrelatedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountUncorrelatedSource) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountUncorrelatedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountUncorrelatedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountUncorrelatedSource) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountUncorrelatedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountUncorrelatedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountUncorrelatedSource) SetName(v string)`

SetName sets Name field to given value.



