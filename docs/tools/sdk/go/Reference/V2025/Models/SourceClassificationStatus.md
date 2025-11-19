---
id: v2025-source-classification-status
title: SourceClassificationStatus
pagination_label: SourceClassificationStatus
sidebar_label: SourceClassificationStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceClassificationStatus', 'V2025SourceClassificationStatus'] 
slug: /tools/sdk/go/v2025/models/source-classification-status
tags: ['SDK', 'Software Development Kit', 'SourceClassificationStatus', 'V2025SourceClassificationStatus']
---

# SourceClassificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Status of Classification Process | [optional] 
**Started** | Pointer to **SailPointTime** | Time when the process was started | [optional] 
**Updated** | Pointer to **NullableTime** | Time when the process status was last updated | [optional] 
**Counts** | Pointer to [**SourceClassificationStatusAllOfCounts**](source-classification-status-all-of-counts) |  | [optional] 

## Methods

### NewSourceClassificationStatus

`func NewSourceClassificationStatus() *SourceClassificationStatus`

NewSourceClassificationStatus instantiates a new SourceClassificationStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceClassificationStatusWithDefaults

`func NewSourceClassificationStatusWithDefaults() *SourceClassificationStatus`

NewSourceClassificationStatusWithDefaults instantiates a new SourceClassificationStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SourceClassificationStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SourceClassificationStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SourceClassificationStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SourceClassificationStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStarted

`func (o *SourceClassificationStatus) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *SourceClassificationStatus) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *SourceClassificationStatus) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.

### HasStarted

`func (o *SourceClassificationStatus) HasStarted() bool`

HasStarted returns a boolean if a field has been set.

### GetUpdated

`func (o *SourceClassificationStatus) GetUpdated() SailPointTime`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *SourceClassificationStatus) GetUpdatedOk() (*SailPointTime, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *SourceClassificationStatus) SetUpdated(v SailPointTime)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *SourceClassificationStatus) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.

### SetUpdatedNil

`func (o *SourceClassificationStatus) SetUpdatedNil(b bool)`

 SetUpdatedNil sets the value for Updated to be an explicit nil

### UnsetUpdated
`func (o *SourceClassificationStatus) UnsetUpdated()`

UnsetUpdated ensures that no value is present for Updated, not even an explicit nil
### GetCounts

`func (o *SourceClassificationStatus) GetCounts() SourceClassificationStatusAllOfCounts`

GetCounts returns the Counts field if non-nil, zero value otherwise.

### GetCountsOk

`func (o *SourceClassificationStatus) GetCountsOk() (*SourceClassificationStatusAllOfCounts, bool)`

GetCountsOk returns a tuple with the Counts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCounts

`func (o *SourceClassificationStatus) SetCounts(v SourceClassificationStatusAllOfCounts)`

SetCounts sets Counts field to given value.

### HasCounts

`func (o *SourceClassificationStatus) HasCounts() bool`

HasCounts returns a boolean if a field has been set.


