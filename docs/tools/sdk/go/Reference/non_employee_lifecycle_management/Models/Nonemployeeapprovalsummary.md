---
id: v1-nonemployeeapprovalsummary
title: Nonemployeeapprovalsummary
pagination_label: Nonemployeeapprovalsummary
sidebar_label: Nonemployeeapprovalsummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeeapprovalsummary', 'V1Nonemployeeapprovalsummary'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeeapprovalsummary
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalsummary', 'V1Nonemployeeapprovalsummary']
---

# Nonemployeeapprovalsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | Pointer to **int32** | The number of approved non-employee approval requests. | [optional] 
**Pending** | Pointer to **int32** | The number of pending non-employee approval requests. | [optional] 
**Rejected** | Pointer to **int32** | The number of rejected non-employee approval requests. | [optional] 

## Methods

### NewNonemployeeapprovalsummary

`func NewNonemployeeapprovalsummary() *Nonemployeeapprovalsummary`

NewNonemployeeapprovalsummary instantiates a new Nonemployeeapprovalsummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeeapprovalsummaryWithDefaults

`func NewNonemployeeapprovalsummaryWithDefaults() *Nonemployeeapprovalsummary`

NewNonemployeeapprovalsummaryWithDefaults instantiates a new Nonemployeeapprovalsummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *Nonemployeeapprovalsummary) GetApproved() int32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *Nonemployeeapprovalsummary) GetApprovedOk() (*int32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *Nonemployeeapprovalsummary) SetApproved(v int32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *Nonemployeeapprovalsummary) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetPending

`func (o *Nonemployeeapprovalsummary) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *Nonemployeeapprovalsummary) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *Nonemployeeapprovalsummary) SetPending(v int32)`

SetPending sets Pending field to given value.

### HasPending

`func (o *Nonemployeeapprovalsummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetRejected

`func (o *Nonemployeeapprovalsummary) GetRejected() int32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *Nonemployeeapprovalsummary) GetRejectedOk() (*int32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *Nonemployeeapprovalsummary) SetRejected(v int32)`

SetRejected sets Rejected field to given value.

### HasRejected

`func (o *Nonemployeeapprovalsummary) HasRejected() bool`

HasRejected returns a boolean if a field has been set.


