---
id: v2025-approval-approval-criteria
title: ApprovalApprovalCriteria
pagination_label: ApprovalApprovalCriteria
sidebar_label: ApprovalApprovalCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalApprovalCriteria', 'V2025ApprovalApprovalCriteria'] 
slug: /tools/sdk/go/v2025/models/approval-approval-criteria
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteria', 'V2025ApprovalApprovalCriteria']
---

# ApprovalApprovalCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of approval criteria, such as SERIAL or PARALLEL | [optional] 
**Approval** | Pointer to [**ApprovalApprovalCriteriaApproval**](approval-approval-criteria-approval) |  | [optional] 
**Rejection** | Pointer to [**ApprovalApprovalCriteriaRejection**](approval-approval-criteria-rejection) |  | [optional] 

## Methods

### NewApprovalApprovalCriteria

`func NewApprovalApprovalCriteria() *ApprovalApprovalCriteria`

NewApprovalApprovalCriteria instantiates a new ApprovalApprovalCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalApprovalCriteriaWithDefaults

`func NewApprovalApprovalCriteriaWithDefaults() *ApprovalApprovalCriteria`

NewApprovalApprovalCriteriaWithDefaults instantiates a new ApprovalApprovalCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ApprovalApprovalCriteria) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalApprovalCriteria) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalApprovalCriteria) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalApprovalCriteria) HasType() bool`

HasType returns a boolean if a field has been set.

### GetApproval

`func (o *ApprovalApprovalCriteria) GetApproval() ApprovalApprovalCriteriaApproval`

GetApproval returns the Approval field if non-nil, zero value otherwise.

### GetApprovalOk

`func (o *ApprovalApprovalCriteria) GetApprovalOk() (*ApprovalApprovalCriteriaApproval, bool)`

GetApprovalOk returns a tuple with the Approval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproval

`func (o *ApprovalApprovalCriteria) SetApproval(v ApprovalApprovalCriteriaApproval)`

SetApproval sets Approval field to given value.

### HasApproval

`func (o *ApprovalApprovalCriteria) HasApproval() bool`

HasApproval returns a boolean if a field has been set.

### GetRejection

`func (o *ApprovalApprovalCriteria) GetRejection() ApprovalApprovalCriteriaRejection`

GetRejection returns the Rejection field if non-nil, zero value otherwise.

### GetRejectionOk

`func (o *ApprovalApprovalCriteria) GetRejectionOk() (*ApprovalApprovalCriteriaRejection, bool)`

GetRejectionOk returns a tuple with the Rejection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejection

`func (o *ApprovalApprovalCriteria) SetRejection(v ApprovalApprovalCriteriaRejection)`

SetRejection sets Rejection field to given value.

### HasRejection

`func (o *ApprovalApprovalCriteria) HasRejection() bool`

HasRejection returns a boolean if a field has been set.


