---
id: v1-set-lifecycle-state-v1401-response
title: SetLifecycleStateV1401Response
pagination_label: SetLifecycleStateV1401Response
sidebar_label: SetLifecycleStateV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetLifecycleStateV1401Response', 'V1SetLifecycleStateV1401Response'] 
slug: /tools/sdk/go/lifecyclestates/models/set-lifecycle-state-v1401-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1401Response', 'V1SetLifecycleStateV1401Response']
---

# SetLifecycleStateV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewSetLifecycleStateV1401Response

`func NewSetLifecycleStateV1401Response() *SetLifecycleStateV1401Response`

NewSetLifecycleStateV1401Response instantiates a new SetLifecycleStateV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetLifecycleStateV1401ResponseWithDefaults

`func NewSetLifecycleStateV1401ResponseWithDefaults() *SetLifecycleStateV1401Response`

NewSetLifecycleStateV1401ResponseWithDefaults instantiates a new SetLifecycleStateV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *SetLifecycleStateV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *SetLifecycleStateV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *SetLifecycleStateV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *SetLifecycleStateV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *SetLifecycleStateV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *SetLifecycleStateV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

