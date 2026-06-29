---
id: v1-nonemployeerequestsummary
title: Nonemployeerequestsummary
pagination_label: Nonemployeerequestsummary
sidebar_label: Nonemployeerequestsummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeerequestsummary', 'V1Nonemployeerequestsummary'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeerequestsummary
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestsummary', 'V1Nonemployeerequestsummary']
---

# Nonemployeerequestsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | Pointer to **int32** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Rejected** | Pointer to **int32** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Pending** | Pointer to **int32** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**NonEmployeeCount** | Pointer to **int32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 

## Methods

### NewNonemployeerequestsummary

`func NewNonemployeerequestsummary() *Nonemployeerequestsummary`

NewNonemployeerequestsummary instantiates a new Nonemployeerequestsummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeerequestsummaryWithDefaults

`func NewNonemployeerequestsummaryWithDefaults() *Nonemployeerequestsummary`

NewNonemployeerequestsummaryWithDefaults instantiates a new Nonemployeerequestsummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *Nonemployeerequestsummary) GetApproved() int32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *Nonemployeerequestsummary) GetApprovedOk() (*int32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *Nonemployeerequestsummary) SetApproved(v int32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *Nonemployeerequestsummary) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetRejected

`func (o *Nonemployeerequestsummary) GetRejected() int32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *Nonemployeerequestsummary) GetRejectedOk() (*int32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *Nonemployeerequestsummary) SetRejected(v int32)`

SetRejected sets Rejected field to given value.

### HasRejected

`func (o *Nonemployeerequestsummary) HasRejected() bool`

HasRejected returns a boolean if a field has been set.

### GetPending

`func (o *Nonemployeerequestsummary) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *Nonemployeerequestsummary) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *Nonemployeerequestsummary) SetPending(v int32)`

SetPending sets Pending field to given value.

### HasPending

`func (o *Nonemployeerequestsummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetNonEmployeeCount

`func (o *Nonemployeerequestsummary) GetNonEmployeeCount() int32`

GetNonEmployeeCount returns the NonEmployeeCount field if non-nil, zero value otherwise.

### GetNonEmployeeCountOk

`func (o *Nonemployeerequestsummary) GetNonEmployeeCountOk() (*int32, bool)`

GetNonEmployeeCountOk returns a tuple with the NonEmployeeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeCount

`func (o *Nonemployeerequestsummary) SetNonEmployeeCount(v int32)`

SetNonEmployeeCount sets NonEmployeeCount field to given value.

### HasNonEmployeeCount

`func (o *Nonemployeerequestsummary) HasNonEmployeeCount() bool`

HasNonEmployeeCount returns a boolean if a field has been set.


