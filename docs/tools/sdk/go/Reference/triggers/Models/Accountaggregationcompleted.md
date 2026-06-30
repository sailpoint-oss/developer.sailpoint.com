---
id: v1-accountaggregationcompleted
title: Accountaggregationcompleted
pagination_label: Accountaggregationcompleted
sidebar_label: Accountaggregationcompleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountaggregationcompleted', 'V1Accountaggregationcompleted'] 
slug: /tools/sdk/go/triggers/models/accountaggregationcompleted
tags: ['SDK', 'Software Development Kit', 'Accountaggregationcompleted', 'V1Accountaggregationcompleted']
---

# Accountaggregationcompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountaggregationcompletedSource**](accountaggregationcompleted-source) |  | 
**Status** | **string** | The overall status of the aggregation. | 
**Started** | **SailPointTime** | The date and time when the account aggregation started. | 
**Completed** | **SailPointTime** | The date and time when the account aggregation finished. | 
**Errors** | **[]string** | A list of errors that occurred during the aggregation. | 
**Warnings** | **[]string** | A list of warnings that occurred during the aggregation. | 
**Stats** | [**AccountaggregationcompletedStats**](accountaggregationcompleted-stats) |  | 

## Methods

### NewAccountaggregationcompleted

`func NewAccountaggregationcompleted(source AccountaggregationcompletedSource, status string, started SailPointTime, completed SailPointTime, errors []string, warnings []string, stats AccountaggregationcompletedStats, ) *Accountaggregationcompleted`

NewAccountaggregationcompleted instantiates a new Accountaggregationcompleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountaggregationcompletedWithDefaults

`func NewAccountaggregationcompletedWithDefaults() *Accountaggregationcompleted`

NewAccountaggregationcompletedWithDefaults instantiates a new Accountaggregationcompleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *Accountaggregationcompleted) GetSource() AccountaggregationcompletedSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountaggregationcompleted) GetSourceOk() (*AccountaggregationcompletedSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountaggregationcompleted) SetSource(v AccountaggregationcompletedSource)`

SetSource sets Source field to given value.


### GetStatus

`func (o *Accountaggregationcompleted) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Accountaggregationcompleted) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Accountaggregationcompleted) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStarted

`func (o *Accountaggregationcompleted) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *Accountaggregationcompleted) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *Accountaggregationcompleted) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.


### GetCompleted

`func (o *Accountaggregationcompleted) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Accountaggregationcompleted) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Accountaggregationcompleted) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.


### GetErrors

`func (o *Accountaggregationcompleted) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Accountaggregationcompleted) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Accountaggregationcompleted) SetErrors(v []string)`

SetErrors sets Errors field to given value.


### SetErrorsNil

`func (o *Accountaggregationcompleted) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *Accountaggregationcompleted) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *Accountaggregationcompleted) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Accountaggregationcompleted) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Accountaggregationcompleted) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.


### SetWarningsNil

`func (o *Accountaggregationcompleted) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *Accountaggregationcompleted) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetStats

`func (o *Accountaggregationcompleted) GetStats() AccountaggregationcompletedStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *Accountaggregationcompleted) GetStatsOk() (*AccountaggregationcompletedStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *Accountaggregationcompleted) SetStats(v AccountaggregationcompletedStats)`

SetStats sets Stats field to given value.



