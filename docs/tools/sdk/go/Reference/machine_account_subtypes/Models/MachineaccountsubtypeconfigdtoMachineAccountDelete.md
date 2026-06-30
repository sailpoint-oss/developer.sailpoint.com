---
id: v1-machineaccountsubtypeconfigdto-machine-account-delete
title: MachineaccountsubtypeconfigdtoMachineAccountDelete
pagination_label: MachineaccountsubtypeconfigdtoMachineAccountDelete
sidebar_label: MachineaccountsubtypeconfigdtoMachineAccountDelete
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineaccountsubtypeconfigdtoMachineAccountDelete', 'V1MachineaccountsubtypeconfigdtoMachineAccountDelete'] 
slug: /tools/sdk/go/machineaccountsubtypes/models/machineaccountsubtypeconfigdto-machine-account-delete
tags: ['SDK', 'Software Development Kit', 'MachineaccountsubtypeconfigdtoMachineAccountDelete', 'V1MachineaccountsubtypeconfigdtoMachineAccountDelete']
---

# MachineaccountsubtypeconfigdtoMachineAccountDelete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | Pointer to **bool** | Indicates whether approval is required for an account deletion request. | [optional] [default to false]
**ApprovalConfig** | Pointer to [**Machinesubtypeapprovalconfig**](machinesubtypeapprovalconfig) |  | [optional] 

## Methods

### NewMachineaccountsubtypeconfigdtoMachineAccountDelete

`func NewMachineaccountsubtypeconfigdtoMachineAccountDelete() *MachineaccountsubtypeconfigdtoMachineAccountDelete`

NewMachineaccountsubtypeconfigdtoMachineAccountDelete instantiates a new MachineaccountsubtypeconfigdtoMachineAccountDelete object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineaccountsubtypeconfigdtoMachineAccountDeleteWithDefaults

`func NewMachineaccountsubtypeconfigdtoMachineAccountDeleteWithDefaults() *MachineaccountsubtypeconfigdtoMachineAccountDelete`

NewMachineaccountsubtypeconfigdtoMachineAccountDeleteWithDefaults instantiates a new MachineaccountsubtypeconfigdtoMachineAccountDelete object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalRequired

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) GetApprovalConfig() Machinesubtypeapprovalconfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) GetApprovalConfigOk() (*Machinesubtypeapprovalconfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) SetApprovalConfig(v Machinesubtypeapprovalconfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *MachineaccountsubtypeconfigdtoMachineAccountDelete) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


