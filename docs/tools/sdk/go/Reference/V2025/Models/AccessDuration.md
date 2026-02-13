---
id: v2025-access-duration
title: AccessDuration
pagination_label: AccessDuration
sidebar_label: AccessDuration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessDuration', 'V2025AccessDuration'] 
slug: /tools/sdk/go/v2025/models/access-duration
tags: ['SDK', 'Software Development Kit', 'AccessDuration', 'V2025AccessDuration']
---

# AccessDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **int32** | The numeric value representing the amount of time, which is defined in the **timeUnit**. | [optional] 
**TimeUnit** | Pointer to **string** | The unit of time that corresponds to the **value**. It defines the scale of the time period. | [optional] 

## Methods

### NewAccessDuration

`func NewAccessDuration() *AccessDuration`

NewAccessDuration instantiates a new AccessDuration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessDurationWithDefaults

`func NewAccessDurationWithDefaults() *AccessDuration`

NewAccessDurationWithDefaults instantiates a new AccessDuration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *AccessDuration) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessDuration) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessDuration) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccessDuration) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetTimeUnit

`func (o *AccessDuration) GetTimeUnit() string`

GetTimeUnit returns the TimeUnit field if non-nil, zero value otherwise.

### GetTimeUnitOk

`func (o *AccessDuration) GetTimeUnitOk() (*string, bool)`

GetTimeUnitOk returns a tuple with the TimeUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeUnit

`func (o *AccessDuration) SetTimeUnit(v string)`

SetTimeUnit sets TimeUnit field to given value.

### HasTimeUnit

`func (o *AccessDuration) HasTimeUnit() bool`

HasTimeUnit returns a boolean if a field has been set.


