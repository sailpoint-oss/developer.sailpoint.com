---
id: v1-get-access-request-config-v1401-response
title: GetAccessRequestConfigV1401Response
pagination_label: GetAccessRequestConfigV1401Response
sidebar_label: GetAccessRequestConfigV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccessRequestConfigV1401Response', 'V1GetAccessRequestConfigV1401Response'] 
slug: /tools/sdk/go/accessrequests/models/get-access-request-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestConfigV1401Response', 'V1GetAccessRequestConfigV1401Response']
---

# GetAccessRequestConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccessRequestConfigV1401Response

`func NewGetAccessRequestConfigV1401Response() *GetAccessRequestConfigV1401Response`

NewGetAccessRequestConfigV1401Response instantiates a new GetAccessRequestConfigV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccessRequestConfigV1401ResponseWithDefaults

`func NewGetAccessRequestConfigV1401ResponseWithDefaults() *GetAccessRequestConfigV1401Response`

NewGetAccessRequestConfigV1401ResponseWithDefaults instantiates a new GetAccessRequestConfigV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAccessRequestConfigV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAccessRequestConfigV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAccessRequestConfigV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAccessRequestConfigV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAccessRequestConfigV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAccessRequestConfigV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

