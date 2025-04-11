---
id: v2025-approval-batch
title: ApprovalBatch
pagination_label: ApprovalBatch
sidebar_label: ApprovalBatch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalBatch', 'V2025ApprovalBatch'] 
slug: /tools/sdk/go/v2025/models/approval-batch
tags: ['SDK', 'Software Development Kit', 'ApprovalBatch', 'V2025ApprovalBatch']
---

# ApprovalBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | ID of the batch | [optional] 
**BatchSize** | Pointer to **int64** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 

## Methods

### NewApprovalBatch

`func NewApprovalBatch() *ApprovalBatch`

NewApprovalBatch instantiates a new ApprovalBatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalBatchWithDefaults

`func NewApprovalBatchWithDefaults() *ApprovalBatch`

NewApprovalBatchWithDefaults instantiates a new ApprovalBatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *ApprovalBatch) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *ApprovalBatch) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *ApprovalBatch) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *ApprovalBatch) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetBatchSize

`func (o *ApprovalBatch) GetBatchSize() int64`

GetBatchSize returns the BatchSize field if non-nil, zero value otherwise.

### GetBatchSizeOk

`func (o *ApprovalBatch) GetBatchSizeOk() (*int64, bool)`

GetBatchSizeOk returns a tuple with the BatchSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchSize

`func (o *ApprovalBatch) SetBatchSize(v int64)`

SetBatchSize sets BatchSize field to given value.

### HasBatchSize

`func (o *ApprovalBatch) HasBatchSize() bool`

HasBatchSize returns a boolean if a field has been set.


