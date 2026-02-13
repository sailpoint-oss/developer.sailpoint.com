---
id: v2025-account-created-event
title: AccountCreatedEvent
pagination_label: AccountCreatedEvent
sidebar_label: AccountCreatedEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountCreatedEvent', 'V2025AccountCreatedEvent'] 
slug: /tools/sdk/go/v2025/models/account-created-event
tags: ['SDK', 'Software Development Kit', 'AccountCreatedEvent', 'V2025AccountCreatedEvent']
---

# AccountCreatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of event. | 
**Cause** | **string** | The cause of the event. | 

## Methods

### NewAccountCreatedEvent

`func NewAccountCreatedEvent(type_ string, cause string, ) *AccountCreatedEvent`

NewAccountCreatedEvent instantiates a new AccountCreatedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCreatedEventWithDefaults

`func NewAccountCreatedEventWithDefaults() *AccountCreatedEvent`

NewAccountCreatedEventWithDefaults instantiates a new AccountCreatedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountCreatedEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountCreatedEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountCreatedEvent) SetType(v string)`

SetType sets Type field to given value.


### GetCause

`func (o *AccountCreatedEvent) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *AccountCreatedEvent) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *AccountCreatedEvent) SetCause(v string)`

SetCause sets Cause field to given value.



