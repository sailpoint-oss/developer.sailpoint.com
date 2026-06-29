---
id: v1-accountcorrelated
title: Accountcorrelated
pagination_label: Accountcorrelated
sidebar_label: Accountcorrelated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountcorrelated', 'V1Accountcorrelated'] 
slug: /tools/sdk/go/triggers/models/accountcorrelated
tags: ['SDK', 'Software Development Kit', 'Accountcorrelated', 'V1Accountcorrelated']
---

# Accountcorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountcorrelatedIdentity**](accountcorrelated-identity) |  | 
**Source** | [**AccountcorrelatedSource**](accountcorrelated-source) |  | 
**Account** | [**AccountcorrelatedAccount**](accountcorrelated-account) |  | 
**Attributes** | **map[string]interface{}** | The attributes associated with the account.  Attributes are unique per source. | 
**EntitlementCount** | Pointer to **int32** | The number of entitlements associated with this account. | [optional] 

## Methods

### NewAccountcorrelated

`func NewAccountcorrelated(identity AccountcorrelatedIdentity, source AccountcorrelatedSource, account AccountcorrelatedAccount, attributes map[string]interface{}, ) *Accountcorrelated`

NewAccountcorrelated instantiates a new Accountcorrelated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountcorrelatedWithDefaults

`func NewAccountcorrelatedWithDefaults() *Accountcorrelated`

NewAccountcorrelatedWithDefaults instantiates a new Accountcorrelated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Accountcorrelated) GetIdentity() AccountcorrelatedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountcorrelated) GetIdentityOk() (*AccountcorrelatedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountcorrelated) SetIdentity(v AccountcorrelatedIdentity)`

SetIdentity sets Identity field to given value.


### GetSource

`func (o *Accountcorrelated) GetSource() AccountcorrelatedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountcorrelated) GetSourceOk() (*AccountcorrelatedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountcorrelated) SetSource(v AccountcorrelatedSource)`

SetSource sets Source field to given value.


### GetAccount

`func (o *Accountcorrelated) GetAccount() AccountcorrelatedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountcorrelated) GetAccountOk() (*AccountcorrelatedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountcorrelated) SetAccount(v AccountcorrelatedAccount)`

SetAccount sets Account field to given value.


### GetAttributes

`func (o *Accountcorrelated) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Accountcorrelated) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Accountcorrelated) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetEntitlementCount

`func (o *Accountcorrelated) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Accountcorrelated) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Accountcorrelated) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *Accountcorrelated) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.


