---
id: v1-loadaccountstask
title: Loadaccountstask
pagination_label: Loadaccountstask
sidebar_label: Loadaccountstask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Loadaccountstask', 'V1Loadaccountstask'] 
slug: /tools/sdk/go/sources/models/loadaccountstask
tags: ['SDK', 'Software Development Kit', 'Loadaccountstask', 'V1Loadaccountstask']
---

# Loadaccountstask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** | The status of the result | [optional] [default to true]
**Task** | Pointer to [**LoadaccountstaskTask**](loadaccountstask-task) |  | [optional] 

## Methods

### NewLoadaccountstask

`func NewLoadaccountstask() *Loadaccountstask`

NewLoadaccountstask instantiates a new Loadaccountstask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadaccountstaskWithDefaults

`func NewLoadaccountstaskWithDefaults() *Loadaccountstask`

NewLoadaccountstaskWithDefaults instantiates a new Loadaccountstask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *Loadaccountstask) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *Loadaccountstask) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *Loadaccountstask) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *Loadaccountstask) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetTask

`func (o *Loadaccountstask) GetTask() LoadaccountstaskTask`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *Loadaccountstask) GetTaskOk() (*LoadaccountstaskTask, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *Loadaccountstask) SetTask(v LoadaccountstaskTask)`

SetTask sets Task field to given value.

### HasTask

`func (o *Loadaccountstask) HasTask() bool`

HasTask returns a boolean if a field has been set.


