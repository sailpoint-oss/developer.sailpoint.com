---
id: v1-scheduleinfo
title: Scheduleinfo
pagination_label: Scheduleinfo
sidebar_label: Scheduleinfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Scheduleinfo', 'V1Scheduleinfo'] 
slug: /tools/sdk/go/dataaccesssecurity/models/scheduleinfo
tags: ['SDK', 'Software Development Kit', 'Scheduleinfo', 'V1Scheduleinfo']
---

# Scheduleinfo

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

### NewScheduleinfo

`func NewScheduleinfo() *Scheduleinfo`

NewScheduleinfo instantiates a new Scheduleinfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleinfoWithDefaults

`func NewScheduleinfoWithDefaults() *Scheduleinfo`

NewScheduleinfoWithDefaults instantiates a new Scheduleinfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleTaskId

`func (o *Scheduleinfo) GetScheduleTaskId() int64`

GetScheduleTaskId returns the ScheduleTaskId field if non-nil, zero value otherwise.

### GetScheduleTaskIdOk

`func (o *Scheduleinfo) GetScheduleTaskIdOk() (*int64, bool)`

GetScheduleTaskIdOk returns a tuple with the ScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskId

`func (o *Scheduleinfo) SetScheduleTaskId(v int64)`

SetScheduleTaskId sets ScheduleTaskId field to given value.

### HasScheduleTaskId

`func (o *Scheduleinfo) HasScheduleTaskId() bool`

HasScheduleTaskId returns a boolean if a field has been set.

### GetScheduleTaskName

`func (o *Scheduleinfo) GetScheduleTaskName() string`

GetScheduleTaskName returns the ScheduleTaskName field if non-nil, zero value otherwise.

### GetScheduleTaskNameOk

`func (o *Scheduleinfo) GetScheduleTaskNameOk() (*string, bool)`

GetScheduleTaskNameOk returns a tuple with the ScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskName

`func (o *Scheduleinfo) SetScheduleTaskName(v string)`

SetScheduleTaskName sets ScheduleTaskName field to given value.

### HasScheduleTaskName

`func (o *Scheduleinfo) HasScheduleTaskName() bool`

HasScheduleTaskName returns a boolean if a field has been set.

### SetScheduleTaskNameNil

`func (o *Scheduleinfo) SetScheduleTaskNameNil(b bool)`

 SetScheduleTaskNameNil sets the value for ScheduleTaskName to be an explicit nil

### UnsetScheduleTaskName
`func (o *Scheduleinfo) UnsetScheduleTaskName()`

UnsetScheduleTaskName ensures that no value is present for ScheduleTaskName, not even an explicit nil
### GetTaskTypeName

`func (o *Scheduleinfo) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *Scheduleinfo) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *Scheduleinfo) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *Scheduleinfo) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *Scheduleinfo) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *Scheduleinfo) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetInterval

`func (o *Scheduleinfo) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Scheduleinfo) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Scheduleinfo) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Scheduleinfo) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetScheduleType

`func (o *Scheduleinfo) GetScheduleType() string`

GetScheduleType returns the ScheduleType field if non-nil, zero value otherwise.

### GetScheduleTypeOk

`func (o *Scheduleinfo) GetScheduleTypeOk() (*string, bool)`

GetScheduleTypeOk returns a tuple with the ScheduleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleType

`func (o *Scheduleinfo) SetScheduleType(v string)`

SetScheduleType sets ScheduleType field to given value.

### HasScheduleType

`func (o *Scheduleinfo) HasScheduleType() bool`

HasScheduleType returns a boolean if a field has been set.

### SetScheduleTypeNil

`func (o *Scheduleinfo) SetScheduleTypeNil(b bool)`

 SetScheduleTypeNil sets the value for ScheduleType to be an explicit nil

### UnsetScheduleType
`func (o *Scheduleinfo) UnsetScheduleType()`

UnsetScheduleType ensures that no value is present for ScheduleType, not even an explicit nil
### GetActive

`func (o *Scheduleinfo) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Scheduleinfo) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Scheduleinfo) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Scheduleinfo) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetStartTime

`func (o *Scheduleinfo) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Scheduleinfo) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Scheduleinfo) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *Scheduleinfo) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### SetStartTimeNil

`func (o *Scheduleinfo) SetStartTimeNil(b bool)`

 SetStartTimeNil sets the value for StartTime to be an explicit nil

### UnsetStartTime
`func (o *Scheduleinfo) UnsetStartTime()`

UnsetStartTime ensures that no value is present for StartTime, not even an explicit nil
### GetEndTime

`func (o *Scheduleinfo) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *Scheduleinfo) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *Scheduleinfo) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *Scheduleinfo) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### SetEndTimeNil

`func (o *Scheduleinfo) SetEndTimeNil(b bool)`

 SetEndTimeNil sets the value for EndTime to be an explicit nil

### UnsetEndTime
`func (o *Scheduleinfo) UnsetEndTime()`

UnsetEndTime ensures that no value is present for EndTime, not even an explicit nil
### GetDaysOfWeek

`func (o *Scheduleinfo) GetDaysOfWeek() []string`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *Scheduleinfo) GetDaysOfWeekOk() (*[]string, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *Scheduleinfo) SetDaysOfWeek(v []string)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *Scheduleinfo) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### SetDaysOfWeekNil

`func (o *Scheduleinfo) SetDaysOfWeekNil(b bool)`

 SetDaysOfWeekNil sets the value for DaysOfWeek to be an explicit nil

### UnsetDaysOfWeek
`func (o *Scheduleinfo) UnsetDaysOfWeek()`

UnsetDaysOfWeek ensures that no value is present for DaysOfWeek, not even an explicit nil
### GetRunAfterScheduleTaskId

`func (o *Scheduleinfo) GetRunAfterScheduleTaskId() int64`

GetRunAfterScheduleTaskId returns the RunAfterScheduleTaskId field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskIdOk

`func (o *Scheduleinfo) GetRunAfterScheduleTaskIdOk() (*int64, bool)`

GetRunAfterScheduleTaskIdOk returns a tuple with the RunAfterScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskId

`func (o *Scheduleinfo) SetRunAfterScheduleTaskId(v int64)`

SetRunAfterScheduleTaskId sets RunAfterScheduleTaskId field to given value.

### HasRunAfterScheduleTaskId

`func (o *Scheduleinfo) HasRunAfterScheduleTaskId() bool`

HasRunAfterScheduleTaskId returns a boolean if a field has been set.

### SetRunAfterScheduleTaskIdNil

`func (o *Scheduleinfo) SetRunAfterScheduleTaskIdNil(b bool)`

 SetRunAfterScheduleTaskIdNil sets the value for RunAfterScheduleTaskId to be an explicit nil

### UnsetRunAfterScheduleTaskId
`func (o *Scheduleinfo) UnsetRunAfterScheduleTaskId()`

UnsetRunAfterScheduleTaskId ensures that no value is present for RunAfterScheduleTaskId, not even an explicit nil
### GetRunAfterScheduleTaskName

`func (o *Scheduleinfo) GetRunAfterScheduleTaskName() string`

GetRunAfterScheduleTaskName returns the RunAfterScheduleTaskName field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskNameOk

`func (o *Scheduleinfo) GetRunAfterScheduleTaskNameOk() (*string, bool)`

GetRunAfterScheduleTaskNameOk returns a tuple with the RunAfterScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskName

`func (o *Scheduleinfo) SetRunAfterScheduleTaskName(v string)`

SetRunAfterScheduleTaskName sets RunAfterScheduleTaskName field to given value.

### HasRunAfterScheduleTaskName

`func (o *Scheduleinfo) HasRunAfterScheduleTaskName() bool`

HasRunAfterScheduleTaskName returns a boolean if a field has been set.

### SetRunAfterScheduleTaskNameNil

`func (o *Scheduleinfo) SetRunAfterScheduleTaskNameNil(b bool)`

 SetRunAfterScheduleTaskNameNil sets the value for RunAfterScheduleTaskName to be an explicit nil

### UnsetRunAfterScheduleTaskName
`func (o *Scheduleinfo) UnsetRunAfterScheduleTaskName()`

UnsetRunAfterScheduleTaskName ensures that no value is present for RunAfterScheduleTaskName, not even an explicit nil
### GetApplicationId

`func (o *Scheduleinfo) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Scheduleinfo) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Scheduleinfo) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Scheduleinfo) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### SetApplicationIdNil

`func (o *Scheduleinfo) SetApplicationIdNil(b bool)`

 SetApplicationIdNil sets the value for ApplicationId to be an explicit nil

### UnsetApplicationId
`func (o *Scheduleinfo) UnsetApplicationId()`

UnsetApplicationId ensures that no value is present for ApplicationId, not even an explicit nil
### GetCreatedByDisplayName

`func (o *Scheduleinfo) GetCreatedByDisplayName() string`

GetCreatedByDisplayName returns the CreatedByDisplayName field if non-nil, zero value otherwise.

### GetCreatedByDisplayNameOk

`func (o *Scheduleinfo) GetCreatedByDisplayNameOk() (*string, bool)`

GetCreatedByDisplayNameOk returns a tuple with the CreatedByDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByDisplayName

`func (o *Scheduleinfo) SetCreatedByDisplayName(v string)`

SetCreatedByDisplayName sets CreatedByDisplayName field to given value.

### HasCreatedByDisplayName

`func (o *Scheduleinfo) HasCreatedByDisplayName() bool`

HasCreatedByDisplayName returns a boolean if a field has been set.

### SetCreatedByDisplayNameNil

`func (o *Scheduleinfo) SetCreatedByDisplayNameNil(b bool)`

 SetCreatedByDisplayNameNil sets the value for CreatedByDisplayName to be an explicit nil

### UnsetCreatedByDisplayName
`func (o *Scheduleinfo) UnsetCreatedByDisplayName()`

UnsetCreatedByDisplayName ensures that no value is present for CreatedByDisplayName, not even an explicit nil
### GetNextRun

`func (o *Scheduleinfo) GetNextRun() int64`

GetNextRun returns the NextRun field if non-nil, zero value otherwise.

### GetNextRunOk

`func (o *Scheduleinfo) GetNextRunOk() (*int64, bool)`

GetNextRunOk returns a tuple with the NextRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextRun

`func (o *Scheduleinfo) SetNextRun(v int64)`

SetNextRun sets NextRun field to given value.

### HasNextRun

`func (o *Scheduleinfo) HasNextRun() bool`

HasNextRun returns a boolean if a field has been set.

### SetNextRunNil

`func (o *Scheduleinfo) SetNextRunNil(b bool)`

 SetNextRunNil sets the value for NextRun to be an explicit nil

### UnsetNextRun
`func (o *Scheduleinfo) UnsetNextRun()`

UnsetNextRun ensures that no value is present for NextRun, not even an explicit nil
### GetLastRun

`func (o *Scheduleinfo) GetLastRun() int64`

GetLastRun returns the LastRun field if non-nil, zero value otherwise.

### GetLastRunOk

`func (o *Scheduleinfo) GetLastRunOk() (*int64, bool)`

GetLastRunOk returns a tuple with the LastRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRun

`func (o *Scheduleinfo) SetLastRun(v int64)`

SetLastRun sets LastRun field to given value.

### HasLastRun

`func (o *Scheduleinfo) HasLastRun() bool`

HasLastRun returns a boolean if a field has been set.

### SetLastRunNil

`func (o *Scheduleinfo) SetLastRunNil(b bool)`

 SetLastRunNil sets the value for LastRun to be an explicit nil

### UnsetLastRun
`func (o *Scheduleinfo) UnsetLastRun()`

UnsetLastRun ensures that no value is present for LastRun, not even an explicit nil

