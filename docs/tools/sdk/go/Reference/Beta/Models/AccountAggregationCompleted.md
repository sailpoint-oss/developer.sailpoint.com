---
id: beta-account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAggregationCompleted', 'BetaAccountAggregationCompleted'] 
slug: /tools/sdk/go/beta/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted', 'BetaAccountAggregationCompleted']
---

# AccountAggregationCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountAggregationCompletedSource**](account-aggregation-completed-source) |  | 
**Status** | **map[string]interface{}** | Aggregation&#39;s overall status. | 
**Started** | **time.Time** | Date and time when the account aggregation started. | 
**Completed** | **time.Time** | Date and time when the account aggregation finished. | 
**Errors** | **[]string** | List of errors that occurred during the aggregation. | 
**Warnings** | **[]string** | List of warnings that occurred during the aggregation. | 
**Stats** | [**AccountAggregationCompletedStats**](account-aggregation-completed-stats) |  | 

## Methods

### NewAccountAggregationCompleted

`func NewAccountAggregationCompleted(source AccountAggregationCompletedSource, status map[string]interface{}, started time.Time, completed time.Time, errors []string, warnings []string, stats AccountAggregationCompletedStats, ) *AccountAggregationCompleted`

NewAccountAggregationCompleted instantiates a new AccountAggregationCompleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAggregationCompletedWithDefaults

`func NewAccountAggregationCompletedWithDefaults() *AccountAggregationCompleted`

NewAccountAggregationCompletedWithDefaults instantiates a new AccountAggregationCompleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *AccountAggregationCompleted) GetSource() AccountAggregationCompletedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountAggregationCompleted) GetSourceOk() (*AccountAggregationCompletedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountAggregationCompleted) SetSource(v AccountAggregationCompletedSource)`

SetSource sets Source field to given value.


### GetStatus

`func (o *AccountAggregationCompleted) GetStatus() map[string]interface{}`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccountAggregationCompleted) GetStatusOk() (*map[string]interface{}, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccountAggregationCompleted) SetStatus(v map[string]interface{})`

SetStatus sets Status field to given value.


### GetStarted

`func (o *AccountAggregationCompleted) GetStarted() time.Time`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *AccountAggregationCompleted) GetStartedOk() (*time.Time, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *AccountAggregationCompleted) SetStarted(v time.Time)`

SetStarted sets Started field to given value.


### GetCompleted

`func (o *AccountAggregationCompleted) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *AccountAggregationCompleted) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *AccountAggregationCompleted) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.


### GetErrors

`func (o *AccountAggregationCompleted) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AccountAggregationCompleted) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AccountAggregationCompleted) SetErrors(v []string)`

SetErrors sets Errors field to given value.


### SetErrorsNil

`func (o *AccountAggregationCompleted) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *AccountAggregationCompleted) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *AccountAggregationCompleted) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountAggregationCompleted) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountAggregationCompleted) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.


### SetWarningsNil

`func (o *AccountAggregationCompleted) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *AccountAggregationCompleted) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetStats

`func (o *AccountAggregationCompleted) GetStats() AccountAggregationCompletedStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *AccountAggregationCompleted) GetStatsOk() (*AccountAggregationCompletedStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *AccountAggregationCompleted) SetStats(v AccountAggregationCompletedStats)`

SetStats sets Stats field to given value.



