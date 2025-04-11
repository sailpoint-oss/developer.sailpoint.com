---
id: v2025-account-aggregation-completed-stats
title: AccountAggregationCompletedStats
pagination_label: AccountAggregationCompletedStats
sidebar_label: AccountAggregationCompletedStats
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAggregationCompletedStats', 'V2025AccountAggregationCompletedStats'] 
slug: /tools/sdk/go/v2025/models/account-aggregation-completed-stats
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedStats', 'V2025AccountAggregationCompletedStats']
---

# AccountAggregationCompletedStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scanned** | **int32** | The number of accounts which were scanned / iterated over. | 
**Unchanged** | **int32** | The number of accounts which existed before, but had no changes. | 
**Changed** | **int32** | The number of accounts which existed before, but had changes. | 
**Added** | **int32** | The number of accounts which are new - have not existed before. | 
**Removed** | **int32** | The number accounts which existed before, but no longer exist (thus getting removed). | 

## Methods

### NewAccountAggregationCompletedStats

`func NewAccountAggregationCompletedStats(scanned int32, unchanged int32, changed int32, added int32, removed int32, ) *AccountAggregationCompletedStats`

NewAccountAggregationCompletedStats instantiates a new AccountAggregationCompletedStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAggregationCompletedStatsWithDefaults

`func NewAccountAggregationCompletedStatsWithDefaults() *AccountAggregationCompletedStats`

NewAccountAggregationCompletedStatsWithDefaults instantiates a new AccountAggregationCompletedStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScanned

`func (o *AccountAggregationCompletedStats) GetScanned() int32`

GetScanned returns the Scanned field if non-nil, zero value otherwise.

### GetScannedOk

`func (o *AccountAggregationCompletedStats) GetScannedOk() (*int32, bool)`

GetScannedOk returns a tuple with the Scanned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScanned

`func (o *AccountAggregationCompletedStats) SetScanned(v int32)`

SetScanned sets Scanned field to given value.


### GetUnchanged

`func (o *AccountAggregationCompletedStats) GetUnchanged() int32`

GetUnchanged returns the Unchanged field if non-nil, zero value otherwise.

### GetUnchangedOk

`func (o *AccountAggregationCompletedStats) GetUnchangedOk() (*int32, bool)`

GetUnchangedOk returns a tuple with the Unchanged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnchanged

`func (o *AccountAggregationCompletedStats) SetUnchanged(v int32)`

SetUnchanged sets Unchanged field to given value.


### GetChanged

`func (o *AccountAggregationCompletedStats) GetChanged() int32`

GetChanged returns the Changed field if non-nil, zero value otherwise.

### GetChangedOk

`func (o *AccountAggregationCompletedStats) GetChangedOk() (*int32, bool)`

GetChangedOk returns a tuple with the Changed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanged

`func (o *AccountAggregationCompletedStats) SetChanged(v int32)`

SetChanged sets Changed field to given value.


### GetAdded

`func (o *AccountAggregationCompletedStats) GetAdded() int32`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *AccountAggregationCompletedStats) GetAddedOk() (*int32, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *AccountAggregationCompletedStats) SetAdded(v int32)`

SetAdded sets Added field to given value.


### GetRemoved

`func (o *AccountAggregationCompletedStats) GetRemoved() int32`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *AccountAggregationCompletedStats) GetRemovedOk() (*int32, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *AccountAggregationCompletedStats) SetRemoved(v int32)`

SetRemoved sets Removed field to given value.



