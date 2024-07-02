---
id: schedule1
title: Schedule1
pagination_label: Schedule1
sidebar_label: Schedule1
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Schedule1'] 
slug: /tools/sdk/go/beta/models/schedule1
tags: ['SDK', 'Software Development Kit', 'Schedule1']
---

# Schedule1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**ScheduleType**](schedule-type) |  | 
**Months** |  Pointer to [**Schedule1Months**](schedule1-months) |  | [optional] 
**Days** |  Pointer to [**Schedule1Days**](schedule1-days) |  | [optional] 
**Hours** |  [**Schedule1Hours**](schedule1-hours) |  | 
**Expiration** |  Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**TimeZoneId** |  Pointer to **NullableString** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org&#39;s default timezone is used. | [optional] 

## Methods

### NewSchedule1

`func NewSchedule1(type_ ScheduleType, hours Schedule1Hours, ) *Schedule1`

NewSchedule1 instantiates a new Schedule1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule1WithDefaults

`func NewSchedule1WithDefaults() *Schedule1`

NewSchedule1WithDefaults instantiates a new Schedule1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule1) GetType() ScheduleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule1) GetTypeOk() (*ScheduleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule1) SetType(v ScheduleType)`

SetType sets Type field to given value.


### GetMonths

`func (o *Schedule1) GetMonths() Schedule1Months`

GetMonths returns the Months field if non-nil, zero value otherwise.

### GetMonthsOk

`func (o *Schedule1) GetMonthsOk() (*Schedule1Months, bool)`

GetMonthsOk returns a tuple with the Months field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonths

`func (o *Schedule1) SetMonths(v Schedule1Months)`

SetMonths sets Months field to given value.

### HasMonths

`func (o *Schedule1) HasMonths() bool`

HasMonths returns a boolean if a field has been set.

### GetDays

`func (o *Schedule1) GetDays() Schedule1Days`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *Schedule1) GetDaysOk() (*Schedule1Days, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *Schedule1) SetDays(v Schedule1Days)`

SetDays sets Days field to given value.

### HasDays

`func (o *Schedule1) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetHours

`func (o *Schedule1) GetHours() Schedule1Hours`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *Schedule1) GetHoursOk() (*Schedule1Hours, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *Schedule1) SetHours(v Schedule1Hours)`

SetHours sets Hours field to given value.


### GetExpiration

`func (o *Schedule1) GetExpiration() time.Time`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Schedule1) GetExpirationOk() (*time.Time, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Schedule1) SetExpiration(v time.Time)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Schedule1) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### SetExpirationNil

`func (o *Schedule1) SetExpirationNil(b bool)`

 SetExpirationNil sets the value for Expiration to be an explicit nil

### UnsetExpiration
`func (o *Schedule1) UnsetExpiration()`

UnsetExpiration ensures that no value is present for Expiration, not even an explicit nil
### GetTimeZoneId

`func (o *Schedule1) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *Schedule1) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *Schedule1) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *Schedule1) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.

### SetTimeZoneIdNil

`func (o *Schedule1) SetTimeZoneIdNil(b bool)`

 SetTimeZoneIdNil sets the value for TimeZoneId to be an explicit nil

### UnsetTimeZoneId
`func (o *Schedule1) UnsetTimeZoneId()`

UnsetTimeZoneId ensures that no value is present for TimeZoneId, not even an explicit nil

[[Back to top]](#) 


