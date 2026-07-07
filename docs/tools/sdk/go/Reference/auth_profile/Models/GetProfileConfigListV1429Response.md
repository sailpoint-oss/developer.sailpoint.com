---
id: v1-get-profile-config-list-v1429-response
title: GetProfileConfigListV1429Response
pagination_label: GetProfileConfigListV1429Response
sidebar_label: GetProfileConfigListV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetProfileConfigListV1429Response', 'V1GetProfileConfigListV1429Response'] 
slug: /tools/sdk/go/authprofile/models/get-profile-config-list-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetProfileConfigListV1429Response', 'V1GetProfileConfigListV1429Response']
---

# GetProfileConfigListV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetProfileConfigListV1429Response

`func NewGetProfileConfigListV1429Response() *GetProfileConfigListV1429Response`

NewGetProfileConfigListV1429Response instantiates a new GetProfileConfigListV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetProfileConfigListV1429ResponseWithDefaults

`func NewGetProfileConfigListV1429ResponseWithDefaults() *GetProfileConfigListV1429Response`

NewGetProfileConfigListV1429ResponseWithDefaults instantiates a new GetProfileConfigListV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetProfileConfigListV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetProfileConfigListV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetProfileConfigListV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetProfileConfigListV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetProfileConfigListV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetProfileConfigListV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

