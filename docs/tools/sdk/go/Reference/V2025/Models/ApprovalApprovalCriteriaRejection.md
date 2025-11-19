---
id: v2025-approval-approval-criteria-rejection
title: ApprovalApprovalCriteriaRejection
pagination_label: ApprovalApprovalCriteriaRejection
sidebar_label: ApprovalApprovalCriteriaRejection
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalApprovalCriteriaRejection', 'V2025ApprovalApprovalCriteriaRejection'] 
slug: /tools/sdk/go/v2025/models/approval-approval-criteria-rejection
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteriaRejection', 'V2025ApprovalApprovalCriteriaRejection']
---

# ApprovalApprovalCriteriaRejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** | Pointer to **string** | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**Value** | Pointer to **int64** | The value that needs to be met for the rejection criteria | [optional] 

## Methods

### NewApprovalApprovalCriteriaRejection

`func NewApprovalApprovalCriteriaRejection() *ApprovalApprovalCriteriaRejection`

NewApprovalApprovalCriteriaRejection instantiates a new ApprovalApprovalCriteriaRejection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalApprovalCriteriaRejectionWithDefaults

`func NewApprovalApprovalCriteriaRejectionWithDefaults() *ApprovalApprovalCriteriaRejection`

NewApprovalApprovalCriteriaRejectionWithDefaults instantiates a new ApprovalApprovalCriteriaRejection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculationType

`func (o *ApprovalApprovalCriteriaRejection) GetCalculationType() string`

GetCalculationType returns the CalculationType field if non-nil, zero value otherwise.

### GetCalculationTypeOk

`func (o *ApprovalApprovalCriteriaRejection) GetCalculationTypeOk() (*string, bool)`

GetCalculationTypeOk returns a tuple with the CalculationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationType

`func (o *ApprovalApprovalCriteriaRejection) SetCalculationType(v string)`

SetCalculationType sets CalculationType field to given value.

### HasCalculationType

`func (o *ApprovalApprovalCriteriaRejection) HasCalculationType() bool`

HasCalculationType returns a boolean if a field has been set.

### GetValue

`func (o *ApprovalApprovalCriteriaRejection) GetValue() int64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ApprovalApprovalCriteriaRejection) GetValueOk() (*int64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ApprovalApprovalCriteriaRejection) SetValue(v int64)`

SetValue sets Value field to given value.

### HasValue

`func (o *ApprovalApprovalCriteriaRejection) HasValue() bool`

HasValue returns a boolean if a field has been set.


