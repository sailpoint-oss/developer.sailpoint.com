---
id: v2025-create-schedule-request
title: CreateScheduleRequest
pagination_label: CreateScheduleRequest
sidebar_label: CreateScheduleRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateScheduleRequest', 'V2025CreateScheduleRequest'] 
slug: /tools/sdk/go/v2025/models/create-schedule-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduleRequest', 'V2025CreateScheduleRequest']
---

# CreateScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskTypeName** | Pointer to **NullableString** | The type or category of the scheduled task. | [optional] 
**ScheduleType** | Pointer to **NullableString** | The scheduling type, such as \"Daily\", \"Weekly\" etc. | [optional] 
**Interval** | Pointer to **NullableInt32** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**ScheduleTaskName** | Pointer to **NullableString** | The display name of the scheduled task. | [optional] 
**StartTime** | Pointer to **int64** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**EndTime** | Pointer to **int64** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**DaysOfWeek** | Pointer to **[]string** | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [optional] 
**Active** | Pointer to **bool** | Indicates whether the scheduled task is currently active. | [optional] [default to false]
**RunAfterScheduleTaskId** | Pointer to **NullableInt64** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**ApplicationId** | Pointer to **NullableInt64** | The unique identifier of the application associated with the scheduled task. | [optional] 

## Methods

### NewCreateScheduleRequest

`func NewCreateScheduleRequest() *CreateScheduleRequest`

NewCreateScheduleRequest instantiates a new CreateScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateScheduleRequestWithDefaults

`func NewCreateScheduleRequestWithDefaults() *CreateScheduleRequest`

NewCreateScheduleRequestWithDefaults instantiates a new CreateScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskTypeName

`func (o *CreateScheduleRequest) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *CreateScheduleRequest) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *CreateScheduleRequest) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *CreateScheduleRequest) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *CreateScheduleRequest) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *CreateScheduleRequest) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetScheduleType

`func (o *CreateScheduleRequest) GetScheduleType() string`

GetScheduleType returns the ScheduleType field if non-nil, zero value otherwise.

### GetScheduleTypeOk

`func (o *CreateScheduleRequest) GetScheduleTypeOk() (*string, bool)`

GetScheduleTypeOk returns a tuple with the ScheduleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleType

`func (o *CreateScheduleRequest) SetScheduleType(v string)`

SetScheduleType sets ScheduleType field to given value.

### HasScheduleType

`func (o *CreateScheduleRequest) HasScheduleType() bool`

HasScheduleType returns a boolean if a field has been set.

### SetScheduleTypeNil

`func (o *CreateScheduleRequest) SetScheduleTypeNil(b bool)`

 SetScheduleTypeNil sets the value for ScheduleType to be an explicit nil

### UnsetScheduleType
`func (o *CreateScheduleRequest) UnsetScheduleType()`

UnsetScheduleType ensures that no value is present for ScheduleType, not even an explicit nil
### GetInterval

`func (o *CreateScheduleRequest) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *CreateScheduleRequest) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *CreateScheduleRequest) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *CreateScheduleRequest) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *CreateScheduleRequest) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *CreateScheduleRequest) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil
### GetScheduleTaskName

`func (o *CreateScheduleRequest) GetScheduleTaskName() string`

GetScheduleTaskName returns the ScheduleTaskName field if non-nil, zero value otherwise.

### GetScheduleTaskNameOk

`func (o *CreateScheduleRequest) GetScheduleTaskNameOk() (*string, bool)`

GetScheduleTaskNameOk returns a tuple with the ScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskName

`func (o *CreateScheduleRequest) SetScheduleTaskName(v string)`

SetScheduleTaskName sets ScheduleTaskName field to given value.

### HasScheduleTaskName

`func (o *CreateScheduleRequest) HasScheduleTaskName() bool`

HasScheduleTaskName returns a boolean if a field has been set.

### SetScheduleTaskNameNil

`func (o *CreateScheduleRequest) SetScheduleTaskNameNil(b bool)`

 SetScheduleTaskNameNil sets the value for ScheduleTaskName to be an explicit nil

### UnsetScheduleTaskName
`func (o *CreateScheduleRequest) UnsetScheduleTaskName()`

UnsetScheduleTaskName ensures that no value is present for ScheduleTaskName, not even an explicit nil
### GetStartTime

`func (o *CreateScheduleRequest) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *CreateScheduleRequest) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *CreateScheduleRequest) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *CreateScheduleRequest) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *CreateScheduleRequest) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *CreateScheduleRequest) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *CreateScheduleRequest) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *CreateScheduleRequest) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *CreateScheduleRequest) GetDaysOfWeek() []string`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *CreateScheduleRequest) GetDaysOfWeekOk() (*[]string, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *CreateScheduleRequest) SetDaysOfWeek(v []string)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *CreateScheduleRequest) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### SetDaysOfWeekNil

`func (o *CreateScheduleRequest) SetDaysOfWeekNil(b bool)`

 SetDaysOfWeekNil sets the value for DaysOfWeek to be an explicit nil

### UnsetDaysOfWeek
`func (o *CreateScheduleRequest) UnsetDaysOfWeek()`

UnsetDaysOfWeek ensures that no value is present for DaysOfWeek, not even an explicit nil
### GetActive

`func (o *CreateScheduleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CreateScheduleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CreateScheduleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CreateScheduleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRunAfterScheduleTaskId

`func (o *CreateScheduleRequest) GetRunAfterScheduleTaskId() int64`

GetRunAfterScheduleTaskId returns the RunAfterScheduleTaskId field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskIdOk

`func (o *CreateScheduleRequest) GetRunAfterScheduleTaskIdOk() (*int64, bool)`

GetRunAfterScheduleTaskIdOk returns a tuple with the RunAfterScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskId

`func (o *CreateScheduleRequest) SetRunAfterScheduleTaskId(v int64)`

SetRunAfterScheduleTaskId sets RunAfterScheduleTaskId field to given value.

### HasRunAfterScheduleTaskId

`func (o *CreateScheduleRequest) HasRunAfterScheduleTaskId() bool`

HasRunAfterScheduleTaskId returns a boolean if a field has been set.

### SetRunAfterScheduleTaskIdNil

`func (o *CreateScheduleRequest) SetRunAfterScheduleTaskIdNil(b bool)`

 SetRunAfterScheduleTaskIdNil sets the value for RunAfterScheduleTaskId to be an explicit nil

### UnsetRunAfterScheduleTaskId
`func (o *CreateScheduleRequest) UnsetRunAfterScheduleTaskId()`

UnsetRunAfterScheduleTaskId ensures that no value is present for RunAfterScheduleTaskId, not even an explicit nil
### GetApplicationId

`func (o *CreateScheduleRequest) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *CreateScheduleRequest) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *CreateScheduleRequest) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *CreateScheduleRequest) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### SetApplicationIdNil

`func (o *CreateScheduleRequest) SetApplicationIdNil(b bool)`

 SetApplicationIdNil sets the value for ApplicationId to be an explicit nil

### UnsetApplicationId
`func (o *CreateScheduleRequest) UnsetApplicationId()`

UnsetApplicationId ensures that no value is present for ApplicationId, not even an explicit nil

