---
id: v2025-account-deleted
title: AccountDeleted
pagination_label: AccountDeleted
sidebar_label: AccountDeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountDeleted', 'V2025AccountDeleted'] 
slug: /tools/sdk/go/v2025/models/account-deleted
tags: ['SDK', 'Software Development Kit', 'AccountDeleted', 'V2025AccountDeleted']
---

# AccountDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**AccountDeletedEvent**](account-deleted-event) |  | 
**Source** | [**AccountSourceReference**](account-source-reference) |  | 
**Account** | [**AccountV2**](account-v2) |  | 
**Identity** | [**IdentityReference1**](identity-reference1) |  | 

## Methods

### NewAccountDeleted

`func NewAccountDeleted(event AccountDeletedEvent, source AccountSourceReference, account AccountV2, identity IdentityReference1, ) *AccountDeleted`

NewAccountDeleted instantiates a new AccountDeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountDeletedWithDefaults

`func NewAccountDeletedWithDefaults() *AccountDeleted`

NewAccountDeletedWithDefaults instantiates a new AccountDeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *AccountDeleted) GetEvent() AccountDeletedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *AccountDeleted) GetEventOk() (*AccountDeletedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *AccountDeleted) SetEvent(v AccountDeletedEvent)`

SetEvent sets Event field to given value.


### GetSource

`func (o *AccountDeleted) GetSource() AccountSourceReference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountDeleted) GetSourceOk() (*AccountSourceReference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountDeleted) SetSource(v AccountSourceReference)`

SetSource sets Source field to given value.


### GetAccount

`func (o *AccountDeleted) GetAccount() AccountV2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountDeleted) GetAccountOk() (*AccountV2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountDeleted) SetAccount(v AccountV2)`

SetAccount sets Account field to given value.


### GetIdentity

`func (o *AccountDeleted) GetIdentity() IdentityReference1`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountDeleted) GetIdentityOk() (*IdentityReference1, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountDeleted) SetIdentity(v IdentityReference1)`

SetIdentity sets Identity field to given value.



