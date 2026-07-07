---
id: v1-approval2-approval-criteria-rejection
title: Approval2ApprovalCriteriaRejection
pagination_label: Approval2ApprovalCriteriaRejection
sidebar_label: Approval2ApprovalCriteriaRejection
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval2ApprovalCriteriaRejection', 'V1Approval2ApprovalCriteriaRejection'] 
slug: /tools/sdk/go/approvals/models/approval2-approval-criteria-rejection
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteriaRejection', 'V1Approval2ApprovalCriteriaRejection']
---

# Approval2ApprovalCriteriaRejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** | Pointer to **string** | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**Value** | Pointer to **int64** | The value that needs to be met for the rejection criteria | [optional] 

## Methods

### NewApproval2ApprovalCriteriaRejection

`func NewApproval2ApprovalCriteriaRejection() *Approval2ApprovalCriteriaRejection`

NewApproval2ApprovalCriteriaRejection instantiates a new Approval2ApprovalCriteriaRejection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproval2ApprovalCriteriaRejectionWithDefaults

`func NewApproval2ApprovalCriteriaRejectionWithDefaults() *Approval2ApprovalCriteriaRejection`

NewApproval2ApprovalCriteriaRejectionWithDefaults instantiates a new Approval2ApprovalCriteriaRejection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculationType

`func (o *Approval2ApprovalCriteriaRejection) GetCalculationType() string`

GetCalculationType returns the CalculationType field if non-nil, zero value otherwise.

### GetCalculationTypeOk

`func (o *Approval2ApprovalCriteriaRejection) GetCalculationTypeOk() (*string, bool)`

GetCalculationTypeOk returns a tuple with the CalculationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationType

`func (o *Approval2ApprovalCriteriaRejection) SetCalculationType(v string)`

SetCalculationType sets CalculationType field to given value.

### HasCalculationType

`func (o *Approval2ApprovalCriteriaRejection) HasCalculationType() bool`

HasCalculationType returns a boolean if a field has been set.

### GetValue

`func (o *Approval2ApprovalCriteriaRejection) GetValue() int64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Approval2ApprovalCriteriaRejection) GetValueOk() (*int64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Approval2ApprovalCriteriaRejection) SetValue(v int64)`

SetValue sets Value field to given value.

### HasValue

`func (o *Approval2ApprovalCriteriaRejection) HasValue() bool`

HasValue returns a boolean if a field has been set.


