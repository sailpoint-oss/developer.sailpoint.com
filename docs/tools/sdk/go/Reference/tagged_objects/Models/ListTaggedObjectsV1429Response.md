---
id: v1-list-tagged-objects-v1429-response
title: ListTaggedObjectsV1429Response
pagination_label: ListTaggedObjectsV1429Response
sidebar_label: ListTaggedObjectsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListTaggedObjectsV1429Response', 'V1ListTaggedObjectsV1429Response'] 
slug: /tools/sdk/go/taggedobjects/models/list-tagged-objects-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListTaggedObjectsV1429Response', 'V1ListTaggedObjectsV1429Response']
---

# ListTaggedObjectsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListTaggedObjectsV1429Response

`func NewListTaggedObjectsV1429Response() *ListTaggedObjectsV1429Response`

NewListTaggedObjectsV1429Response instantiates a new ListTaggedObjectsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListTaggedObjectsV1429ResponseWithDefaults

`func NewListTaggedObjectsV1429ResponseWithDefaults() *ListTaggedObjectsV1429Response`

NewListTaggedObjectsV1429ResponseWithDefaults instantiates a new ListTaggedObjectsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListTaggedObjectsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListTaggedObjectsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListTaggedObjectsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListTaggedObjectsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListTaggedObjectsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListTaggedObjectsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

