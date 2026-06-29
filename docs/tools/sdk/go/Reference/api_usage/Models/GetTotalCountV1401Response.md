---
id: v1-get-total-count-v1401-response
title: GetTotalCountV1401Response
pagination_label: GetTotalCountV1401Response
sidebar_label: GetTotalCountV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetTotalCountV1401Response', 'V1GetTotalCountV1401Response'] 
slug: /tools/sdk/go/apiusage/models/get-total-count-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTotalCountV1401Response', 'V1GetTotalCountV1401Response']
---

# GetTotalCountV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetTotalCountV1401Response

`func NewGetTotalCountV1401Response() *GetTotalCountV1401Response`

NewGetTotalCountV1401Response instantiates a new GetTotalCountV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTotalCountV1401ResponseWithDefaults

`func NewGetTotalCountV1401ResponseWithDefaults() *GetTotalCountV1401Response`

NewGetTotalCountV1401ResponseWithDefaults instantiates a new GetTotalCountV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetTotalCountV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetTotalCountV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetTotalCountV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetTotalCountV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetTotalCountV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetTotalCountV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

