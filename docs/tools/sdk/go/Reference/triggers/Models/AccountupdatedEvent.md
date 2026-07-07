---
id: v1-accountupdated-event
title: AccountupdatedEvent
pagination_label: AccountupdatedEvent
sidebar_label: AccountupdatedEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountupdatedEvent', 'V1AccountupdatedEvent'] 
slug: /tools/sdk/go/triggers/models/accountupdated-event
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEvent', 'V1AccountupdatedEvent']
---

# AccountupdatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of event. | 
**Cause** | **string** | The cause of the event. | 

## Methods

### NewAccountupdatedEvent

`func NewAccountupdatedEvent(type_ string, cause string, ) *AccountupdatedEvent`

NewAccountupdatedEvent instantiates a new AccountupdatedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountupdatedEventWithDefaults

`func NewAccountupdatedEventWithDefaults() *AccountupdatedEvent`

NewAccountupdatedEventWithDefaults instantiates a new AccountupdatedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountupdatedEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountupdatedEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountupdatedEvent) SetType(v string)`

SetType sets Type field to given value.


### GetCause

`func (o *AccountupdatedEvent) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *AccountupdatedEvent) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *AccountupdatedEvent) SetCause(v string)`

SetCause sets Cause field to given value.



