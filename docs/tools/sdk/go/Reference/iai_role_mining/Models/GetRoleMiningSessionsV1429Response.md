---
id: v1-get-role-mining-sessions-v1429-response
title: GetRoleMiningSessionsV1429Response
pagination_label: GetRoleMiningSessionsV1429Response
sidebar_label: GetRoleMiningSessionsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetRoleMiningSessionsV1429Response', 'V1GetRoleMiningSessionsV1429Response'] 
slug: /tools/sdk/go/iairolemining/models/get-role-mining-sessions-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetRoleMiningSessionsV1429Response', 'V1GetRoleMiningSessionsV1429Response']
---

# GetRoleMiningSessionsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetRoleMiningSessionsV1429Response

`func NewGetRoleMiningSessionsV1429Response() *GetRoleMiningSessionsV1429Response`

NewGetRoleMiningSessionsV1429Response instantiates a new GetRoleMiningSessionsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRoleMiningSessionsV1429ResponseWithDefaults

`func NewGetRoleMiningSessionsV1429ResponseWithDefaults() *GetRoleMiningSessionsV1429Response`

NewGetRoleMiningSessionsV1429ResponseWithDefaults instantiates a new GetRoleMiningSessionsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetRoleMiningSessionsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetRoleMiningSessionsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetRoleMiningSessionsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetRoleMiningSessionsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetRoleMiningSessionsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetRoleMiningSessionsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

