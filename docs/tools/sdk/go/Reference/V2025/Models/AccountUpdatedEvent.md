---
id: v2025-account-updated-event
title: AccountUpdatedEvent
pagination_label: AccountUpdatedEvent
sidebar_label: AccountUpdatedEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUpdatedEvent', 'V2025AccountUpdatedEvent'] 
slug: /tools/sdk/go/v2025/models/account-updated-event
tags: ['SDK', 'Software Development Kit', 'AccountUpdatedEvent', 'V2025AccountUpdatedEvent']
---

# AccountUpdatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of event. | 
**Cause** | **string** | The cause of the event. | 

## Methods

### NewAccountUpdatedEvent

`func NewAccountUpdatedEvent(type_ string, cause string, ) *AccountUpdatedEvent`

NewAccountUpdatedEvent instantiates a new AccountUpdatedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUpdatedEventWithDefaults

`func NewAccountUpdatedEventWithDefaults() *AccountUpdatedEvent`

NewAccountUpdatedEventWithDefaults instantiates a new AccountUpdatedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountUpdatedEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountUpdatedEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountUpdatedEvent) SetType(v string)`

SetType sets Type field to given value.


### GetCause

`func (o *AccountUpdatedEvent) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *AccountUpdatedEvent) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *AccountUpdatedEvent) SetCause(v string)`

SetCause sets Cause field to given value.



