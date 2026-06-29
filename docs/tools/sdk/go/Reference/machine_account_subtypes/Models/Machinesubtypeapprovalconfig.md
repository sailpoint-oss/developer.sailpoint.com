---
id: v1-machinesubtypeapprovalconfig
title: Machinesubtypeapprovalconfig
pagination_label: Machinesubtypeapprovalconfig
sidebar_label: Machinesubtypeapprovalconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machinesubtypeapprovalconfig', 'V1Machinesubtypeapprovalconfig'] 
slug: /tools/sdk/go/machineaccountsubtypes/models/machinesubtypeapprovalconfig
tags: ['SDK', 'Software Development Kit', 'Machinesubtypeapprovalconfig', 'V1Machinesubtypeapprovalconfig']
---

# Machinesubtypeapprovalconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approvers** | Pointer to **string** | Comma separated string of approvers.  Following are the options for approver types: manager, sourceOwner, accountOwner, workgroup:[workgroupId] (Governance group).  Approval request will be assigned based on the order of the approvers passed.  Multiple workgroups(governance groups) can be selected as an approver.  >**Note:** accountOwner approver type is only for machine account delete approval settings. | [optional] 
**Comments** | Pointer to **string** | Comment configurations for the approval request.  Following are the options for comments: ALL, OFF, APPROVAL, REJECT. | [optional] 

## Methods

### NewMachinesubtypeapprovalconfig

`func NewMachinesubtypeapprovalconfig() *Machinesubtypeapprovalconfig`

NewMachinesubtypeapprovalconfig instantiates a new Machinesubtypeapprovalconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachinesubtypeapprovalconfigWithDefaults

`func NewMachinesubtypeapprovalconfigWithDefaults() *Machinesubtypeapprovalconfig`

NewMachinesubtypeapprovalconfigWithDefaults instantiates a new Machinesubtypeapprovalconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovers

`func (o *Machinesubtypeapprovalconfig) GetApprovers() string`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Machinesubtypeapprovalconfig) GetApproversOk() (*string, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Machinesubtypeapprovalconfig) SetApprovers(v string)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Machinesubtypeapprovalconfig) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetComments

`func (o *Machinesubtypeapprovalconfig) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Machinesubtypeapprovalconfig) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Machinesubtypeapprovalconfig) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Machinesubtypeapprovalconfig) HasComments() bool`

HasComments returns a boolean if a field has been set.


