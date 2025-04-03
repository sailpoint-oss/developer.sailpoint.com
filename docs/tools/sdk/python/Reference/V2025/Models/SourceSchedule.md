---
id: v2025-source-schedule
title: SourceSchedule
pagination_label: SourceSchedule
sidebar_label: SourceSchedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceSchedule', 'V2025SourceSchedule'] 
slug: /tools/sdk/go/v2025/models/source-schedule
tags: ['SDK', 'Software Development Kit', 'SourceSchedule', 'V2025SourceSchedule']
---

# SourceSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the Schedule. | 
**CronExpression** | **string** | The cron expression of the schedule. | 

## Methods

### NewSourceSchedule

`func NewSourceSchedule(type_ string, cronExpression string, ) *SourceSchedule`

NewSourceSchedule instantiates a new SourceSchedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceScheduleWithDefaults

`func NewSourceScheduleWithDefaults() *SourceSchedule`

NewSourceScheduleWithDefaults instantiates a new SourceSchedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceSchedule) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSchedule) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSchedule) SetType(v string)`

SetType sets Type field to given value.


### GetCronExpression

`func (o *SourceSchedule) GetCronExpression() string`

GetCronExpression returns the CronExpression field if non-nil, zero value otherwise.

### GetCronExpressionOk

`func (o *SourceSchedule) GetCronExpressionOk() (*string, bool)`

GetCronExpressionOk returns a tuple with the CronExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronExpression

`func (o *SourceSchedule) SetCronExpression(v string)`

SetCronExpression sets CronExpression field to given value.



