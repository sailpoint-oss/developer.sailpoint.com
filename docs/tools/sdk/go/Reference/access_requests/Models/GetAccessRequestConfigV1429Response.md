---
id: v1-get-access-request-config-v1429-response
title: GetAccessRequestConfigV1429Response
pagination_label: GetAccessRequestConfigV1429Response
sidebar_label: GetAccessRequestConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccessRequestConfigV1429Response', 'V1GetAccessRequestConfigV1429Response'] 
slug: /tools/sdk/go/accessrequests/models/get-access-request-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestConfigV1429Response', 'V1GetAccessRequestConfigV1429Response']
---

# GetAccessRequestConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccessRequestConfigV1429Response

`func NewGetAccessRequestConfigV1429Response() *GetAccessRequestConfigV1429Response`

NewGetAccessRequestConfigV1429Response instantiates a new GetAccessRequestConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccessRequestConfigV1429ResponseWithDefaults

`func NewGetAccessRequestConfigV1429ResponseWithDefaults() *GetAccessRequestConfigV1429Response`

NewGetAccessRequestConfigV1429ResponseWithDefaults instantiates a new GetAccessRequestConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAccessRequestConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAccessRequestConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAccessRequestConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAccessRequestConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAccessRequestConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAccessRequestConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

