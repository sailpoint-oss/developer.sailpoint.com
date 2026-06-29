---
id: v1-get-usages-by-account-id-v1429-response
title: GetUsagesByAccountIdV1429Response
pagination_label: GetUsagesByAccountIdV1429Response
sidebar_label: GetUsagesByAccountIdV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetUsagesByAccountIdV1429Response', 'V1GetUsagesByAccountIdV1429Response'] 
slug: /tools/sdk/go/accountusages/models/get-usages-by-account-id-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetUsagesByAccountIdV1429Response', 'V1GetUsagesByAccountIdV1429Response']
---

# GetUsagesByAccountIdV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetUsagesByAccountIdV1429Response

`func NewGetUsagesByAccountIdV1429Response() *GetUsagesByAccountIdV1429Response`

NewGetUsagesByAccountIdV1429Response instantiates a new GetUsagesByAccountIdV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUsagesByAccountIdV1429ResponseWithDefaults

`func NewGetUsagesByAccountIdV1429ResponseWithDefaults() *GetUsagesByAccountIdV1429Response`

NewGetUsagesByAccountIdV1429ResponseWithDefaults instantiates a new GetUsagesByAccountIdV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetUsagesByAccountIdV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetUsagesByAccountIdV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetUsagesByAccountIdV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetUsagesByAccountIdV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetUsagesByAccountIdV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetUsagesByAccountIdV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

