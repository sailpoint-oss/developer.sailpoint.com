---
id: v1-accountscollectedforaggregation
title: Accountscollectedforaggregation
pagination_label: Accountscollectedforaggregation
sidebar_label: Accountscollectedforaggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountscollectedforaggregation', 'V1Accountscollectedforaggregation'] 
slug: /tools/sdk/go/triggers/models/accountscollectedforaggregation
tags: ['SDK', 'Software Development Kit', 'Accountscollectedforaggregation', 'V1Accountscollectedforaggregation']
---

# Accountscollectedforaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountscollectedforaggregationSource**](accountscollectedforaggregation-source) |  | 
**Status** | **string** | The overall status of the collection. | 
**Started** | **SailPointTime** | The date and time when the account collection started. | 
**Completed** | **SailPointTime** | The date and time when the account collection finished. | 
**Errors** | **[]string** | A list of errors that occurred during the collection. | 
**Warnings** | **[]string** | A list of warnings that occurred during the collection. | 
**Stats** | [**AccountscollectedforaggregationStats**](accountscollectedforaggregation-stats) |  | 

## Methods

### NewAccountscollectedforaggregation

`func NewAccountscollectedforaggregation(source AccountscollectedforaggregationSource, status string, started SailPointTime, completed SailPointTime, errors []string, warnings []string, stats AccountscollectedforaggregationStats, ) *Accountscollectedforaggregation`

NewAccountscollectedforaggregation instantiates a new Accountscollectedforaggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountscollectedforaggregationWithDefaults

`func NewAccountscollectedforaggregationWithDefaults() *Accountscollectedforaggregation`

NewAccountscollectedforaggregationWithDefaults instantiates a new Accountscollectedforaggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *Accountscollectedforaggregation) GetSource() AccountscollectedforaggregationSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountscollectedforaggregation) GetSourceOk() (*AccountscollectedforaggregationSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountscollectedforaggregation) SetSource(v AccountscollectedforaggregationSource)`

SetSource sets Source field to given value.


### GetStatus

`func (o *Accountscollectedforaggregation) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Accountscollectedforaggregation) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Accountscollectedforaggregation) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStarted

`func (o *Accountscollectedforaggregation) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *Accountscollectedforaggregation) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *Accountscollectedforaggregation) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.


### GetCompleted

`func (o *Accountscollectedforaggregation) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Accountscollectedforaggregation) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Accountscollectedforaggregation) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.


### GetErrors

`func (o *Accountscollectedforaggregation) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Accountscollectedforaggregation) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Accountscollectedforaggregation) SetErrors(v []string)`

SetErrors sets Errors field to given value.


### SetErrorsNil

`func (o *Accountscollectedforaggregation) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *Accountscollectedforaggregation) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *Accountscollectedforaggregation) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Accountscollectedforaggregation) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Accountscollectedforaggregation) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.


### SetWarningsNil

`func (o *Accountscollectedforaggregation) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *Accountscollectedforaggregation) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetStats

`func (o *Accountscollectedforaggregation) GetStats() AccountscollectedforaggregationStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *Accountscollectedforaggregation) GetStatsOk() (*AccountscollectedforaggregationStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *Accountscollectedforaggregation) SetStats(v AccountscollectedforaggregationStats)`

SetStats sets Stats field to given value.



