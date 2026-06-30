---
id: v1-get-auth-user-v1401-response
title: GetAuthUserV1401Response
pagination_label: GetAuthUserV1401Response
sidebar_label: GetAuthUserV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAuthUserV1401Response', 'V1GetAuthUserV1401Response'] 
slug: /tools/sdk/go/authusers/models/get-auth-user-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAuthUserV1401Response', 'V1GetAuthUserV1401Response']
---

# GetAuthUserV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAuthUserV1401Response

`func NewGetAuthUserV1401Response() *GetAuthUserV1401Response`

NewGetAuthUserV1401Response instantiates a new GetAuthUserV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAuthUserV1401ResponseWithDefaults

`func NewGetAuthUserV1401ResponseWithDefaults() *GetAuthUserV1401Response`

NewGetAuthUserV1401ResponseWithDefaults instantiates a new GetAuthUserV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAuthUserV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAuthUserV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAuthUserV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAuthUserV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAuthUserV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAuthUserV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

