---
id: schedule1
title: Schedule1
pagination_label: Schedule1
sidebar_label: Schedule1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule1', 'Schedule1'] 
slug: /tools/sdk/go//models/schedule1
tags: ['SDK', 'Software Development Kit', 'Schedule1', 'Schedule1']
---

# Schedule1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the Schedule. | 
**CronExpression** | **string** | The cron expression of the schedule. | 

## Methods

### NewSchedule1

`func NewSchedule1(type_ string, cronExpression string, ) *Schedule1`

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

`func (o *Schedule1) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule1) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule1) SetType(v string)`

SetType sets Type field to given value.


### GetCronExpression

`func (o *Schedule1) GetCronExpression() string`

GetCronExpression returns the CronExpression field if non-nil, zero value otherwise.

### GetCronExpressionOk

`func (o *Schedule1) GetCronExpressionOk() (*string, bool)`

GetCronExpressionOk returns a tuple with the CronExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronExpression

`func (o *Schedule1) SetCronExpression(v string)`

SetCronExpression sets CronExpression field to given value.



