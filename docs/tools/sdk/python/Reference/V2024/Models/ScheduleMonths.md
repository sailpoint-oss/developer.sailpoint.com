---
id: v2024-schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduleMonths', 'V2024ScheduleMonths'] 
slug: /tools/sdk/go/v2024/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'V2024ScheduleMonths']
---

# ScheduleMonths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Enum type to specify months value | 
**Values** | **[]string** | Values of the months based on the enum type mentioned above | 
**Interval** | Pointer to **int64** | Interval between the cert generations | [optional] 

## Methods

### NewScheduleMonths

`func NewScheduleMonths(type_ string, values []string, ) *ScheduleMonths`

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

`func (o *ScheduleMonths) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScheduleMonths) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScheduleMonths) SetType(v string)`

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

`func (o *ScheduleMonths) GetInterval() int64`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ScheduleMonths) GetIntervalOk() (*int64, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ScheduleMonths) SetInterval(v int64)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ScheduleMonths) HasInterval() bool`

HasInterval returns a boolean if a field has been set.


