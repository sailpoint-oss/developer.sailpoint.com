---
id: v2025-schedule2-months
title: Schedule2Months
pagination_label: Schedule2Months
sidebar_label: Schedule2Months
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule2Months', 'V2025Schedule2Months'] 
slug: /tools/sdk/go/v2025/models/schedule2-months
tags: ['SDK', 'Software Development Kit', 'Schedule2Months', 'V2025Schedule2Months']
---

# Schedule2Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Methods

### NewSchedule2Months

`func NewSchedule2Months() *Schedule2Months`

NewSchedule2Months instantiates a new Schedule2Months object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule2MonthsWithDefaults

`func NewSchedule2MonthsWithDefaults() *Schedule2Months`

NewSchedule2MonthsWithDefaults instantiates a new Schedule2Months object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *Schedule2Months) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Schedule2Months) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Schedule2Months) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Schedule2Months) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *Schedule2Months) GetAccountMatchConfig() SelectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *Schedule2Months) GetAccountMatchConfigOk() (*SelectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *Schedule2Months) SetAccountMatchConfig(v SelectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *Schedule2Months) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


