---
id: v1-list-personal-access-tokens-v1429-response
title: ListPersonalAccessTokensV1429Response
pagination_label: ListPersonalAccessTokensV1429Response
sidebar_label: ListPersonalAccessTokensV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListPersonalAccessTokensV1429Response', 'V1ListPersonalAccessTokensV1429Response'] 
slug: /tools/sdk/go/personalaccesstokens/models/list-personal-access-tokens-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListPersonalAccessTokensV1429Response', 'V1ListPersonalAccessTokensV1429Response']
---

# ListPersonalAccessTokensV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListPersonalAccessTokensV1429Response

`func NewListPersonalAccessTokensV1429Response() *ListPersonalAccessTokensV1429Response`

NewListPersonalAccessTokensV1429Response instantiates a new ListPersonalAccessTokensV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPersonalAccessTokensV1429ResponseWithDefaults

`func NewListPersonalAccessTokensV1429ResponseWithDefaults() *ListPersonalAccessTokensV1429Response`

NewListPersonalAccessTokensV1429ResponseWithDefaults instantiates a new ListPersonalAccessTokensV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListPersonalAccessTokensV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListPersonalAccessTokensV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListPersonalAccessTokensV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListPersonalAccessTokensV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListPersonalAccessTokensV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListPersonalAccessTokensV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

