---
id: v2025-sed-approval-status
title: SedApprovalStatus
pagination_label: SedApprovalStatus
sidebar_label: SedApprovalStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedApprovalStatus', 'V2025SedApprovalStatus'] 
slug: /tools/sdk/go/v2025/models/sed-approval-status
tags: ['SDK', 'Software Development Kit', 'SedApprovalStatus', 'V2025SedApprovalStatus']
---

# SedApprovalStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedReason** | Pointer to **string** | failed reason will be display if status is failed | [optional] 
**Id** | Pointer to **string** | Sed id | [optional] 
**Status** | Pointer to **string** | SUCCESS | FAILED | [optional] 

## Methods

### NewSedApprovalStatus

`func NewSedApprovalStatus() *SedApprovalStatus`

NewSedApprovalStatus instantiates a new SedApprovalStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedApprovalStatusWithDefaults

`func NewSedApprovalStatusWithDefaults() *SedApprovalStatus`

NewSedApprovalStatusWithDefaults instantiates a new SedApprovalStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFailedReason

`func (o *SedApprovalStatus) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *SedApprovalStatus) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *SedApprovalStatus) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *SedApprovalStatus) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### GetId

`func (o *SedApprovalStatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SedApprovalStatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SedApprovalStatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SedApprovalStatus) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *SedApprovalStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SedApprovalStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SedApprovalStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SedApprovalStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


