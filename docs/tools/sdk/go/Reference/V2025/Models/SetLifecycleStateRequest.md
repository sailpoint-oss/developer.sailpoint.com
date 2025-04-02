---
id: set-lifecycle-state-request
title: SetLifecycleStateRequest
pagination_label: SetLifecycleStateRequest
sidebar_label: SetLifecycleStateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetLifecycleStateRequest', 'SetLifecycleStateRequest'] 
slug: /tools/sdk/go//models/set-lifecycle-state-request
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateRequest', 'SetLifecycleStateRequest']
---

# SetLifecycleStateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LifecycleStateId** | Pointer to **string** | ID of the lifecycle state to set. | [optional] 

## Methods

### NewSetLifecycleStateRequest

`func NewSetLifecycleStateRequest() *SetLifecycleStateRequest`

NewSetLifecycleStateRequest instantiates a new SetLifecycleStateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetLifecycleStateRequestWithDefaults

`func NewSetLifecycleStateRequestWithDefaults() *SetLifecycleStateRequest`

NewSetLifecycleStateRequestWithDefaults instantiates a new SetLifecycleStateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLifecycleStateId

`func (o *SetLifecycleStateRequest) GetLifecycleStateId() string`

GetLifecycleStateId returns the LifecycleStateId field if non-nil, zero value otherwise.

### GetLifecycleStateIdOk

`func (o *SetLifecycleStateRequest) GetLifecycleStateIdOk() (*string, bool)`

GetLifecycleStateIdOk returns a tuple with the LifecycleStateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLifecycleStateId

`func (o *SetLifecycleStateRequest) SetLifecycleStateId(v string)`

SetLifecycleStateId sets LifecycleStateId field to given value.

### HasLifecycleStateId

`func (o *SetLifecycleStateRequest) HasLifecycleStateId() bool`

HasLifecycleStateId returns a boolean if a field has been set.


