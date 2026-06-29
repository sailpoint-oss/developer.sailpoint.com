---
id: v1-accountattributeschanged
title: Accountattributeschanged
pagination_label: Accountattributeschanged
sidebar_label: Accountattributeschanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountattributeschanged', 'V1Accountattributeschanged'] 
slug: /tools/sdk/go/triggers/models/accountattributeschanged
tags: ['SDK', 'Software Development Kit', 'Accountattributeschanged', 'V1Accountattributeschanged']
---

# Accountattributeschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountattributeschangedIdentity**](accountattributeschanged-identity) |  | 
**Source** | [**AccountattributeschangedSource**](accountattributeschanged-source) |  | 
**Account** | [**AccountattributeschangedAccount**](accountattributeschanged-account) |  | 
**Changes** | [**[]AccountattributeschangedChangesInner**](accountattributeschanged-changes-inner) | A list of attributes that changed. | 

## Methods

### NewAccountattributeschanged

`func NewAccountattributeschanged(identity AccountattributeschangedIdentity, source AccountattributeschangedSource, account AccountattributeschangedAccount, changes []AccountattributeschangedChangesInner, ) *Accountattributeschanged`

NewAccountattributeschanged instantiates a new Accountattributeschanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountattributeschangedWithDefaults

`func NewAccountattributeschangedWithDefaults() *Accountattributeschanged`

NewAccountattributeschangedWithDefaults instantiates a new Accountattributeschanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Accountattributeschanged) GetIdentity() AccountattributeschangedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountattributeschanged) GetIdentityOk() (*AccountattributeschangedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountattributeschanged) SetIdentity(v AccountattributeschangedIdentity)`

SetIdentity sets Identity field to given value.


### GetSource

`func (o *Accountattributeschanged) GetSource() AccountattributeschangedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountattributeschanged) GetSourceOk() (*AccountattributeschangedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountattributeschanged) SetSource(v AccountattributeschangedSource)`

SetSource sets Source field to given value.


### GetAccount

`func (o *Accountattributeschanged) GetAccount() AccountattributeschangedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountattributeschanged) GetAccountOk() (*AccountattributeschangedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountattributeschanged) SetAccount(v AccountattributeschangedAccount)`

SetAccount sets Account field to given value.


### GetChanges

`func (o *Accountattributeschanged) GetChanges() []AccountattributeschangedChangesInner`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *Accountattributeschanged) GetChangesOk() (*[]AccountattributeschangedChangesInner, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *Accountattributeschanged) SetChanges(v []AccountattributeschangedChangesInner)`

SetChanges sets Changes field to given value.



