---
id: v1-approvalsummary
title: Approvalsummary
pagination_label: Approvalsummary
sidebar_label: Approvalsummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalsummary', 'V1Approvalsummary'] 
slug: /tools/sdk/go/accessrequestapprovals/models/approvalsummary
tags: ['SDK', 'Software Development Kit', 'Approvalsummary', 'V1Approvalsummary']
---

# Approvalsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** | Pointer to **int32** | The number of pending access requests approvals. | [optional] 
**Approved** | Pointer to **int32** | The number of approved access requests approvals. | [optional] 
**Rejected** | Pointer to **int32** | The number of rejected access requests approvals. | [optional] 

## Methods

### NewApprovalsummary

`func NewApprovalsummary() *Approvalsummary`

NewApprovalsummary instantiates a new Approvalsummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalsummaryWithDefaults

`func NewApprovalsummaryWithDefaults() *Approvalsummary`

NewApprovalsummaryWithDefaults instantiates a new Approvalsummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPending

`func (o *Approvalsummary) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *Approvalsummary) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *Approvalsummary) SetPending(v int32)`

SetPending sets Pending field to given value.

### HasPending

`func (o *Approvalsummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetApproved

`func (o *Approvalsummary) GetApproved() int32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *Approvalsummary) GetApprovedOk() (*int32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *Approvalsummary) SetApproved(v int32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *Approvalsummary) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetRejected

`func (o *Approvalsummary) GetRejected() int32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *Approvalsummary) GetRejectedOk() (*int32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *Approvalsummary) SetRejected(v int32)`

SetRejected sets Rejected field to given value.

### HasRejected

`func (o *Approvalsummary) HasRejected() bool`

HasRejected returns a boolean if a field has been set.


