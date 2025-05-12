---
id: beta-source-usage-status
title: SourceUsageStatus
pagination_label: SourceUsageStatus
sidebar_label: SourceUsageStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceUsageStatus', 'BetaSourceUsageStatus'] 
slug: /tools/sdk/go/beta/models/source-usage-status
tags: ['SDK', 'Software Development Kit', 'SourceUsageStatus', 'BetaSourceUsageStatus']
---

# SourceUsageStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 

## Methods

### NewSourceUsageStatus

`func NewSourceUsageStatus() *SourceUsageStatus`

NewSourceUsageStatus instantiates a new SourceUsageStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceUsageStatusWithDefaults

`func NewSourceUsageStatusWithDefaults() *SourceUsageStatus`

NewSourceUsageStatusWithDefaults instantiates a new SourceUsageStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SourceUsageStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SourceUsageStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SourceUsageStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SourceUsageStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


