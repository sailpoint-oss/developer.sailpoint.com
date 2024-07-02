---
id: account-correlated
title: AccountCorrelated
pagination_label: AccountCorrelated
sidebar_label: AccountCorrelated
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountCorrelated'] 
slug: /tools/sdk/go/beta/models/account-correlated
tags: ['SDK', 'Software Development Kit', 'AccountCorrelated']
---

# AccountCorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**AccountCorrelatedIdentity**](account-correlated-identity) |  | 
**Source** |  [**AccountCorrelatedSource**](account-correlated-source) |  | 
**Account** |  [**AccountCorrelatedAccount**](account-correlated-account) |  | 
**Attributes** |  **map[string]interface{}** | The attributes associated with the account.  Attributes are unique per source. | 
**EntitlementCount** |  Pointer to **int32** | The number of entitlements associated with this account. | [optional] 

## Methods

### NewAccountCorrelated

`func NewAccountCorrelated(identity AccountCorrelatedIdentity, source AccountCorrelatedSource, account AccountCorrelatedAccount, attributes map[string]interface{}, ) *AccountCorrelated`

NewAccountCorrelated instantiates a new AccountCorrelated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCorrelatedWithDefaults

`func NewAccountCorrelatedWithDefaults() *AccountCorrelated`

NewAccountCorrelatedWithDefaults instantiates a new AccountCorrelated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *AccountCorrelated) GetIdentity() AccountCorrelatedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountCorrelated) GetIdentityOk() (*AccountCorrelatedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountCorrelated) SetIdentity(v AccountCorrelatedIdentity)`

SetIdentity sets Identity field to given value.


### GetSource

`func (o *AccountCorrelated) GetSource() AccountCorrelatedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountCorrelated) GetSourceOk() (*AccountCorrelatedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountCorrelated) SetSource(v AccountCorrelatedSource)`

SetSource sets Source field to given value.


### GetAccount

`func (o *AccountCorrelated) GetAccount() AccountCorrelatedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountCorrelated) GetAccountOk() (*AccountCorrelatedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountCorrelated) SetAccount(v AccountCorrelatedAccount)`

SetAccount sets Account field to given value.


### GetAttributes

`func (o *AccountCorrelated) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AccountCorrelated) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AccountCorrelated) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetEntitlementCount

`func (o *AccountCorrelated) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccountCorrelated) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccountCorrelated) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccountCorrelated) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.


[[Back to top]](#) 


