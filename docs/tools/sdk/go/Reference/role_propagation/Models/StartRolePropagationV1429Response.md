---
id: v1-start-role-propagation-v1429-response
title: StartRolePropagationV1429Response
pagination_label: StartRolePropagationV1429Response
sidebar_label: StartRolePropagationV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartRolePropagationV1429Response', 'V1StartRolePropagationV1429Response'] 
slug: /tools/sdk/go/rolepropagation/models/start-role-propagation-v1429-response
tags: ['SDK', 'Software Development Kit', 'StartRolePropagationV1429Response', 'V1StartRolePropagationV1429Response']
---

# StartRolePropagationV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewStartRolePropagationV1429Response

`func NewStartRolePropagationV1429Response() *StartRolePropagationV1429Response`

NewStartRolePropagationV1429Response instantiates a new StartRolePropagationV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartRolePropagationV1429ResponseWithDefaults

`func NewStartRolePropagationV1429ResponseWithDefaults() *StartRolePropagationV1429Response`

NewStartRolePropagationV1429ResponseWithDefaults instantiates a new StartRolePropagationV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *StartRolePropagationV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StartRolePropagationV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StartRolePropagationV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *StartRolePropagationV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *StartRolePropagationV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *StartRolePropagationV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

