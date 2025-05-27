---
id: beta-account-uncorrelated-identity
title: AccountUncorrelatedIdentity
pagination_label: AccountUncorrelatedIdentity
sidebar_label: AccountUncorrelatedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUncorrelatedIdentity', 'BetaAccountUncorrelatedIdentity'] 
slug: /tools/sdk/go/beta/models/account-uncorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedIdentity', 'BetaAccountUncorrelatedIdentity']
---

# AccountUncorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of the identity the account is uncorrelated with. | 
**Id** | **string** | ID of the identity the account is uncorrelated with. | 
**Name** | **string** | Display name of the identity the account is uncorrelated with. | 

## Methods

### NewAccountUncorrelatedIdentity

`func NewAccountUncorrelatedIdentity(type_ string, id string, name string, ) *AccountUncorrelatedIdentity`

NewAccountUncorrelatedIdentity instantiates a new AccountUncorrelatedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUncorrelatedIdentityWithDefaults

`func NewAccountUncorrelatedIdentityWithDefaults() *AccountUncorrelatedIdentity`

NewAccountUncorrelatedIdentityWithDefaults instantiates a new AccountUncorrelatedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountUncorrelatedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountUncorrelatedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountUncorrelatedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountUncorrelatedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountUncorrelatedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountUncorrelatedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountUncorrelatedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountUncorrelatedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountUncorrelatedIdentity) SetName(v string)`

SetName sets Name field to given value.



