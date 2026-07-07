---
id: v1-pendingapproval-max-permitted-access-duration
title: PendingapprovalMaxPermittedAccessDuration
pagination_label: PendingapprovalMaxPermittedAccessDuration
sidebar_label: PendingapprovalMaxPermittedAccessDuration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PendingapprovalMaxPermittedAccessDuration', 'V1PendingapprovalMaxPermittedAccessDuration'] 
slug: /tools/sdk/go/accessrequestapprovals/models/pendingapproval-max-permitted-access-duration
tags: ['SDK', 'Software Development Kit', 'PendingapprovalMaxPermittedAccessDuration', 'V1PendingapprovalMaxPermittedAccessDuration']
---

# PendingapprovalMaxPermittedAccessDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **int32** | The numeric value of the duration. | [optional] 
**TimeUnit** | Pointer to **string** | The time unit for the duration. | [optional] 

## Methods

### NewPendingapprovalMaxPermittedAccessDuration

`func NewPendingapprovalMaxPermittedAccessDuration() *PendingapprovalMaxPermittedAccessDuration`

NewPendingapprovalMaxPermittedAccessDuration instantiates a new PendingapprovalMaxPermittedAccessDuration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingapprovalMaxPermittedAccessDurationWithDefaults

`func NewPendingapprovalMaxPermittedAccessDurationWithDefaults() *PendingapprovalMaxPermittedAccessDuration`

NewPendingapprovalMaxPermittedAccessDurationWithDefaults instantiates a new PendingapprovalMaxPermittedAccessDuration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *PendingapprovalMaxPermittedAccessDuration) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PendingapprovalMaxPermittedAccessDuration) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PendingapprovalMaxPermittedAccessDuration) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *PendingapprovalMaxPermittedAccessDuration) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetTimeUnit

`func (o *PendingapprovalMaxPermittedAccessDuration) GetTimeUnit() string`

GetTimeUnit returns the TimeUnit field if non-nil, zero value otherwise.

### GetTimeUnitOk

`func (o *PendingapprovalMaxPermittedAccessDuration) GetTimeUnitOk() (*string, bool)`

GetTimeUnitOk returns a tuple with the TimeUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeUnit

`func (o *PendingapprovalMaxPermittedAccessDuration) SetTimeUnit(v string)`

SetTimeUnit sets TimeUnit field to given value.

### HasTimeUnit

`func (o *PendingapprovalMaxPermittedAccessDuration) HasTimeUnit() bool`

HasTimeUnit returns a boolean if a field has been set.


