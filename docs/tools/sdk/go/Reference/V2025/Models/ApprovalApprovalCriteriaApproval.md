---
id: v2025-approval-approval-criteria-approval
title: ApprovalApprovalCriteriaApproval
pagination_label: ApprovalApprovalCriteriaApproval
sidebar_label: ApprovalApprovalCriteriaApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalApprovalCriteriaApproval', 'V2025ApprovalApprovalCriteriaApproval'] 
slug: /tools/sdk/go/v2025/models/approval-approval-criteria-approval
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteriaApproval', 'V2025ApprovalApprovalCriteriaApproval']
---

# ApprovalApprovalCriteriaApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** | Pointer to **string** | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to approve | [optional] 
**Value** | Pointer to **int64** | The value that needs to be met for the approval criteria | [optional] 

## Methods

### NewApprovalApprovalCriteriaApproval

`func NewApprovalApprovalCriteriaApproval() *ApprovalApprovalCriteriaApproval`

NewApprovalApprovalCriteriaApproval instantiates a new ApprovalApprovalCriteriaApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalApprovalCriteriaApprovalWithDefaults

`func NewApprovalApprovalCriteriaApprovalWithDefaults() *ApprovalApprovalCriteriaApproval`

NewApprovalApprovalCriteriaApprovalWithDefaults instantiates a new ApprovalApprovalCriteriaApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculationType

`func (o *ApprovalApprovalCriteriaApproval) GetCalculationType() string`

GetCalculationType returns the CalculationType field if non-nil, zero value otherwise.

### GetCalculationTypeOk

`func (o *ApprovalApprovalCriteriaApproval) GetCalculationTypeOk() (*string, bool)`

GetCalculationTypeOk returns a tuple with the CalculationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationType

`func (o *ApprovalApprovalCriteriaApproval) SetCalculationType(v string)`

SetCalculationType sets CalculationType field to given value.

### HasCalculationType

`func (o *ApprovalApprovalCriteriaApproval) HasCalculationType() bool`

HasCalculationType returns a boolean if a field has been set.

### GetValue

`func (o *ApprovalApprovalCriteriaApproval) GetValue() int64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ApprovalApprovalCriteriaApproval) GetValueOk() (*int64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ApprovalApprovalCriteriaApproval) SetValue(v int64)`

SetValue sets Value field to given value.

### HasValue

`func (o *ApprovalApprovalCriteriaApproval) HasValue() bool`

HasValue returns a boolean if a field has been set.


