---
id: v1-get-password-dictionary-v1429-response
title: GetPasswordDictionaryV1429Response
pagination_label: GetPasswordDictionaryV1429Response
sidebar_label: GetPasswordDictionaryV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPasswordDictionaryV1429Response', 'V1GetPasswordDictionaryV1429Response'] 
slug: /tools/sdk/go/passworddictionary/models/get-password-dictionary-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordDictionaryV1429Response', 'V1GetPasswordDictionaryV1429Response']
---

# GetPasswordDictionaryV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPasswordDictionaryV1429Response

`func NewGetPasswordDictionaryV1429Response() *GetPasswordDictionaryV1429Response`

NewGetPasswordDictionaryV1429Response instantiates a new GetPasswordDictionaryV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPasswordDictionaryV1429ResponseWithDefaults

`func NewGetPasswordDictionaryV1429ResponseWithDefaults() *GetPasswordDictionaryV1429Response`

NewGetPasswordDictionaryV1429ResponseWithDefaults instantiates a new GetPasswordDictionaryV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPasswordDictionaryV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPasswordDictionaryV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPasswordDictionaryV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPasswordDictionaryV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPasswordDictionaryV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPasswordDictionaryV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

