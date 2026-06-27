---
id: v1-list-workgroups-v1429-response
title: ListWorkgroupsV1429Response
pagination_label: ListWorkgroupsV1429Response
sidebar_label: ListWorkgroupsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListWorkgroupsV1429Response', 'V1ListWorkgroupsV1429Response'] 
slug: /tools/sdk/go/governancegroups/models/list-workgroups-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupsV1429Response', 'V1ListWorkgroupsV1429Response']
---

# ListWorkgroupsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListWorkgroupsV1429Response

`func NewListWorkgroupsV1429Response() *ListWorkgroupsV1429Response`

NewListWorkgroupsV1429Response instantiates a new ListWorkgroupsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListWorkgroupsV1429ResponseWithDefaults

`func NewListWorkgroupsV1429ResponseWithDefaults() *ListWorkgroupsV1429Response`

NewListWorkgroupsV1429ResponseWithDefaults instantiates a new ListWorkgroupsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListWorkgroupsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListWorkgroupsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListWorkgroupsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListWorkgroupsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListWorkgroupsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListWorkgroupsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

