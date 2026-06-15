---
id: v2026-schedule2-days
title: Schedule2Days
pagination_label: Schedule2Days
sidebar_label: Schedule2Days
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule2Days', 'V2026Schedule2Days'] 
slug: /tools/sdk/go/v2026/models/schedule2-days
tags: ['SDK', 'Software Development Kit', 'Schedule2Days', 'V2026Schedule2Days']
---

# Schedule2Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SelectorType**](selector-type) |  | 
**Values** | **[]string** | The selected values.  | 
**Interval** | Pointer to **NullableInt32** | The selected interval for RANGE selectors.  | [optional] 

## Methods

### NewSchedule2Days

`func NewSchedule2Days(type_ SelectorType, values []string, ) *Schedule2Days`

NewSchedule2Days instantiates a new Schedule2Days object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule2DaysWithDefaults

`func NewSchedule2DaysWithDefaults() *Schedule2Days`

NewSchedule2DaysWithDefaults instantiates a new Schedule2Days object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule2Days) GetType() SelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule2Days) GetTypeOk() (*SelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule2Days) SetType(v SelectorType)`

SetType sets Type field to given value.


### GetValues

`func (o *Schedule2Days) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Schedule2Days) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Schedule2Days) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *Schedule2Days) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Schedule2Days) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Schedule2Days) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Schedule2Days) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *Schedule2Days) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *Schedule2Days) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

