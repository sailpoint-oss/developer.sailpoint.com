---
id: v1-approvalconfig
title: Approvalconfig
pagination_label: Approvalconfig
sidebar_label: Approvalconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalconfig', 'V1Approvalconfig'] 
slug: /tools/sdk/go/approvals/models/approvalconfig
tags: ['SDK', 'Software Development Kit', 'Approvalconfig', 'V1Approvalconfig']
---

# Approvalconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReminderConfig** | Pointer to [**ApprovalconfigReminderConfig**](approvalconfig-reminder-config) |  | [optional] 
**EscalationConfig** | Pointer to [**ApprovalconfigEscalationConfig**](approvalconfig-escalation-config) |  | [optional] 
**TimeoutConfig** | Pointer to [**ApprovalconfigTimeoutConfig**](approvalconfig-timeout-config) |  | [optional] 
**CronTimezone** | Pointer to [**ApprovalconfigCronTimezone**](approvalconfig-cron-timezone) |  | [optional] 
**SerialChain** | Pointer to [**[]ApprovalconfigSerialChainInner**](approvalconfig-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**RequiresComment** | Pointer to **string** | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**FallbackApprover** | Pointer to [**ApprovalconfigFallbackApprover**](approvalconfig-fallback-approver) |  | [optional] 
**MachineIdentityManagerAssignment** | Pointer to **string** | Specifies how to treat the identity type \"MANAGER_OF\" when the requestee is a machine identity. | [optional] [default to "MANAGER_OF_REQUESTER"]
**CircumventApprovalProcess** | Pointer to **bool** | When true, all approvals will be created with the status \"PASSED\". | [optional] [default to false]
**AutoApprove** | Pointer to **string** | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 

## Methods

### NewApprovalconfig

`func NewApprovalconfig() *Approvalconfig`

NewApprovalconfig instantiates a new Approvalconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigWithDefaults

`func NewApprovalconfigWithDefaults() *Approvalconfig`

NewApprovalconfigWithDefaults instantiates a new Approvalconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReminderConfig

`func (o *Approvalconfig) GetReminderConfig() ApprovalconfigReminderConfig`

GetReminderConfig returns the ReminderConfig field if non-nil, zero value otherwise.

### GetReminderConfigOk

`func (o *Approvalconfig) GetReminderConfigOk() (*ApprovalconfigReminderConfig, bool)`

GetReminderConfigOk returns a tuple with the ReminderConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminderConfig

`func (o *Approvalconfig) SetReminderConfig(v ApprovalconfigReminderConfig)`

SetReminderConfig sets ReminderConfig field to given value.

### HasReminderConfig

`func (o *Approvalconfig) HasReminderConfig() bool`

HasReminderConfig returns a boolean if a field has been set.

### GetEscalationConfig

`func (o *Approvalconfig) GetEscalationConfig() ApprovalconfigEscalationConfig`

GetEscalationConfig returns the EscalationConfig field if non-nil, zero value otherwise.

### GetEscalationConfigOk

`func (o *Approvalconfig) GetEscalationConfigOk() (*ApprovalconfigEscalationConfig, bool)`

GetEscalationConfigOk returns a tuple with the EscalationConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationConfig

`func (o *Approvalconfig) SetEscalationConfig(v ApprovalconfigEscalationConfig)`

SetEscalationConfig sets EscalationConfig field to given value.

### HasEscalationConfig

`func (o *Approvalconfig) HasEscalationConfig() bool`

HasEscalationConfig returns a boolean if a field has been set.

### GetTimeoutConfig

`func (o *Approvalconfig) GetTimeoutConfig() ApprovalconfigTimeoutConfig`

GetTimeoutConfig returns the TimeoutConfig field if non-nil, zero value otherwise.

### GetTimeoutConfigOk

`func (o *Approvalconfig) GetTimeoutConfigOk() (*ApprovalconfigTimeoutConfig, bool)`

GetTimeoutConfigOk returns a tuple with the TimeoutConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeoutConfig

`func (o *Approvalconfig) SetTimeoutConfig(v ApprovalconfigTimeoutConfig)`

SetTimeoutConfig sets TimeoutConfig field to given value.

### HasTimeoutConfig

`func (o *Approvalconfig) HasTimeoutConfig() bool`

HasTimeoutConfig returns a boolean if a field has been set.

### GetCronTimezone

`func (o *Approvalconfig) GetCronTimezone() ApprovalconfigCronTimezone`

GetCronTimezone returns the CronTimezone field if non-nil, zero value otherwise.

### GetCronTimezoneOk

`func (o *Approvalconfig) GetCronTimezoneOk() (*ApprovalconfigCronTimezone, bool)`

GetCronTimezoneOk returns a tuple with the CronTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronTimezone

`func (o *Approvalconfig) SetCronTimezone(v ApprovalconfigCronTimezone)`

SetCronTimezone sets CronTimezone field to given value.

### HasCronTimezone

`func (o *Approvalconfig) HasCronTimezone() bool`

HasCronTimezone returns a boolean if a field has been set.

### GetSerialChain

`func (o *Approvalconfig) GetSerialChain() []ApprovalconfigSerialChainInner`

GetSerialChain returns the SerialChain field if non-nil, zero value otherwise.

### GetSerialChainOk

`func (o *Approvalconfig) GetSerialChainOk() (*[]ApprovalconfigSerialChainInner, bool)`

GetSerialChainOk returns a tuple with the SerialChain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialChain

`func (o *Approvalconfig) SetSerialChain(v []ApprovalconfigSerialChainInner)`

SetSerialChain sets SerialChain field to given value.

### HasSerialChain

`func (o *Approvalconfig) HasSerialChain() bool`

HasSerialChain returns a boolean if a field has been set.

### GetRequiresComment

`func (o *Approvalconfig) GetRequiresComment() string`

GetRequiresComment returns the RequiresComment field if non-nil, zero value otherwise.

### GetRequiresCommentOk

`func (o *Approvalconfig) GetRequiresCommentOk() (*string, bool)`

GetRequiresCommentOk returns a tuple with the RequiresComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiresComment

`func (o *Approvalconfig) SetRequiresComment(v string)`

SetRequiresComment sets RequiresComment field to given value.

### HasRequiresComment

`func (o *Approvalconfig) HasRequiresComment() bool`

HasRequiresComment returns a boolean if a field has been set.

### GetFallbackApprover

`func (o *Approvalconfig) GetFallbackApprover() ApprovalconfigFallbackApprover`

GetFallbackApprover returns the FallbackApprover field if non-nil, zero value otherwise.

### GetFallbackApproverOk

`func (o *Approvalconfig) GetFallbackApproverOk() (*ApprovalconfigFallbackApprover, bool)`

GetFallbackApproverOk returns a tuple with the FallbackApprover field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallbackApprover

`func (o *Approvalconfig) SetFallbackApprover(v ApprovalconfigFallbackApprover)`

SetFallbackApprover sets FallbackApprover field to given value.

### HasFallbackApprover

`func (o *Approvalconfig) HasFallbackApprover() bool`

HasFallbackApprover returns a boolean if a field has been set.

### GetMachineIdentityManagerAssignment

`func (o *Approvalconfig) GetMachineIdentityManagerAssignment() string`

GetMachineIdentityManagerAssignment returns the MachineIdentityManagerAssignment field if non-nil, zero value otherwise.

### GetMachineIdentityManagerAssignmentOk

`func (o *Approvalconfig) GetMachineIdentityManagerAssignmentOk() (*string, bool)`

GetMachineIdentityManagerAssignmentOk returns a tuple with the MachineIdentityManagerAssignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityManagerAssignment

`func (o *Approvalconfig) SetMachineIdentityManagerAssignment(v string)`

SetMachineIdentityManagerAssignment sets MachineIdentityManagerAssignment field to given value.

### HasMachineIdentityManagerAssignment

`func (o *Approvalconfig) HasMachineIdentityManagerAssignment() bool`

HasMachineIdentityManagerAssignment returns a boolean if a field has been set.

### GetCircumventApprovalProcess

`func (o *Approvalconfig) GetCircumventApprovalProcess() bool`

GetCircumventApprovalProcess returns the CircumventApprovalProcess field if non-nil, zero value otherwise.

### GetCircumventApprovalProcessOk

`func (o *Approvalconfig) GetCircumventApprovalProcessOk() (*bool, bool)`

GetCircumventApprovalProcessOk returns a tuple with the CircumventApprovalProcess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCircumventApprovalProcess

`func (o *Approvalconfig) SetCircumventApprovalProcess(v bool)`

SetCircumventApprovalProcess sets CircumventApprovalProcess field to given value.

### HasCircumventApprovalProcess

`func (o *Approvalconfig) HasCircumventApprovalProcess() bool`

HasCircumventApprovalProcess returns a boolean if a field has been set.

### GetAutoApprove

`func (o *Approvalconfig) GetAutoApprove() string`

GetAutoApprove returns the AutoApprove field if non-nil, zero value otherwise.

### GetAutoApproveOk

`func (o *Approvalconfig) GetAutoApproveOk() (*string, bool)`

GetAutoApproveOk returns a tuple with the AutoApprove field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprove

`func (o *Approvalconfig) SetAutoApprove(v string)`

SetAutoApprove sets AutoApprove field to given value.

### HasAutoApprove

`func (o *Approvalconfig) HasAutoApprove() bool`

HasAutoApprove returns a boolean if a field has been set.


