---
id: v2025-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountStatusChanged', 'V2025AccountStatusChanged'] 
slug: /tools/sdk/go/v2025/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged', 'V2025AccountStatusChanged']
---

# AccountStatusChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**Account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | 
**StatusChange** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | 

## Methods

### NewAccountStatusChanged

`func NewAccountStatusChanged(account AccountStatusChangedAccount, statusChange AccountStatusChangedStatusChange, ) *AccountStatusChanged`

NewAccountStatusChanged instantiates a new AccountStatusChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountStatusChangedWithDefaults

`func NewAccountStatusChangedWithDefaults() *AccountStatusChanged`

NewAccountStatusChangedWithDefaults instantiates a new AccountStatusChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *AccountStatusChanged) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccountStatusChanged) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccountStatusChanged) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccountStatusChanged) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetIdentityId

`func (o *AccountStatusChanged) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccountStatusChanged) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccountStatusChanged) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccountStatusChanged) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetDateTime

`func (o *AccountStatusChanged) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *AccountStatusChanged) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *AccountStatusChanged) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *AccountStatusChanged) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetAccount

`func (o *AccountStatusChanged) GetAccount() AccountStatusChangedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountStatusChanged) GetAccountOk() (*AccountStatusChangedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountStatusChanged) SetAccount(v AccountStatusChangedAccount)`

SetAccount sets Account field to given value.


### GetStatusChange

`func (o *AccountStatusChanged) GetStatusChange() AccountStatusChangedStatusChange`

GetStatusChange returns the StatusChange field if non-nil, zero value otherwise.

### GetStatusChangeOk

`func (o *AccountStatusChanged) GetStatusChangeOk() (*AccountStatusChangedStatusChange, bool)`

GetStatusChangeOk returns a tuple with the StatusChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusChange

`func (o *AccountStatusChanged) SetStatusChange(v AccountStatusChangedStatusChange)`

SetStatusChange sets StatusChange field to given value.



