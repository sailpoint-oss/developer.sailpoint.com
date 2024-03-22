---
id: event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EventAttributes'] 
slug: /tools/sdk/go/v3/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes']
---

# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** | The unique ID of the trigger | 
**Filter** |  Pointer to **string** | JSON path expression that will limit which events the trigger will fire on | [optional] 

## Methods

### NewEventAttributes

`func NewEventAttributes(id string, ) *EventAttributes`

NewEventAttributes instantiates a new EventAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventAttributesWithDefaults

`func NewEventAttributesWithDefaults() *EventAttributes`

NewEventAttributesWithDefaults instantiates a new EventAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EventAttributes) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EventAttributes) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EventAttributes) SetId(v string)`

SetId sets Id field to given value.


### GetFilter

`func (o *EventAttributes) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *EventAttributes) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *EventAttributes) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *EventAttributes) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


[[Back to top]](#) 


