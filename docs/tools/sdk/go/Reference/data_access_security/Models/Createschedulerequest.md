---
id: v1-createschedulerequest
title: Createschedulerequest
pagination_label: Createschedulerequest
sidebar_label: Createschedulerequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createschedulerequest', 'V1Createschedulerequest'] 
slug: /tools/sdk/go/dataaccesssecurity/models/createschedulerequest
tags: ['SDK', 'Software Development Kit', 'Createschedulerequest', 'V1Createschedulerequest']
---

# Createschedulerequest

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

### NewCreateschedulerequest

`func NewCreateschedulerequest() *Createschedulerequest`

NewCreateschedulerequest instantiates a new Createschedulerequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateschedulerequestWithDefaults

`func NewCreateschedulerequestWithDefaults() *Createschedulerequest`

NewCreateschedulerequestWithDefaults instantiates a new Createschedulerequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskTypeName

`func (o *Createschedulerequest) GetTaskTypeName() string`

GetTaskTypeName returns the TaskTypeName field if non-nil, zero value otherwise.

### GetTaskTypeNameOk

`func (o *Createschedulerequest) GetTaskTypeNameOk() (*string, bool)`

GetTaskTypeNameOk returns a tuple with the TaskTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskTypeName

`func (o *Createschedulerequest) SetTaskTypeName(v string)`

SetTaskTypeName sets TaskTypeName field to given value.

### HasTaskTypeName

`func (o *Createschedulerequest) HasTaskTypeName() bool`

HasTaskTypeName returns a boolean if a field has been set.

### SetTaskTypeNameNil

`func (o *Createschedulerequest) SetTaskTypeNameNil(b bool)`

 SetTaskTypeNameNil sets the value for TaskTypeName to be an explicit nil

### UnsetTaskTypeName
`func (o *Createschedulerequest) UnsetTaskTypeName()`

UnsetTaskTypeName ensures that no value is present for TaskTypeName, not even an explicit nil
### GetScheduleType

`func (o *Createschedulerequest) GetScheduleType() string`

GetScheduleType returns the ScheduleType field if non-nil, zero value otherwise.

### GetScheduleTypeOk

`func (o *Createschedulerequest) GetScheduleTypeOk() (*string, bool)`

GetScheduleTypeOk returns a tuple with the ScheduleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleType

`func (o *Createschedulerequest) SetScheduleType(v string)`

SetScheduleType sets ScheduleType field to given value.

### HasScheduleType

`func (o *Createschedulerequest) HasScheduleType() bool`

HasScheduleType returns a boolean if a field has been set.

### SetScheduleTypeNil

`func (o *Createschedulerequest) SetScheduleTypeNil(b bool)`

 SetScheduleTypeNil sets the value for ScheduleType to be an explicit nil

### UnsetScheduleType
`func (o *Createschedulerequest) UnsetScheduleType()`

UnsetScheduleType ensures that no value is present for ScheduleType, not even an explicit nil
### GetInterval

`func (o *Createschedulerequest) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Createschedulerequest) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Createschedulerequest) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Createschedulerequest) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *Createschedulerequest) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *Createschedulerequest) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil
### GetScheduleTaskName

`func (o *Createschedulerequest) GetScheduleTaskName() string`

GetScheduleTaskName returns the ScheduleTaskName field if non-nil, zero value otherwise.

### GetScheduleTaskNameOk

`func (o *Createschedulerequest) GetScheduleTaskNameOk() (*string, bool)`

GetScheduleTaskNameOk returns a tuple with the ScheduleTaskName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleTaskName

`func (o *Createschedulerequest) SetScheduleTaskName(v string)`

SetScheduleTaskName sets ScheduleTaskName field to given value.

### HasScheduleTaskName

`func (o *Createschedulerequest) HasScheduleTaskName() bool`

HasScheduleTaskName returns a boolean if a field has been set.

### SetScheduleTaskNameNil

`func (o *Createschedulerequest) SetScheduleTaskNameNil(b bool)`

 SetScheduleTaskNameNil sets the value for ScheduleTaskName to be an explicit nil

### UnsetScheduleTaskName
`func (o *Createschedulerequest) UnsetScheduleTaskName()`

UnsetScheduleTaskName ensures that no value is present for ScheduleTaskName, not even an explicit nil
### GetStartTime

`func (o *Createschedulerequest) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Createschedulerequest) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Createschedulerequest) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *Createschedulerequest) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *Createschedulerequest) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *Createschedulerequest) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *Createschedulerequest) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *Createschedulerequest) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *Createschedulerequest) GetDaysOfWeek() []string`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *Createschedulerequest) GetDaysOfWeekOk() (*[]string, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *Createschedulerequest) SetDaysOfWeek(v []string)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *Createschedulerequest) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### SetDaysOfWeekNil

`func (o *Createschedulerequest) SetDaysOfWeekNil(b bool)`

 SetDaysOfWeekNil sets the value for DaysOfWeek to be an explicit nil

### UnsetDaysOfWeek
`func (o *Createschedulerequest) UnsetDaysOfWeek()`

UnsetDaysOfWeek ensures that no value is present for DaysOfWeek, not even an explicit nil
### GetActive

`func (o *Createschedulerequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Createschedulerequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Createschedulerequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Createschedulerequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRunAfterScheduleTaskId

`func (o *Createschedulerequest) GetRunAfterScheduleTaskId() int64`

GetRunAfterScheduleTaskId returns the RunAfterScheduleTaskId field if non-nil, zero value otherwise.

### GetRunAfterScheduleTaskIdOk

`func (o *Createschedulerequest) GetRunAfterScheduleTaskIdOk() (*int64, bool)`

GetRunAfterScheduleTaskIdOk returns a tuple with the RunAfterScheduleTaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAfterScheduleTaskId

`func (o *Createschedulerequest) SetRunAfterScheduleTaskId(v int64)`

SetRunAfterScheduleTaskId sets RunAfterScheduleTaskId field to given value.

### HasRunAfterScheduleTaskId

`func (o *Createschedulerequest) HasRunAfterScheduleTaskId() bool`

HasRunAfterScheduleTaskId returns a boolean if a field has been set.

### SetRunAfterScheduleTaskIdNil

`func (o *Createschedulerequest) SetRunAfterScheduleTaskIdNil(b bool)`

 SetRunAfterScheduleTaskIdNil sets the value for RunAfterScheduleTaskId to be an explicit nil

### UnsetRunAfterScheduleTaskId
`func (o *Createschedulerequest) UnsetRunAfterScheduleTaskId()`

UnsetRunAfterScheduleTaskId ensures that no value is present for RunAfterScheduleTaskId, not even an explicit nil
### GetApplicationId

`func (o *Createschedulerequest) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Createschedulerequest) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Createschedulerequest) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Createschedulerequest) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### SetApplicationIdNil

`func (o *Createschedulerequest) SetApplicationIdNil(b bool)`

 SetApplicationIdNil sets the value for ApplicationId to be an explicit nil

### UnsetApplicationId
`func (o *Createschedulerequest) UnsetApplicationId()`

UnsetApplicationId ensures that no value is present for ApplicationId, not even an explicit nil

