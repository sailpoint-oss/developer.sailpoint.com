---
id: v1-list-work-items-v1429-response
title: ListWorkItemsV1429Response
pagination_label: ListWorkItemsV1429Response
sidebar_label: ListWorkItemsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListWorkItemsV1429Response', 'V1ListWorkItemsV1429Response'] 
slug: /tools/sdk/go/workitems/models/list-work-items-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListWorkItemsV1429Response', 'V1ListWorkItemsV1429Response']
---

# ListWorkItemsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListWorkItemsV1429Response

`func NewListWorkItemsV1429Response() *ListWorkItemsV1429Response`

NewListWorkItemsV1429Response instantiates a new ListWorkItemsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListWorkItemsV1429ResponseWithDefaults

`func NewListWorkItemsV1429ResponseWithDefaults() *ListWorkItemsV1429Response`

NewListWorkItemsV1429ResponseWithDefaults instantiates a new ListWorkItemsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListWorkItemsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListWorkItemsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListWorkItemsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListWorkItemsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListWorkItemsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListWorkItemsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

