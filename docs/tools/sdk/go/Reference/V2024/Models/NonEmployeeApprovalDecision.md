---
id: v2024-non-employee-approval-decision
title: NonEmployeeApprovalDecision
pagination_label: NonEmployeeApprovalDecision
sidebar_label: NonEmployeeApprovalDecision
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeApprovalDecision', 'V2024NonEmployeeApprovalDecision'] 
slug: /tools/sdk/go/v2024/models/non-employee-approval-decision
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalDecision', 'V2024NonEmployeeApprovalDecision']
---

# NonEmployeeApprovalDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment on the approval item. | [optional] 

## Methods

### NewNonEmployeeApprovalDecision

`func NewNonEmployeeApprovalDecision() *NonEmployeeApprovalDecision`

NewNonEmployeeApprovalDecision instantiates a new NonEmployeeApprovalDecision object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeApprovalDecisionWithDefaults

`func NewNonEmployeeApprovalDecisionWithDefaults() *NonEmployeeApprovalDecision`

NewNonEmployeeApprovalDecisionWithDefaults instantiates a new NonEmployeeApprovalDecision object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *NonEmployeeApprovalDecision) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *NonEmployeeApprovalDecision) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *NonEmployeeApprovalDecision) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *NonEmployeeApprovalDecision) HasComment() bool`

HasComment returns a boolean if a field has been set.


