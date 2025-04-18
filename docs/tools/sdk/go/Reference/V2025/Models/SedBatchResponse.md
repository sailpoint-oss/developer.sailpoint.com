---
id: v2025-sed-batch-response
title: SedBatchResponse
pagination_label: SedBatchResponse
sidebar_label: SedBatchResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedBatchResponse', 'V2025SedBatchResponse'] 
slug: /tools/sdk/go/v2025/models/sed-batch-response
tags: ['SDK', 'Software Development Kit', 'SedBatchResponse', 'V2025SedBatchResponse']
---

# SedBatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | BatchId that groups all the ids together | [optional] 

## Methods

### NewSedBatchResponse

`func NewSedBatchResponse() *SedBatchResponse`

NewSedBatchResponse instantiates a new SedBatchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedBatchResponseWithDefaults

`func NewSedBatchResponseWithDefaults() *SedBatchResponse`

NewSedBatchResponseWithDefaults instantiates a new SedBatchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *SedBatchResponse) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *SedBatchResponse) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *SedBatchResponse) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *SedBatchResponse) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.


