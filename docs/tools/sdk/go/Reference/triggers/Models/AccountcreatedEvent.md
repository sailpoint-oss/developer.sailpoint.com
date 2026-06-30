---
id: v1-accountcreated-event
title: AccountcreatedEvent
pagination_label: AccountcreatedEvent
sidebar_label: AccountcreatedEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountcreatedEvent', 'V1AccountcreatedEvent'] 
slug: /tools/sdk/go/triggers/models/accountcreated-event
tags: ['SDK', 'Software Development Kit', 'AccountcreatedEvent', 'V1AccountcreatedEvent']
---

# AccountcreatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of event. | 
**Cause** | **string** | The cause of the event. | 

## Methods

### NewAccountcreatedEvent

`func NewAccountcreatedEvent(type_ string, cause string, ) *AccountcreatedEvent`

NewAccountcreatedEvent instantiates a new AccountcreatedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountcreatedEventWithDefaults

`func NewAccountcreatedEventWithDefaults() *AccountcreatedEvent`

NewAccountcreatedEventWithDefaults instantiates a new AccountcreatedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountcreatedEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountcreatedEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountcreatedEvent) SetType(v string)`

SetType sets Type field to given value.


### GetCause

`func (o *AccountcreatedEvent) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *AccountcreatedEvent) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *AccountcreatedEvent) SetCause(v string)`

SetCause sets Cause field to given value.



