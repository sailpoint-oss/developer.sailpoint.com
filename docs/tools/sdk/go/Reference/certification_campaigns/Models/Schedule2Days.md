---
id: v1-schedule2-days
title: Schedule2Days
pagination_label: Schedule2Days
sidebar_label: Schedule2Days
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule2Days', 'V1Schedule2Days'] 
slug: /tools/sdk/go/certificationcampaigns/models/schedule2-days
tags: ['SDK', 'Software Development Kit', 'Schedule2Days', 'V1Schedule2Days']
---

# Schedule2Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Enum type to specify days value | 
**Values** | **[]string** | Values of the days based on the enum type mentioned above | 
**Interval** | Pointer to **NullableInt64** | Interval between the cert generations | [optional] 

## Methods

### NewSchedule2Days

`func NewSchedule2Days(type_ string, values []string, ) *Schedule2Days`

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

`func (o *Schedule2Days) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule2Days) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule2Days) SetType(v string)`

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

`func (o *Schedule2Days) GetInterval() int64`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Schedule2Days) GetIntervalOk() (*int64, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Schedule2Days) SetInterval(v int64)`

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

