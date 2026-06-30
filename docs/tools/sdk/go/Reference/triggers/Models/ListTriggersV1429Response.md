---
id: v1-list-triggers-v1429-response
title: ListTriggersV1429Response
pagination_label: ListTriggersV1429Response
sidebar_label: ListTriggersV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListTriggersV1429Response', 'V1ListTriggersV1429Response'] 
slug: /tools/sdk/go/triggers/models/list-triggers-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListTriggersV1429Response', 'V1ListTriggersV1429Response']
---

# ListTriggersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListTriggersV1429Response

`func NewListTriggersV1429Response() *ListTriggersV1429Response`

NewListTriggersV1429Response instantiates a new ListTriggersV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListTriggersV1429ResponseWithDefaults

`func NewListTriggersV1429ResponseWithDefaults() *ListTriggersV1429Response`

NewListTriggersV1429ResponseWithDefaults instantiates a new ListTriggersV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListTriggersV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListTriggersV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListTriggersV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListTriggersV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListTriggersV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListTriggersV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

