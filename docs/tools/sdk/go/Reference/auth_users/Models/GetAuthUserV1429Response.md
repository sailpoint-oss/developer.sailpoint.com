---
id: v1-get-auth-user-v1429-response
title: GetAuthUserV1429Response
pagination_label: GetAuthUserV1429Response
sidebar_label: GetAuthUserV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAuthUserV1429Response', 'V1GetAuthUserV1429Response'] 
slug: /tools/sdk/go/authusers/models/get-auth-user-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAuthUserV1429Response', 'V1GetAuthUserV1429Response']
---

# GetAuthUserV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAuthUserV1429Response

`func NewGetAuthUserV1429Response() *GetAuthUserV1429Response`

NewGetAuthUserV1429Response instantiates a new GetAuthUserV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAuthUserV1429ResponseWithDefaults

`func NewGetAuthUserV1429ResponseWithDefaults() *GetAuthUserV1429Response`

NewGetAuthUserV1429ResponseWithDefaults instantiates a new GetAuthUserV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAuthUserV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAuthUserV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAuthUserV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAuthUserV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAuthUserV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAuthUserV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

