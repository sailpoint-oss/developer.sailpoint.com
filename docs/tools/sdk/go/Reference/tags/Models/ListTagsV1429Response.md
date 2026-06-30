---
id: v1-list-tags-v1429-response
title: ListTagsV1429Response
pagination_label: ListTagsV1429Response
sidebar_label: ListTagsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListTagsV1429Response', 'V1ListTagsV1429Response'] 
slug: /tools/sdk/go/tags/models/list-tags-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListTagsV1429Response', 'V1ListTagsV1429Response']
---

# ListTagsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListTagsV1429Response

`func NewListTagsV1429Response() *ListTagsV1429Response`

NewListTagsV1429Response instantiates a new ListTagsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListTagsV1429ResponseWithDefaults

`func NewListTagsV1429ResponseWithDefaults() *ListTagsV1429Response`

NewListTagsV1429ResponseWithDefaults instantiates a new ListTagsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListTagsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListTagsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListTagsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListTagsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListTagsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListTagsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

