---
id: beta-non-employee-request-summary
title: NonEmployeeRequestSummary
pagination_label: NonEmployeeRequestSummary
sidebar_label: NonEmployeeRequestSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeRequestSummary', 'BetaNonEmployeeRequestSummary'] 
slug: /tools/sdk/go/beta/models/non-employee-request-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestSummary', 'BetaNonEmployeeRequestSummary']
---

# NonEmployeeRequestSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | Pointer to **float32** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Rejected** | Pointer to **float32** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Pending** | Pointer to **float32** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**NonEmployeeCount** | Pointer to **float32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 

## Methods

### NewNonEmployeeRequestSummary

`func NewNonEmployeeRequestSummary() *NonEmployeeRequestSummary`

NewNonEmployeeRequestSummary instantiates a new NonEmployeeRequestSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeRequestSummaryWithDefaults

`func NewNonEmployeeRequestSummaryWithDefaults() *NonEmployeeRequestSummary`

NewNonEmployeeRequestSummaryWithDefaults instantiates a new NonEmployeeRequestSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *NonEmployeeRequestSummary) GetApproved() float32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *NonEmployeeRequestSummary) GetApprovedOk() (*float32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *NonEmployeeRequestSummary) SetApproved(v float32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *NonEmployeeRequestSummary) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetRejected

`func (o *NonEmployeeRequestSummary) GetRejected() float32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *NonEmployeeRequestSummary) GetRejectedOk() (*float32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *NonEmployeeRequestSummary) SetRejected(v float32)`

SetRejected sets Rejected field to given value.

### HasRejected

`func (o *NonEmployeeRequestSummary) HasRejected() bool`

HasRejected returns a boolean if a field has been set.

### GetPending

`func (o *NonEmployeeRequestSummary) GetPending() float32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *NonEmployeeRequestSummary) GetPendingOk() (*float32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *NonEmployeeRequestSummary) SetPending(v float32)`

SetPending sets Pending field to given value.

### HasPending

`func (o *NonEmployeeRequestSummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetNonEmployeeCount

`func (o *NonEmployeeRequestSummary) GetNonEmployeeCount() float32`

GetNonEmployeeCount returns the NonEmployeeCount field if non-nil, zero value otherwise.

### GetNonEmployeeCountOk

`func (o *NonEmployeeRequestSummary) GetNonEmployeeCountOk() (*float32, bool)`

GetNonEmployeeCountOk returns a tuple with the NonEmployeeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeCount

`func (o *NonEmployeeRequestSummary) SetNonEmployeeCount(v float32)`

SetNonEmployeeCount sets NonEmployeeCount field to given value.

### HasNonEmployeeCount

`func (o *NonEmployeeRequestSummary) HasNonEmployeeCount() bool`

HasNonEmployeeCount returns a boolean if a field has been set.


