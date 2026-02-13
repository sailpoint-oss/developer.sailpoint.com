---
id: pending-approval-max-permitted-access-duration
title: PendingApprovalMaxPermittedAccessDuration
pagination_label: PendingApprovalMaxPermittedAccessDuration
sidebar_label: PendingApprovalMaxPermittedAccessDuration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PendingApprovalMaxPermittedAccessDuration', 'PendingApprovalMaxPermittedAccessDuration'] 
slug: /tools/sdk/go/v3/models/pending-approval-max-permitted-access-duration
tags: ['SDK', 'Software Development Kit', 'PendingApprovalMaxPermittedAccessDuration', 'PendingApprovalMaxPermittedAccessDuration']
---

# PendingApprovalMaxPermittedAccessDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **int32** | The numeric value of the duration. | [optional] 
**TimeUnit** | Pointer to **string** | The time unit for the duration. | [optional] 

## Methods

### NewPendingApprovalMaxPermittedAccessDuration

`func NewPendingApprovalMaxPermittedAccessDuration() *PendingApprovalMaxPermittedAccessDuration`

NewPendingApprovalMaxPermittedAccessDuration instantiates a new PendingApprovalMaxPermittedAccessDuration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingApprovalMaxPermittedAccessDurationWithDefaults

`func NewPendingApprovalMaxPermittedAccessDurationWithDefaults() *PendingApprovalMaxPermittedAccessDuration`

NewPendingApprovalMaxPermittedAccessDurationWithDefaults instantiates a new PendingApprovalMaxPermittedAccessDuration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *PendingApprovalMaxPermittedAccessDuration) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PendingApprovalMaxPermittedAccessDuration) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PendingApprovalMaxPermittedAccessDuration) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *PendingApprovalMaxPermittedAccessDuration) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetTimeUnit

`func (o *PendingApprovalMaxPermittedAccessDuration) GetTimeUnit() string`

GetTimeUnit returns the TimeUnit field if non-nil, zero value otherwise.

### GetTimeUnitOk

`func (o *PendingApprovalMaxPermittedAccessDuration) GetTimeUnitOk() (*string, bool)`

GetTimeUnitOk returns a tuple with the TimeUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeUnit

`func (o *PendingApprovalMaxPermittedAccessDuration) SetTimeUnit(v string)`

SetTimeUnit sets TimeUnit field to given value.

### HasTimeUnit

`func (o *PendingApprovalMaxPermittedAccessDuration) HasTimeUnit() bool`

HasTimeUnit returns a boolean if a field has been set.


