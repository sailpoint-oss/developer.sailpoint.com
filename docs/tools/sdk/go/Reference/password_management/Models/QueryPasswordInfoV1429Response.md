---
id: v1-query-password-info-v1429-response
title: QueryPasswordInfoV1429Response
pagination_label: QueryPasswordInfoV1429Response
sidebar_label: QueryPasswordInfoV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'QueryPasswordInfoV1429Response', 'V1QueryPasswordInfoV1429Response'] 
slug: /tools/sdk/go/passwordmanagement/models/query-password-info-v1429-response
tags: ['SDK', 'Software Development Kit', 'QueryPasswordInfoV1429Response', 'V1QueryPasswordInfoV1429Response']
---

# QueryPasswordInfoV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewQueryPasswordInfoV1429Response

`func NewQueryPasswordInfoV1429Response() *QueryPasswordInfoV1429Response`

NewQueryPasswordInfoV1429Response instantiates a new QueryPasswordInfoV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryPasswordInfoV1429ResponseWithDefaults

`func NewQueryPasswordInfoV1429ResponseWithDefaults() *QueryPasswordInfoV1429Response`

NewQueryPasswordInfoV1429ResponseWithDefaults instantiates a new QueryPasswordInfoV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *QueryPasswordInfoV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *QueryPasswordInfoV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *QueryPasswordInfoV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *QueryPasswordInfoV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *QueryPasswordInfoV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *QueryPasswordInfoV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

