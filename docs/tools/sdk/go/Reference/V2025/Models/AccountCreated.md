---
id: v2025-account-created
title: AccountCreated
pagination_label: AccountCreated
sidebar_label: AccountCreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountCreated', 'V2025AccountCreated'] 
slug: /tools/sdk/go/v2025/models/account-created
tags: ['SDK', 'Software Development Kit', 'AccountCreated', 'V2025AccountCreated']
---

# AccountCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**AccountCreatedEvent**](account-created-event) |  | 
**Source** | [**AccountSourceReference**](account-source-reference) |  | 
**Account** | [**AccountV2**](account-v2) |  | 
**Identity** | [**IdentityReference1**](identity-reference1) |  | 

## Methods

### NewAccountCreated

`func NewAccountCreated(event AccountCreatedEvent, source AccountSourceReference, account AccountV2, identity IdentityReference1, ) *AccountCreated`

NewAccountCreated instantiates a new AccountCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCreatedWithDefaults

`func NewAccountCreatedWithDefaults() *AccountCreated`

NewAccountCreatedWithDefaults instantiates a new AccountCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *AccountCreated) GetEvent() AccountCreatedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *AccountCreated) GetEventOk() (*AccountCreatedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *AccountCreated) SetEvent(v AccountCreatedEvent)`

SetEvent sets Event field to given value.


### GetSource

`func (o *AccountCreated) GetSource() AccountSourceReference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountCreated) GetSourceOk() (*AccountSourceReference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountCreated) SetSource(v AccountSourceReference)`

SetSource sets Source field to given value.


### GetAccount

`func (o *AccountCreated) GetAccount() AccountV2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountCreated) GetAccountOk() (*AccountV2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountCreated) SetAccount(v AccountV2)`

SetAccount sets Account field to given value.


### GetIdentity

`func (o *AccountCreated) GetIdentity() IdentityReference1`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountCreated) GetIdentityOk() (*IdentityReference1, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountCreated) SetIdentity(v IdentityReference1)`

SetIdentity sets Identity field to given value.



