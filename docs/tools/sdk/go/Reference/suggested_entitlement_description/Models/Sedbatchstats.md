---
id: v1-sedbatchstats
title: Sedbatchstats
pagination_label: Sedbatchstats
sidebar_label: Sedbatchstats
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedbatchstats', 'V1Sedbatchstats'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedbatchstats
tags: ['SDK', 'Software Development Kit', 'Sedbatchstats', 'V1Sedbatchstats']
---

# Sedbatchstats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchComplete** | Pointer to **bool** | batch complete | [optional] [default to false]
**BatchId** | Pointer to **string** | batch Id | [optional] 
**DiscoveredCount** | Pointer to **int64** | discovered count | [optional] 
**DiscoveryComplete** | Pointer to **bool** | discovery complete | [optional] [default to false]
**ProcessedCount** | Pointer to **int64** | processed count | [optional] 

## Methods

### NewSedbatchstats

`func NewSedbatchstats() *Sedbatchstats`

NewSedbatchstats instantiates a new Sedbatchstats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedbatchstatsWithDefaults

`func NewSedbatchstatsWithDefaults() *Sedbatchstats`

NewSedbatchstatsWithDefaults instantiates a new Sedbatchstats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchComplete

`func (o *Sedbatchstats) GetBatchComplete() bool`

GetBatchComplete returns the BatchComplete field if non-nil, zero value otherwise.

### GetBatchCompleteOk

`func (o *Sedbatchstats) GetBatchCompleteOk() (*bool, bool)`

GetBatchCompleteOk returns a tuple with the BatchComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchComplete

`func (o *Sedbatchstats) SetBatchComplete(v bool)`

SetBatchComplete sets BatchComplete field to given value.

### HasBatchComplete

`func (o *Sedbatchstats) HasBatchComplete() bool`

HasBatchComplete returns a boolean if a field has been set.

### GetBatchId

`func (o *Sedbatchstats) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *Sedbatchstats) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *Sedbatchstats) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *Sedbatchstats) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetDiscoveredCount

`func (o *Sedbatchstats) GetDiscoveredCount() int64`

GetDiscoveredCount returns the DiscoveredCount field if non-nil, zero value otherwise.

### GetDiscoveredCountOk

`func (o *Sedbatchstats) GetDiscoveredCountOk() (*int64, bool)`

GetDiscoveredCountOk returns a tuple with the DiscoveredCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredCount

`func (o *Sedbatchstats) SetDiscoveredCount(v int64)`

SetDiscoveredCount sets DiscoveredCount field to given value.

### HasDiscoveredCount

`func (o *Sedbatchstats) HasDiscoveredCount() bool`

HasDiscoveredCount returns a boolean if a field has been set.

### GetDiscoveryComplete

`func (o *Sedbatchstats) GetDiscoveryComplete() bool`

GetDiscoveryComplete returns the DiscoveryComplete field if non-nil, zero value otherwise.

### GetDiscoveryCompleteOk

`func (o *Sedbatchstats) GetDiscoveryCompleteOk() (*bool, bool)`

GetDiscoveryCompleteOk returns a tuple with the DiscoveryComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveryComplete

`func (o *Sedbatchstats) SetDiscoveryComplete(v bool)`

SetDiscoveryComplete sets DiscoveryComplete field to given value.

### HasDiscoveryComplete

`func (o *Sedbatchstats) HasDiscoveryComplete() bool`

HasDiscoveryComplete returns a boolean if a field has been set.

### GetProcessedCount

`func (o *Sedbatchstats) GetProcessedCount() int64`

GetProcessedCount returns the ProcessedCount field if non-nil, zero value otherwise.

### GetProcessedCountOk

`func (o *Sedbatchstats) GetProcessedCountOk() (*int64, bool)`

GetProcessedCountOk returns a tuple with the ProcessedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedCount

`func (o *Sedbatchstats) SetProcessedCount(v int64)`

SetProcessedCount sets ProcessedCount field to given value.

### HasProcessedCount

`func (o *Sedbatchstats) HasProcessedCount() bool`

HasProcessedCount returns a boolean if a field has been set.


