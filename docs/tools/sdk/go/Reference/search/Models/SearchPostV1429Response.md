---
id: v1-search-post-v1429-response
title: SearchPostV1429Response
pagination_label: SearchPostV1429Response
sidebar_label: SearchPostV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchPostV1429Response', 'V1SearchPostV1429Response'] 
slug: /tools/sdk/go/search/models/search-post-v1429-response
tags: ['SDK', 'Software Development Kit', 'SearchPostV1429Response', 'V1SearchPostV1429Response']
---

# SearchPostV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewSearchPostV1429Response

`func NewSearchPostV1429Response() *SearchPostV1429Response`

NewSearchPostV1429Response instantiates a new SearchPostV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchPostV1429ResponseWithDefaults

`func NewSearchPostV1429ResponseWithDefaults() *SearchPostV1429Response`

NewSearchPostV1429ResponseWithDefaults instantiates a new SearchPostV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SearchPostV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SearchPostV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SearchPostV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SearchPostV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *SearchPostV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *SearchPostV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

