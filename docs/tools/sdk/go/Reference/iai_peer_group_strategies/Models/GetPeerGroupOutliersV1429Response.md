---
id: v1-get-peer-group-outliers-v1429-response
title: GetPeerGroupOutliersV1429Response
pagination_label: GetPeerGroupOutliersV1429Response
sidebar_label: GetPeerGroupOutliersV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPeerGroupOutliersV1429Response', 'V1GetPeerGroupOutliersV1429Response'] 
slug: /tools/sdk/go/iaipeergroupstrategies/models/get-peer-group-outliers-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPeerGroupOutliersV1429Response', 'V1GetPeerGroupOutliersV1429Response']
---

# GetPeerGroupOutliersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPeerGroupOutliersV1429Response

`func NewGetPeerGroupOutliersV1429Response() *GetPeerGroupOutliersV1429Response`

NewGetPeerGroupOutliersV1429Response instantiates a new GetPeerGroupOutliersV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPeerGroupOutliersV1429ResponseWithDefaults

`func NewGetPeerGroupOutliersV1429ResponseWithDefaults() *GetPeerGroupOutliersV1429Response`

NewGetPeerGroupOutliersV1429ResponseWithDefaults instantiates a new GetPeerGroupOutliersV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPeerGroupOutliersV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPeerGroupOutliersV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPeerGroupOutliersV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPeerGroupOutliersV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPeerGroupOutliersV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPeerGroupOutliersV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

