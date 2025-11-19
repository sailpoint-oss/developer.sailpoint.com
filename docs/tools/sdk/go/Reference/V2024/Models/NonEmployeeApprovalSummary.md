---
id: v2024-non-employee-approval-summary
title: NonEmployeeApprovalSummary
pagination_label: NonEmployeeApprovalSummary
sidebar_label: NonEmployeeApprovalSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeApprovalSummary', 'V2024NonEmployeeApprovalSummary'] 
slug: /tools/sdk/go/v2024/models/non-employee-approval-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalSummary', 'V2024NonEmployeeApprovalSummary']
---

# NonEmployeeApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | Pointer to **int32** | The number of approved non-employee approval requests. | [optional] 
**Pending** | Pointer to **int32** | The number of pending non-employee approval requests. | [optional] 
**Rejected** | Pointer to **int32** | The number of rejected non-employee approval requests. | [optional] 

## Methods

### NewNonEmployeeApprovalSummary

`func NewNonEmployeeApprovalSummary() *NonEmployeeApprovalSummary`

NewNonEmployeeApprovalSummary instantiates a new NonEmployeeApprovalSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeApprovalSummaryWithDefaults

`func NewNonEmployeeApprovalSummaryWithDefaults() *NonEmployeeApprovalSummary`

NewNonEmployeeApprovalSummaryWithDefaults instantiates a new NonEmployeeApprovalSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *NonEmployeeApprovalSummary) GetApproved() int32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *NonEmployeeApprovalSummary) GetApprovedOk() (*int32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *NonEmployeeApprovalSummary) SetApproved(v int32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *NonEmployeeApprovalSummary) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetPending

`func (o *NonEmployeeApprovalSummary) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *NonEmployeeApprovalSummary) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *NonEmployeeApprovalSummary) SetPending(v int32)`

SetPending sets Pending field to given value.

### HasPending

`func (o *NonEmployeeApprovalSummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetRejected

`func (o *NonEmployeeApprovalSummary) GetRejected() int32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *NonEmployeeApprovalSummary) GetRejectedOk() (*int32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *NonEmployeeApprovalSummary) SetRejected(v int32)`

SetRejected sets Rejected field to given value.

### HasRejected

`func (o *NonEmployeeApprovalSummary) HasRejected() bool`

HasRejected returns a boolean if a field has been set.


