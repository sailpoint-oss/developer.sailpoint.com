---
id: v1-list-identity-attributes-v1429-response
title: ListIdentityAttributesV1429Response
pagination_label: ListIdentityAttributesV1429Response
sidebar_label: ListIdentityAttributesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListIdentityAttributesV1429Response', 'V1ListIdentityAttributesV1429Response'] 
slug: /tools/sdk/go/identityattributes/models/list-identity-attributes-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListIdentityAttributesV1429Response', 'V1ListIdentityAttributesV1429Response']
---

# ListIdentityAttributesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListIdentityAttributesV1429Response

`func NewListIdentityAttributesV1429Response() *ListIdentityAttributesV1429Response`

NewListIdentityAttributesV1429Response instantiates a new ListIdentityAttributesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListIdentityAttributesV1429ResponseWithDefaults

`func NewListIdentityAttributesV1429ResponseWithDefaults() *ListIdentityAttributesV1429Response`

NewListIdentityAttributesV1429ResponseWithDefaults instantiates a new ListIdentityAttributesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListIdentityAttributesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListIdentityAttributesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListIdentityAttributesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListIdentityAttributesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListIdentityAttributesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListIdentityAttributesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

