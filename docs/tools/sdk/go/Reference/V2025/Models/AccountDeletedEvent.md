---
id: v2025-account-deleted-event
title: AccountDeletedEvent
pagination_label: AccountDeletedEvent
sidebar_label: AccountDeletedEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountDeletedEvent', 'V2025AccountDeletedEvent'] 
slug: /tools/sdk/go/v2025/models/account-deleted-event
tags: ['SDK', 'Software Development Kit', 'AccountDeletedEvent', 'V2025AccountDeletedEvent']
---

# AccountDeletedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of event. | 
**Cause** | **string** | The cause of the event. | 

## Methods

### NewAccountDeletedEvent

`func NewAccountDeletedEvent(type_ string, cause string, ) *AccountDeletedEvent`

NewAccountDeletedEvent instantiates a new AccountDeletedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountDeletedEventWithDefaults

`func NewAccountDeletedEventWithDefaults() *AccountDeletedEvent`

NewAccountDeletedEventWithDefaults instantiates a new AccountDeletedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountDeletedEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountDeletedEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountDeletedEvent) SetType(v string)`

SetType sets Type field to given value.


### GetCause

`func (o *AccountDeletedEvent) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *AccountDeletedEvent) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *AccountDeletedEvent) SetCause(v string)`

SetCause sets Cause field to given value.



