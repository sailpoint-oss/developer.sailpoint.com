---
id: v1-search-post-v1401-response
title: SearchPostV1401Response
pagination_label: SearchPostV1401Response
sidebar_label: SearchPostV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchPostV1401Response', 'V1SearchPostV1401Response'] 
slug: /tools/sdk/go/search/models/search-post-v1401-response
tags: ['SDK', 'Software Development Kit', 'SearchPostV1401Response', 'V1SearchPostV1401Response']
---

# SearchPostV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewSearchPostV1401Response

`func NewSearchPostV1401Response() *SearchPostV1401Response`

NewSearchPostV1401Response instantiates a new SearchPostV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchPostV1401ResponseWithDefaults

`func NewSearchPostV1401ResponseWithDefaults() *SearchPostV1401Response`

NewSearchPostV1401ResponseWithDefaults instantiates a new SearchPostV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *SearchPostV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *SearchPostV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *SearchPostV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *SearchPostV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *SearchPostV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *SearchPostV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

