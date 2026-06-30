---
id: v1-list-sources-v1429-response
title: ListSourcesV1429Response
pagination_label: ListSourcesV1429Response
sidebar_label: ListSourcesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListSourcesV1429Response', 'V1ListSourcesV1429Response'] 
slug: /tools/sdk/go/sources/models/list-sources-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSourcesV1429Response', 'V1ListSourcesV1429Response']
---

# ListSourcesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListSourcesV1429Response

`func NewListSourcesV1429Response() *ListSourcesV1429Response`

NewListSourcesV1429Response instantiates a new ListSourcesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListSourcesV1429ResponseWithDefaults

`func NewListSourcesV1429ResponseWithDefaults() *ListSourcesV1429Response`

NewListSourcesV1429ResponseWithDefaults instantiates a new ListSourcesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListSourcesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListSourcesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListSourcesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListSourcesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListSourcesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListSourcesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

