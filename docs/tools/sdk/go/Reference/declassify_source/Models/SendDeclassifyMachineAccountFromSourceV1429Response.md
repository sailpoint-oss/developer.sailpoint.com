---
id: v1-send-declassify-machine-account-from-source-v1429-response
title: SendDeclassifyMachineAccountFromSourceV1429Response
pagination_label: SendDeclassifyMachineAccountFromSourceV1429Response
sidebar_label: SendDeclassifyMachineAccountFromSourceV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendDeclassifyMachineAccountFromSourceV1429Response', 'V1SendDeclassifyMachineAccountFromSourceV1429Response'] 
slug: /tools/sdk/go/declassifysource/models/send-declassify-machine-account-from-source-v1429-response
tags: ['SDK', 'Software Development Kit', 'SendDeclassifyMachineAccountFromSourceV1429Response', 'V1SendDeclassifyMachineAccountFromSourceV1429Response']
---

# SendDeclassifyMachineAccountFromSourceV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewSendDeclassifyMachineAccountFromSourceV1429Response

`func NewSendDeclassifyMachineAccountFromSourceV1429Response() *SendDeclassifyMachineAccountFromSourceV1429Response`

NewSendDeclassifyMachineAccountFromSourceV1429Response instantiates a new SendDeclassifyMachineAccountFromSourceV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendDeclassifyMachineAccountFromSourceV1429ResponseWithDefaults

`func NewSendDeclassifyMachineAccountFromSourceV1429ResponseWithDefaults() *SendDeclassifyMachineAccountFromSourceV1429Response`

NewSendDeclassifyMachineAccountFromSourceV1429ResponseWithDefaults instantiates a new SendDeclassifyMachineAccountFromSourceV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SendDeclassifyMachineAccountFromSourceV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SendDeclassifyMachineAccountFromSourceV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SendDeclassifyMachineAccountFromSourceV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SendDeclassifyMachineAccountFromSourceV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *SendDeclassifyMachineAccountFromSourceV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *SendDeclassifyMachineAccountFromSourceV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

