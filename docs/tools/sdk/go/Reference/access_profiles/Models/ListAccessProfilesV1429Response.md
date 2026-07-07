---
id: v1-list-access-profiles-v1429-response
title: ListAccessProfilesV1429Response
pagination_label: ListAccessProfilesV1429Response
sidebar_label: ListAccessProfilesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListAccessProfilesV1429Response', 'V1ListAccessProfilesV1429Response'] 
slug: /tools/sdk/go/accessprofiles/models/list-access-profiles-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfilesV1429Response', 'V1ListAccessProfilesV1429Response']
---

# ListAccessProfilesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListAccessProfilesV1429Response

`func NewListAccessProfilesV1429Response() *ListAccessProfilesV1429Response`

NewListAccessProfilesV1429Response instantiates a new ListAccessProfilesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListAccessProfilesV1429ResponseWithDefaults

`func NewListAccessProfilesV1429ResponseWithDefaults() *ListAccessProfilesV1429Response`

NewListAccessProfilesV1429ResponseWithDefaults instantiates a new ListAccessProfilesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListAccessProfilesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListAccessProfilesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListAccessProfilesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListAccessProfilesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListAccessProfilesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListAccessProfilesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

