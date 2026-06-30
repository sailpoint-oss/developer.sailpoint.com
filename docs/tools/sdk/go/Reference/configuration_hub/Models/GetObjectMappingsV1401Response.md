---
id: v1-get-object-mappings-v1401-response
title: GetObjectMappingsV1401Response
pagination_label: GetObjectMappingsV1401Response
sidebar_label: GetObjectMappingsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetObjectMappingsV1401Response', 'V1GetObjectMappingsV1401Response'] 
slug: /tools/sdk/go/configurationhub/models/get-object-mappings-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetObjectMappingsV1401Response', 'V1GetObjectMappingsV1401Response']
---

# GetObjectMappingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetObjectMappingsV1401Response

`func NewGetObjectMappingsV1401Response() *GetObjectMappingsV1401Response`

NewGetObjectMappingsV1401Response instantiates a new GetObjectMappingsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetObjectMappingsV1401ResponseWithDefaults

`func NewGetObjectMappingsV1401ResponseWithDefaults() *GetObjectMappingsV1401Response`

NewGetObjectMappingsV1401ResponseWithDefaults instantiates a new GetObjectMappingsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetObjectMappingsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetObjectMappingsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetObjectMappingsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetObjectMappingsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetObjectMappingsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetObjectMappingsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

