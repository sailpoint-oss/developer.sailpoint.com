---
id: v1-schedule2
title: Schedule2
pagination_label: Schedule2
sidebar_label: Schedule2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule2', 'V1Schedule2'] 
slug: /tools/sdk/go/certificationcampaigns/models/schedule2
tags: ['SDK', 'Software Development Kit', 'Schedule2', 'V1Schedule2']
---

# Schedule2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | 
**Months** | Pointer to [**NullableSchedule2Months**](schedule2-months) |  | [optional] 
**Days** | Pointer to [**Schedule2Days**](schedule2-days) |  | [optional] 
**Hours** | [**Schedule2Hours**](schedule2-hours) |  | 
**Expiration** | Pointer to **NullableTime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**TimeZoneId** | Pointer to **string** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [optional] 

## Methods

### NewSchedule2

`func NewSchedule2(type_ string, hours Schedule2Hours, ) *Schedule2`

NewSchedule2 instantiates a new Schedule2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule2WithDefaults

`func NewSchedule2WithDefaults() *Schedule2`

NewSchedule2WithDefaults instantiates a new Schedule2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule2) SetType(v string)`

SetType sets Type field to given value.


### GetMonths

`func (o *Schedule2) GetMonths() Schedule2Months`

GetMonths returns the Months field if non-nil, zero value otherwise.

### GetMonthsOk

`func (o *Schedule2) GetMonthsOk() (*Schedule2Months, bool)`

GetMonthsOk returns a tuple with the Months field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonths

`func (o *Schedule2) SetMonths(v Schedule2Months)`

SetMonths sets Months field to given value.

### HasMonths

`func (o *Schedule2) HasMonths() bool`

HasMonths returns a boolean if a field has been set.

### SetMonthsNil

`func (o *Schedule2) SetMonthsNil(b bool)`

 SetMonthsNil sets the value for Months to be an explicit nil

### UnsetMonths
`func (o *Schedule2) UnsetMonths()`

UnsetMonths ensures that no value is present for Months, not even an explicit nil
### GetDays

`func (o *Schedule2) GetDays() Schedule2Days`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *Schedule2) GetDaysOk() (*Schedule2Days, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *Schedule2) SetDays(v Schedule2Days)`

SetDays sets Days field to given value.

### HasDays

`func (o *Schedule2) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetHours

`func (o *Schedule2) GetHours() Schedule2Hours`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *Schedule2) GetHoursOk() (*Schedule2Hours, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *Schedule2) SetHours(v Schedule2Hours)`

SetHours sets Hours field to given value.


### GetExpiration

`func (o *Schedule2) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Schedule2) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Schedule2) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Schedule2) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### SetExpirationNil

`func (o *Schedule2) SetExpirationNil(b bool)`

 SetExpirationNil sets the value for Expiration to be an explicit nil

### UnsetExpiration
`func (o *Schedule2) UnsetExpiration()`

UnsetExpiration ensures that no value is present for Expiration, not even an explicit nil
### GetTimeZoneId

`func (o *Schedule2) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *Schedule2) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *Schedule2) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *Schedule2) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.


