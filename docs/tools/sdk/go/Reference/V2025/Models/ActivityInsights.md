---
id: activity-insights
title: ActivityInsights
pagination_label: ActivityInsights
sidebar_label: ActivityInsights
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ActivityInsights', 'ActivityInsights'] 
slug: /tools/sdk/go//models/activity-insights
tags: ['SDK', 'Software Development Kit', 'ActivityInsights', 'ActivityInsights']
---

# ActivityInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountID** | Pointer to **string** | UUID of the account | [optional] 
**UsageDays** | Pointer to **int32** | The number of days of activity | [optional] 
**UsageDaysState** | Pointer to **string** | Status indicating if the activity is complete or unknown | [optional] 

## Methods

### NewActivityInsights

`func NewActivityInsights() *ActivityInsights`

NewActivityInsights instantiates a new ActivityInsights object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityInsightsWithDefaults

`func NewActivityInsightsWithDefaults() *ActivityInsights`

NewActivityInsightsWithDefaults instantiates a new ActivityInsights object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountID

`func (o *ActivityInsights) GetAccountID() string`

GetAccountID returns the AccountID field if non-nil, zero value otherwise.

### GetAccountIDOk

`func (o *ActivityInsights) GetAccountIDOk() (*string, bool)`

GetAccountIDOk returns a tuple with the AccountID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountID

`func (o *ActivityInsights) SetAccountID(v string)`

SetAccountID sets AccountID field to given value.

### HasAccountID

`func (o *ActivityInsights) HasAccountID() bool`

HasAccountID returns a boolean if a field has been set.

### GetUsageDays

`func (o *ActivityInsights) GetUsageDays() int32`

GetUsageDays returns the UsageDays field if non-nil, zero value otherwise.

### GetUsageDaysOk

`func (o *ActivityInsights) GetUsageDaysOk() (*int32, bool)`

GetUsageDaysOk returns a tuple with the UsageDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDays

`func (o *ActivityInsights) SetUsageDays(v int32)`

SetUsageDays sets UsageDays field to given value.

### HasUsageDays

`func (o *ActivityInsights) HasUsageDays() bool`

HasUsageDays returns a boolean if a field has been set.

### GetUsageDaysState

`func (o *ActivityInsights) GetUsageDaysState() string`

GetUsageDaysState returns the UsageDaysState field if non-nil, zero value otherwise.

### GetUsageDaysStateOk

`func (o *ActivityInsights) GetUsageDaysStateOk() (*string, bool)`

GetUsageDaysStateOk returns a tuple with the UsageDaysState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDaysState

`func (o *ActivityInsights) SetUsageDaysState(v string)`

SetUsageDaysState sets UsageDaysState field to given value.

### HasUsageDaysState

`func (o *ActivityInsights) HasUsageDaysState() bool`

HasUsageDaysState returns a boolean if a field has been set.


