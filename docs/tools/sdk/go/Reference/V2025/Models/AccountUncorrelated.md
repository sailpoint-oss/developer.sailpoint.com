---
id: account-uncorrelated
title: AccountUncorrelated
pagination_label: AccountUncorrelated
sidebar_label: AccountUncorrelated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUncorrelated', 'AccountUncorrelated'] 
slug: /tools/sdk/go//models/account-uncorrelated
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelated', 'AccountUncorrelated']
---

# AccountUncorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountUncorrelatedIdentity**](account-uncorrelated-identity) |  | 
**Source** | [**AccountUncorrelatedSource**](account-uncorrelated-source) |  | 
**Account** | [**AccountUncorrelatedAccount**](account-uncorrelated-account) |  | 
**EntitlementCount** | Pointer to **int32** | The number of entitlements associated with this account. | [optional] 

## Methods

### NewAccountUncorrelated

`func NewAccountUncorrelated(identity AccountUncorrelatedIdentity, source AccountUncorrelatedSource, account AccountUncorrelatedAccount, ) *AccountUncorrelated`

NewAccountUncorrelated instantiates a new AccountUncorrelated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUncorrelatedWithDefaults

`func NewAccountUncorrelatedWithDefaults() *AccountUncorrelated`

NewAccountUncorrelatedWithDefaults instantiates a new AccountUncorrelated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *AccountUncorrelated) GetIdentity() AccountUncorrelatedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountUncorrelated) GetIdentityOk() (*AccountUncorrelatedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountUncorrelated) SetIdentity(v AccountUncorrelatedIdentity)`

SetIdentity sets Identity field to given value.


### GetSource

`func (o *AccountUncorrelated) GetSource() AccountUncorrelatedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountUncorrelated) GetSourceOk() (*AccountUncorrelatedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountUncorrelated) SetSource(v AccountUncorrelatedSource)`

SetSource sets Source field to given value.


### GetAccount

`func (o *AccountUncorrelated) GetAccount() AccountUncorrelatedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountUncorrelated) GetAccountOk() (*AccountUncorrelatedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountUncorrelated) SetAccount(v AccountUncorrelatedAccount)`

SetAccount sets Account field to given value.


### GetEntitlementCount

`func (o *AccountUncorrelated) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccountUncorrelated) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccountUncorrelated) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccountUncorrelated) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.


