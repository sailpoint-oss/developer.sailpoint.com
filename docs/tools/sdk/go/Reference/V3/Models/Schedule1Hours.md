---
id: schedule1-hours
title: Schedule1Hours
pagination_label: Schedule1Hours
sidebar_label: Schedule1Hours
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule1Hours', 'Schedule1Hours'] 
slug: /tools/sdk/go/v3/models/schedule1-hours
tags: ['SDK', 'Software Development Kit', 'Schedule1Hours', 'Schedule1Hours']
---

# Schedule1Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SelectorType**](selector-type) |  | 
**Values** | **[]string** | The selected values.  | 
**Interval** | Pointer to **NullableInt32** | The selected interval for RANGE selectors.  | [optional] 

## Methods

### NewSchedule1Hours

`func NewSchedule1Hours(type_ SelectorType, values []string, ) *Schedule1Hours`

NewSchedule1Hours instantiates a new Schedule1Hours object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule1HoursWithDefaults

`func NewSchedule1HoursWithDefaults() *Schedule1Hours`

NewSchedule1HoursWithDefaults instantiates a new Schedule1Hours object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule1Hours) GetType() SelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule1Hours) GetTypeOk() (*SelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule1Hours) SetType(v SelectorType)`

SetType sets Type field to given value.


### GetValues

`func (o *Schedule1Hours) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Schedule1Hours) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Schedule1Hours) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *Schedule1Hours) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Schedule1Hours) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Schedule1Hours) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Schedule1Hours) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *Schedule1Hours) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *Schedule1Hours) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

