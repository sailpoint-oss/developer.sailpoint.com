---
id: v1-get-launchers-v1401-response
title: GetLaunchersV1401Response
pagination_label: GetLaunchersV1401Response
sidebar_label: GetLaunchersV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetLaunchersV1401Response', 'V1GetLaunchersV1401Response'] 
slug: /tools/sdk/go/launchers/models/get-launchers-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchersV1401Response', 'V1GetLaunchersV1401Response']
---

# GetLaunchersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetLaunchersV1401Response

`func NewGetLaunchersV1401Response() *GetLaunchersV1401Response`

NewGetLaunchersV1401Response instantiates a new GetLaunchersV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetLaunchersV1401ResponseWithDefaults

`func NewGetLaunchersV1401ResponseWithDefaults() *GetLaunchersV1401Response`

NewGetLaunchersV1401ResponseWithDefaults instantiates a new GetLaunchersV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetLaunchersV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetLaunchersV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetLaunchersV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetLaunchersV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetLaunchersV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetLaunchersV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

