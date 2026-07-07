---
id: v1-send-classify-machine-account-v1429-response
title: SendClassifyMachineAccountV1429Response
pagination_label: SendClassifyMachineAccountV1429Response
sidebar_label: SendClassifyMachineAccountV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendClassifyMachineAccountV1429Response', 'V1SendClassifyMachineAccountV1429Response'] 
slug: /tools/sdk/go/machineaccountclassify/models/send-classify-machine-account-v1429-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountV1429Response', 'V1SendClassifyMachineAccountV1429Response']
---

# SendClassifyMachineAccountV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewSendClassifyMachineAccountV1429Response

`func NewSendClassifyMachineAccountV1429Response() *SendClassifyMachineAccountV1429Response`

NewSendClassifyMachineAccountV1429Response instantiates a new SendClassifyMachineAccountV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendClassifyMachineAccountV1429ResponseWithDefaults

`func NewSendClassifyMachineAccountV1429ResponseWithDefaults() *SendClassifyMachineAccountV1429Response`

NewSendClassifyMachineAccountV1429ResponseWithDefaults instantiates a new SendClassifyMachineAccountV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SendClassifyMachineAccountV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SendClassifyMachineAccountV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SendClassifyMachineAccountV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SendClassifyMachineAccountV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *SendClassifyMachineAccountV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *SendClassifyMachineAccountV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

