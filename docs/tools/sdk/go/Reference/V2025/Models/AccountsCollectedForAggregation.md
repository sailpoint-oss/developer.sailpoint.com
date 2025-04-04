---
id: v2025-accounts-collected-for-aggregation
title: AccountsCollectedForAggregation
pagination_label: AccountsCollectedForAggregation
sidebar_label: AccountsCollectedForAggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountsCollectedForAggregation', 'V2025AccountsCollectedForAggregation'] 
slug: /tools/sdk/go/v2025/models/accounts-collected-for-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregation', 'V2025AccountsCollectedForAggregation']
---

# AccountsCollectedForAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountsCollectedForAggregationSource**](accounts-collected-for-aggregation-source) |  | 
**Status** | **map[string]interface{}** | The overall status of the collection. | 
**Started** | **SailPointTime** | The date and time when the account collection started. | 
**Completed** | **SailPointTime** | The date and time when the account collection finished. | 
**Errors** | **[]string** | A list of errors that occurred during the collection. | 
**Warnings** | **[]string** | A list of warnings that occurred during the collection. | 
**Stats** | [**AccountsCollectedForAggregationStats**](accounts-collected-for-aggregation-stats) |  | 

## Methods

### NewAccountsCollectedForAggregation

`func NewAccountsCollectedForAggregation(source AccountsCollectedForAggregationSource, status map[string]interface{}, started SailPointTime, completed SailPointTime, errors []string, warnings []string, stats AccountsCollectedForAggregationStats, ) *AccountsCollectedForAggregation`

NewAccountsCollectedForAggregation instantiates a new AccountsCollectedForAggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsCollectedForAggregationWithDefaults

`func NewAccountsCollectedForAggregationWithDefaults() *AccountsCollectedForAggregation`

NewAccountsCollectedForAggregationWithDefaults instantiates a new AccountsCollectedForAggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *AccountsCollectedForAggregation) GetSource() AccountsCollectedForAggregationSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountsCollectedForAggregation) GetSourceOk() (*AccountsCollectedForAggregationSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountsCollectedForAggregation) SetSource(v AccountsCollectedForAggregationSource)`

SetSource sets Source field to given value.


### GetStatus

`func (o *AccountsCollectedForAggregation) GetStatus() map[string]interface{}`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccountsCollectedForAggregation) GetStatusOk() (*map[string]interface{}, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccountsCollectedForAggregation) SetStatus(v map[string]interface{})`

SetStatus sets Status field to given value.


### GetStarted

`func (o *AccountsCollectedForAggregation) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *AccountsCollectedForAggregation) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *AccountsCollectedForAggregation) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.


### GetCompleted

`func (o *AccountsCollectedForAggregation) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *AccountsCollectedForAggregation) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *AccountsCollectedForAggregation) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.


### GetErrors

`func (o *AccountsCollectedForAggregation) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AccountsCollectedForAggregation) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AccountsCollectedForAggregation) SetErrors(v []string)`

SetErrors sets Errors field to given value.


### SetErrorsNil

`func (o *AccountsCollectedForAggregation) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *AccountsCollectedForAggregation) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *AccountsCollectedForAggregation) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountsCollectedForAggregation) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountsCollectedForAggregation) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.


### SetWarningsNil

`func (o *AccountsCollectedForAggregation) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *AccountsCollectedForAggregation) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetStats

`func (o *AccountsCollectedForAggregation) GetStats() AccountsCollectedForAggregationStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *AccountsCollectedForAggregation) GetStatsOk() (*AccountsCollectedForAggregationStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *AccountsCollectedForAggregation) SetStats(v AccountsCollectedForAggregationStats)`

SetStats sets Stats field to given value.



