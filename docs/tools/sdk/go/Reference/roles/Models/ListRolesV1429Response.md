---
id: v1-list-roles-v1429-response
title: ListRolesV1429Response
pagination_label: ListRolesV1429Response
sidebar_label: ListRolesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListRolesV1429Response', 'V1ListRolesV1429Response'] 
slug: /tools/sdk/go/roles/models/list-roles-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListRolesV1429Response', 'V1ListRolesV1429Response']
---

# ListRolesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListRolesV1429Response

`func NewListRolesV1429Response() *ListRolesV1429Response`

NewListRolesV1429Response instantiates a new ListRolesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListRolesV1429ResponseWithDefaults

`func NewListRolesV1429ResponseWithDefaults() *ListRolesV1429Response`

NewListRolesV1429ResponseWithDefaults instantiates a new ListRolesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListRolesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListRolesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListRolesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListRolesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListRolesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListRolesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

