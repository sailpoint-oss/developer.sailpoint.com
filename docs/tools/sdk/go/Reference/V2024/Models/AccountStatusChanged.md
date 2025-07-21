---
id: v2024-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountStatusChanged', 'V2024AccountStatusChanged'] 
slug: /tools/sdk/go/v2024/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged', 'V2024AccountStatusChanged']
---

# AccountStatusChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**Dt** | Pointer to **string** | the date of event | [optional] 
**Account** | Pointer to [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**StatusChange** | Pointer to [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 

## Methods

### NewAccountStatusChanged

`func NewAccountStatusChanged() *AccountStatusChanged`

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

### GetDt

`func (o *AccountStatusChanged) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *AccountStatusChanged) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *AccountStatusChanged) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *AccountStatusChanged) HasDt() bool`

HasDt returns a boolean if a field has been set.

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

### HasAccount

`func (o *AccountStatusChanged) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

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

### HasStatusChange

`func (o *AccountStatusChanged) HasStatusChange() bool`

HasStatusChange returns a boolean if a field has been set.


