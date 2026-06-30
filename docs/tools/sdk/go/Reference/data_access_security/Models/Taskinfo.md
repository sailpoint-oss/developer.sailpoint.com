---
id: v1-taskinfo
title: Taskinfo
pagination_label: Taskinfo
sidebar_label: Taskinfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskinfo', 'V1Taskinfo'] 
slug: /tools/sdk/go/dataaccesssecurity/models/taskinfo
tags: ['SDK', 'Software Development Kit', 'Taskinfo', 'V1Taskinfo']
---

# Taskinfo

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

### NewTaskinfo

`func NewTaskinfo() *Taskinfo`

NewTaskinfo instantiates a new Taskinfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskinfoWithDefaults

`func NewTaskinfoWithDefaults() *Taskinfo`

NewTaskinfoWithDefaults instantiates a new Taskinfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskId

`func (o *Taskinfo) GetTaskId() int64`

GetTaskId returns the TaskId field if non-nil, zero value otherwise.

### GetTaskIdOk

`func (o *Taskinfo) GetTaskIdOk() (*int64, bool)`

GetTaskIdOk returns a tuple with the TaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskId

`func (o *Taskinfo) SetTaskId(v int64)`

SetTaskId sets TaskId field to given value.

### HasTaskId

`func (o *Taskinfo) HasTaskId() bool`

HasTaskId returns a boolean if a field has been set.

### SetTaskIdNil

`func (o *Taskinfo) SetTaskIdNil(b bool)`

 SetTaskIdNil sets the value for TaskId to be an explicit nil

### UnsetTaskId
`func (o *Taskinfo) UnsetTaskId()`

UnsetTaskId ensures that no value is present for TaskId, not even an explicit nil
### GetTaskTypeName

`func (o *Taskinfo) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *Taskinfo) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *Taskinfo) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *Taskinfo) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *Taskinfo) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *Taskinfo) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetStartTime

`func (o *Taskinfo) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Taskinfo) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Taskinfo) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *Taskinfo) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### SetStartTimeNil

`func (o *Taskinfo) SetStartTimeNil(b bool)`

 SetStartTimeNil sets the value for StartTime to be an explicit nil

### UnsetStartTime
`func (o *Taskinfo) UnsetStartTime()`

UnsetStartTime ensures that no value is present for StartTime, not even an explicit nil
### GetEndTime

`func (o *Taskinfo) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *Taskinfo) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *Taskinfo) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *Taskinfo) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### SetEndTimeNil

`func (o *Taskinfo) SetEndTimeNil(b bool)`

 SetEndTimeNil sets the value for EndTime to be an explicit nil

### UnsetEndTime
`func (o *Taskinfo) UnsetEndTime()`

UnsetEndTime ensures that no value is present for EndTime, not even an explicit nil
### GetTaskName

`func (o *Taskinfo) GetTaskName() string`

GetTaskName returns the TaskName field if non-nil, zero value otherwise.

### GetTaskNameOk

`func (o *Taskinfo) GetTaskNameOk() (*string, bool)`

GetTaskNameOk returns a tuple with the TaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskName

`func (o *Taskinfo) SetTaskName(v string)`

SetTaskName sets TaskName field to given value.

### HasTaskName

`func (o *Taskinfo) HasTaskName() bool`

HasTaskName returns a boolean if a field has been set.

### SetTaskNameNil

`func (o *Taskinfo) SetTaskNameNil(b bool)`

 SetTaskNameNil sets the value for TaskName to be an explicit nil

### UnsetTaskName
`func (o *Taskinfo) UnsetTaskName()`

UnsetTaskName ensures that no value is present for TaskName, not even an explicit nil
### GetCreatedByDisplayName

`func (o *Taskinfo) GetCreatedByDisplayName() string`

GetCreatedByDisplayName returns the CreatedByDisplayName field if non-nil, zero value otherwise.

### GetCreatedByDisplayNameOk

`func (o *Taskinfo) GetCreatedByDisplayNameOk() (*string, bool)`

GetCreatedByDisplayNameOk returns a tuple with the CreatedByDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByDisplayName

`func (o *Taskinfo) SetCreatedByDisplayName(v string)`

SetCreatedByDisplayName sets CreatedByDisplayName field to given value.

### HasCreatedByDisplayName

`func (o *Taskinfo) HasCreatedByDisplayName() bool`

HasCreatedByDisplayName returns a boolean if a field has been set.

### SetCreatedByDisplayNameNil

`func (o *Taskinfo) SetCreatedByDisplayNameNil(b bool)`

 SetCreatedByDisplayNameNil sets the value for CreatedByDisplayName to be an explicit nil

### UnsetCreatedByDisplayName
`func (o *Taskinfo) UnsetCreatedByDisplayName()`

UnsetCreatedByDisplayName ensures that no value is present for CreatedByDisplayName, not even an explicit nil
### GetProgress

`func (o *Taskinfo) GetProgress() int32`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *Taskinfo) GetProgressOk() (*int32, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *Taskinfo) SetProgress(v int32)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *Taskinfo) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### GetStatus

`func (o *Taskinfo) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Taskinfo) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Taskinfo) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Taskinfo) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Taskinfo) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Taskinfo) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetDetails

`func (o *Taskinfo) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *Taskinfo) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *Taskinfo) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *Taskinfo) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### SetDetailsNil

`func (o *Taskinfo) SetDetailsNil(b bool)`

 SetDetailsNil sets the value for Details to be an explicit nil

### UnsetDetails
`func (o *Taskinfo) UnsetDetails()`

UnsetDetails ensures that no value is present for Details, not even an explicit nil
### GetScheduleTaskId

`func (o *Taskinfo) GetScheduleTaskId() int64`

GetScheduleTaskId returns the ScheduleTaskId field if non-nil, zero value otherwise.

### GetScheduleTaskIdOk

`func (o *Taskinfo) GetScheduleTaskIdOk() (*int64, bool)`

GetScheduleTaskIdOk returns a tuple with the ScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskId

`func (o *Taskinfo) SetScheduleTaskId(v int64)`

SetScheduleTaskId sets ScheduleTaskId field to given value.

### HasScheduleTaskId

`func (o *Taskinfo) HasScheduleTaskId() bool`

HasScheduleTaskId returns a boolean if a field has been set.

### SetScheduleTaskIdNil

`func (o *Taskinfo) SetScheduleTaskIdNil(b bool)`

 SetScheduleTaskIdNil sets the value for ScheduleTaskId to be an explicit nil

### UnsetScheduleTaskId
`func (o *Taskinfo) UnsetScheduleTaskId()`

UnsetScheduleTaskId ensures that no value is present for ScheduleTaskId, not even an explicit nil

