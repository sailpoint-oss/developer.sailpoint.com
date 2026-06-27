---
id: v1-get-jit-activation-config-v1429-response
title: GetJitActivationConfigV1429Response
pagination_label: GetJitActivationConfigV1429Response
sidebar_label: GetJitActivationConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetJitActivationConfigV1429Response', 'V1GetJitActivationConfigV1429Response'] 
slug: /tools/sdk/go/jitaccess/models/get-jit-activation-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetJitActivationConfigV1429Response', 'V1GetJitActivationConfigV1429Response']
---

# GetJitActivationConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetJitActivationConfigV1429Response

`func NewGetJitActivationConfigV1429Response() *GetJitActivationConfigV1429Response`

NewGetJitActivationConfigV1429Response instantiates a new GetJitActivationConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetJitActivationConfigV1429ResponseWithDefaults

`func NewGetJitActivationConfigV1429ResponseWithDefaults() *GetJitActivationConfigV1429Response`

NewGetJitActivationConfigV1429ResponseWithDefaults instantiates a new GetJitActivationConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetJitActivationConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetJitActivationConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetJitActivationConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetJitActivationConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetJitActivationConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetJitActivationConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

