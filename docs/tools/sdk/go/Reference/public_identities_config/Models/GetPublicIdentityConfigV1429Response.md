---
id: v1-get-public-identity-config-v1429-response
title: GetPublicIdentityConfigV1429Response
pagination_label: GetPublicIdentityConfigV1429Response
sidebar_label: GetPublicIdentityConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPublicIdentityConfigV1429Response', 'V1GetPublicIdentityConfigV1429Response'] 
slug: /tools/sdk/go/publicidentitiesconfig/models/get-public-identity-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPublicIdentityConfigV1429Response', 'V1GetPublicIdentityConfigV1429Response']
---

# GetPublicIdentityConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPublicIdentityConfigV1429Response

`func NewGetPublicIdentityConfigV1429Response() *GetPublicIdentityConfigV1429Response`

NewGetPublicIdentityConfigV1429Response instantiates a new GetPublicIdentityConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPublicIdentityConfigV1429ResponseWithDefaults

`func NewGetPublicIdentityConfigV1429ResponseWithDefaults() *GetPublicIdentityConfigV1429Response`

NewGetPublicIdentityConfigV1429ResponseWithDefaults instantiates a new GetPublicIdentityConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPublicIdentityConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPublicIdentityConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPublicIdentityConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPublicIdentityConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPublicIdentityConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPublicIdentityConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

