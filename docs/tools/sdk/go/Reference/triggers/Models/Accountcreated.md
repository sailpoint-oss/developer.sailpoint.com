---
id: v1-accountcreated
title: Accountcreated
pagination_label: Accountcreated
sidebar_label: Accountcreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountcreated', 'V1Accountcreated'] 
slug: /tools/sdk/go/triggers/models/accountcreated
tags: ['SDK', 'Software Development Kit', 'Accountcreated', 'V1Accountcreated']
---

# Accountcreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**AccountcreatedEvent**](accountcreated-event) |  | 
**Source** | [**Accountsourcereference**](accountsourcereference) |  | 
**Account** | [**Accountv2**](accountv2) |  | 
**Identity** | [**Identityreference2**](identityreference2) |  | 

## Methods

### NewAccountcreated

`func NewAccountcreated(event AccountcreatedEvent, source Accountsourcereference, account Accountv2, identity Identityreference2, ) *Accountcreated`

NewAccountcreated instantiates a new Accountcreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountcreatedWithDefaults

`func NewAccountcreatedWithDefaults() *Accountcreated`

NewAccountcreatedWithDefaults instantiates a new Accountcreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *Accountcreated) GetEvent() AccountcreatedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *Accountcreated) GetEventOk() (*AccountcreatedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *Accountcreated) SetEvent(v AccountcreatedEvent)`

SetEvent sets Event field to given value.


### GetSource

`func (o *Accountcreated) GetSource() Accountsourcereference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountcreated) GetSourceOk() (*Accountsourcereference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountcreated) SetSource(v Accountsourcereference)`

SetSource sets Source field to given value.


### GetAccount

`func (o *Accountcreated) GetAccount() Accountv2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountcreated) GetAccountOk() (*Accountv2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountcreated) SetAccount(v Accountv2)`

SetAccount sets Account field to given value.


### GetIdentity

`func (o *Accountcreated) GetIdentity() Identityreference2`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountcreated) GetIdentityOk() (*Identityreference2, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountcreated) SetIdentity(v Identityreference2)`

SetIdentity sets Identity field to given value.



