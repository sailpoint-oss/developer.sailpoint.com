---
id: v1-get-source-app-v1401-response
title: GetSourceAppV1401Response
pagination_label: GetSourceAppV1401Response
sidebar_label: GetSourceAppV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetSourceAppV1401Response', 'V1GetSourceAppV1401Response'] 
slug: /tools/sdk/go/apps/models/get-source-app-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetSourceAppV1401Response', 'V1GetSourceAppV1401Response']
---

# GetSourceAppV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetSourceAppV1401Response

`func NewGetSourceAppV1401Response() *GetSourceAppV1401Response`

NewGetSourceAppV1401Response instantiates a new GetSourceAppV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSourceAppV1401ResponseWithDefaults

`func NewGetSourceAppV1401ResponseWithDefaults() *GetSourceAppV1401Response`

NewGetSourceAppV1401ResponseWithDefaults instantiates a new GetSourceAppV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetSourceAppV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetSourceAppV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetSourceAppV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetSourceAppV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetSourceAppV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetSourceAppV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

