---
id: v1-get-task-status-v1429-response
title: GetTaskStatusV1429Response
pagination_label: GetTaskStatusV1429Response
sidebar_label: GetTaskStatusV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetTaskStatusV1429Response', 'V1GetTaskStatusV1429Response'] 
slug: /tools/sdk/go/taskmanagement/models/get-task-status-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatusV1429Response', 'V1GetTaskStatusV1429Response']
---

# GetTaskStatusV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetTaskStatusV1429Response

`func NewGetTaskStatusV1429Response() *GetTaskStatusV1429Response`

NewGetTaskStatusV1429Response instantiates a new GetTaskStatusV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTaskStatusV1429ResponseWithDefaults

`func NewGetTaskStatusV1429ResponseWithDefaults() *GetTaskStatusV1429Response`

NewGetTaskStatusV1429ResponseWithDefaults instantiates a new GetTaskStatusV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetTaskStatusV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetTaskStatusV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetTaskStatusV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetTaskStatusV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetTaskStatusV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetTaskStatusV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

