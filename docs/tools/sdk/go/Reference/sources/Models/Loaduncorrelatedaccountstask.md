---
id: v1-loaduncorrelatedaccountstask
title: Loaduncorrelatedaccountstask
pagination_label: Loaduncorrelatedaccountstask
sidebar_label: Loaduncorrelatedaccountstask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Loaduncorrelatedaccountstask', 'V1Loaduncorrelatedaccountstask'] 
slug: /tools/sdk/go/sources/models/loaduncorrelatedaccountstask
tags: ['SDK', 'Software Development Kit', 'Loaduncorrelatedaccountstask', 'V1Loaduncorrelatedaccountstask']
---

# Loaduncorrelatedaccountstask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** | The status of the result | [optional] [default to true]
**Task** | Pointer to [**LoaduncorrelatedaccountstaskTask**](loaduncorrelatedaccountstask-task) |  | [optional] 

## Methods

### NewLoaduncorrelatedaccountstask

`func NewLoaduncorrelatedaccountstask() *Loaduncorrelatedaccountstask`

NewLoaduncorrelatedaccountstask instantiates a new Loaduncorrelatedaccountstask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoaduncorrelatedaccountstaskWithDefaults

`func NewLoaduncorrelatedaccountstaskWithDefaults() *Loaduncorrelatedaccountstask`

NewLoaduncorrelatedaccountstaskWithDefaults instantiates a new Loaduncorrelatedaccountstask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *Loaduncorrelatedaccountstask) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *Loaduncorrelatedaccountstask) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *Loaduncorrelatedaccountstask) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *Loaduncorrelatedaccountstask) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetTask

`func (o *Loaduncorrelatedaccountstask) GetTask() LoaduncorrelatedaccountstaskTask`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *Loaduncorrelatedaccountstask) GetTaskOk() (*LoaduncorrelatedaccountstaskTask, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *Loaduncorrelatedaccountstask) SetTask(v LoaduncorrelatedaccountstaskTask)`

SetTask sets Task field to given value.

### HasTask

`func (o *Loaduncorrelatedaccountstask) HasTask() bool`

HasTask returns a boolean if a field has been set.


