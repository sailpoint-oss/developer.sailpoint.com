---
id: v1-accountdeleted-event
title: AccountdeletedEvent
pagination_label: AccountdeletedEvent
sidebar_label: AccountdeletedEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountdeletedEvent', 'V1AccountdeletedEvent'] 
slug: /tools/sdk/go/triggers/models/accountdeleted-event
tags: ['SDK', 'Software Development Kit', 'AccountdeletedEvent', 'V1AccountdeletedEvent']
---

# AccountdeletedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of event. | 
**Cause** | **string** | The cause of the event. | 

## Methods

### NewAccountdeletedEvent

`func NewAccountdeletedEvent(type_ string, cause string, ) *AccountdeletedEvent`

NewAccountdeletedEvent instantiates a new AccountdeletedEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountdeletedEventWithDefaults

`func NewAccountdeletedEventWithDefaults() *AccountdeletedEvent`

NewAccountdeletedEventWithDefaults instantiates a new AccountdeletedEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountdeletedEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountdeletedEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountdeletedEvent) SetType(v string)`

SetType sets Type field to given value.


### GetCause

`func (o *AccountdeletedEvent) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *AccountdeletedEvent) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *AccountdeletedEvent) SetCause(v string)`

SetCause sets Cause field to given value.



