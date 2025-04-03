---
id: v2025-schedule2-hours
title: Schedule2Hours
pagination_label: Schedule2Hours
sidebar_label: Schedule2Hours
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule2Hours', 'V2025Schedule2Hours'] 
slug: /tools/sdk/go/v2025/models/schedule2-hours
tags: ['SDK', 'Software Development Kit', 'Schedule2Hours', 'V2025Schedule2Hours']
---

# Schedule2Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Methods

### NewSchedule2Hours

`func NewSchedule2Hours() *Schedule2Hours`

NewSchedule2Hours instantiates a new Schedule2Hours object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule2HoursWithDefaults

`func NewSchedule2HoursWithDefaults() *Schedule2Hours`

NewSchedule2HoursWithDefaults instantiates a new Schedule2Hours object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *Schedule2Hours) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Schedule2Hours) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Schedule2Hours) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Schedule2Hours) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *Schedule2Hours) GetAccountMatchConfig() SelectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *Schedule2Hours) GetAccountMatchConfigOk() (*SelectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *Schedule2Hours) SetAccountMatchConfig(v SelectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *Schedule2Hours) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


