---
id: v1-list-requestable-objects-v1401-response
title: ListRequestableObjectsV1401Response
pagination_label: ListRequestableObjectsV1401Response
sidebar_label: ListRequestableObjectsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListRequestableObjectsV1401Response', 'V1ListRequestableObjectsV1401Response'] 
slug: /tools/sdk/go/requestableobjects/models/list-requestable-objects-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListRequestableObjectsV1401Response', 'V1ListRequestableObjectsV1401Response']
---

# ListRequestableObjectsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListRequestableObjectsV1401Response

`func NewListRequestableObjectsV1401Response() *ListRequestableObjectsV1401Response`

NewListRequestableObjectsV1401Response instantiates a new ListRequestableObjectsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListRequestableObjectsV1401ResponseWithDefaults

`func NewListRequestableObjectsV1401ResponseWithDefaults() *ListRequestableObjectsV1401Response`

NewListRequestableObjectsV1401ResponseWithDefaults instantiates a new ListRequestableObjectsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListRequestableObjectsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListRequestableObjectsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListRequestableObjectsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListRequestableObjectsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListRequestableObjectsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListRequestableObjectsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

