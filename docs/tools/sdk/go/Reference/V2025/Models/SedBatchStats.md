---
id: v2025-sed-batch-stats
title: SedBatchStats
pagination_label: SedBatchStats
sidebar_label: SedBatchStats
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedBatchStats', 'V2025SedBatchStats'] 
slug: /tools/sdk/go/v2025/models/sed-batch-stats
tags: ['SDK', 'Software Development Kit', 'SedBatchStats', 'V2025SedBatchStats']
---

# SedBatchStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchComplete** | Pointer to **bool** | batch complete | [optional] [default to false]
**BatchId** | Pointer to **string** | batch Id | [optional] 
**DiscoveredCount** | Pointer to **int64** | discovered count | [optional] 
**DiscoveryComplete** | Pointer to **bool** | discovery complete | [optional] [default to false]
**ProcessedCount** | Pointer to **int64** | processed count | [optional] 

## Methods

### NewSedBatchStats

`func NewSedBatchStats() *SedBatchStats`

NewSedBatchStats instantiates a new SedBatchStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedBatchStatsWithDefaults

`func NewSedBatchStatsWithDefaults() *SedBatchStats`

NewSedBatchStatsWithDefaults instantiates a new SedBatchStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchComplete

`func (o *SedBatchStats) GetBatchComplete() bool`

GetBatchComplete returns the BatchComplete field if non-nil, zero value otherwise.

### GetBatchCompleteOk

`func (o *SedBatchStats) GetBatchCompleteOk() (*bool, bool)`

GetBatchCompleteOk returns a tuple with the BatchComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchComplete

`func (o *SedBatchStats) SetBatchComplete(v bool)`

SetBatchComplete sets BatchComplete field to given value.

### HasBatchComplete

`func (o *SedBatchStats) HasBatchComplete() bool`

HasBatchComplete returns a boolean if a field has been set.

### GetBatchId

`func (o *SedBatchStats) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *SedBatchStats) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *SedBatchStats) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *SedBatchStats) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetDiscoveredCount

`func (o *SedBatchStats) GetDiscoveredCount() int64`

GetDiscoveredCount returns the DiscoveredCount field if non-nil, zero value otherwise.

### GetDiscoveredCountOk

`func (o *SedBatchStats) GetDiscoveredCountOk() (*int64, bool)`

GetDiscoveredCountOk returns a tuple with the DiscoveredCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredCount

`func (o *SedBatchStats) SetDiscoveredCount(v int64)`

SetDiscoveredCount sets DiscoveredCount field to given value.

### HasDiscoveredCount

`func (o *SedBatchStats) HasDiscoveredCount() bool`

HasDiscoveredCount returns a boolean if a field has been set.

### GetDiscoveryComplete

`func (o *SedBatchStats) GetDiscoveryComplete() bool`

GetDiscoveryComplete returns the DiscoveryComplete field if non-nil, zero value otherwise.

### GetDiscoveryCompleteOk

`func (o *SedBatchStats) GetDiscoveryCompleteOk() (*bool, bool)`

GetDiscoveryCompleteOk returns a tuple with the DiscoveryComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveryComplete

`func (o *SedBatchStats) SetDiscoveryComplete(v bool)`

SetDiscoveryComplete sets DiscoveryComplete field to given value.

### HasDiscoveryComplete

`func (o *SedBatchStats) HasDiscoveryComplete() bool`

HasDiscoveryComplete returns a boolean if a field has been set.

### GetProcessedCount

`func (o *SedBatchStats) GetProcessedCount() int64`

GetProcessedCount returns the ProcessedCount field if non-nil, zero value otherwise.

### GetProcessedCountOk

`func (o *SedBatchStats) GetProcessedCountOk() (*int64, bool)`

GetProcessedCountOk returns a tuple with the ProcessedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedCount

`func (o *SedBatchStats) SetProcessedCount(v int64)`

SetProcessedCount sets ProcessedCount field to given value.

### HasProcessedCount

`func (o *SedBatchStats) HasProcessedCount() bool`

HasProcessedCount returns a boolean if a field has been set.


