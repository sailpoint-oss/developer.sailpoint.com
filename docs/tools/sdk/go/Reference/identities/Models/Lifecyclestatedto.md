---
id: v1-lifecyclestatedto
title: Lifecyclestatedto
pagination_label: Lifecyclestatedto
sidebar_label: Lifecyclestatedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Lifecyclestatedto', 'V1Lifecyclestatedto'] 
slug: /tools/sdk/go/identities/models/lifecyclestatedto
tags: ['SDK', 'Software Development Kit', 'Lifecyclestatedto', 'V1Lifecyclestatedto']
---

# Lifecyclestatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **string** | The name of the lifecycle state | 
**ManuallyUpdated** | **bool** | Whether the lifecycle state has been manually or automatically set | 

## Methods

### NewLifecyclestatedto

`func NewLifecyclestatedto(stateName string, manuallyUpdated bool, ) *Lifecyclestatedto`

NewLifecyclestatedto instantiates a new Lifecyclestatedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecyclestatedtoWithDefaults

`func NewLifecyclestatedtoWithDefaults() *Lifecyclestatedto`

NewLifecyclestatedtoWithDefaults instantiates a new Lifecyclestatedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStateName

`func (o *Lifecyclestatedto) GetStateName() string`

GetStateName returns the StateName field if non-nil, zero value otherwise.

### GetStateNameOk

`func (o *Lifecyclestatedto) GetStateNameOk() (*string, bool)`

GetStateNameOk returns a tuple with the StateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateName

`func (o *Lifecyclestatedto) SetStateName(v string)`

SetStateName sets StateName field to given value.


### GetManuallyUpdated

`func (o *Lifecyclestatedto) GetManuallyUpdated() bool`

GetManuallyUpdated returns the ManuallyUpdated field if non-nil, zero value otherwise.

### GetManuallyUpdatedOk

`func (o *Lifecyclestatedto) GetManuallyUpdatedOk() (*bool, bool)`

GetManuallyUpdatedOk returns a tuple with the ManuallyUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdated

`func (o *Lifecyclestatedto) SetManuallyUpdated(v bool)`

SetManuallyUpdated sets ManuallyUpdated field to given value.



