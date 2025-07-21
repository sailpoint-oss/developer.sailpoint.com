---
id: beta-load-accounts-task
title: LoadAccountsTask
pagination_label: LoadAccountsTask
sidebar_label: LoadAccountsTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadAccountsTask', 'BetaLoadAccountsTask'] 
slug: /tools/sdk/go/beta/models/load-accounts-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTask', 'BetaLoadAccountsTask']
---

# LoadAccountsTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** | The status of the result | [optional] [default to true]
**Task** | Pointer to [**LoadAccountsTaskTask**](load-accounts-task-task) |  | [optional] 

## Methods

### NewLoadAccountsTask

`func NewLoadAccountsTask() *LoadAccountsTask`

NewLoadAccountsTask instantiates a new LoadAccountsTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadAccountsTaskWithDefaults

`func NewLoadAccountsTaskWithDefaults() *LoadAccountsTask`

NewLoadAccountsTaskWithDefaults instantiates a new LoadAccountsTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *LoadAccountsTask) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *LoadAccountsTask) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *LoadAccountsTask) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *LoadAccountsTask) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetTask

`func (o *LoadAccountsTask) GetTask() LoadAccountsTaskTask`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *LoadAccountsTask) GetTaskOk() (*LoadAccountsTaskTask, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *LoadAccountsTask) SetTask(v LoadAccountsTaskTask)`

SetTask sets Task field to given value.

### HasTask

`func (o *LoadAccountsTask) HasTask() bool`

HasTask returns a boolean if a field has been set.


