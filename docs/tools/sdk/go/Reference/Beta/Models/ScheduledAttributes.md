---
id: beta-scheduled-attributes
title: ScheduledAttributes
pagination_label: ScheduledAttributes
sidebar_label: ScheduledAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledAttributes', 'BetaScheduledAttributes'] 
slug: /tools/sdk/go/beta/models/scheduled-attributes
tags: ['SDK', 'Software Development Kit', 'ScheduledAttributes', 'BetaScheduledAttributes']
---

# ScheduledAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Frequency** | **string** | Frequency of execution | 
**TimeZone** | Pointer to **string** | Time zone identifier | [optional] 
**CronString** | Pointer to **string** | A valid CRON expression | [optional] 
**WeeklyDays** | Pointer to **[]string** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** | Pointer to **[]string** | Scheduled execution times | [optional] 
**YearlyTimes** | Pointer to **[]string** | Scheduled execution times | [optional] 

## Methods

### NewScheduledAttributes

`func NewScheduledAttributes(frequency string, ) *ScheduledAttributes`

NewScheduledAttributes instantiates a new ScheduledAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledAttributesWithDefaults

`func NewScheduledAttributesWithDefaults() *ScheduledAttributes`

NewScheduledAttributesWithDefaults instantiates a new ScheduledAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrequency

`func (o *ScheduledAttributes) GetFrequency() string`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ScheduledAttributes) GetFrequencyOk() (*string, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ScheduledAttributes) SetFrequency(v string)`

SetFrequency sets Frequency field to given value.


### GetTimeZone

`func (o *ScheduledAttributes) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *ScheduledAttributes) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *ScheduledAttributes) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *ScheduledAttributes) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.

### GetCronString

`func (o *ScheduledAttributes) GetCronString() string`

GetCronString returns the CronString field if non-nil, zero value otherwise.

### GetCronStringOk

`func (o *ScheduledAttributes) GetCronStringOk() (*string, bool)`

GetCronStringOk returns a tuple with the CronString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronString

`func (o *ScheduledAttributes) SetCronString(v string)`

SetCronString sets CronString field to given value.

### HasCronString

`func (o *ScheduledAttributes) HasCronString() bool`

HasCronString returns a boolean if a field has been set.

### GetWeeklyDays

`func (o *ScheduledAttributes) GetWeeklyDays() []string`

GetWeeklyDays returns the WeeklyDays field if non-nil, zero value otherwise.

### GetWeeklyDaysOk

`func (o *ScheduledAttributes) GetWeeklyDaysOk() (*[]string, bool)`

GetWeeklyDaysOk returns a tuple with the WeeklyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeeklyDays

`func (o *ScheduledAttributes) SetWeeklyDays(v []string)`

SetWeeklyDays sets WeeklyDays field to given value.

### HasWeeklyDays

`func (o *ScheduledAttributes) HasWeeklyDays() bool`

HasWeeklyDays returns a boolean if a field has been set.

### GetWeeklyTimes

`func (o *ScheduledAttributes) GetWeeklyTimes() []string`

GetWeeklyTimes returns the WeeklyTimes field if non-nil, zero value otherwise.

### GetWeeklyTimesOk

`func (o *ScheduledAttributes) GetWeeklyTimesOk() (*[]string, bool)`

GetWeeklyTimesOk returns a tuple with the WeeklyTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeeklyTimes

`func (o *ScheduledAttributes) SetWeeklyTimes(v []string)`

SetWeeklyTimes sets WeeklyTimes field to given value.

### HasWeeklyTimes

`func (o *ScheduledAttributes) HasWeeklyTimes() bool`

HasWeeklyTimes returns a boolean if a field has been set.

### GetYearlyTimes

`func (o *ScheduledAttributes) GetYearlyTimes() []string`

GetYearlyTimes returns the YearlyTimes field if non-nil, zero value otherwise.

### GetYearlyTimesOk

`func (o *ScheduledAttributes) GetYearlyTimesOk() (*[]string, bool)`

GetYearlyTimesOk returns a tuple with the YearlyTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearlyTimes

`func (o *ScheduledAttributes) SetYearlyTimes(v []string)`

SetYearlyTimes sets YearlyTimes field to given value.

### HasYearlyTimes

`func (o *ScheduledAttributes) HasYearlyTimes() bool`

HasYearlyTimes returns a boolean if a field has been set.


