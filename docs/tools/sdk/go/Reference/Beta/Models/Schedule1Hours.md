---
id: beta-schedule1-hours
title: Schedule1Hours
pagination_label: Schedule1Hours
sidebar_label: Schedule1Hours
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule1Hours', 'BetaSchedule1Hours'] 
slug: /tools/sdk/go/beta/models/schedule1-hours
tags: ['SDK', 'Software Development Kit', 'Schedule1Hours', 'BetaSchedule1Hours']
---

# Schedule1Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Methods

### NewSchedule1Hours

`func NewSchedule1Hours() *Schedule1Hours`

NewSchedule1Hours instantiates a new Schedule1Hours object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule1HoursWithDefaults

`func NewSchedule1HoursWithDefaults() *Schedule1Hours`

NewSchedule1HoursWithDefaults instantiates a new Schedule1Hours object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *Schedule1Hours) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Schedule1Hours) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Schedule1Hours) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Schedule1Hours) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *Schedule1Hours) GetAccountMatchConfig() SelectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *Schedule1Hours) GetAccountMatchConfigOk() (*SelectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *Schedule1Hours) SetAccountMatchConfig(v SelectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *Schedule1Hours) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


