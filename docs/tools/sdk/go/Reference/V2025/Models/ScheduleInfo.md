---
id: v2025-schedule-info
title: ScheduleInfo
pagination_label: ScheduleInfo
sidebar_label: ScheduleInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduleInfo', 'V2025ScheduleInfo'] 
slug: /tools/sdk/go/v2025/models/schedule-info
tags: ['SDK', 'Software Development Kit', 'ScheduleInfo', 'V2025ScheduleInfo']
---

# ScheduleInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleTaskId** | Pointer to **int64** | The unique identifier for the scheduled task. | [optional] 
**ScheduleTaskName** | Pointer to **NullableString** | The display name of the scheduled task. | [optional] 
**TaskTypeName** | Pointer to **NullableString** | The type or category of the scheduled task. | [optional] 
**Interval** | Pointer to **int32** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**ScheduleType** | Pointer to **NullableString** | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [optional] 
**Active** | Pointer to **bool** | Indicates whether the scheduled task is currently active. | [optional] [default to false]
**StartTime** | Pointer to **NullableInt64** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**EndTime** | Pointer to **NullableInt64** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**DaysOfWeek** | Pointer to **[]string** | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [optional] 
**RunAfterScheduleTaskId** | Pointer to **NullableInt64** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**RunAfterScheduleTaskName** | Pointer to **NullableString** | The name of the scheduled task that must complete before this task runs. | [optional] 
**ApplicationId** | Pointer to **NullableInt64** | The unique identifier of the application associated with the scheduled task. | [optional] 
**CreatedByDisplayName** | Pointer to **NullableString** | The display name of the user who created the scheduled task. | [optional] 
**NextRun** | Pointer to **NullableInt64** | The next scheduled run time for the task, represented as epoch seconds. | [optional] 
**LastRun** | Pointer to **NullableInt64** | The last run time of the task, represented as epoch seconds. | [optional] 

## Methods

### NewScheduleInfo

`func NewScheduleInfo() *ScheduleInfo`

NewScheduleInfo instantiates a new ScheduleInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleInfoWithDefaults

`func NewScheduleInfoWithDefaults() *ScheduleInfo`

NewScheduleInfoWithDefaults instantiates a new ScheduleInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleTaskId

`func (o *ScheduleInfo) GetScheduleTaskId() int64`

GetScheduleTaskId returns the ScheduleTaskId field if non-nil, zero value otherwise.

### GetScheduleTaskIdOk

`func (o *ScheduleInfo) GetScheduleTaskIdOk() (*int64, bool)`

GetScheduleTaskIdOk returns a tuple with the ScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskId

`func (o *ScheduleInfo) SetScheduleTaskId(v int64)`

SetScheduleTaskId sets ScheduleTaskId field to given value.

### HasScheduleTaskId

`func (o *ScheduleInfo) HasScheduleTaskId() bool`

HasScheduleTaskId returns a boolean if a field has been set.

### GetScheduleTaskName

`func (o *ScheduleInfo) GetScheduleTaskName() string`

GetScheduleTaskName returns the ScheduleTaskName field if non-nil, zero value otherwise.

### GetScheduleTaskNameOk

`func (o *ScheduleInfo) GetScheduleTaskNameOk() (*string, bool)`

GetScheduleTaskNameOk returns a tuple with the ScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskName

`func (o *ScheduleInfo) SetScheduleTaskName(v string)`

SetScheduleTaskName sets ScheduleTaskName field to given value.

### HasScheduleTaskName

`func (o *ScheduleInfo) HasScheduleTaskName() bool`

HasScheduleTaskName returns a boolean if a field has been set.

### SetScheduleTaskNameNil

`func (o *ScheduleInfo) SetScheduleTaskNameNil(b bool)`

 SetScheduleTaskNameNil sets the value for ScheduleTaskName to be an explicit nil

### UnsetScheduleTaskName
`func (o *ScheduleInfo) UnsetScheduleTaskName()`

UnsetScheduleTaskName ensures that no value is present for ScheduleTaskName, not even an explicit nil
### GetTaskTypeName

`func (o *ScheduleInfo) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *ScheduleInfo) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *ScheduleInfo) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *ScheduleInfo) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *ScheduleInfo) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *ScheduleInfo) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetInterval

`func (o *ScheduleInfo) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ScheduleInfo) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ScheduleInfo) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ScheduleInfo) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetScheduleType

`func (o *ScheduleInfo) GetScheduleType() string`

GetScheduleType returns the ScheduleType field if non-nil, zero value otherwise.

### GetScheduleTypeOk

`func (o *ScheduleInfo) GetScheduleTypeOk() (*string, bool)`

GetScheduleTypeOk returns a tuple with the ScheduleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleType

`func (o *ScheduleInfo) SetScheduleType(v string)`

SetScheduleType sets ScheduleType field to given value.

### HasScheduleType

`func (o *ScheduleInfo) HasScheduleType() bool`

HasScheduleType returns a boolean if a field has been set.

### SetScheduleTypeNil

`func (o *ScheduleInfo) SetScheduleTypeNil(b bool)`

 SetScheduleTypeNil sets the value for ScheduleType to be an explicit nil

### UnsetScheduleType
`func (o *ScheduleInfo) UnsetScheduleType()`

UnsetScheduleType ensures that no value is present for ScheduleType, not even an explicit nil
### GetActive

`func (o *ScheduleInfo) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ScheduleInfo) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ScheduleInfo) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ScheduleInfo) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetStartTime

`func (o *ScheduleInfo) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *ScheduleInfo) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *ScheduleInfo) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *ScheduleInfo) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### SetStartTimeNil

`func (o *ScheduleInfo) SetStartTimeNil(b bool)`

 SetStartTimeNil sets the value for StartTime to be an explicit nil

### UnsetStartTime
`func (o *ScheduleInfo) UnsetStartTime()`

UnsetStartTime ensures that no value is present for StartTime, not even an explicit nil
### GetEndTime

`func (o *ScheduleInfo) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *ScheduleInfo) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *ScheduleInfo) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *ScheduleInfo) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### SetEndTimeNil

`func (o *ScheduleInfo) SetEndTimeNil(b bool)`

 SetEndTimeNil sets the value for EndTime to be an explicit nil

### UnsetEndTime
`func (o *ScheduleInfo) UnsetEndTime()`

UnsetEndTime ensures that no value is present for EndTime, not even an explicit nil
### GetDaysOfWeek

`func (o *ScheduleInfo) GetDaysOfWeek() []string`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *ScheduleInfo) GetDaysOfWeekOk() (*[]string, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *ScheduleInfo) SetDaysOfWeek(v []string)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *ScheduleInfo) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### SetDaysOfWeekNil

`func (o *ScheduleInfo) SetDaysOfWeekNil(b bool)`

 SetDaysOfWeekNil sets the value for DaysOfWeek to be an explicit nil

### UnsetDaysOfWeek
`func (o *ScheduleInfo) UnsetDaysOfWeek()`

UnsetDaysOfWeek ensures that no value is present for DaysOfWeek, not even an explicit nil
### GetRunAfterScheduleTaskId

`func (o *ScheduleInfo) GetRunAfterScheduleTaskId() int64`

GetRunAfterScheduleTaskId returns the RunAfterScheduleTaskId field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskIdOk

`func (o *ScheduleInfo) GetRunAfterScheduleTaskIdOk() (*int64, bool)`

GetRunAfterScheduleTaskIdOk returns a tuple with the RunAfterScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskId

`func (o *ScheduleInfo) SetRunAfterScheduleTaskId(v int64)`

SetRunAfterScheduleTaskId sets RunAfterScheduleTaskId field to given value.

### HasRunAfterScheduleTaskId

`func (o *ScheduleInfo) HasRunAfterScheduleTaskId() bool`

HasRunAfterScheduleTaskId returns a boolean if a field has been set.

### SetRunAfterScheduleTaskIdNil

`func (o *ScheduleInfo) SetRunAfterScheduleTaskIdNil(b bool)`

 SetRunAfterScheduleTaskIdNil sets the value for RunAfterScheduleTaskId to be an explicit nil

### UnsetRunAfterScheduleTaskId
`func (o *ScheduleInfo) UnsetRunAfterScheduleTaskId()`

UnsetRunAfterScheduleTaskId ensures that no value is present for RunAfterScheduleTaskId, not even an explicit nil
### GetRunAfterScheduleTaskName

`func (o *ScheduleInfo) GetRunAfterScheduleTaskName() string`

GetRunAfterScheduleTaskName returns the RunAfterScheduleTaskName field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskNameOk

`func (o *ScheduleInfo) GetRunAfterScheduleTaskNameOk() (*string, bool)`

GetRunAfterScheduleTaskNameOk returns a tuple with the RunAfterScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskName

`func (o *ScheduleInfo) SetRunAfterScheduleTaskName(v string)`

SetRunAfterScheduleTaskName sets RunAfterScheduleTaskName field to given value.

### HasRunAfterScheduleTaskName

`func (o *ScheduleInfo) HasRunAfterScheduleTaskName() bool`

HasRunAfterScheduleTaskName returns a boolean if a field has been set.

### SetRunAfterScheduleTaskNameNil

`func (o *ScheduleInfo) SetRunAfterScheduleTaskNameNil(b bool)`

 SetRunAfterScheduleTaskNameNil sets the value for RunAfterScheduleTaskName to be an explicit nil

### UnsetRunAfterScheduleTaskName
`func (o *ScheduleInfo) UnsetRunAfterScheduleTaskName()`

UnsetRunAfterScheduleTaskName ensures that no value is present for RunAfterScheduleTaskName, not even an explicit nil
### GetApplicationId

`func (o *ScheduleInfo) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *ScheduleInfo) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *ScheduleInfo) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *ScheduleInfo) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### SetApplicationIdNil

`func (o *ScheduleInfo) SetApplicationIdNil(b bool)`

 SetApplicationIdNil sets the value for ApplicationId to be an explicit nil

### UnsetApplicationId
`func (o *ScheduleInfo) UnsetApplicationId()`

UnsetApplicationId ensures that no value is present for ApplicationId, not even an explicit nil
### GetCreatedByDisplayName

`func (o *ScheduleInfo) GetCreatedByDisplayName() string`

GetCreatedByDisplayName returns the CreatedByDisplayName field if non-nil, zero value otherwise.

### GetCreatedByDisplayNameOk

`func (o *ScheduleInfo) GetCreatedByDisplayNameOk() (*string, bool)`

GetCreatedByDisplayNameOk returns a tuple with the CreatedByDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByDisplayName

`func (o *ScheduleInfo) SetCreatedByDisplayName(v string)`

SetCreatedByDisplayName sets CreatedByDisplayName field to given value.

### HasCreatedByDisplayName

`func (o *ScheduleInfo) HasCreatedByDisplayName() bool`

HasCreatedByDisplayName returns a boolean if a field has been set.

### SetCreatedByDisplayNameNil

`func (o *ScheduleInfo) SetCreatedByDisplayNameNil(b bool)`

 SetCreatedByDisplayNameNil sets the value for CreatedByDisplayName to be an explicit nil

### UnsetCreatedByDisplayName
`func (o *ScheduleInfo) UnsetCreatedByDisplayName()`

UnsetCreatedByDisplayName ensures that no value is present for CreatedByDisplayName, not even an explicit nil
### GetNextRun

`func (o *ScheduleInfo) GetNextRun() int64`

GetNextRun returns the NextRun field if non-nil, zero value otherwise.

### GetNextRunOk

`func (o *ScheduleInfo) GetNextRunOk() (*int64, bool)`

GetNextRunOk returns a tuple with the NextRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextRun

`func (o *ScheduleInfo) SetNextRun(v int64)`

SetNextRun sets NextRun field to given value.

### HasNextRun

`func (o *ScheduleInfo) HasNextRun() bool`

HasNextRun returns a boolean if a field has been set.

### SetNextRunNil

`func (o *ScheduleInfo) SetNextRunNil(b bool)`

 SetNextRunNil sets the value for NextRun to be an explicit nil

### UnsetNextRun
`func (o *ScheduleInfo) UnsetNextRun()`

UnsetNextRun ensures that no value is present for NextRun, not even an explicit nil
### GetLastRun

`func (o *ScheduleInfo) GetLastRun() int64`

GetLastRun returns the LastRun field if non-nil, zero value otherwise.

### GetLastRunOk

`func (o *ScheduleInfo) GetLastRunOk() (*int64, bool)`

GetLastRunOk returns a tuple with the LastRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRun

`func (o *ScheduleInfo) SetLastRun(v int64)`

SetLastRun sets LastRun field to given value.

### HasLastRun

`func (o *ScheduleInfo) HasLastRun() bool`

HasLastRun returns a boolean if a field has been set.

### SetLastRunNil

`func (o *ScheduleInfo) SetLastRunNil(b bool)`

 SetLastRunNil sets the value for LastRun to be an explicit nil

### UnsetLastRun
`func (o *ScheduleInfo) UnsetLastRun()`

UnsetLastRun ensures that no value is present for LastRun, not even an explicit nil

