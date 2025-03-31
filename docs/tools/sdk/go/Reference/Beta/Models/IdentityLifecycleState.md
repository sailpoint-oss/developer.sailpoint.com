---
id: beta-identity-lifecycle-state
title: IdentityLifecycleState
pagination_label: IdentityLifecycleState
sidebar_label: IdentityLifecycleState
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityLifecycleState', 'BetaIdentityLifecycleState'] 
slug: /tools/sdk/go/beta/models/identity-lifecycle-state
tags: ['SDK', 'Software Development Kit', 'IdentityLifecycleState', 'BetaIdentityLifecycleState']
---

# IdentityLifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **string** | The name of the lifecycle state | 
**ManuallyUpdated** | **bool** | Whether the lifecycle state has been manually or automatically set | 

## Methods

### NewIdentityLifecycleState

`func NewIdentityLifecycleState(stateName string, manuallyUpdated bool, ) *IdentityLifecycleState`

NewIdentityLifecycleState instantiates a new IdentityLifecycleState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityLifecycleStateWithDefaults

`func NewIdentityLifecycleStateWithDefaults() *IdentityLifecycleState`

NewIdentityLifecycleStateWithDefaults instantiates a new IdentityLifecycleState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStateName

`func (o *IdentityLifecycleState) GetStateName() string`

GetStateName returns the StateName field if non-nil, zero value otherwise.

### GetStateNameOk

`func (o *IdentityLifecycleState) GetStateNameOk() (*string, bool)`

GetStateNameOk returns a tuple with the StateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateName

`func (o *IdentityLifecycleState) SetStateName(v string)`

SetStateName sets StateName field to given value.


### GetManuallyUpdated

`func (o *IdentityLifecycleState) GetManuallyUpdated() bool`

GetManuallyUpdated returns the ManuallyUpdated field if non-nil, zero value otherwise.

### GetManuallyUpdatedOk

`func (o *IdentityLifecycleState) GetManuallyUpdatedOk() (*bool, bool)`

GetManuallyUpdatedOk returns a tuple with the ManuallyUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdated

`func (o *IdentityLifecycleState) SetManuallyUpdated(v bool)`

SetManuallyUpdated sets ManuallyUpdated field to given value.



