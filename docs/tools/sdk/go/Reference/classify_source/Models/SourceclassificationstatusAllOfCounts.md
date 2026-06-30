---
id: v1-sourceclassificationstatus-all-of-counts
title: SourceclassificationstatusAllOfCounts
pagination_label: SourceclassificationstatusAllOfCounts
sidebar_label: SourceclassificationstatusAllOfCounts
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceclassificationstatusAllOfCounts', 'V1SourceclassificationstatusAllOfCounts'] 
slug: /tools/sdk/go/classifysource/models/sourceclassificationstatus-all-of-counts
tags: ['SDK', 'Software Development Kit', 'SourceclassificationstatusAllOfCounts', 'V1SourceclassificationstatusAllOfCounts']
---

# SourceclassificationstatusAllOfCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EXPECTED** | **int64** | total number of source accounts | 
**RECEIVED** | **int64** | number of accounts that have been sent for processing (should be the same as expected when all accounts are collected) | 
**COMPLETED** | **int64** | number of accounts that have been classified | 

## Methods

### NewSourceclassificationstatusAllOfCounts

`func NewSourceclassificationstatusAllOfCounts(eXPECTED int64, rECEIVED int64, cOMPLETED int64, ) *SourceclassificationstatusAllOfCounts`

NewSourceclassificationstatusAllOfCounts instantiates a new SourceclassificationstatusAllOfCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceclassificationstatusAllOfCountsWithDefaults

`func NewSourceclassificationstatusAllOfCountsWithDefaults() *SourceclassificationstatusAllOfCounts`

NewSourceclassificationstatusAllOfCountsWithDefaults instantiates a new SourceclassificationstatusAllOfCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEXPECTED

`func (o *SourceclassificationstatusAllOfCounts) GetEXPECTED() int64`

GetEXPECTED returns the EXPECTED field if non-nil, zero value otherwise.

### GetEXPECTEDOk

`func (o *SourceclassificationstatusAllOfCounts) GetEXPECTEDOk() (*int64, bool)`

GetEXPECTEDOk returns a tuple with the EXPECTED field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEXPECTED

`func (o *SourceclassificationstatusAllOfCounts) SetEXPECTED(v int64)`

SetEXPECTED sets EXPECTED field to given value.


### GetRECEIVED

`func (o *SourceclassificationstatusAllOfCounts) GetRECEIVED() int64`

GetRECEIVED returns the RECEIVED field if non-nil, zero value otherwise.

### GetRECEIVEDOk

`func (o *SourceclassificationstatusAllOfCounts) GetRECEIVEDOk() (*int64, bool)`

GetRECEIVEDOk returns a tuple with the RECEIVED field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRECEIVED

`func (o *SourceclassificationstatusAllOfCounts) SetRECEIVED(v int64)`

SetRECEIVED sets RECEIVED field to given value.


### GetCOMPLETED

`func (o *SourceclassificationstatusAllOfCounts) GetCOMPLETED() int64`

GetCOMPLETED returns the COMPLETED field if non-nil, zero value otherwise.

### GetCOMPLETEDOk

`func (o *SourceclassificationstatusAllOfCounts) GetCOMPLETEDOk() (*int64, bool)`

GetCOMPLETEDOk returns a tuple with the COMPLETED field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCOMPLETED

`func (o *SourceclassificationstatusAllOfCounts) SetCOMPLETED(v int64)`

SetCOMPLETED sets COMPLETED field to given value.



