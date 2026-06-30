---
id: v1-list-entitlements-v1429-response
title: ListEntitlementsV1429Response
pagination_label: ListEntitlementsV1429Response
sidebar_label: ListEntitlementsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListEntitlementsV1429Response', 'V1ListEntitlementsV1429Response'] 
slug: /tools/sdk/go/entitlements/models/list-entitlements-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementsV1429Response', 'V1ListEntitlementsV1429Response']
---

# ListEntitlementsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListEntitlementsV1429Response

`func NewListEntitlementsV1429Response() *ListEntitlementsV1429Response`

NewListEntitlementsV1429Response instantiates a new ListEntitlementsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListEntitlementsV1429ResponseWithDefaults

`func NewListEntitlementsV1429ResponseWithDefaults() *ListEntitlementsV1429Response`

NewListEntitlementsV1429ResponseWithDefaults instantiates a new ListEntitlementsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListEntitlementsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListEntitlementsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListEntitlementsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListEntitlementsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListEntitlementsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListEntitlementsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

