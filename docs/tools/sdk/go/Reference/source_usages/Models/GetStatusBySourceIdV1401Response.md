---
id: v1-get-status-by-source-id-v1401-response
title: GetStatusBySourceIdV1401Response
pagination_label: GetStatusBySourceIdV1401Response
sidebar_label: GetStatusBySourceIdV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetStatusBySourceIdV1401Response', 'V1GetStatusBySourceIdV1401Response'] 
slug: /tools/sdk/go/sourceusages/models/get-status-by-source-id-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetStatusBySourceIdV1401Response', 'V1GetStatusBySourceIdV1401Response']
---

# GetStatusBySourceIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetStatusBySourceIdV1401Response

`func NewGetStatusBySourceIdV1401Response() *GetStatusBySourceIdV1401Response`

NewGetStatusBySourceIdV1401Response instantiates a new GetStatusBySourceIdV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetStatusBySourceIdV1401ResponseWithDefaults

`func NewGetStatusBySourceIdV1401ResponseWithDefaults() *GetStatusBySourceIdV1401Response`

NewGetStatusBySourceIdV1401ResponseWithDefaults instantiates a new GetStatusBySourceIdV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetStatusBySourceIdV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetStatusBySourceIdV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetStatusBySourceIdV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetStatusBySourceIdV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetStatusBySourceIdV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetStatusBySourceIdV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

