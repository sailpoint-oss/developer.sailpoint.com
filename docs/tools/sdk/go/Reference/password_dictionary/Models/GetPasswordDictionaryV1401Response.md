---
id: v1-get-password-dictionary-v1401-response
title: GetPasswordDictionaryV1401Response
pagination_label: GetPasswordDictionaryV1401Response
sidebar_label: GetPasswordDictionaryV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPasswordDictionaryV1401Response', 'V1GetPasswordDictionaryV1401Response'] 
slug: /tools/sdk/go/passworddictionary/models/get-password-dictionary-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordDictionaryV1401Response', 'V1GetPasswordDictionaryV1401Response']
---

# GetPasswordDictionaryV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPasswordDictionaryV1401Response

`func NewGetPasswordDictionaryV1401Response() *GetPasswordDictionaryV1401Response`

NewGetPasswordDictionaryV1401Response instantiates a new GetPasswordDictionaryV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPasswordDictionaryV1401ResponseWithDefaults

`func NewGetPasswordDictionaryV1401ResponseWithDefaults() *GetPasswordDictionaryV1401Response`

NewGetPasswordDictionaryV1401ResponseWithDefaults instantiates a new GetPasswordDictionaryV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetPasswordDictionaryV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetPasswordDictionaryV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetPasswordDictionaryV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetPasswordDictionaryV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetPasswordDictionaryV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetPasswordDictionaryV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

