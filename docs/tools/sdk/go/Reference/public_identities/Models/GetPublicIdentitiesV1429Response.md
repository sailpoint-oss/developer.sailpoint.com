---
id: v1-get-public-identities-v1429-response
title: GetPublicIdentitiesV1429Response
pagination_label: GetPublicIdentitiesV1429Response
sidebar_label: GetPublicIdentitiesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPublicIdentitiesV1429Response', 'V1GetPublicIdentitiesV1429Response'] 
slug: /tools/sdk/go/publicidentities/models/get-public-identities-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPublicIdentitiesV1429Response', 'V1GetPublicIdentitiesV1429Response']
---

# GetPublicIdentitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPublicIdentitiesV1429Response

`func NewGetPublicIdentitiesV1429Response() *GetPublicIdentitiesV1429Response`

NewGetPublicIdentitiesV1429Response instantiates a new GetPublicIdentitiesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPublicIdentitiesV1429ResponseWithDefaults

`func NewGetPublicIdentitiesV1429ResponseWithDefaults() *GetPublicIdentitiesV1429Response`

NewGetPublicIdentitiesV1429ResponseWithDefaults instantiates a new GetPublicIdentitiesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPublicIdentitiesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPublicIdentitiesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPublicIdentitiesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPublicIdentitiesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPublicIdentitiesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPublicIdentitiesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

