---
id: v2024-sed-assignment-response
title: SedAssignmentResponse
pagination_label: SedAssignmentResponse
sidebar_label: SedAssignmentResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedAssignmentResponse', 'V2024SedAssignmentResponse'] 
slug: /tools/sdk/go/v2024/models/sed-assignment-response
tags: ['SDK', 'Software Development Kit', 'SedAssignmentResponse', 'V2024SedAssignmentResponse']
---

# SedAssignmentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | BatchId that groups all the ids together | [optional] 

## Methods

### NewSedAssignmentResponse

`func NewSedAssignmentResponse() *SedAssignmentResponse`

NewSedAssignmentResponse instantiates a new SedAssignmentResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedAssignmentResponseWithDefaults

`func NewSedAssignmentResponseWithDefaults() *SedAssignmentResponse`

NewSedAssignmentResponseWithDefaults instantiates a new SedAssignmentResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *SedAssignmentResponse) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *SedAssignmentResponse) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *SedAssignmentResponse) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *SedAssignmentResponse) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.


