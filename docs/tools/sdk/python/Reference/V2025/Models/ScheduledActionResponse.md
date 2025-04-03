---
id: v2025-scheduled-action-response
title: ScheduledActionResponse
pagination_label: ScheduledActionResponse
sidebar_label: ScheduledActionResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledActionResponse', 'V2025ScheduledActionResponse'] 
slug: /tools/sdk/go/v2025/models/scheduled-action-response
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponse', 'V2025ScheduledActionResponse']
---

# ScheduledActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for this scheduled action. | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this scheduled action was created. | [optional] 
**JobType** | Pointer to **string** | Type of the scheduled job. | [optional] 
**Content** | Pointer to [**ScheduledActionResponseContent**](scheduled-action-response-content) |  | [optional] 
**StartTime** | Pointer to **SailPointTime** | The time when this scheduled action should start. | [optional] 
**CronString** | Pointer to **string** | Cron expression defining the schedule for this action. | [optional] 
**TimeZoneId** | Pointer to **string** | Time zone ID for interpreting the cron expression. | [optional] 

## Methods

### NewScheduledActionResponse

`func NewScheduledActionResponse() *ScheduledActionResponse`

NewScheduledActionResponse instantiates a new ScheduledActionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledActionResponseWithDefaults

`func NewScheduledActionResponseWithDefaults() *ScheduledActionResponse`

NewScheduledActionResponseWithDefaults instantiates a new ScheduledActionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ScheduledActionResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ScheduledActionResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ScheduledActionResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ScheduledActionResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *ScheduledActionResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ScheduledActionResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ScheduledActionResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ScheduledActionResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetJobType

`func (o *ScheduledActionResponse) GetJobType() string`

GetJobType returns the JobType field if non-nil, zero value otherwise.

### GetJobTypeOk

`func (o *ScheduledActionResponse) GetJobTypeOk() (*string, bool)`

GetJobTypeOk returns a tuple with the JobType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobType

`func (o *ScheduledActionResponse) SetJobType(v string)`

SetJobType sets JobType field to given value.

### HasJobType

`func (o *ScheduledActionResponse) HasJobType() bool`

HasJobType returns a boolean if a field has been set.

### GetContent

`func (o *ScheduledActionResponse) GetContent() ScheduledActionResponseContent`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ScheduledActionResponse) GetContentOk() (*ScheduledActionResponseContent, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ScheduledActionResponse) SetContent(v ScheduledActionResponseContent)`

SetContent sets Content field to given value.

### HasContent

`func (o *ScheduledActionResponse) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetStartTime

`func (o *ScheduledActionResponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *ScheduledActionResponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *ScheduledActionResponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *ScheduledActionResponse) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetCronString

`func (o *ScheduledActionResponse) GetCronString() string`

GetCronString returns the CronString field if non-nil, zero value otherwise.

### GetCronStringOk

`func (o *ScheduledActionResponse) GetCronStringOk() (*string, bool)`

GetCronStringOk returns a tuple with the CronString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronString

`func (o *ScheduledActionResponse) SetCronString(v string)`

SetCronString sets CronString field to given value.

### HasCronString

`func (o *ScheduledActionResponse) HasCronString() bool`

HasCronString returns a boolean if a field has been set.

### GetTimeZoneId

`func (o *ScheduledActionResponse) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *ScheduledActionResponse) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *ScheduledActionResponse) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *ScheduledActionResponse) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.


