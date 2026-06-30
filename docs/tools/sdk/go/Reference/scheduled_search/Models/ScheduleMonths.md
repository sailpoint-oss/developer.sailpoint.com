---
id: v1-schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduleMonths', 'V1ScheduleMonths'] 
slug: /tools/sdk/go/scheduledsearch/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'V1ScheduleMonths']
---

# ScheduleMonths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Selectortype**](selectortype) |  | 
**Values** | **[]string** | The selected values.  | 
**Interval** | Pointer to **NullableInt32** | The selected interval for RANGE selectors.  | [optional] 

## Methods

### NewScheduleMonths

`func NewScheduleMonths(type_ Selectortype, values []string, ) *ScheduleMonths`

NewScheduleMonths instantiates a new ScheduleMonths object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleMonthsWithDefaults

`func NewScheduleMonthsWithDefaults() *ScheduleMonths`

NewScheduleMonthsWithDefaults instantiates a new ScheduleMonths object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ScheduleMonths) GetType() Selectortype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScheduleMonths) GetTypeOk() (*Selectortype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScheduleMonths) SetType(v Selectortype)`

SetType sets Type field to given value.


### GetValues

`func (o *ScheduleMonths) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ScheduleMonths) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ScheduleMonths) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *ScheduleMonths) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ScheduleMonths) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ScheduleMonths) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ScheduleMonths) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *ScheduleMonths) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *ScheduleMonths) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

