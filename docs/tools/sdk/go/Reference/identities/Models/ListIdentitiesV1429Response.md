---
id: v1-list-identities-v1429-response
title: ListIdentitiesV1429Response
pagination_label: ListIdentitiesV1429Response
sidebar_label: ListIdentitiesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListIdentitiesV1429Response', 'V1ListIdentitiesV1429Response'] 
slug: /tools/sdk/go/identities/models/list-identities-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListIdentitiesV1429Response', 'V1ListIdentitiesV1429Response']
---

# ListIdentitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListIdentitiesV1429Response

`func NewListIdentitiesV1429Response() *ListIdentitiesV1429Response`

NewListIdentitiesV1429Response instantiates a new ListIdentitiesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListIdentitiesV1429ResponseWithDefaults

`func NewListIdentitiesV1429ResponseWithDefaults() *ListIdentitiesV1429Response`

NewListIdentitiesV1429ResponseWithDefaults instantiates a new ListIdentitiesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListIdentitiesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListIdentitiesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListIdentitiesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListIdentitiesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListIdentitiesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListIdentitiesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

