---
id: v1-activityinsights
title: Activityinsights
pagination_label: Activityinsights
sidebar_label: Activityinsights
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Activityinsights', 'V1Activityinsights'] 
slug: /tools/sdk/go/certifications/models/activityinsights
tags: ['SDK', 'Software Development Kit', 'Activityinsights', 'V1Activityinsights']
---

# Activityinsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountID** | Pointer to **string** | UUID of the account | [optional] 
**UsageDays** | Pointer to **int32** | The number of days of activity | [optional] 
**UsageDaysState** | Pointer to **string** | Status indicating if the activity is complete or unknown | [optional] 

## Methods

### NewActivityinsights

`func NewActivityinsights() *Activityinsights`

NewActivityinsights instantiates a new Activityinsights object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityinsightsWithDefaults

`func NewActivityinsightsWithDefaults() *Activityinsights`

NewActivityinsightsWithDefaults instantiates a new Activityinsights object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountID

`func (o *Activityinsights) GetAccountID() string`

GetAccountID returns the AccountID field if non-nil, zero value otherwise.

### GetAccountIDOk

`func (o *Activityinsights) GetAccountIDOk() (*string, bool)`

GetAccountIDOk returns a tuple with the AccountID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountID

`func (o *Activityinsights) SetAccountID(v string)`

SetAccountID sets AccountID field to given value.

### HasAccountID

`func (o *Activityinsights) HasAccountID() bool`

HasAccountID returns a boolean if a field has been set.

### GetUsageDays

`func (o *Activityinsights) GetUsageDays() int32`

GetUsageDays returns the UsageDays field if non-nil, zero value otherwise.

### GetUsageDaysOk

`func (o *Activityinsights) GetUsageDaysOk() (*int32, bool)`

GetUsageDaysOk returns a tuple with the UsageDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDays

`func (o *Activityinsights) SetUsageDays(v int32)`

SetUsageDays sets UsageDays field to given value.

### HasUsageDays

`func (o *Activityinsights) HasUsageDays() bool`

HasUsageDays returns a boolean if a field has been set.

### GetUsageDaysState

`func (o *Activityinsights) GetUsageDaysState() string`

GetUsageDaysState returns the UsageDaysState field if non-nil, zero value otherwise.

### GetUsageDaysStateOk

`func (o *Activityinsights) GetUsageDaysStateOk() (*string, bool)`

GetUsageDaysStateOk returns a tuple with the UsageDaysState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDaysState

`func (o *Activityinsights) SetUsageDaysState(v string)`

SetUsageDaysState sets UsageDaysState field to given value.

### HasUsageDaysState

`func (o *Activityinsights) HasUsageDaysState() bool`

HasUsageDaysState returns a boolean if a field has been set.


