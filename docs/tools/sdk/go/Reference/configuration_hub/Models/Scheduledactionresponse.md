---
id: v1-scheduledactionresponse
title: Scheduledactionresponse
pagination_label: Scheduledactionresponse
sidebar_label: Scheduledactionresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Scheduledactionresponse', 'V1Scheduledactionresponse'] 
slug: /tools/sdk/go/configurationhub/models/scheduledactionresponse
tags: ['SDK', 'Software Development Kit', 'Scheduledactionresponse', 'V1Scheduledactionresponse']
---

# Scheduledactionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for this scheduled action. | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this scheduled action was created. | [optional] 
**JobType** | Pointer to **string** | Type of the scheduled job. | [optional] 
**Content** | Pointer to [**ScheduledactionresponseContent**](scheduledactionresponse-content) |  | [optional] 
**StartTime** | Pointer to **SailPointTime** | The time when this scheduled action should start. | [optional] 
**CronString** | Pointer to **string** | Cron expression defining the schedule for this action. | [optional] 
**TimeZoneId** | Pointer to **string** | Time zone ID for interpreting the cron expression. | [optional] 

## Methods

### NewScheduledactionresponse

`func NewScheduledactionresponse() *Scheduledactionresponse`

NewScheduledactionresponse instantiates a new Scheduledactionresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledactionresponseWithDefaults

`func NewScheduledactionresponseWithDefaults() *Scheduledactionresponse`

NewScheduledactionresponseWithDefaults instantiates a new Scheduledactionresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Scheduledactionresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Scheduledactionresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Scheduledactionresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Scheduledactionresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *Scheduledactionresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Scheduledactionresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Scheduledactionresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Scheduledactionresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetJobType

`func (o *Scheduledactionresponse) GetJobType() string`

GetJobType returns the JobType field if non-nil, zero value otherwise.

### GetJobTypeOk

`func (o *Scheduledactionresponse) GetJobTypeOk() (*string, bool)`

GetJobTypeOk returns a tuple with the JobType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobType

`func (o *Scheduledactionresponse) SetJobType(v string)`

SetJobType sets JobType field to given value.

### HasJobType

`func (o *Scheduledactionresponse) HasJobType() bool`

HasJobType returns a boolean if a field has been set.

### GetContent

`func (o *Scheduledactionresponse) GetContent() ScheduledactionresponseContent`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *Scheduledactionresponse) GetContentOk() (*ScheduledactionresponseContent, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *Scheduledactionresponse) SetContent(v ScheduledactionresponseContent)`

SetContent sets Content field to given value.

### HasContent

`func (o *Scheduledactionresponse) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetStartTime

`func (o *Scheduledactionresponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Scheduledactionresponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Scheduledactionresponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *Scheduledactionresponse) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetCronString

`func (o *Scheduledactionresponse) GetCronString() string`

GetCronString returns the CronString field if non-nil, zero value otherwise.

### GetCronStringOk

`func (o *Scheduledactionresponse) GetCronStringOk() (*string, bool)`

GetCronStringOk returns a tuple with the CronString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronString

`func (o *Scheduledactionresponse) SetCronString(v string)`

SetCronString sets CronString field to given value.

### HasCronString

`func (o *Scheduledactionresponse) HasCronString() bool`

HasCronString returns a boolean if a field has been set.

### GetTimeZoneId

`func (o *Scheduledactionresponse) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *Scheduledactionresponse) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *Scheduledactionresponse) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *Scheduledactionresponse) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.


