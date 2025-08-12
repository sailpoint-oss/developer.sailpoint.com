---
id: v2025-approval-config
title: ApprovalConfig
pagination_label: ApprovalConfig
sidebar_label: ApprovalConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfig', 'V2025ApprovalConfig'] 
slug: /tools/sdk/go/v2025/models/approval-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfig', 'V2025ApprovalConfig']
---

# ApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | Pointer to **string** | Tenant ID of the approval configuration. | [optional] 
**Id** | Pointer to **string** | ID of the approval configuration. | [optional] 
**Scope** | Pointer to **string** | The type/scope of the configuration. Ie APPROVAL_REQUEST, DOMAIN_OBJECT, APPROVAL_TYPE, TENANT | [optional] 
**ReminderConfig** | Pointer to [**ApprovalConfigReminderConfig**](approval-config-reminder-config) |  | [optional] 
**EscalationConfig** | Pointer to [**ApprovalConfigEscalationConfig**](approval-config-escalation-config) |  | [optional] 
**TimeoutConfig** | Pointer to [**ApprovalConfigTimeoutConfig**](approval-config-timeout-config) |  | [optional] 
**CronTimezone** | Pointer to [**ApprovalConfigCronTimezone**](approval-config-cron-timezone) |  | [optional] 
**SerialChain** | Pointer to [**[]ApprovalConfigSerialChainInner**](approval-config-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**RequiresComment** | Pointer to **string** | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**FallbackApprover** | Pointer to [**ApprovalIdentity**](approval-identity) | Configuration for fallback approver. Used if the user cannot be found for whatever reason and escalation config does not exist. | [optional] 
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

### GetTenantId

`func (o *ApprovalConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *ApprovalConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *ApprovalConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *ApprovalConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetId

`func (o *ApprovalConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalConfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalConfig) HasId() bool`

HasId returns a boolean if a field has been set.

### GetScope

`func (o *ApprovalConfig) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *ApprovalConfig) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *ApprovalConfig) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *ApprovalConfig) HasScope() bool`

HasScope returns a boolean if a field has been set.

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

`func (o *ApprovalConfig) GetFallbackApprover() ApprovalIdentity`

GetFallbackApprover returns the FallbackApprover field if non-nil, zero value otherwise.

### GetFallbackApproverOk

`func (o *ApprovalConfig) GetFallbackApproverOk() (*ApprovalIdentity, bool)`

GetFallbackApproverOk returns a tuple with the FallbackApprover field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallbackApprover

`func (o *ApprovalConfig) SetFallbackApprover(v ApprovalIdentity)`

SetFallbackApprover sets FallbackApprover field to given value.

### HasFallbackApprover

`func (o *ApprovalConfig) HasFallbackApprover() bool`

HasFallbackApprover returns a boolean if a field has been set.

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


