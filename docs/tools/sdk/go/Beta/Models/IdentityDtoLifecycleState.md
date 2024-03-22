---
id: identity-dto-lifecycle-state
title: IdentityDtoLifecycleState
pagination_label: IdentityDtoLifecycleState
sidebar_label: IdentityDtoLifecycleState
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityDtoLifecycleState'] 
slug: /tools/sdk/go/beta/models/identity-dto-lifecycle-state
tags: ['SDK', 'Software Development Kit', 'IdentityDtoLifecycleState']
---

# IdentityDtoLifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** |  **string** | The name of the lifecycle state | 
**ManuallyUpdated** |  **bool** | Whether the lifecycle state has been manually or automatically set | 

## Methods

### NewIdentityDtoLifecycleState

`func NewIdentityDtoLifecycleState(stateName string, manuallyUpdated bool, ) *IdentityDtoLifecycleState`

NewIdentityDtoLifecycleState instantiates a new IdentityDtoLifecycleState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityDtoLifecycleStateWithDefaults

`func NewIdentityDtoLifecycleStateWithDefaults() *IdentityDtoLifecycleState`

NewIdentityDtoLifecycleStateWithDefaults instantiates a new IdentityDtoLifecycleState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStateName

`func (o *IdentityDtoLifecycleState) GetStateName() string`

GetStateName returns the StateName field if non-nil, zero value otherwise.

### GetStateNameOk

`func (o *IdentityDtoLifecycleState) GetStateNameOk() (*string, bool)`

GetStateNameOk returns a tuple with the StateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateName

`func (o *IdentityDtoLifecycleState) SetStateName(v string)`

SetStateName sets StateName field to given value.


### GetManuallyUpdated

`func (o *IdentityDtoLifecycleState) GetManuallyUpdated() bool`

GetManuallyUpdated returns the ManuallyUpdated field if non-nil, zero value otherwise.

### GetManuallyUpdatedOk

`func (o *IdentityDtoLifecycleState) GetManuallyUpdatedOk() (*bool, bool)`

GetManuallyUpdatedOk returns a tuple with the ManuallyUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdated

`func (o *IdentityDtoLifecycleState) SetManuallyUpdated(v bool)`

SetManuallyUpdated sets ManuallyUpdated field to given value.



[[Back to top]](#) 


