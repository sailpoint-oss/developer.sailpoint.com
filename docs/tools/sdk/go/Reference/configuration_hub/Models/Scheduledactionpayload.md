---
id: v1-scheduledactionpayload
title: Scheduledactionpayload
pagination_label: Scheduledactionpayload
sidebar_label: Scheduledactionpayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Scheduledactionpayload', 'V1Scheduledactionpayload'] 
slug: /tools/sdk/go/configurationhub/models/scheduledactionpayload
tags: ['SDK', 'Software Development Kit', 'Scheduledactionpayload', 'V1Scheduledactionpayload']
---

# Scheduledactionpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobType** | **string** | Type of the scheduled job. | 
**StartTime** | Pointer to **SailPointTime** | The time when this scheduled action should start. Optional. | [optional] 
**CronString** | Pointer to **string** | Cron expression defining the schedule for this action. Optional for repeated events. | [optional] 
**TimeZoneId** | Pointer to **string** | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [optional] 
**Content** | [**ScheduledactionpayloadContent**](scheduledactionpayload-content) |  | 

## Methods

### NewScheduledactionpayload

`func NewScheduledactionpayload(jobType string, content ScheduledactionpayloadContent, ) *Scheduledactionpayload`

NewScheduledactionpayload instantiates a new Scheduledactionpayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledactionpayloadWithDefaults

`func NewScheduledactionpayloadWithDefaults() *Scheduledactionpayload`

NewScheduledactionpayloadWithDefaults instantiates a new Scheduledactionpayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobType

`func (o *Scheduledactionpayload) GetJobType() string`

GetJobType returns the JobType field if non-nil, zero value otherwise.

### GetJobTypeOk

`func (o *Scheduledactionpayload) GetJobTypeOk() (*string, bool)`

GetJobTypeOk returns a tuple with the JobType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobType

`func (o *Scheduledactionpayload) SetJobType(v string)`

SetJobType sets JobType field to given value.


### GetStartTime

`func (o *Scheduledactionpayload) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Scheduledactionpayload) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Scheduledactionpayload) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *Scheduledactionpayload) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetCronString

`func (o *Scheduledactionpayload) GetCronString() string`

GetCronString returns the CronString field if non-nil, zero value otherwise.

### GetCronStringOk

`func (o *Scheduledactionpayload) GetCronStringOk() (*string, bool)`

GetCronStringOk returns a tuple with the CronString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronString

`func (o *Scheduledactionpayload) SetCronString(v string)`

SetCronString sets CronString field to given value.

### HasCronString

`func (o *Scheduledactionpayload) HasCronString() bool`

HasCronString returns a boolean if a field has been set.

### GetTimeZoneId

`func (o *Scheduledactionpayload) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *Scheduledactionpayload) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *Scheduledactionpayload) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *Scheduledactionpayload) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.

### GetContent

`func (o *Scheduledactionpayload) GetContent() ScheduledactionpayloadContent`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *Scheduledactionpayload) GetContentOk() (*ScheduledactionpayloadContent, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *Scheduledactionpayload) SetContent(v ScheduledactionpayloadContent)`

SetContent sets Content field to given value.



