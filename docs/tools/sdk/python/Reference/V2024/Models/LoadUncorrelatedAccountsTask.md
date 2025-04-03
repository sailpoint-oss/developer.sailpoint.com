---
id: v2024-load-uncorrelated-accounts-task
title: LoadUncorrelatedAccountsTask
pagination_label: LoadUncorrelatedAccountsTask
sidebar_label: LoadUncorrelatedAccountsTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadUncorrelatedAccountsTask', 'V2024LoadUncorrelatedAccountsTask'] 
slug: /tools/sdk/go/v2024/models/load-uncorrelated-accounts-task
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTask', 'V2024LoadUncorrelatedAccountsTask']
---

# LoadUncorrelatedAccountsTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** | The status of the result | [optional] [default to true]
**Task** | Pointer to [**LoadUncorrelatedAccountsTaskTask**](load-uncorrelated-accounts-task-task) |  | [optional] 

## Methods

### NewLoadUncorrelatedAccountsTask

`func NewLoadUncorrelatedAccountsTask() *LoadUncorrelatedAccountsTask`

NewLoadUncorrelatedAccountsTask instantiates a new LoadUncorrelatedAccountsTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadUncorrelatedAccountsTaskWithDefaults

`func NewLoadUncorrelatedAccountsTaskWithDefaults() *LoadUncorrelatedAccountsTask`

NewLoadUncorrelatedAccountsTaskWithDefaults instantiates a new LoadUncorrelatedAccountsTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *LoadUncorrelatedAccountsTask) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *LoadUncorrelatedAccountsTask) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *LoadUncorrelatedAccountsTask) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *LoadUncorrelatedAccountsTask) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetTask

`func (o *LoadUncorrelatedAccountsTask) GetTask() LoadUncorrelatedAccountsTaskTask`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *LoadUncorrelatedAccountsTask) GetTaskOk() (*LoadUncorrelatedAccountsTaskTask, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *LoadUncorrelatedAccountsTask) SetTask(v LoadUncorrelatedAccountsTaskTask)`

SetTask sets Task field to given value.

### HasTask

`func (o *LoadUncorrelatedAccountsTask) HasTask() bool`

HasTask returns a boolean if a field has been set.


