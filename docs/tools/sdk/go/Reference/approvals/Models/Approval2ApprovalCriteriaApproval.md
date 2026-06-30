---
id: v1-approval2-approval-criteria-approval
title: Approval2ApprovalCriteriaApproval
pagination_label: Approval2ApprovalCriteriaApproval
sidebar_label: Approval2ApprovalCriteriaApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval2ApprovalCriteriaApproval', 'V1Approval2ApprovalCriteriaApproval'] 
slug: /tools/sdk/go/approvals/models/approval2-approval-criteria-approval
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteriaApproval', 'V1Approval2ApprovalCriteriaApproval']
---

# Approval2ApprovalCriteriaApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** | Pointer to **string** | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to approve | [optional] 
**Value** | Pointer to **int64** | The value that needs to be met for the approval criteria | [optional] 

## Methods

### NewApproval2ApprovalCriteriaApproval

`func NewApproval2ApprovalCriteriaApproval() *Approval2ApprovalCriteriaApproval`

NewApproval2ApprovalCriteriaApproval instantiates a new Approval2ApprovalCriteriaApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproval2ApprovalCriteriaApprovalWithDefaults

`func NewApproval2ApprovalCriteriaApprovalWithDefaults() *Approval2ApprovalCriteriaApproval`

NewApproval2ApprovalCriteriaApprovalWithDefaults instantiates a new Approval2ApprovalCriteriaApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculationType

`func (o *Approval2ApprovalCriteriaApproval) GetCalculationType() string`

GetCalculationType returns the CalculationType field if non-nil, zero value otherwise.

### GetCalculationTypeOk

`func (o *Approval2ApprovalCriteriaApproval) GetCalculationTypeOk() (*string, bool)`

GetCalculationTypeOk returns a tuple with the CalculationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationType

`func (o *Approval2ApprovalCriteriaApproval) SetCalculationType(v string)`

SetCalculationType sets CalculationType field to given value.

### HasCalculationType

`func (o *Approval2ApprovalCriteriaApproval) HasCalculationType() bool`

HasCalculationType returns a boolean if a field has been set.

### GetValue

`func (o *Approval2ApprovalCriteriaApproval) GetValue() int64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Approval2ApprovalCriteriaApproval) GetValueOk() (*int64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Approval2ApprovalCriteriaApproval) SetValue(v int64)`

SetValue sets Value field to given value.

### HasValue

`func (o *Approval2ApprovalCriteriaApproval) HasValue() bool`

HasValue returns a boolean if a field has been set.


