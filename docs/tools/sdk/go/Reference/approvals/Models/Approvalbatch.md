---
id: v1-approvalbatch
title: Approvalbatch
pagination_label: Approvalbatch
sidebar_label: Approvalbatch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalbatch', 'V1Approvalbatch'] 
slug: /tools/sdk/go/approvals/models/approvalbatch
tags: ['SDK', 'Software Development Kit', 'Approvalbatch', 'V1Approvalbatch']
---

# Approvalbatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | ID of the batch | [optional] 
**BatchSize** | Pointer to **int64** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 

## Methods

### NewApprovalbatch

`func NewApprovalbatch() *Approvalbatch`

NewApprovalbatch instantiates a new Approvalbatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalbatchWithDefaults

`func NewApprovalbatchWithDefaults() *Approvalbatch`

NewApprovalbatchWithDefaults instantiates a new Approvalbatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *Approvalbatch) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *Approvalbatch) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *Approvalbatch) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *Approvalbatch) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetBatchSize

`func (o *Approvalbatch) GetBatchSize() int64`

GetBatchSize returns the BatchSize field if non-nil, zero value otherwise.

### GetBatchSizeOk

`func (o *Approvalbatch) GetBatchSizeOk() (*int64, bool)`

GetBatchSizeOk returns a tuple with the BatchSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchSize

`func (o *Approvalbatch) SetBatchSize(v int64)`

SetBatchSize sets BatchSize field to given value.

### HasBatchSize

`func (o *Approvalbatch) HasBatchSize() bool`

HasBatchSize returns a boolean if a field has been set.


