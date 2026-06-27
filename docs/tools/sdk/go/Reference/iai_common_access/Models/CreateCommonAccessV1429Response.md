---
id: v1-create-common-access-v1429-response
title: CreateCommonAccessV1429Response
pagination_label: CreateCommonAccessV1429Response
sidebar_label: CreateCommonAccessV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateCommonAccessV1429Response', 'V1CreateCommonAccessV1429Response'] 
slug: /tools/sdk/go/iaicommonaccess/models/create-common-access-v1429-response
tags: ['SDK', 'Software Development Kit', 'CreateCommonAccessV1429Response', 'V1CreateCommonAccessV1429Response']
---

# CreateCommonAccessV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewCreateCommonAccessV1429Response

`func NewCreateCommonAccessV1429Response() *CreateCommonAccessV1429Response`

NewCreateCommonAccessV1429Response instantiates a new CreateCommonAccessV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCommonAccessV1429ResponseWithDefaults

`func NewCreateCommonAccessV1429ResponseWithDefaults() *CreateCommonAccessV1429Response`

NewCreateCommonAccessV1429ResponseWithDefaults instantiates a new CreateCommonAccessV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *CreateCommonAccessV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CreateCommonAccessV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CreateCommonAccessV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CreateCommonAccessV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *CreateCommonAccessV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *CreateCommonAccessV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

