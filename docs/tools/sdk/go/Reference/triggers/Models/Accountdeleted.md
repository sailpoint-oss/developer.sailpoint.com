---
id: v1-accountdeleted
title: Accountdeleted
pagination_label: Accountdeleted
sidebar_label: Accountdeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountdeleted', 'V1Accountdeleted'] 
slug: /tools/sdk/go/triggers/models/accountdeleted
tags: ['SDK', 'Software Development Kit', 'Accountdeleted', 'V1Accountdeleted']
---

# Accountdeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**AccountdeletedEvent**](accountdeleted-event) |  | 
**Source** | [**Accountsourcereference**](accountsourcereference) |  | 
**Account** | [**Accountv2**](accountv2) |  | 
**Identity** | [**Identityreference2**](identityreference2) |  | 

## Methods

### NewAccountdeleted

`func NewAccountdeleted(event AccountdeletedEvent, source Accountsourcereference, account Accountv2, identity Identityreference2, ) *Accountdeleted`

NewAccountdeleted instantiates a new Accountdeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountdeletedWithDefaults

`func NewAccountdeletedWithDefaults() *Accountdeleted`

NewAccountdeletedWithDefaults instantiates a new Accountdeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *Accountdeleted) GetEvent() AccountdeletedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *Accountdeleted) GetEventOk() (*AccountdeletedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *Accountdeleted) SetEvent(v AccountdeletedEvent)`

SetEvent sets Event field to given value.


### GetSource

`func (o *Accountdeleted) GetSource() Accountsourcereference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountdeleted) GetSourceOk() (*Accountsourcereference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountdeleted) SetSource(v Accountsourcereference)`

SetSource sets Source field to given value.


### GetAccount

`func (o *Accountdeleted) GetAccount() Accountv2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountdeleted) GetAccountOk() (*Accountv2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountdeleted) SetAccount(v Accountv2)`

SetAccount sets Account field to given value.


### GetIdentity

`func (o *Accountdeleted) GetIdentity() Identityreference2`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountdeleted) GetIdentityOk() (*Identityreference2, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountdeleted) SetIdentity(v Identityreference2)`

SetIdentity sets Identity field to given value.



