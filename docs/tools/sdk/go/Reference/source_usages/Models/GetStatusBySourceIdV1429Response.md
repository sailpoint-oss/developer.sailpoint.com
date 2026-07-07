---
id: v1-get-status-by-source-id-v1429-response
title: GetStatusBySourceIdV1429Response
pagination_label: GetStatusBySourceIdV1429Response
sidebar_label: GetStatusBySourceIdV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetStatusBySourceIdV1429Response', 'V1GetStatusBySourceIdV1429Response'] 
slug: /tools/sdk/go/sourceusages/models/get-status-by-source-id-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetStatusBySourceIdV1429Response', 'V1GetStatusBySourceIdV1429Response']
---

# GetStatusBySourceIdV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetStatusBySourceIdV1429Response

`func NewGetStatusBySourceIdV1429Response() *GetStatusBySourceIdV1429Response`

NewGetStatusBySourceIdV1429Response instantiates a new GetStatusBySourceIdV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetStatusBySourceIdV1429ResponseWithDefaults

`func NewGetStatusBySourceIdV1429ResponseWithDefaults() *GetStatusBySourceIdV1429Response`

NewGetStatusBySourceIdV1429ResponseWithDefaults instantiates a new GetStatusBySourceIdV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetStatusBySourceIdV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetStatusBySourceIdV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetStatusBySourceIdV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetStatusBySourceIdV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetStatusBySourceIdV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetStatusBySourceIdV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

