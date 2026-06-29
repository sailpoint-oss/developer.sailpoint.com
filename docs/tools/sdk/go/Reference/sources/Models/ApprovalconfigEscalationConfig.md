---
id: v1-approvalconfig-escalation-config
title: ApprovalconfigEscalationConfig
pagination_label: ApprovalconfigEscalationConfig
sidebar_label: ApprovalconfigEscalationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalconfigEscalationConfig', 'V1ApprovalconfigEscalationConfig'] 
slug: /tools/sdk/go/sources/models/approvalconfig-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigEscalationConfig', 'V1ApprovalconfigEscalationConfig']
---

# ApprovalconfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if escalations are enabled. | [optional] [default to false]
**DaysUntilFirstEscalation** | Pointer to **int64** | Number of days until the first escalation. | [optional] 
**EscalationCronSchedule** | Pointer to **string** | Cron schedule for escalations. | [optional] 
**EscalationChain** | Pointer to [**[]ApprovalconfigEscalationConfigEscalationChainInner**](approvalconfig-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 

## Methods

### NewApprovalconfigEscalationConfig

`func NewApprovalconfigEscalationConfig() *ApprovalconfigEscalationConfig`

NewApprovalconfigEscalationConfig instantiates a new ApprovalconfigEscalationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigEscalationConfigWithDefaults

`func NewApprovalconfigEscalationConfigWithDefaults() *ApprovalconfigEscalationConfig`

NewApprovalconfigEscalationConfigWithDefaults instantiates a new ApprovalconfigEscalationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ApprovalconfigEscalationConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ApprovalconfigEscalationConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ApprovalconfigEscalationConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ApprovalconfigEscalationConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDaysUntilFirstEscalation

`func (o *ApprovalconfigEscalationConfig) GetDaysUntilFirstEscalation() int64`

GetDaysUntilFirstEscalation returns the DaysUntilFirstEscalation field if non-nil, zero value otherwise.

### GetDaysUntilFirstEscalationOk

`func (o *ApprovalconfigEscalationConfig) GetDaysUntilFirstEscalationOk() (*int64, bool)`

GetDaysUntilFirstEscalationOk returns a tuple with the DaysUntilFirstEscalation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilFirstEscalation

`func (o *ApprovalconfigEscalationConfig) SetDaysUntilFirstEscalation(v int64)`

SetDaysUntilFirstEscalation sets DaysUntilFirstEscalation field to given value.

### HasDaysUntilFirstEscalation

`func (o *ApprovalconfigEscalationConfig) HasDaysUntilFirstEscalation() bool`

HasDaysUntilFirstEscalation returns a boolean if a field has been set.

### GetEscalationCronSchedule

`func (o *ApprovalconfigEscalationConfig) GetEscalationCronSchedule() string`

GetEscalationCronSchedule returns the EscalationCronSchedule field if non-nil, zero value otherwise.

### GetEscalationCronScheduleOk

`func (o *ApprovalconfigEscalationConfig) GetEscalationCronScheduleOk() (*string, bool)`

GetEscalationCronScheduleOk returns a tuple with the EscalationCronSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationCronSchedule

`func (o *ApprovalconfigEscalationConfig) SetEscalationCronSchedule(v string)`

SetEscalationCronSchedule sets EscalationCronSchedule field to given value.

### HasEscalationCronSchedule

`func (o *ApprovalconfigEscalationConfig) HasEscalationCronSchedule() bool`

HasEscalationCronSchedule returns a boolean if a field has been set.

### GetEscalationChain

`func (o *ApprovalconfigEscalationConfig) GetEscalationChain() []ApprovalconfigEscalationConfigEscalationChainInner`

GetEscalationChain returns the EscalationChain field if non-nil, zero value otherwise.

### GetEscalationChainOk

`func (o *ApprovalconfigEscalationConfig) GetEscalationChainOk() (*[]ApprovalconfigEscalationConfigEscalationChainInner, bool)`

GetEscalationChainOk returns a tuple with the EscalationChain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationChain

`func (o *ApprovalconfigEscalationConfig) SetEscalationChain(v []ApprovalconfigEscalationConfigEscalationChainInner)`

SetEscalationChain sets EscalationChain field to given value.

### HasEscalationChain

`func (o *ApprovalconfigEscalationConfig) HasEscalationChain() bool`

HasEscalationChain returns a boolean if a field has been set.


