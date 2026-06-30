---
id: v1-schedule3
title: Schedule3
pagination_label: Schedule3
sidebar_label: Schedule3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule3', 'V1Schedule3'] 
slug: /tools/sdk/go/sources/models/schedule3
tags: ['SDK', 'Software Development Kit', 'Schedule3', 'V1Schedule3']
---

# Schedule3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the Schedule. | 
**CronExpression** | **string** | The cron expression of the schedule. | 

## Methods

### NewSchedule3

`func NewSchedule3(type_ string, cronExpression string, ) *Schedule3`

NewSchedule3 instantiates a new Schedule3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule3WithDefaults

`func NewSchedule3WithDefaults() *Schedule3`

NewSchedule3WithDefaults instantiates a new Schedule3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule3) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule3) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule3) SetType(v string)`

SetType sets Type field to given value.


### GetCronExpression

`func (o *Schedule3) GetCronExpression() string`

GetCronExpression returns the CronExpression field if non-nil, zero value otherwise.

### GetCronExpressionOk

`func (o *Schedule3) GetCronExpressionOk() (*string, bool)`

GetCronExpressionOk returns a tuple with the CronExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronExpression

`func (o *Schedule3) SetCronExpression(v string)`

SetCronExpression sets CronExpression field to given value.



