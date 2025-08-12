---
id: v2025-approval-config-escalation-config
title: ApprovalConfigEscalationConfig
pagination_label: ApprovalConfigEscalationConfig
sidebar_label: ApprovalConfigEscalationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigEscalationConfig', 'V2025ApprovalConfigEscalationConfig'] 
slug: /tools/sdk/go/v2025/models/approval-config-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfig', 'V2025ApprovalConfigEscalationConfig']
---

# ApprovalConfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if escalations are enabled. | [optional] [default to false]
**DaysUntilFirstEscalation** | Pointer to **int64** | Number of days until the first escalation. | [optional] 
**EscalationCronSchedule** | Pointer to **string** | Cron schedule for escalations. | [optional] 
**EscalationChain** | Pointer to [**[]ApprovalConfigEscalationConfigEscalationChainInner**](approval-config-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 

## Methods

### NewApprovalConfigEscalationConfig

`func NewApprovalConfigEscalationConfig() *ApprovalConfigEscalationConfig`

NewApprovalConfigEscalationConfig instantiates a new ApprovalConfigEscalationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigEscalationConfigWithDefaults

`func NewApprovalConfigEscalationConfigWithDefaults() *ApprovalConfigEscalationConfig`

NewApprovalConfigEscalationConfigWithDefaults instantiates a new ApprovalConfigEscalationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ApprovalConfigEscalationConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ApprovalConfigEscalationConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ApprovalConfigEscalationConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ApprovalConfigEscalationConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDaysUntilFirstEscalation

`func (o *ApprovalConfigEscalationConfig) GetDaysUntilFirstEscalation() int64`

GetDaysUntilFirstEscalation returns the DaysUntilFirstEscalation field if non-nil, zero value otherwise.

### GetDaysUntilFirstEscalationOk

`func (o *ApprovalConfigEscalationConfig) GetDaysUntilFirstEscalationOk() (*int64, bool)`

GetDaysUntilFirstEscalationOk returns a tuple with the DaysUntilFirstEscalation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilFirstEscalation

`func (o *ApprovalConfigEscalationConfig) SetDaysUntilFirstEscalation(v int64)`

SetDaysUntilFirstEscalation sets DaysUntilFirstEscalation field to given value.

### HasDaysUntilFirstEscalation

`func (o *ApprovalConfigEscalationConfig) HasDaysUntilFirstEscalation() bool`

HasDaysUntilFirstEscalation returns a boolean if a field has been set.

### GetEscalationCronSchedule

`func (o *ApprovalConfigEscalationConfig) GetEscalationCronSchedule() string`

GetEscalationCronSchedule returns the EscalationCronSchedule field if non-nil, zero value otherwise.

### GetEscalationCronScheduleOk

`func (o *ApprovalConfigEscalationConfig) GetEscalationCronScheduleOk() (*string, bool)`

GetEscalationCronScheduleOk returns a tuple with the EscalationCronSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationCronSchedule

`func (o *ApprovalConfigEscalationConfig) SetEscalationCronSchedule(v string)`

SetEscalationCronSchedule sets EscalationCronSchedule field to given value.

### HasEscalationCronSchedule

`func (o *ApprovalConfigEscalationConfig) HasEscalationCronSchedule() bool`

HasEscalationCronSchedule returns a boolean if a field has been set.

### GetEscalationChain

`func (o *ApprovalConfigEscalationConfig) GetEscalationChain() []ApprovalConfigEscalationConfigEscalationChainInner`

GetEscalationChain returns the EscalationChain field if non-nil, zero value otherwise.

### GetEscalationChainOk

`func (o *ApprovalConfigEscalationConfig) GetEscalationChainOk() (*[]ApprovalConfigEscalationConfigEscalationChainInner, bool)`

GetEscalationChainOk returns a tuple with the EscalationChain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationChain

`func (o *ApprovalConfigEscalationConfig) SetEscalationChain(v []ApprovalConfigEscalationConfigEscalationChainInner)`

SetEscalationChain sets EscalationChain field to given value.

### HasEscalationChain

`func (o *ApprovalConfigEscalationConfig) HasEscalationChain() bool`

HasEscalationChain returns a boolean if a field has been set.


