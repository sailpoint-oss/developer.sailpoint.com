---
id: v1-get-object-mappings-v1429-response
title: GetObjectMappingsV1429Response
pagination_label: GetObjectMappingsV1429Response
sidebar_label: GetObjectMappingsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetObjectMappingsV1429Response', 'V1GetObjectMappingsV1429Response'] 
slug: /tools/sdk/go/configurationhub/models/get-object-mappings-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetObjectMappingsV1429Response', 'V1GetObjectMappingsV1429Response']
---

# GetObjectMappingsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetObjectMappingsV1429Response

`func NewGetObjectMappingsV1429Response() *GetObjectMappingsV1429Response`

NewGetObjectMappingsV1429Response instantiates a new GetObjectMappingsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetObjectMappingsV1429ResponseWithDefaults

`func NewGetObjectMappingsV1429ResponseWithDefaults() *GetObjectMappingsV1429Response`

NewGetObjectMappingsV1429ResponseWithDefaults instantiates a new GetObjectMappingsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetObjectMappingsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetObjectMappingsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetObjectMappingsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetObjectMappingsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetObjectMappingsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetObjectMappingsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

