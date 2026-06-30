---
id: v1-schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule', 'V1Schedule'] 
slug: /tools/sdk/go/sodpolicies/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule', 'V1Schedule']
---

# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Scheduletype**](scheduletype) |  | 
**Months** | Pointer to [**ScheduleMonths**](schedule-months) |  | [optional] 
**Days** | Pointer to [**ScheduleDays**](schedule-days) |  | [optional] 
**Hours** | [**ScheduleHours**](schedule-hours) |  | 
**Expiration** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**TimeZoneId** | Pointer to **NullableString** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 

## Methods

### NewSchedule

`func NewSchedule(type_ Scheduletype, hours ScheduleHours, ) *Schedule`

NewSchedule instantiates a new Schedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleWithDefaults

`func NewScheduleWithDefaults() *Schedule`

NewScheduleWithDefaults instantiates a new Schedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule) GetType() Scheduletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule) GetTypeOk() (*Scheduletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule) SetType(v Scheduletype)`

SetType sets Type field to given value.


### GetMonths

`func (o *Schedule) GetMonths() ScheduleMonths`

GetMonths returns the Months field if non-nil, zero value otherwise.

### GetMonthsOk

`func (o *Schedule) GetMonthsOk() (*ScheduleMonths, bool)`

GetMonthsOk returns a tuple with the Months field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonths

`func (o *Schedule) SetMonths(v ScheduleMonths)`

SetMonths sets Months field to given value.

### HasMonths

`func (o *Schedule) HasMonths() bool`

HasMonths returns a boolean if a field has been set.

### GetDays

`func (o *Schedule) GetDays() ScheduleDays`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *Schedule) GetDaysOk() (*ScheduleDays, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *Schedule) SetDays(v ScheduleDays)`

SetDays sets Days field to given value.

### HasDays

`func (o *Schedule) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetHours

`func (o *Schedule) GetHours() ScheduleHours`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *Schedule) GetHoursOk() (*ScheduleHours, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *Schedule) SetHours(v ScheduleHours)`

SetHours sets Hours field to given value.


### GetExpiration

`func (o *Schedule) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Schedule) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Schedule) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Schedule) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### SetExpirationNil

`func (o *Schedule) SetExpirationNil(b bool)`

 SetExpirationNil sets the value for Expiration to be an explicit nil

### UnsetExpiration
`func (o *Schedule) UnsetExpiration()`

UnsetExpiration ensures that no value is present for Expiration, not even an explicit nil
### GetTimeZoneId

`func (o *Schedule) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *Schedule) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *Schedule) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *Schedule) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.

### SetTimeZoneIdNil

`func (o *Schedule) SetTimeZoneIdNil(b bool)`

 SetTimeZoneIdNil sets the value for TimeZoneId to be an explicit nil

### UnsetTimeZoneId
`func (o *Schedule) UnsetTimeZoneId()`

UnsetTimeZoneId ensures that no value is present for TimeZoneId, not even an explicit nil

