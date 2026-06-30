---
id: v1-list-tags-v1401-response
title: ListTagsV1401Response
pagination_label: ListTagsV1401Response
sidebar_label: ListTagsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListTagsV1401Response', 'V1ListTagsV1401Response'] 
slug: /tools/sdk/go/tags/models/list-tags-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListTagsV1401Response', 'V1ListTagsV1401Response']
---

# ListTagsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListTagsV1401Response

`func NewListTagsV1401Response() *ListTagsV1401Response`

NewListTagsV1401Response instantiates a new ListTagsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListTagsV1401ResponseWithDefaults

`func NewListTagsV1401ResponseWithDefaults() *ListTagsV1401Response`

NewListTagsV1401ResponseWithDefaults instantiates a new ListTagsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListTagsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListTagsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListTagsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListTagsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListTagsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListTagsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

