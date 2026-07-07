---
id: v1-get-machine-classification-config-v1429-response
title: GetMachineClassificationConfigV1429Response
pagination_label: GetMachineClassificationConfigV1429Response
sidebar_label: GetMachineClassificationConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetMachineClassificationConfigV1429Response', 'V1GetMachineClassificationConfigV1429Response'] 
slug: /tools/sdk/go/machineclassificationconfig/models/get-machine-classification-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetMachineClassificationConfigV1429Response', 'V1GetMachineClassificationConfigV1429Response']
---

# GetMachineClassificationConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetMachineClassificationConfigV1429Response

`func NewGetMachineClassificationConfigV1429Response() *GetMachineClassificationConfigV1429Response`

NewGetMachineClassificationConfigV1429Response instantiates a new GetMachineClassificationConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMachineClassificationConfigV1429ResponseWithDefaults

`func NewGetMachineClassificationConfigV1429ResponseWithDefaults() *GetMachineClassificationConfigV1429Response`

NewGetMachineClassificationConfigV1429ResponseWithDefaults instantiates a new GetMachineClassificationConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetMachineClassificationConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetMachineClassificationConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetMachineClassificationConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetMachineClassificationConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetMachineClassificationConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetMachineClassificationConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

