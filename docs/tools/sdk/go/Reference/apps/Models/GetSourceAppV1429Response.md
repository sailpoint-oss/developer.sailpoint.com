---
id: v1-get-source-app-v1429-response
title: GetSourceAppV1429Response
pagination_label: GetSourceAppV1429Response
sidebar_label: GetSourceAppV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetSourceAppV1429Response', 'V1GetSourceAppV1429Response'] 
slug: /tools/sdk/go/apps/models/get-source-app-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetSourceAppV1429Response', 'V1GetSourceAppV1429Response']
---

# GetSourceAppV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetSourceAppV1429Response

`func NewGetSourceAppV1429Response() *GetSourceAppV1429Response`

NewGetSourceAppV1429Response instantiates a new GetSourceAppV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSourceAppV1429ResponseWithDefaults

`func NewGetSourceAppV1429ResponseWithDefaults() *GetSourceAppV1429Response`

NewGetSourceAppV1429ResponseWithDefaults instantiates a new GetSourceAppV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetSourceAppV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetSourceAppV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetSourceAppV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetSourceAppV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetSourceAppV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetSourceAppV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

