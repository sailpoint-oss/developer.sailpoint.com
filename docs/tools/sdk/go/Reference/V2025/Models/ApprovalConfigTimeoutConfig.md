---
id: v2025-approval-config-timeout-config
title: ApprovalConfigTimeoutConfig
pagination_label: ApprovalConfigTimeoutConfig
sidebar_label: ApprovalConfigTimeoutConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigTimeoutConfig', 'V2025ApprovalConfigTimeoutConfig'] 
slug: /tools/sdk/go/v2025/models/approval-config-timeout-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigTimeoutConfig', 'V2025ApprovalConfigTimeoutConfig']
---

# ApprovalConfigTimeoutConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if timeout is enabled. | [optional] [default to false]
**DaysUntilTimeout** | Pointer to **int64** | Number of days until approval request times out. Max value is 90. | [optional] 
**TimeoutResult** | Pointer to **string** | Result of timeout. | [optional] 

## Methods

### NewApprovalConfigTimeoutConfig

`func NewApprovalConfigTimeoutConfig() *ApprovalConfigTimeoutConfig`

NewApprovalConfigTimeoutConfig instantiates a new ApprovalConfigTimeoutConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigTimeoutConfigWithDefaults

`func NewApprovalConfigTimeoutConfigWithDefaults() *ApprovalConfigTimeoutConfig`

NewApprovalConfigTimeoutConfigWithDefaults instantiates a new ApprovalConfigTimeoutConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ApprovalConfigTimeoutConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ApprovalConfigTimeoutConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ApprovalConfigTimeoutConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ApprovalConfigTimeoutConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDaysUntilTimeout

`func (o *ApprovalConfigTimeoutConfig) GetDaysUntilTimeout() int64`

GetDaysUntilTimeout returns the DaysUntilTimeout field if non-nil, zero value otherwise.

### GetDaysUntilTimeoutOk

`func (o *ApprovalConfigTimeoutConfig) GetDaysUntilTimeoutOk() (*int64, bool)`

GetDaysUntilTimeoutOk returns a tuple with the DaysUntilTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilTimeout

`func (o *ApprovalConfigTimeoutConfig) SetDaysUntilTimeout(v int64)`

SetDaysUntilTimeout sets DaysUntilTimeout field to given value.

### HasDaysUntilTimeout

`func (o *ApprovalConfigTimeoutConfig) HasDaysUntilTimeout() bool`

HasDaysUntilTimeout returns a boolean if a field has been set.

### GetTimeoutResult

`func (o *ApprovalConfigTimeoutConfig) GetTimeoutResult() string`

GetTimeoutResult returns the TimeoutResult field if non-nil, zero value otherwise.

### GetTimeoutResultOk

`func (o *ApprovalConfigTimeoutConfig) GetTimeoutResultOk() (*string, bool)`

GetTimeoutResultOk returns a tuple with the TimeoutResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeoutResult

`func (o *ApprovalConfigTimeoutConfig) SetTimeoutResult(v string)`

SetTimeoutResult sets TimeoutResult field to given value.

### HasTimeoutResult

`func (o *ApprovalConfigTimeoutConfig) HasTimeoutResult() bool`

HasTimeoutResult returns a boolean if a field has been set.


