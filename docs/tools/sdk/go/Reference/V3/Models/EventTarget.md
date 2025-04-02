---
id: event-target
title: EventTarget
pagination_label: EventTarget
sidebar_label: EventTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EventTarget', 'EventTarget'] 
slug: /tools/sdk/go/v3/models/event-target
tags: ['SDK', 'Software Development Kit', 'EventTarget', 'EventTarget']
---

# EventTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the target, or recipient, of the event. | [optional] 

## Methods

### NewEventTarget

`func NewEventTarget() *EventTarget`

NewEventTarget instantiates a new EventTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventTargetWithDefaults

`func NewEventTargetWithDefaults() *EventTarget`

NewEventTargetWithDefaults instantiates a new EventTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EventTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EventTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EventTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EventTarget) HasName() bool`

HasName returns a boolean if a field has been set.


