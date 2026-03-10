---
id: v2025-update-schedule-request
title: UpdateScheduleRequest
pagination_label: UpdateScheduleRequest
sidebar_label: UpdateScheduleRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UpdateScheduleRequest', 'V2025UpdateScheduleRequest'] 
slug: /tools/sdk/go/v2025/models/update-schedule-request
tags: ['SDK', 'Software Development Kit', 'UpdateScheduleRequest', 'V2025UpdateScheduleRequest']
---

# UpdateScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskTypeName** | Pointer to **NullableString** | The type or category of the scheduled task. | [optional] 
**ScheduleType** | Pointer to **NullableString** | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [optional] 
**Interval** | Pointer to **NullableInt32** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**ScheduleTaskName** | Pointer to **NullableString** | The display name of the scheduled task. | [optional] 
**StartTime** | Pointer to **int64** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**EndTime** | Pointer to **int64** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**DaysOfWeek** | Pointer to **[]string** | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [optional] 
**Active** | Pointer to **bool** | Indicates whether the scheduled task is currently active. | [optional] [default to false]
**RunAfterScheduleTaskId** | Pointer to **NullableInt64** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**ApplicationId** | Pointer to **NullableInt64** | The unique identifier of the application associated with the scheduled task. | [optional] 

## Methods

### NewUpdateScheduleRequest

`func NewUpdateScheduleRequest() *UpdateScheduleRequest`

NewUpdateScheduleRequest instantiates a new UpdateScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateScheduleRequestWithDefaults

`func NewUpdateScheduleRequestWithDefaults() *UpdateScheduleRequest`

NewUpdateScheduleRequestWithDefaults instantiates a new UpdateScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskTypeName

`func (o *UpdateScheduleRequest) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *UpdateScheduleRequest) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *UpdateScheduleRequest) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *UpdateScheduleRequest) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *UpdateScheduleRequest) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *UpdateScheduleRequest) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetScheduleType

`func (o *UpdateScheduleRequest) GetScheduleType() string`

GetScheduleType returns the ScheduleType field if non-nil, zero value otherwise.

### GetScheduleTypeOk

`func (o *UpdateScheduleRequest) GetScheduleTypeOk() (*string, bool)`

GetScheduleTypeOk returns a tuple with the ScheduleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleType

`func (o *UpdateScheduleRequest) SetScheduleType(v string)`

SetScheduleType sets ScheduleType field to given value.

### HasScheduleType

`func (o *UpdateScheduleRequest) HasScheduleType() bool`

HasScheduleType returns a boolean if a field has been set.

### SetScheduleTypeNil

`func (o *UpdateScheduleRequest) SetScheduleTypeNil(b bool)`

 SetScheduleTypeNil sets the value for ScheduleType to be an explicit nil

### UnsetScheduleType
`func (o *UpdateScheduleRequest) UnsetScheduleType()`

UnsetScheduleType ensures that no value is present for ScheduleType, not even an explicit nil
### GetInterval

`func (o *UpdateScheduleRequest) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *UpdateScheduleRequest) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *UpdateScheduleRequest) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *UpdateScheduleRequest) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *UpdateScheduleRequest) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *UpdateScheduleRequest) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil
### GetScheduleTaskName

`func (o *UpdateScheduleRequest) GetScheduleTaskName() string`

GetScheduleTaskName returns the ScheduleTaskName field if non-nil, zero value otherwise.

### GetScheduleTaskNameOk

`func (o *UpdateScheduleRequest) GetScheduleTaskNameOk() (*string, bool)`

GetScheduleTaskNameOk returns a tuple with the ScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskName

`func (o *UpdateScheduleRequest) SetScheduleTaskName(v string)`

SetScheduleTaskName sets ScheduleTaskName field to given value.

### HasScheduleTaskName

`func (o *UpdateScheduleRequest) HasScheduleTaskName() bool`

HasScheduleTaskName returns a boolean if a field has been set.

### SetScheduleTaskNameNil

`func (o *UpdateScheduleRequest) SetScheduleTaskNameNil(b bool)`

 SetScheduleTaskNameNil sets the value for ScheduleTaskName to be an explicit nil

### UnsetScheduleTaskName
`func (o *UpdateScheduleRequest) UnsetScheduleTaskName()`

UnsetScheduleTaskName ensures that no value is present for ScheduleTaskName, not even an explicit nil
### GetStartTime

`func (o *UpdateScheduleRequest) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *UpdateScheduleRequest) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *UpdateScheduleRequest) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *UpdateScheduleRequest) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *UpdateScheduleRequest) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *UpdateScheduleRequest) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *UpdateScheduleRequest) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *UpdateScheduleRequest) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *UpdateScheduleRequest) GetDaysOfWeek() []string`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *UpdateScheduleRequest) GetDaysOfWeekOk() (*[]string, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *UpdateScheduleRequest) SetDaysOfWeek(v []string)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *UpdateScheduleRequest) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### SetDaysOfWeekNil

`func (o *UpdateScheduleRequest) SetDaysOfWeekNil(b bool)`

 SetDaysOfWeekNil sets the value for DaysOfWeek to be an explicit nil

### UnsetDaysOfWeek
`func (o *UpdateScheduleRequest) UnsetDaysOfWeek()`

UnsetDaysOfWeek ensures that no value is present for DaysOfWeek, not even an explicit nil
### GetActive

`func (o *UpdateScheduleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *UpdateScheduleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *UpdateScheduleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *UpdateScheduleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRunAfterScheduleTaskId

`func (o *UpdateScheduleRequest) GetRunAfterScheduleTaskId() int64`

GetRunAfterScheduleTaskId returns the RunAfterScheduleTaskId field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskIdOk

`func (o *UpdateScheduleRequest) GetRunAfterScheduleTaskIdOk() (*int64, bool)`

GetRunAfterScheduleTaskIdOk returns a tuple with the RunAfterScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskId

`func (o *UpdateScheduleRequest) SetRunAfterScheduleTaskId(v int64)`

SetRunAfterScheduleTaskId sets RunAfterScheduleTaskId field to given value.

### HasRunAfterScheduleTaskId

`func (o *UpdateScheduleRequest) HasRunAfterScheduleTaskId() bool`

HasRunAfterScheduleTaskId returns a boolean if a field has been set.

### SetRunAfterScheduleTaskIdNil

`func (o *UpdateScheduleRequest) SetRunAfterScheduleTaskIdNil(b bool)`

 SetRunAfterScheduleTaskIdNil sets the value for RunAfterScheduleTaskId to be an explicit nil

### UnsetRunAfterScheduleTaskId
`func (o *UpdateScheduleRequest) UnsetRunAfterScheduleTaskId()`

UnsetRunAfterScheduleTaskId ensures that no value is present for RunAfterScheduleTaskId, not even an explicit nil
### GetApplicationId

`func (o *UpdateScheduleRequest) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *UpdateScheduleRequest) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *UpdateScheduleRequest) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *UpdateScheduleRequest) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### SetApplicationIdNil

`func (o *UpdateScheduleRequest) SetApplicationIdNil(b bool)`

 SetApplicationIdNil sets the value for ApplicationId to be an explicit nil

### UnsetApplicationId
`func (o *UpdateScheduleRequest) UnsetApplicationId()`

UnsetApplicationId ensures that no value is present for ApplicationId, not even an explicit nil

