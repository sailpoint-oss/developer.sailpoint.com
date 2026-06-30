---
id: v1-set-lifecycle-state-v1-request
title: SetLifecycleStateV1Request
pagination_label: SetLifecycleStateV1Request
sidebar_label: SetLifecycleStateV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetLifecycleStateV1Request', 'V1SetLifecycleStateV1Request'] 
slug: /tools/sdk/go/lifecyclestates/models/set-lifecycle-state-v1-request
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1Request', 'V1SetLifecycleStateV1Request']
---

# SetLifecycleStateV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LifecycleStateId** | Pointer to **string** | ID of the lifecycle state to set. | [optional] 

## Methods

### NewSetLifecycleStateV1Request

`func NewSetLifecycleStateV1Request() *SetLifecycleStateV1Request`

NewSetLifecycleStateV1Request instantiates a new SetLifecycleStateV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetLifecycleStateV1RequestWithDefaults

`func NewSetLifecycleStateV1RequestWithDefaults() *SetLifecycleStateV1Request`

NewSetLifecycleStateV1RequestWithDefaults instantiates a new SetLifecycleStateV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLifecycleStateId

`func (o *SetLifecycleStateV1Request) GetLifecycleStateId() string`

GetLifecycleStateId returns the LifecycleStateId field if non-nil, zero value otherwise.

### GetLifecycleStateIdOk

`func (o *SetLifecycleStateV1Request) GetLifecycleStateIdOk() (*string, bool)`

GetLifecycleStateIdOk returns a tuple with the LifecycleStateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLifecycleStateId

`func (o *SetLifecycleStateV1Request) SetLifecycleStateId(v string)`

SetLifecycleStateId sets LifecycleStateId field to given value.

### HasLifecycleStateId

`func (o *SetLifecycleStateV1Request) HasLifecycleStateId() bool`

HasLifecycleStateId returns a boolean if a field has been set.


