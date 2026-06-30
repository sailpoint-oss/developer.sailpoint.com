---
id: v1-list-sources-v1401-response
title: ListSourcesV1401Response
pagination_label: ListSourcesV1401Response
sidebar_label: ListSourcesV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListSourcesV1401Response', 'V1ListSourcesV1401Response'] 
slug: /tools/sdk/go/sources/models/list-sources-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListSourcesV1401Response', 'V1ListSourcesV1401Response']
---

# ListSourcesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListSourcesV1401Response

`func NewListSourcesV1401Response() *ListSourcesV1401Response`

NewListSourcesV1401Response instantiates a new ListSourcesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListSourcesV1401ResponseWithDefaults

`func NewListSourcesV1401ResponseWithDefaults() *ListSourcesV1401Response`

NewListSourcesV1401ResponseWithDefaults instantiates a new ListSourcesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListSourcesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListSourcesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListSourcesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListSourcesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListSourcesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListSourcesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

