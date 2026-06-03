---
id: v2026-schedule2-months
title: Schedule2Months
pagination_label: Schedule2Months
sidebar_label: Schedule2Months
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule2Months', 'V2026Schedule2Months'] 
slug: /tools/sdk/go/v2026/models/schedule2-months
tags: ['SDK', 'Software Development Kit', 'Schedule2Months', 'V2026Schedule2Months']
---

# Schedule2Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SelectorType**](selector-type) |  | 
**Values** | **[]string** | The selected values.  | 
**Interval** | Pointer to **NullableInt32** | The selected interval for RANGE selectors.  | [optional] 

## Methods

### NewSchedule2Months

`func NewSchedule2Months(type_ SelectorType, values []string, ) *Schedule2Months`

NewSchedule2Months instantiates a new Schedule2Months object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule2MonthsWithDefaults

`func NewSchedule2MonthsWithDefaults() *Schedule2Months`

NewSchedule2MonthsWithDefaults instantiates a new Schedule2Months object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule2Months) GetType() SelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule2Months) GetTypeOk() (*SelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule2Months) SetType(v SelectorType)`

SetType sets Type field to given value.


### GetValues

`func (o *Schedule2Months) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Schedule2Months) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Schedule2Months) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *Schedule2Months) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Schedule2Months) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Schedule2Months) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Schedule2Months) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *Schedule2Months) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *Schedule2Months) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

