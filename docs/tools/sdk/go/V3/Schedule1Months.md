---
id: schedule1-months
title: Schedule1Months
pagination_label: Schedule1Months
sidebar_label: Schedule1Months
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Schedule1Months'] 
slug: /tools/sdk/go/v3/models/schedule1-months
tags: ['SDK', 'Software Development Kit', 'Schedule1Months']
---

# Schedule1Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | 
**Values** |  **[]string** | The selected values.  | 
**Interval** |  Pointer to **NullableInt32** | The selected interval for RANGE selectors.  | [optional] 

## Methods

### NewSchedule1Months

`func NewSchedule1Months(type_ SelectorType, values []string, ) *Schedule1Months`

NewSchedule1Months instantiates a new Schedule1Months object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule1MonthsWithDefaults

`func NewSchedule1MonthsWithDefaults() *Schedule1Months`

NewSchedule1MonthsWithDefaults instantiates a new Schedule1Months object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule1Months) GetType() SelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule1Months) GetTypeOk() (*SelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule1Months) SetType(v SelectorType)`

SetType sets Type field to given value.


### GetValues

`func (o *Schedule1Months) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Schedule1Months) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Schedule1Months) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *Schedule1Months) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Schedule1Months) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Schedule1Months) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Schedule1Months) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### SetIntervalNil

`func (o *Schedule1Months) SetIntervalNil(b bool)`

 SetIntervalNil sets the value for Interval to be an explicit nil

### UnsetInterval
`func (o *Schedule1Months) UnsetInterval()`

UnsetInterval ensures that no value is present for Interval, not even an explicit nil

[[Back to top]](#) 


