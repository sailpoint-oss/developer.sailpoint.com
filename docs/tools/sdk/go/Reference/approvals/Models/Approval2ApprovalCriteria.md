---
id: v1-approval2-approval-criteria
title: Approval2ApprovalCriteria
pagination_label: Approval2ApprovalCriteria
sidebar_label: Approval2ApprovalCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval2ApprovalCriteria', 'V1Approval2ApprovalCriteria'] 
slug: /tools/sdk/go/approvals/models/approval2-approval-criteria
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteria', 'V1Approval2ApprovalCriteria']
---

# Approval2ApprovalCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of approval criteria, such as SERIAL or PARALLEL | [optional] 
**Approval** | Pointer to [**Approval2ApprovalCriteriaApproval**](approval2-approval-criteria-approval) |  | [optional] 
**Rejection** | Pointer to [**Approval2ApprovalCriteriaRejection**](approval2-approval-criteria-rejection) |  | [optional] 

## Methods

### NewApproval2ApprovalCriteria

`func NewApproval2ApprovalCriteria() *Approval2ApprovalCriteria`

NewApproval2ApprovalCriteria instantiates a new Approval2ApprovalCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproval2ApprovalCriteriaWithDefaults

`func NewApproval2ApprovalCriteriaWithDefaults() *Approval2ApprovalCriteria`

NewApproval2ApprovalCriteriaWithDefaults instantiates a new Approval2ApprovalCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Approval2ApprovalCriteria) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approval2ApprovalCriteria) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approval2ApprovalCriteria) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approval2ApprovalCriteria) HasType() bool`

HasType returns a boolean if a field has been set.

### GetApproval

`func (o *Approval2ApprovalCriteria) GetApproval() Approval2ApprovalCriteriaApproval`

GetApproval returns the Approval field if non-nil, zero value otherwise.

### GetApprovalOk

`func (o *Approval2ApprovalCriteria) GetApprovalOk() (*Approval2ApprovalCriteriaApproval, bool)`

GetApprovalOk returns a tuple with the Approval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproval

`func (o *Approval2ApprovalCriteria) SetApproval(v Approval2ApprovalCriteriaApproval)`

SetApproval sets Approval field to given value.

### HasApproval

`func (o *Approval2ApprovalCriteria) HasApproval() bool`

HasApproval returns a boolean if a field has been set.

### GetRejection

`func (o *Approval2ApprovalCriteria) GetRejection() Approval2ApprovalCriteriaRejection`

GetRejection returns the Rejection field if non-nil, zero value otherwise.

### GetRejectionOk

`func (o *Approval2ApprovalCriteria) GetRejectionOk() (*Approval2ApprovalCriteriaRejection, bool)`

GetRejectionOk returns a tuple with the Rejection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejection

`func (o *Approval2ApprovalCriteria) SetRejection(v Approval2ApprovalCriteriaRejection)`

SetRejection sets Rejection field to given value.

### HasRejection

`func (o *Approval2ApprovalCriteria) HasRejection() bool`

HasRejection returns a boolean if a field has been set.


