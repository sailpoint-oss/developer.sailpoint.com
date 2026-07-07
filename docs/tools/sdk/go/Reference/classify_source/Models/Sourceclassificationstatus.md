---
id: v1-sourceclassificationstatus
title: Sourceclassificationstatus
pagination_label: Sourceclassificationstatus
sidebar_label: Sourceclassificationstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceclassificationstatus', 'V1Sourceclassificationstatus'] 
slug: /tools/sdk/go/classifysource/models/sourceclassificationstatus
tags: ['SDK', 'Software Development Kit', 'Sourceclassificationstatus', 'V1Sourceclassificationstatus']
---

# Sourceclassificationstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Status of Classification Process | [optional] 
**Started** | Pointer to **SailPointTime** | Time when the process was started | [optional] 
**Updated** | Pointer to **NullableTime** | Time when the process status was last updated | [optional] 
**Counts** | Pointer to [**SourceclassificationstatusAllOfCounts**](sourceclassificationstatus-all-of-counts) |  | [optional] 

## Methods

### NewSourceclassificationstatus

`func NewSourceclassificationstatus() *Sourceclassificationstatus`

NewSourceclassificationstatus instantiates a new Sourceclassificationstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceclassificationstatusWithDefaults

`func NewSourceclassificationstatusWithDefaults() *Sourceclassificationstatus`

NewSourceclassificationstatusWithDefaults instantiates a new Sourceclassificationstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *Sourceclassificationstatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Sourceclassificationstatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Sourceclassificationstatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Sourceclassificationstatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStarted

`func (o *Sourceclassificationstatus) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *Sourceclassificationstatus) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *Sourceclassificationstatus) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.

### HasStarted

`func (o *Sourceclassificationstatus) HasStarted() bool`

HasStarted returns a boolean if a field has been set.

### GetUpdated

`func (o *Sourceclassificationstatus) GetUpdated() SailPointTime`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *Sourceclassificationstatus) GetUpdatedOk() (*SailPointTime, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *Sourceclassificationstatus) SetUpdated(v SailPointTime)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *Sourceclassificationstatus) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.

### SetUpdatedNil

`func (o *Sourceclassificationstatus) SetUpdatedNil(b bool)`

 SetUpdatedNil sets the value for Updated to be an explicit nil

### UnsetUpdated
`func (o *Sourceclassificationstatus) UnsetUpdated()`

UnsetUpdated ensures that no value is present for Updated, not even an explicit nil
### GetCounts

`func (o *Sourceclassificationstatus) GetCounts() SourceclassificationstatusAllOfCounts`

GetCounts returns the Counts field if non-nil, zero value otherwise.

### GetCountsOk

`func (o *Sourceclassificationstatus) GetCountsOk() (*SourceclassificationstatusAllOfCounts, bool)`

GetCountsOk returns a tuple with the Counts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCounts

`func (o *Sourceclassificationstatus) SetCounts(v SourceclassificationstatusAllOfCounts)`

SetCounts sets Counts field to given value.

### HasCounts

`func (o *Sourceclassificationstatus) HasCounts() bool`

HasCounts returns a boolean if a field has been set.


