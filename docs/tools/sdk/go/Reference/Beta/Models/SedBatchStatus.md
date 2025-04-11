---
id: beta-sed-batch-status
title: SedBatchStatus
pagination_label: SedBatchStatus
sidebar_label: SedBatchStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedBatchStatus', 'BetaSedBatchStatus'] 
slug: /tools/sdk/go/beta/models/sed-batch-status
tags: ['SDK', 'Software Development Kit', 'SedBatchStatus', 'BetaSedBatchStatus']
---

# SedBatchStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | status of batch | [optional] 

## Methods

### NewSedBatchStatus

`func NewSedBatchStatus() *SedBatchStatus`

NewSedBatchStatus instantiates a new SedBatchStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedBatchStatusWithDefaults

`func NewSedBatchStatusWithDefaults() *SedBatchStatus`

NewSedBatchStatusWithDefaults instantiates a new SedBatchStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SedBatchStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SedBatchStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SedBatchStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SedBatchStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


