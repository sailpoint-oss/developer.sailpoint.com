---
id: task-result-simplified
title: TaskResultSimplified
pagination_label: TaskResultSimplified
sidebar_label: TaskResultSimplified
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskResultSimplified', 'TaskResultSimplified'] 
slug: /tools/sdk/go/v3/models/task-result-simplified
tags: ['SDK', 'Software Development Kit', 'TaskResultSimplified', 'TaskResultSimplified']
---

# TaskResultSimplified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Task identifier | [optional] 
**Name** | Pointer to **string** | Task name | [optional] 
**Description** | Pointer to **string** | Task description | [optional] 
**Launcher** | Pointer to **string** | User or process who launched the task | [optional] 
**Completed** | Pointer to **SailPointTime** | Date time of completion | [optional] 
**Launched** | Pointer to **SailPointTime** | Date time when the task was launched | [optional] 
**CompletionStatus** | Pointer to **string** | Task result status | [optional] 

## Methods

### NewTaskResultSimplified

`func NewTaskResultSimplified() *TaskResultSimplified`

NewTaskResultSimplified instantiates a new TaskResultSimplified object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskResultSimplifiedWithDefaults

`func NewTaskResultSimplifiedWithDefaults() *TaskResultSimplified`

NewTaskResultSimplifiedWithDefaults instantiates a new TaskResultSimplified object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TaskResultSimplified) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaskResultSimplified) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaskResultSimplified) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TaskResultSimplified) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TaskResultSimplified) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TaskResultSimplified) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TaskResultSimplified) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TaskResultSimplified) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *TaskResultSimplified) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaskResultSimplified) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaskResultSimplified) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaskResultSimplified) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *TaskResultSimplified) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *TaskResultSimplified) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *TaskResultSimplified) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *TaskResultSimplified) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCompleted

`func (o *TaskResultSimplified) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *TaskResultSimplified) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *TaskResultSimplified) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *TaskResultSimplified) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetLaunched

`func (o *TaskResultSimplified) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *TaskResultSimplified) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *TaskResultSimplified) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *TaskResultSimplified) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *TaskResultSimplified) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *TaskResultSimplified) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *TaskResultSimplified) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *TaskResultSimplified) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.


