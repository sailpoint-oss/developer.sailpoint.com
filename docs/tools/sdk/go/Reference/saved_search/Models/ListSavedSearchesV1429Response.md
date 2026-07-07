---
id: v1-list-saved-searches-v1429-response
title: ListSavedSearchesV1429Response
pagination_label: ListSavedSearchesV1429Response
sidebar_label: ListSavedSearchesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListSavedSearchesV1429Response', 'V1ListSavedSearchesV1429Response'] 
slug: /tools/sdk/go/savedsearch/models/list-saved-searches-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSavedSearchesV1429Response', 'V1ListSavedSearchesV1429Response']
---

# ListSavedSearchesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListSavedSearchesV1429Response

`func NewListSavedSearchesV1429Response() *ListSavedSearchesV1429Response`

NewListSavedSearchesV1429Response instantiates a new ListSavedSearchesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListSavedSearchesV1429ResponseWithDefaults

`func NewListSavedSearchesV1429ResponseWithDefaults() *ListSavedSearchesV1429Response`

NewListSavedSearchesV1429ResponseWithDefaults instantiates a new ListSavedSearchesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListSavedSearchesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListSavedSearchesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListSavedSearchesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListSavedSearchesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListSavedSearchesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListSavedSearchesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

