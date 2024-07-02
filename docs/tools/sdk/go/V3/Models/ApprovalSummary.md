---
id: approval-summary
title: ApprovalSummary
pagination_label: ApprovalSummary
sidebar_label: ApprovalSummary
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ApprovalSummary'] 
slug: /tools/sdk/go/v3/models/approval-summary
tags: ['SDK', 'Software Development Kit', 'ApprovalSummary']
---

# ApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** |  Pointer to **int32** | The number of pending access requests approvals. | [optional] 
**Approved** |  Pointer to **int32** | The number of approved access requests approvals. | [optional] 
**Rejected** |  Pointer to **int32** | The number of rejected access requests approvals. | [optional] 

## Methods

### NewApprovalSummary

`func NewApprovalSummary() *ApprovalSummary`

NewApprovalSummary instantiates a new ApprovalSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalSummaryWithDefaults

`func NewApprovalSummaryWithDefaults() *ApprovalSummary`

NewApprovalSummaryWithDefaults instantiates a new ApprovalSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPending

`func (o *ApprovalSummary) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *ApprovalSummary) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *ApprovalSummary) SetPending(v int32)`

SetPending sets Pending field to given value.

### HasPending

`func (o *ApprovalSummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetApproved

`func (o *ApprovalSummary) GetApproved() int32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *ApprovalSummary) GetApprovedOk() (*int32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *ApprovalSummary) SetApproved(v int32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *ApprovalSummary) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetRejected

`func (o *ApprovalSummary) GetRejected() int32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *ApprovalSummary) GetRejectedOk() (*int32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *ApprovalSummary) SetRejected(v int32)`

SetRejected sets Rejected field to given value.

### HasRejected

`func (o *ApprovalSummary) HasRejected() bool`

HasRejected returns a boolean if a field has been set.


[[Back to top]](#) 


