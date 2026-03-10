---
id: v2026-get-task-status429-response
title: GetTaskStatus429Response
pagination_label: GetTaskStatus429Response
sidebar_label: GetTaskStatus429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetTaskStatus429Response', 'V2026GetTaskStatus429Response'] 
slug: /tools/sdk/go/v2026/models/get-task-status429-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatus429Response', 'V2026GetTaskStatus429Response']
---

# GetTaskStatus429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **map[string]interface{}** | A message describing the error | [optional] 

## Methods

### NewGetTaskStatus429Response

`func NewGetTaskStatus429Response() *GetTaskStatus429Response`

NewGetTaskStatus429Response instantiates a new GetTaskStatus429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTaskStatus429ResponseWithDefaults

`func NewGetTaskStatus429ResponseWithDefaults() *GetTaskStatus429Response`

NewGetTaskStatus429ResponseWithDefaults instantiates a new GetTaskStatus429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetTaskStatus429Response) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetTaskStatus429Response) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetTaskStatus429Response) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetTaskStatus429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


