---
id: v2025-task-info
title: TaskInfo
pagination_label: TaskInfo
sidebar_label: TaskInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskInfo', 'V2025TaskInfo'] 
slug: /tools/sdk/go/v2025/models/task-info
tags: ['SDK', 'Software Development Kit', 'TaskInfo', 'V2025TaskInfo']
---

# TaskInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | Pointer to **NullableInt64** | The unique identifier for the task. | [optional] 
**TaskTypeName** | Pointer to **NullableString** | The type or category of the task. | [optional] 
**StartTime** | Pointer to **NullableInt64** | The start time of the task, represented as epoch seconds. | [optional] 
**EndTime** | Pointer to **NullableInt64** | The end time of the task, represented as epoch seconds. | [optional] 
**TaskName** | Pointer to **NullableString** | The display name of the task. | [optional] 
**CreatedByDisplayName** | Pointer to **NullableString** | The display name of the user who created the task. | [optional] 
**Progress** | Pointer to **int32** | The progress of the task, typically represented as a percentage (0-100). | [optional] 
**Status** | Pointer to **NullableString** | The current status of the task (e.g., \"Running\", \"Completed\", \"Failed\"). | [optional] 
**Details** | Pointer to **NullableString** | Additional details or information about the task. | [optional] 
**ScheduleTaskId** | Pointer to **NullableInt64** | The unique identifier of the associated scheduled task, if applicable. | [optional] 

## Methods

### NewTaskInfo

`func NewTaskInfo() *TaskInfo`

NewTaskInfo instantiates a new TaskInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskInfoWithDefaults

`func NewTaskInfoWithDefaults() *TaskInfo`

NewTaskInfoWithDefaults instantiates a new TaskInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskId

`func (o *TaskInfo) GetTaskId() int64`

GetTaskId returns the TaskId field if non-nil, zero value otherwise.

### GetTaskIdOk

`func (o *TaskInfo) GetTaskIdOk() (*int64, bool)`

GetTaskIdOk returns a tuple with the TaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskId

`func (o *TaskInfo) SetTaskId(v int64)`

SetTaskId sets TaskId field to given value.

### HasTaskId

`func (o *TaskInfo) HasTaskId() bool`

HasTaskId returns a boolean if a field has been set.

### SetTaskIdNil

`func (o *TaskInfo) SetTaskIdNil(b bool)`

 SetTaskIdNil sets the value for TaskId to be an explicit nil

### UnsetTaskId
`func (o *TaskInfo) UnsetTaskId()`

UnsetTaskId ensures that no value is present for TaskId, not even an explicit nil
### GetTaskTypeName

`func (o *TaskInfo) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *TaskInfo) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *TaskInfo) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *TaskInfo) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *TaskInfo) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *TaskInfo) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetStartTime

`func (o *TaskInfo) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *TaskInfo) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *TaskInfo) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *TaskInfo) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### SetStartTimeNil

`func (o *TaskInfo) SetStartTimeNil(b bool)`

 SetStartTimeNil sets the value for StartTime to be an explicit nil

### UnsetStartTime
`func (o *TaskInfo) UnsetStartTime()`

UnsetStartTime ensures that no value is present for StartTime, not even an explicit nil
### GetEndTime

`func (o *TaskInfo) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *TaskInfo) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *TaskInfo) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *TaskInfo) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### SetEndTimeNil

`func (o *TaskInfo) SetEndTimeNil(b bool)`

 SetEndTimeNil sets the value for EndTime to be an explicit nil

### UnsetEndTime
`func (o *TaskInfo) UnsetEndTime()`

UnsetEndTime ensures that no value is present for EndTime, not even an explicit nil
### GetTaskName

`func (o *TaskInfo) GetTaskName() string`

GetTaskName returns the TaskName field if non-nil, zero value otherwise.

### GetTaskNameOk

`func (o *TaskInfo) GetTaskNameOk() (*string, bool)`

GetTaskNameOk returns a tuple with the TaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskName

`func (o *TaskInfo) SetTaskName(v string)`

SetTaskName sets TaskName field to given value.

### HasTaskName

`func (o *TaskInfo) HasTaskName() bool`

HasTaskName returns a boolean if a field has been set.

### SetTaskNameNil

`func (o *TaskInfo) SetTaskNameNil(b bool)`

 SetTaskNameNil sets the value for TaskName to be an explicit nil

### UnsetTaskName
`func (o *TaskInfo) UnsetTaskName()`

UnsetTaskName ensures that no value is present for TaskName, not even an explicit nil
### GetCreatedByDisplayName

`func (o *TaskInfo) GetCreatedByDisplayName() string`

GetCreatedByDisplayName returns the CreatedByDisplayName field if non-nil, zero value otherwise.

### GetCreatedByDisplayNameOk

`func (o *TaskInfo) GetCreatedByDisplayNameOk() (*string, bool)`

GetCreatedByDisplayNameOk returns a tuple with the CreatedByDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByDisplayName

`func (o *TaskInfo) SetCreatedByDisplayName(v string)`

SetCreatedByDisplayName sets CreatedByDisplayName field to given value.

### HasCreatedByDisplayName

`func (o *TaskInfo) HasCreatedByDisplayName() bool`

HasCreatedByDisplayName returns a boolean if a field has been set.

### SetCreatedByDisplayNameNil

`func (o *TaskInfo) SetCreatedByDisplayNameNil(b bool)`

 SetCreatedByDisplayNameNil sets the value for CreatedByDisplayName to be an explicit nil

### UnsetCreatedByDisplayName
`func (o *TaskInfo) UnsetCreatedByDisplayName()`

UnsetCreatedByDisplayName ensures that no value is present for CreatedByDisplayName, not even an explicit nil
### GetProgress

`func (o *TaskInfo) GetProgress() int32`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *TaskInfo) GetProgressOk() (*int32, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *TaskInfo) SetProgress(v int32)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *TaskInfo) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### GetStatus

`func (o *TaskInfo) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TaskInfo) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TaskInfo) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TaskInfo) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *TaskInfo) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *TaskInfo) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetDetails

`func (o *TaskInfo) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TaskInfo) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TaskInfo) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *TaskInfo) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### SetDetailsNil

`func (o *TaskInfo) SetDetailsNil(b bool)`

 SetDetailsNil sets the value for Details to be an explicit nil

### UnsetDetails
`func (o *TaskInfo) UnsetDetails()`

UnsetDetails ensures that no value is present for Details, not even an explicit nil
### GetScheduleTaskId

`func (o *TaskInfo) GetScheduleTaskId() int64`

GetScheduleTaskId returns the ScheduleTaskId field if non-nil, zero value otherwise.

### GetScheduleTaskIdOk

`func (o *TaskInfo) GetScheduleTaskIdOk() (*int64, bool)`

GetScheduleTaskIdOk returns a tuple with the ScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskId

`func (o *TaskInfo) SetScheduleTaskId(v int64)`

SetScheduleTaskId sets ScheduleTaskId field to given value.

### HasScheduleTaskId

`func (o *TaskInfo) HasScheduleTaskId() bool`

HasScheduleTaskId returns a boolean if a field has been set.

### SetScheduleTaskIdNil

`func (o *TaskInfo) SetScheduleTaskIdNil(b bool)`

 SetScheduleTaskIdNil sets the value for ScheduleTaskId to be an explicit nil

### UnsetScheduleTaskId
`func (o *TaskInfo) UnsetScheduleTaskId()`

UnsetScheduleTaskId ensures that no value is present for ScheduleTaskId, not even an explicit nil

