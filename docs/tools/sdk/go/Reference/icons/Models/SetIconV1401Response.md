---
id: v1-set-icon-v1401-response
title: SetIconV1401Response
pagination_label: SetIconV1401Response
sidebar_label: SetIconV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetIconV1401Response', 'V1SetIconV1401Response'] 
slug: /tools/sdk/go/icons/models/set-icon-v1401-response
tags: ['SDK', 'Software Development Kit', 'SetIconV1401Response', 'V1SetIconV1401Response']
---

# SetIconV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewSetIconV1401Response

`func NewSetIconV1401Response() *SetIconV1401Response`

NewSetIconV1401Response instantiates a new SetIconV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetIconV1401ResponseWithDefaults

`func NewSetIconV1401ResponseWithDefaults() *SetIconV1401Response`

NewSetIconV1401ResponseWithDefaults instantiates a new SetIconV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *SetIconV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *SetIconV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *SetIconV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *SetIconV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *SetIconV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *SetIconV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

