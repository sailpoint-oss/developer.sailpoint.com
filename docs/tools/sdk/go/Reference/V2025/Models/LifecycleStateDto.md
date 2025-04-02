---
id: lifecycle-state-dto
title: LifecycleStateDto
pagination_label: LifecycleStateDto
sidebar_label: LifecycleStateDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LifecycleStateDto', 'LifecycleStateDto'] 
slug: /tools/sdk/go//models/lifecycle-state-dto
tags: ['SDK', 'Software Development Kit', 'LifecycleStateDto', 'LifecycleStateDto']
---

# LifecycleStateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **string** | The name of the lifecycle state | 
**ManuallyUpdated** | **bool** | Whether the lifecycle state has been manually or automatically set | 

## Methods

### NewLifecycleStateDto

`func NewLifecycleStateDto(stateName string, manuallyUpdated bool, ) *LifecycleStateDto`

NewLifecycleStateDto instantiates a new LifecycleStateDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleStateDtoWithDefaults

`func NewLifecycleStateDtoWithDefaults() *LifecycleStateDto`

NewLifecycleStateDtoWithDefaults instantiates a new LifecycleStateDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStateName

`func (o *LifecycleStateDto) GetStateName() string`

GetStateName returns the StateName field if non-nil, zero value otherwise.

### GetStateNameOk

`func (o *LifecycleStateDto) GetStateNameOk() (*string, bool)`

GetStateNameOk returns a tuple with the StateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateName

`func (o *LifecycleStateDto) SetStateName(v string)`

SetStateName sets StateName field to given value.


### GetManuallyUpdated

`func (o *LifecycleStateDto) GetManuallyUpdated() bool`

GetManuallyUpdated returns the ManuallyUpdated field if non-nil, zero value otherwise.

### GetManuallyUpdatedOk

`func (o *LifecycleStateDto) GetManuallyUpdatedOk() (*bool, bool)`

GetManuallyUpdatedOk returns a tuple with the ManuallyUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdated

`func (o *LifecycleStateDto) SetManuallyUpdated(v bool)`

SetManuallyUpdated sets ManuallyUpdated field to given value.



