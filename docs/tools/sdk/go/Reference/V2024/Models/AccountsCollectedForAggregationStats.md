---
id: v2024-accounts-collected-for-aggregation-stats
title: AccountsCollectedForAggregationStats
pagination_label: AccountsCollectedForAggregationStats
sidebar_label: AccountsCollectedForAggregationStats
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountsCollectedForAggregationStats', 'V2024AccountsCollectedForAggregationStats'] 
slug: /tools/sdk/go/v2024/models/accounts-collected-for-aggregation-stats
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationStats', 'V2024AccountsCollectedForAggregationStats']
---

# AccountsCollectedForAggregationStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scanned** | **int32** | The number of accounts which were scanned / iterated over. | 
**Unchanged** | **int32** | The number of accounts which existed before, but had no changes. | 
**Changed** | **int32** | The number of accounts which existed before, but had changes. | 
**Added** | **int32** | The number of accounts which are new - have not existed before. | 
**Removed** | **int32** | The number accounts which existed before, but no longer exist (thus getting removed). | 

## Methods

### NewAccountsCollectedForAggregationStats

`func NewAccountsCollectedForAggregationStats(scanned int32, unchanged int32, changed int32, added int32, removed int32, ) *AccountsCollectedForAggregationStats`

NewAccountsCollectedForAggregationStats instantiates a new AccountsCollectedForAggregationStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsCollectedForAggregationStatsWithDefaults

`func NewAccountsCollectedForAggregationStatsWithDefaults() *AccountsCollectedForAggregationStats`

NewAccountsCollectedForAggregationStatsWithDefaults instantiates a new AccountsCollectedForAggregationStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScanned

`func (o *AccountsCollectedForAggregationStats) GetScanned() int32`

GetScanned returns the Scanned field if non-nil, zero value otherwise.

### GetScannedOk

`func (o *AccountsCollectedForAggregationStats) GetScannedOk() (*int32, bool)`

GetScannedOk returns a tuple with the Scanned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScanned

`func (o *AccountsCollectedForAggregationStats) SetScanned(v int32)`

SetScanned sets Scanned field to given value.


### GetUnchanged

`func (o *AccountsCollectedForAggregationStats) GetUnchanged() int32`

GetUnchanged returns the Unchanged field if non-nil, zero value otherwise.

### GetUnchangedOk

`func (o *AccountsCollectedForAggregationStats) GetUnchangedOk() (*int32, bool)`

GetUnchangedOk returns a tuple with the Unchanged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnchanged

`func (o *AccountsCollectedForAggregationStats) SetUnchanged(v int32)`

SetUnchanged sets Unchanged field to given value.


### GetChanged

`func (o *AccountsCollectedForAggregationStats) GetChanged() int32`

GetChanged returns the Changed field if non-nil, zero value otherwise.

### GetChangedOk

`func (o *AccountsCollectedForAggregationStats) GetChangedOk() (*int32, bool)`

GetChangedOk returns a tuple with the Changed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanged

`func (o *AccountsCollectedForAggregationStats) SetChanged(v int32)`

SetChanged sets Changed field to given value.


### GetAdded

`func (o *AccountsCollectedForAggregationStats) GetAdded() int32`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *AccountsCollectedForAggregationStats) GetAddedOk() (*int32, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *AccountsCollectedForAggregationStats) SetAdded(v int32)`

SetAdded sets Added field to given value.


### GetRemoved

`func (o *AccountsCollectedForAggregationStats) GetRemoved() int32`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *AccountsCollectedForAggregationStats) GetRemovedOk() (*int32, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *AccountsCollectedForAggregationStats) SetRemoved(v int32)`

SetRemoved sets Removed field to given value.



