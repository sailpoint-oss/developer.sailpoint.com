---
id: v1-approvalconfig-timeout-config
title: ApprovalconfigTimeoutConfig
pagination_label: ApprovalconfigTimeoutConfig
sidebar_label: ApprovalconfigTimeoutConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalconfigTimeoutConfig', 'V1ApprovalconfigTimeoutConfig'] 
slug: /tools/sdk/go/approvals/models/approvalconfig-timeout-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigTimeoutConfig', 'V1ApprovalconfigTimeoutConfig']
---

# ApprovalconfigTimeoutConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if timeout is enabled. | [optional] [default to false]
**DaysUntilTimeout** | Pointer to **int64** | Number of days until approval request times out. Max value is 90. | [optional] 
**TimeoutResult** | Pointer to **string** | Result of timeout. | [optional] 

## Methods

### NewApprovalconfigTimeoutConfig

`func NewApprovalconfigTimeoutConfig() *ApprovalconfigTimeoutConfig`

NewApprovalconfigTimeoutConfig instantiates a new ApprovalconfigTimeoutConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigTimeoutConfigWithDefaults

`func NewApprovalconfigTimeoutConfigWithDefaults() *ApprovalconfigTimeoutConfig`

NewApprovalconfigTimeoutConfigWithDefaults instantiates a new ApprovalconfigTimeoutConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ApprovalconfigTimeoutConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ApprovalconfigTimeoutConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ApprovalconfigTimeoutConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ApprovalconfigTimeoutConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDaysUntilTimeout

`func (o *ApprovalconfigTimeoutConfig) GetDaysUntilTimeout() int64`

GetDaysUntilTimeout returns the DaysUntilTimeout field if non-nil, zero value otherwise.

### GetDaysUntilTimeoutOk

`func (o *ApprovalconfigTimeoutConfig) GetDaysUntilTimeoutOk() (*int64, bool)`

GetDaysUntilTimeoutOk returns a tuple with the DaysUntilTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilTimeout

`func (o *ApprovalconfigTimeoutConfig) SetDaysUntilTimeout(v int64)`

SetDaysUntilTimeout sets DaysUntilTimeout field to given value.

### HasDaysUntilTimeout

`func (o *ApprovalconfigTimeoutConfig) HasDaysUntilTimeout() bool`

HasDaysUntilTimeout returns a boolean if a field has been set.

### GetTimeoutResult

`func (o *ApprovalconfigTimeoutConfig) GetTimeoutResult() string`

GetTimeoutResult returns the TimeoutResult field if non-nil, zero value otherwise.

### GetTimeoutResultOk

`func (o *ApprovalconfigTimeoutConfig) GetTimeoutResultOk() (*string, bool)`

GetTimeoutResultOk returns a tuple with the TimeoutResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeoutResult

`func (o *ApprovalconfigTimeoutConfig) SetTimeoutResult(v string)`

SetTimeoutResult sets TimeoutResult field to given value.

### HasTimeoutResult

`func (o *ApprovalconfigTimeoutConfig) HasTimeoutResult() bool`

HasTimeoutResult returns a boolean if a field has been set.


