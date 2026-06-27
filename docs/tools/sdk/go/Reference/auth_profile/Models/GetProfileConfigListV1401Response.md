---
id: v1-get-profile-config-list-v1401-response
title: GetProfileConfigListV1401Response
pagination_label: GetProfileConfigListV1401Response
sidebar_label: GetProfileConfigListV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetProfileConfigListV1401Response', 'V1GetProfileConfigListV1401Response'] 
slug: /tools/sdk/go/authprofile/models/get-profile-config-list-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetProfileConfigListV1401Response', 'V1GetProfileConfigListV1401Response']
---

# GetProfileConfigListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetProfileConfigListV1401Response

`func NewGetProfileConfigListV1401Response() *GetProfileConfigListV1401Response`

NewGetProfileConfigListV1401Response instantiates a new GetProfileConfigListV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetProfileConfigListV1401ResponseWithDefaults

`func NewGetProfileConfigListV1401ResponseWithDefaults() *GetProfileConfigListV1401Response`

NewGetProfileConfigListV1401ResponseWithDefaults instantiates a new GetProfileConfigListV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetProfileConfigListV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetProfileConfigListV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetProfileConfigListV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetProfileConfigListV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetProfileConfigListV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetProfileConfigListV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

