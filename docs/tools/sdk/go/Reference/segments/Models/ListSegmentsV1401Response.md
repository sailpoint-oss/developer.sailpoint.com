---
id: v1-list-segments-v1401-response
title: ListSegmentsV1401Response
pagination_label: ListSegmentsV1401Response
sidebar_label: ListSegmentsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListSegmentsV1401Response', 'V1ListSegmentsV1401Response'] 
slug: /tools/sdk/go/segments/models/list-segments-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListSegmentsV1401Response', 'V1ListSegmentsV1401Response']
---

# ListSegmentsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListSegmentsV1401Response

`func NewListSegmentsV1401Response() *ListSegmentsV1401Response`

NewListSegmentsV1401Response instantiates a new ListSegmentsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListSegmentsV1401ResponseWithDefaults

`func NewListSegmentsV1401ResponseWithDefaults() *ListSegmentsV1401Response`

NewListSegmentsV1401ResponseWithDefaults instantiates a new ListSegmentsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListSegmentsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListSegmentsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListSegmentsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListSegmentsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListSegmentsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListSegmentsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

