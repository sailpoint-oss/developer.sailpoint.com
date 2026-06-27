---
id: v1-accountuncorrelated
title: Accountuncorrelated
pagination_label: Accountuncorrelated
sidebar_label: Accountuncorrelated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountuncorrelated', 'V1Accountuncorrelated'] 
slug: /tools/sdk/go/triggers/models/accountuncorrelated
tags: ['SDK', 'Software Development Kit', 'Accountuncorrelated', 'V1Accountuncorrelated']
---

# Accountuncorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountuncorrelatedIdentity**](accountuncorrelated-identity) |  | 
**Source** | [**AccountuncorrelatedSource**](accountuncorrelated-source) |  | 
**Account** | [**AccountuncorrelatedAccount**](accountuncorrelated-account) |  | 
**EntitlementCount** | Pointer to **int32** | The number of entitlements associated with this account. | [optional] 

## Methods

### NewAccountuncorrelated

`func NewAccountuncorrelated(identity AccountuncorrelatedIdentity, source AccountuncorrelatedSource, account AccountuncorrelatedAccount, ) *Accountuncorrelated`

NewAccountuncorrelated instantiates a new Accountuncorrelated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountuncorrelatedWithDefaults

`func NewAccountuncorrelatedWithDefaults() *Accountuncorrelated`

NewAccountuncorrelatedWithDefaults instantiates a new Accountuncorrelated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Accountuncorrelated) GetIdentity() AccountuncorrelatedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountuncorrelated) GetIdentityOk() (*AccountuncorrelatedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountuncorrelated) SetIdentity(v AccountuncorrelatedIdentity)`

SetIdentity sets Identity field to given value.


### GetSource

`func (o *Accountuncorrelated) GetSource() AccountuncorrelatedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountuncorrelated) GetSourceOk() (*AccountuncorrelatedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountuncorrelated) SetSource(v AccountuncorrelatedSource)`

SetSource sets Source field to given value.


### GetAccount

`func (o *Accountuncorrelated) GetAccount() AccountuncorrelatedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountuncorrelated) GetAccountOk() (*AccountuncorrelatedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountuncorrelated) SetAccount(v AccountuncorrelatedAccount)`

SetAccount sets Account field to given value.


### GetEntitlementCount

`func (o *Accountuncorrelated) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Accountuncorrelated) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Accountuncorrelated) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *Accountuncorrelated) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.


