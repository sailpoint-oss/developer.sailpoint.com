---
id: v1-list-scheduled-search-v1429-response
title: ListScheduledSearchV1429Response
pagination_label: ListScheduledSearchV1429Response
sidebar_label: ListScheduledSearchV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListScheduledSearchV1429Response', 'V1ListScheduledSearchV1429Response'] 
slug: /tools/sdk/go/scheduledsearch/models/list-scheduled-search-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListScheduledSearchV1429Response', 'V1ListScheduledSearchV1429Response']
---

# ListScheduledSearchV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListScheduledSearchV1429Response

`func NewListScheduledSearchV1429Response() *ListScheduledSearchV1429Response`

NewListScheduledSearchV1429Response instantiates a new ListScheduledSearchV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListScheduledSearchV1429ResponseWithDefaults

`func NewListScheduledSearchV1429ResponseWithDefaults() *ListScheduledSearchV1429Response`

NewListScheduledSearchV1429ResponseWithDefaults instantiates a new ListScheduledSearchV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListScheduledSearchV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListScheduledSearchV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListScheduledSearchV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListScheduledSearchV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListScheduledSearchV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListScheduledSearchV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

