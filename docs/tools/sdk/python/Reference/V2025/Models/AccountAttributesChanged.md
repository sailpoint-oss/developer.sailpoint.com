---
id: v2025-account-attributes-changed
title: AccountAttributesChanged
pagination_label: AccountAttributesChanged
sidebar_label: AccountAttributesChanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAttributesChanged', 'V2025AccountAttributesChanged'] 
slug: /tools/sdk/go/v2025/models/account-attributes-changed
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChanged', 'V2025AccountAttributesChanged']
---

# AccountAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountAttributesChangedIdentity**](account-attributes-changed-identity) |  | 
**Source** | [**AccountAttributesChangedSource**](account-attributes-changed-source) |  | 
**Account** | [**AccountAttributesChangedAccount**](account-attributes-changed-account) |  | 
**Changes** | [**[]AccountAttributesChangedChangesInner**](account-attributes-changed-changes-inner) | A list of attributes that changed. | 

## Methods

### NewAccountAttributesChanged

`func NewAccountAttributesChanged(identity AccountAttributesChangedIdentity, source AccountAttributesChangedSource, account AccountAttributesChangedAccount, changes []AccountAttributesChangedChangesInner, ) *AccountAttributesChanged`

NewAccountAttributesChanged instantiates a new AccountAttributesChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesChangedWithDefaults

`func NewAccountAttributesChangedWithDefaults() *AccountAttributesChanged`

NewAccountAttributesChangedWithDefaults instantiates a new AccountAttributesChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *AccountAttributesChanged) GetIdentity() AccountAttributesChangedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountAttributesChanged) GetIdentityOk() (*AccountAttributesChangedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountAttributesChanged) SetIdentity(v AccountAttributesChangedIdentity)`

SetIdentity sets Identity field to given value.


### GetSource

`func (o *AccountAttributesChanged) GetSource() AccountAttributesChangedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountAttributesChanged) GetSourceOk() (*AccountAttributesChangedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountAttributesChanged) SetSource(v AccountAttributesChangedSource)`

SetSource sets Source field to given value.


### GetAccount

`func (o *AccountAttributesChanged) GetAccount() AccountAttributesChangedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountAttributesChanged) GetAccountOk() (*AccountAttributesChangedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountAttributesChanged) SetAccount(v AccountAttributesChangedAccount)`

SetAccount sets Account field to given value.


### GetChanges

`func (o *AccountAttributesChanged) GetChanges() []AccountAttributesChangedChangesInner`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *AccountAttributesChanged) GetChangesOk() (*[]AccountAttributesChangedChangesInner, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *AccountAttributesChanged) SetChanges(v []AccountAttributesChangedChangesInner)`

SetChanges sets Changes field to given value.



