---
id: v2024-scheduled-action-payload
title: ScheduledActionPayload
pagination_label: ScheduledActionPayload
sidebar_label: ScheduledActionPayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledActionPayload', 'V2024ScheduledActionPayload'] 
slug: /tools/sdk/go/v2024/models/scheduled-action-payload
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayload', 'V2024ScheduledActionPayload']
---

# ScheduledActionPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobType** | **string** | Type of the scheduled job. | 
**StartTime** | Pointer to **time.Time** | The time when this scheduled action should start. Optional. | [optional] 
**CronString** | Pointer to **string** | Cron expression defining the schedule for this action. Optional for repeated events. | [optional] 
**TimeZoneId** | Pointer to **string** | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [optional] 
**Content** | [**ScheduledActionPayloadContent**](scheduled-action-payload-content) |  | 

## Methods

### NewScheduledActionPayload

`func NewScheduledActionPayload(jobType string, content ScheduledActionPayloadContent, ) *ScheduledActionPayload`

NewScheduledActionPayload instantiates a new ScheduledActionPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledActionPayloadWithDefaults

`func NewScheduledActionPayloadWithDefaults() *ScheduledActionPayload`

NewScheduledActionPayloadWithDefaults instantiates a new ScheduledActionPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobType

`func (o *ScheduledActionPayload) GetJobType() string`

GetJobType returns the JobType field if non-nil, zero value otherwise.

### GetJobTypeOk

`func (o *ScheduledActionPayload) GetJobTypeOk() (*string, bool)`

GetJobTypeOk returns a tuple with the JobType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobType

`func (o *ScheduledActionPayload) SetJobType(v string)`

SetJobType sets JobType field to given value.


### GetStartTime

`func (o *ScheduledActionPayload) GetStartTime() time.Time`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *ScheduledActionPayload) GetStartTimeOk() (*time.Time, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *ScheduledActionPayload) SetStartTime(v time.Time)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *ScheduledActionPayload) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetCronString

`func (o *ScheduledActionPayload) GetCronString() string`

GetCronString returns the CronString field if non-nil, zero value otherwise.

### GetCronStringOk

`func (o *ScheduledActionPayload) GetCronStringOk() (*string, bool)`

GetCronStringOk returns a tuple with the CronString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronString

`func (o *ScheduledActionPayload) SetCronString(v string)`

SetCronString sets CronString field to given value.

### HasCronString

`func (o *ScheduledActionPayload) HasCronString() bool`

HasCronString returns a boolean if a field has been set.

### GetTimeZoneId

`func (o *ScheduledActionPayload) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *ScheduledActionPayload) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *ScheduledActionPayload) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *ScheduledActionPayload) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.

### GetContent

`func (o *ScheduledActionPayload) GetContent() ScheduledActionPayloadContent`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ScheduledActionPayload) GetContentOk() (*ScheduledActionPayloadContent, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ScheduledActionPayload) SetContent(v ScheduledActionPayloadContent)`

SetContent sets Content field to given value.



