---
id: v2024-schedule-hours
title: ScheduleHours
pagination_label: ScheduleHours
sidebar_label: ScheduleHours
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduleHours', 'V2024ScheduleHours'] 
slug: /tools/sdk/go/v2024/models/schedule-hours
tags: ['SDK', 'Software Development Kit', 'ScheduleHours', 'V2024ScheduleHours']
---

# ScheduleHours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Enum type to specify hours value | 
**Values** | **[]string** | Values of the days based on the enum type mentioned above | 
**Interval** | Pointer to **NullableInt64** | Interval between the cert generations | [optional] 

## Methods

### NewScheduleHours

`func NewScheduleHours(type_ string, values []string, ) *ScheduleHours`

NewScheduleHours instantiates a new ScheduleHours object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleHoursWithDefaults

`func NewScheduleHoursWithDefaults() *ScheduleHours`

NewScheduleHoursWithDefaults instantiates a new ScheduleHours object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ScheduleHours) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScheduleHours) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScheduleHours) SetType(v string)`

SetType sets Type field to given value.


### GetValues

`func (o *ScheduleHours) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ScheduleHours) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ScheduleHours) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *ScheduleHours) GetInterval() int64`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ScheduleHours) GetIntervalOk() (*int64, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ScheduleHours) SetInterval(v int64)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ScheduleHours) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *ScheduleHours) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *ScheduleHours) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

