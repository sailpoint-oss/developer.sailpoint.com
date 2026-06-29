---
id: v1-loaduncorrelatedaccountstask-task-attributes
title: LoaduncorrelatedaccountstaskTaskAttributes
pagination_label: LoaduncorrelatedaccountstaskTaskAttributes
sidebar_label: LoaduncorrelatedaccountstaskTaskAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoaduncorrelatedaccountstaskTaskAttributes', 'V1LoaduncorrelatedaccountstaskTaskAttributes'] 
slug: /tools/sdk/go/sources/models/loaduncorrelatedaccountstask-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoaduncorrelatedaccountstaskTaskAttributes', 'V1LoaduncorrelatedaccountstaskTaskAttributes']
---

# LoaduncorrelatedaccountstaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QpocJobId** | Pointer to **string** | The id of qpoc job | [optional] 
**TaskStartDelay** | Pointer to **interface{}** | the task start delay value | [optional] 

## Methods

### NewLoaduncorrelatedaccountstaskTaskAttributes

`func NewLoaduncorrelatedaccountstaskTaskAttributes() *LoaduncorrelatedaccountstaskTaskAttributes`

NewLoaduncorrelatedaccountstaskTaskAttributes instantiates a new LoaduncorrelatedaccountstaskTaskAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoaduncorrelatedaccountstaskTaskAttributesWithDefaults

`func NewLoaduncorrelatedaccountstaskTaskAttributesWithDefaults() *LoaduncorrelatedaccountstaskTaskAttributes`

NewLoaduncorrelatedaccountstaskTaskAttributesWithDefaults instantiates a new LoaduncorrelatedaccountstaskTaskAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQpocJobId

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) GetQpocJobId() string`

GetQpocJobId returns the QpocJobId field if non-nil, zero value otherwise.

### GetQpocJobIdOk

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) GetQpocJobIdOk() (*string, bool)`

GetQpocJobIdOk returns a tuple with the QpocJobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQpocJobId

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) SetQpocJobId(v string)`

SetQpocJobId sets QpocJobId field to given value.

### HasQpocJobId

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) HasQpocJobId() bool`

HasQpocJobId returns a boolean if a field has been set.

### GetTaskStartDelay

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) GetTaskStartDelay() interface{}`

GetTaskStartDelay returns the TaskStartDelay field if non-nil, zero value otherwise.

### GetTaskStartDelayOk

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) GetTaskStartDelayOk() (*interface{}, bool)`

GetTaskStartDelayOk returns a tuple with the TaskStartDelay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskStartDelay

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) SetTaskStartDelay(v interface{})`

SetTaskStartDelay sets TaskStartDelay field to given value.

### HasTaskStartDelay

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) HasTaskStartDelay() bool`

HasTaskStartDelay returns a boolean if a field has been set.

### SetTaskStartDelayNil

`func (o *LoaduncorrelatedaccountstaskTaskAttributes) SetTaskStartDelayNil(b bool)`

 SetTaskStartDelayNil sets the value for TaskStartDelay to be an explicit nil

### UnsetTaskStartDelay
`func (o *LoaduncorrelatedaccountstaskTaskAttributes) UnsetTaskStartDelay()`

UnsetTaskStartDelay ensures that no value is present for TaskStartDelay, not even an explicit nil

