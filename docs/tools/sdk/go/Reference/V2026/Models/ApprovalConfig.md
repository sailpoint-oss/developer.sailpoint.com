---
id: v2026-approval-config
title: ApprovalConfig
pagination_label: ApprovalConfig
sidebar_label: ApprovalConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfig', 'V2026ApprovalConfig'] 
slug: /tools/sdk/go/v2026/models/approval-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfig', 'V2026ApprovalConfig']
---

# ApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReminderConfig** | Pointer to [**ApprovalConfigReminderConfig**](approval-config-reminder-config) |  | [optional] 
**EscalationConfig** | Pointer to [**ApprovalConfigEscalationConfig**](approval-config-escalation-config) |  | [optional] 
**TimeoutConfig** | Pointer to [**ApprovalConfigTimeoutConfig**](approval-config-timeout-config) |  | [optional] 
**CronTimezone** | Pointer to [**ApprovalConfigCronTimezone**](approval-config-cron-timezone) |  | [optional] 
**SerialChain** | Pointer to [**[]ApprovalConfigSerialChainInner**](approval-config-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**RequiresComment** | Pointer to **string** | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**FallbackApprover** | Pointer to [**ApprovalConfigFallbackApprover**](approval-config-fallback-approver) |  | [optional] 
**MachineIdentityManagerAssignment** | Pointer to **string** | Specifies how to treat the identity type \"MANAGER_OF\" when the requestee is a machine identity. | [optional] [default to "MANAGER_OF_REQUESTER"]
**CircumventApprovalProcess** | Pointer to **bool** | When true, all approvals will be created with the status \"PASSED\". | [optional] [default to false]
**AutoApprove** | Pointer to **string** | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 

## Methods

### NewApprovalConfig

`func NewApprovalConfig() *ApprovalConfig`

NewApprovalConfig instantiates a new ApprovalConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigWithDefaults

`func NewApprovalConfigWithDefaults() *ApprovalConfig`

NewApprovalConfigWithDefaults instantiates a new ApprovalConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReminderConfig

`func (o *ApprovalConfig) GetReminderConfig() ApprovalConfigReminderConfig`

GetReminderConfig returns the ReminderConfig field if non-nil, zero value otherwise.

### GetReminderConfigOk

`func (o *ApprovalConfig) GetReminderConfigOk() (*ApprovalConfigReminderConfig, bool)`

GetReminderConfigOk returns a tuple with the ReminderConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminderConfig

`func (o *ApprovalConfig) SetReminderConfig(v ApprovalConfigReminderConfig)`

SetReminderConfig sets ReminderConfig field to given value.

### HasReminderConfig

`func (o *ApprovalConfig) HasReminderConfig() bool`

HasReminderConfig returns a boolean if a field has been set.

### GetEscalationConfig

`func (o *ApprovalConfig) GetEscalationConfig() ApprovalConfigEscalationConfig`

GetEscalationConfig returns the EscalationConfig field if non-nil, zero value otherwise.

### GetEscalationConfigOk

`func (o *ApprovalConfig) GetEscalationConfigOk() (*ApprovalConfigEscalationConfig, bool)`

GetEscalationConfigOk returns a tuple with the EscalationConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationConfig

`func (o *ApprovalConfig) SetEscalationConfig(v ApprovalConfigEscalationConfig)`

SetEscalationConfig sets EscalationConfig field to given value.

### HasEscalationConfig

`func (o *ApprovalConfig) HasEscalationConfig() bool`

HasEscalationConfig returns a boolean if a field has been set.

### GetTimeoutConfig

`func (o *ApprovalConfig) GetTimeoutConfig() ApprovalConfigTimeoutConfig`

GetTimeoutConfig returns the TimeoutConfig field if non-nil, zero value otherwise.

### GetTimeoutConfigOk

`func (o *ApprovalConfig) GetTimeoutConfigOk() (*ApprovalConfigTimeoutConfig, bool)`

GetTimeoutConfigOk returns a tuple with the TimeoutConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeoutConfig

`func (o *ApprovalConfig) SetTimeoutConfig(v ApprovalConfigTimeoutConfig)`

SetTimeoutConfig sets TimeoutConfig field to given value.

### HasTimeoutConfig

`func (o *ApprovalConfig) HasTimeoutConfig() bool`

HasTimeoutConfig returns a boolean if a field has been set.

### GetCronTimezone

`func (o *ApprovalConfig) GetCronTimezone() ApprovalConfigCronTimezone`

GetCronTimezone returns the CronTimezone field if non-nil, zero value otherwise.

### GetCronTimezoneOk

`func (o *ApprovalConfig) GetCronTimezoneOk() (*ApprovalConfigCronTimezone, bool)`

GetCronTimezoneOk returns a tuple with the CronTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronTimezone

`func (o *ApprovalConfig) SetCronTimezone(v ApprovalConfigCronTimezone)`

SetCronTimezone sets CronTimezone field to given value.

### HasCronTimezone

`func (o *ApprovalConfig) HasCronTimezone() bool`

HasCronTimezone returns a boolean if a field has been set.

### GetSerialChain

`func (o *ApprovalConfig) GetSerialChain() []ApprovalConfigSerialChainInner`

GetSerialChain returns the SerialChain field if non-nil, zero value otherwise.

### GetSerialChainOk

`func (o *ApprovalConfig) GetSerialChainOk() (*[]ApprovalConfigSerialChainInner, bool)`

GetSerialChainOk returns a tuple with the SerialChain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialChain

`func (o *ApprovalConfig) SetSerialChain(v []ApprovalConfigSerialChainInner)`

SetSerialChain sets SerialChain field to given value.

### HasSerialChain

`func (o *ApprovalConfig) HasSerialChain() bool`

HasSerialChain returns a boolean if a field has been set.

### GetRequiresComment

`func (o *ApprovalConfig) GetRequiresComment() string`

GetRequiresComment returns the RequiresComment field if non-nil, zero value otherwise.

### GetRequiresCommentOk

`func (o *ApprovalConfig) GetRequiresCommentOk() (*string, bool)`

GetRequiresCommentOk returns a tuple with the RequiresComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiresComment

`func (o *ApprovalConfig) SetRequiresComment(v string)`

SetRequiresComment sets RequiresComment field to given value.

### HasRequiresComment

`func (o *ApprovalConfig) HasRequiresComment() bool`

HasRequiresComment returns a boolean if a field has been set.

### GetFallbackApprover

`func (o *ApprovalConfig) GetFallbackApprover() ApprovalConfigFallbackApprover`

GetFallbackApprover returns the FallbackApprover field if non-nil, zero value otherwise.

### GetFallbackApproverOk

`func (o *ApprovalConfig) GetFallbackApproverOk() (*ApprovalConfigFallbackApprover, bool)`

GetFallbackApproverOk returns a tuple with the FallbackApprover field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallbackApprover

`func (o *ApprovalConfig) SetFallbackApprover(v ApprovalConfigFallbackApprover)`

SetFallbackApprover sets FallbackApprover field to given value.

### HasFallbackApprover

`func (o *ApprovalConfig) HasFallbackApprover() bool`

HasFallbackApprover returns a boolean if a field has been set.

### GetMachineIdentityManagerAssignment

`func (o *ApprovalConfig) GetMachineIdentityManagerAssignment() string`

GetMachineIdentityManagerAssignment returns the MachineIdentityManagerAssignment field if non-nil, zero value otherwise.

### GetMachineIdentityManagerAssignmentOk

`func (o *ApprovalConfig) GetMachineIdentityManagerAssignmentOk() (*string, bool)`

GetMachineIdentityManagerAssignmentOk returns a tuple with the MachineIdentityManagerAssignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityManagerAssignment

`func (o *ApprovalConfig) SetMachineIdentityManagerAssignment(v string)`

SetMachineIdentityManagerAssignment sets MachineIdentityManagerAssignment field to given value.

### HasMachineIdentityManagerAssignment

`func (o *ApprovalConfig) HasMachineIdentityManagerAssignment() bool`

HasMachineIdentityManagerAssignment returns a boolean if a field has been set.

### GetCircumventApprovalProcess

`func (o *ApprovalConfig) GetCircumventApprovalProcess() bool`

GetCircumventApprovalProcess returns the CircumventApprovalProcess field if non-nil, zero value otherwise.

### GetCircumventApprovalProcessOk

`func (o *ApprovalConfig) GetCircumventApprovalProcessOk() (*bool, bool)`

GetCircumventApprovalProcessOk returns a tuple with the CircumventApprovalProcess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCircumventApprovalProcess

`func (o *ApprovalConfig) SetCircumventApprovalProcess(v bool)`

SetCircumventApprovalProcess sets CircumventApprovalProcess field to given value.

### HasCircumventApprovalProcess

`func (o *ApprovalConfig) HasCircumventApprovalProcess() bool`

HasCircumventApprovalProcess returns a boolean if a field has been set.

### GetAutoApprove

`func (o *ApprovalConfig) GetAutoApprove() string`

GetAutoApprove returns the AutoApprove field if non-nil, zero value otherwise.

### GetAutoApproveOk

`func (o *ApprovalConfig) GetAutoApproveOk() (*string, bool)`

GetAutoApproveOk returns a tuple with the AutoApprove field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprove

`func (o *ApprovalConfig) SetAutoApprove(v string)`

SetAutoApprove sets AutoApprove field to given value.

### HasAutoApprove

`func (o *ApprovalConfig) HasAutoApprove() bool`

HasAutoApprove returns a boolean if a field has been set.


