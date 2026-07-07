---
id: v1-accountdeleteconfigdto
title: Accountdeleteconfigdto
pagination_label: Accountdeleteconfigdto
sidebar_label: Accountdeleteconfigdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountdeleteconfigdto', 'V1Accountdeleteconfigdto'] 
slug: /tools/sdk/go/sources/models/accountdeleteconfigdto
tags: ['SDK', 'Software Development Kit', 'Accountdeleteconfigdto', 'V1Accountdeleteconfigdto']
---

# Accountdeleteconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | Pointer to **bool** | Specifies if an account deletion request requires approval. | [optional] [default to false]
**ApprovalConfig** | Pointer to [**Approvalconfig**](approvalconfig) |  | [optional] 

## Methods

### NewAccountdeleteconfigdto

`func NewAccountdeleteconfigdto() *Accountdeleteconfigdto`

NewAccountdeleteconfigdto instantiates a new Accountdeleteconfigdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountdeleteconfigdtoWithDefaults

`func NewAccountdeleteconfigdtoWithDefaults() *Accountdeleteconfigdto`

NewAccountdeleteconfigdtoWithDefaults instantiates a new Accountdeleteconfigdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalRequired

`func (o *Accountdeleteconfigdto) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *Accountdeleteconfigdto) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *Accountdeleteconfigdto) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *Accountdeleteconfigdto) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *Accountdeleteconfigdto) GetApprovalConfig() Approvalconfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *Accountdeleteconfigdto) GetApprovalConfigOk() (*Approvalconfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *Accountdeleteconfigdto) SetApprovalConfig(v Approvalconfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *Accountdeleteconfigdto) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


