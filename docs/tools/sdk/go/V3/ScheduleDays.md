---
id: schedule-days
title: ScheduleDays
pagination_label: ScheduleDays
sidebar_label: ScheduleDays
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ScheduleDays'] 
slug: /tools/sdk/go/v3/models/schedule-days
tags: ['SDK', 'Software Development Kit', 'ScheduleDays']
---

# ScheduleDays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **string** | Enum type to specify days value | 
**Values** |  **[]string** | Values of the days based on the enum type mentioned above | 
**Interval** |  Pointer to **int64** | Interval between the cert generations | [optional] 

## Methods

### NewScheduleDays

`func NewScheduleDays(type_ string, values []string, ) *ScheduleDays`

NewScheduleDays instantiates a new ScheduleDays object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleDaysWithDefaults

`func NewScheduleDaysWithDefaults() *ScheduleDays`

NewScheduleDaysWithDefaults instantiates a new ScheduleDays object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ScheduleDays) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScheduleDays) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScheduleDays) SetType(v string)`

SetType sets Type field to given value.


### GetValues

`func (o *ScheduleDays) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ScheduleDays) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ScheduleDays) SetValues(v []string)`

SetValues sets Values field to given value.


### GetInterval

`func (o *ScheduleDays) GetInterval() int64`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ScheduleDays) GetIntervalOk() (*int64, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ScheduleDays) SetInterval(v int64)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ScheduleDays) HasInterval() bool`

HasInterval returns a boolean if a field has been set.


[[Back to top]](#) 


