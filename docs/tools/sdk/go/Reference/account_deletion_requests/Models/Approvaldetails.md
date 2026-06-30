---
id: v1-approvaldetails
title: Approvaldetails
pagination_label: Approvaldetails
sidebar_label: Approvaldetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvaldetails', 'V1Approvaldetails'] 
slug: /tools/sdk/go/accountdeletionrequests/models/approvaldetails
tags: ['SDK', 'Software Development Kit', 'Approvaldetails', 'V1Approvaldetails']
---

# Approvaldetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approver** | Pointer to [**Approverdto**](approverdto) |  | [optional] 
**ApproverComments** | Pointer to **string** | Comments added by approver while rejecting or approving the account deletion request. | [optional] 
**DecisionDate** | Pointer to **SailPointTime** | Decision date of approval rejected or approved. | [optional] [readonly] 
**SerialOrder** | Pointer to **int64** | SerialOrder of approval details. | [optional] 
**Status** | Pointer to [**Accountrequestphasestate**](accountrequestphasestate) |  | [optional] 

## Methods

### NewApprovaldetails

`func NewApprovaldetails() *Approvaldetails`

NewApprovaldetails instantiates a new Approvaldetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovaldetailsWithDefaults

`func NewApprovaldetailsWithDefaults() *Approvaldetails`

NewApprovaldetailsWithDefaults instantiates a new Approvaldetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprover

`func (o *Approvaldetails) GetApprover() Approverdto`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *Approvaldetails) GetApproverOk() (*Approverdto, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *Approvaldetails) SetApprover(v Approverdto)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *Approvaldetails) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetApproverComments

`func (o *Approvaldetails) GetApproverComments() string`

GetApproverComments returns the ApproverComments field if non-nil, zero value otherwise.

### GetApproverCommentsOk

`func (o *Approvaldetails) GetApproverCommentsOk() (*string, bool)`

GetApproverCommentsOk returns a tuple with the ApproverComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverComments

`func (o *Approvaldetails) SetApproverComments(v string)`

SetApproverComments sets ApproverComments field to given value.

### HasApproverComments

`func (o *Approvaldetails) HasApproverComments() bool`

HasApproverComments returns a boolean if a field has been set.

### GetDecisionDate

`func (o *Approvaldetails) GetDecisionDate() SailPointTime`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *Approvaldetails) GetDecisionDateOk() (*SailPointTime, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *Approvaldetails) SetDecisionDate(v SailPointTime)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *Approvaldetails) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetSerialOrder

`func (o *Approvaldetails) GetSerialOrder() int64`

GetSerialOrder returns the SerialOrder field if non-nil, zero value otherwise.

### GetSerialOrderOk

`func (o *Approvaldetails) GetSerialOrderOk() (*int64, bool)`

GetSerialOrderOk returns a tuple with the SerialOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialOrder

`func (o *Approvaldetails) SetSerialOrder(v int64)`

SetSerialOrder sets SerialOrder field to given value.

### HasSerialOrder

`func (o *Approvaldetails) HasSerialOrder() bool`

HasSerialOrder returns a boolean if a field has been set.

### GetStatus

`func (o *Approvaldetails) GetStatus() Accountrequestphasestate`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Approvaldetails) GetStatusOk() (*Accountrequestphasestate, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Approvaldetails) SetStatus(v Accountrequestphasestate)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Approvaldetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


