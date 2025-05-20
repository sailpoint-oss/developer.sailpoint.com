---
id: beta-schedule1-days
title: Schedule1Days
pagination_label: Schedule1Days
sidebar_label: Schedule1Days
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schedule1Days', 'BetaSchedule1Days'] 
slug: /tools/sdk/go/beta/models/schedule1-days
tags: ['SDK', 'Software Development Kit', 'Schedule1Days', 'BetaSchedule1Days']
---

# Schedule1Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Methods

### NewSchedule1Days

`func NewSchedule1Days() *Schedule1Days`

NewSchedule1Days instantiates a new Schedule1Days object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchedule1DaysWithDefaults

`func NewSchedule1DaysWithDefaults() *Schedule1Days`

NewSchedule1DaysWithDefaults instantiates a new Schedule1Days object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *Schedule1Days) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Schedule1Days) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Schedule1Days) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Schedule1Days) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *Schedule1Days) GetAccountMatchConfig() SelectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *Schedule1Days) GetAccountMatchConfigOk() (*SelectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *Schedule1Days) SetAccountMatchConfig(v SelectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *Schedule1Days) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


