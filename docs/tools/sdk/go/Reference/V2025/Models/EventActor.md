---
id: v2025-event-actor
title: EventActor
pagination_label: EventActor
sidebar_label: EventActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EventActor', 'V2025EventActor'] 
slug: /tools/sdk/go/v2025/models/event-actor
tags: ['SDK', 'Software Development Kit', 'EventActor', 'V2025EventActor']
---

# EventActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the actor that generated the event. | [optional] 

## Methods

### NewEventActor

`func NewEventActor() *EventActor`

NewEventActor instantiates a new EventActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventActorWithDefaults

`func NewEventActorWithDefaults() *EventActor`

NewEventActorWithDefaults instantiates a new EventActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EventActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EventActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EventActor) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EventActor) HasName() bool`

HasName returns a boolean if a field has been set.


