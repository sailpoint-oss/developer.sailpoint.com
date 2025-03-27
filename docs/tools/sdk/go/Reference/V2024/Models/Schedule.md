---
id: v2024-schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule', 'V2024Schedule'] 
slug: /tools/sdk/go/v2024/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule', 'V2024Schedule']
---

# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have &#39;hours&#39; set, but not &#39;days&#39;; a WEEKLY schedule can have both &#39;hours&#39; and &#39;days&#39; set. | 
**Months** | Pointer to [**NullableScheduleMonths**](schedule-months) |  | [optional] 
**Days** | Pointer to [**ScheduleDays**](schedule-days) |  | [optional] 
**Hours** | [**ScheduleHours**](schedule-hours) |  | 
**Expiration** | Pointer to **NullableTime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**TimeZoneId** | Pointer to **string** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \&quot;CST\&quot;, the schedule will run at 1AM CST. | [optional] 

## Methods

### NewSchedule

`func NewSchedule(type_ string, hours ScheduleHours, ) *Schedule`

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

`func (o *Schedule) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule) SetType(v string)`

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

### SetMonthsNil

`func (o *Schedule) SetMonthsNil(b bool)`

 SetMonthsNil sets the value for Months to be an explicit nil

### UnsetMonths
`func (o *Schedule) UnsetMonths()`

UnsetMonths ensures that no value is present for Months, not even an explicit nil
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

`func (o *Schedule) GetExpiration() time.Time`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Schedule) GetExpirationOk() (*time.Time, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Schedule) SetExpiration(v time.Time)`

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


