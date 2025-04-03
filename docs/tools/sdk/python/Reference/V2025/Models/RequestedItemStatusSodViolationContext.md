---
id: v2025-requested-item-status-sod-violation-context
title: RequestedItemStatusSodViolationContext
pagination_label: RequestedItemStatusSodViolationContext
sidebar_label: RequestedItemStatusSodViolationContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedItemStatusSodViolationContext', 'V2025RequestedItemStatusSodViolationContext'] 
slug: /tools/sdk/go/v2025/models/requested-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusSodViolationContext', 'V2025RequestedItemStatusSodViolationContext']
---

# RequestedItemStatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **NullableString** | The status of SOD violation check | [optional] 
**Uuid** | Pointer to **NullableString** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | Pointer to [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 

## Methods

### NewRequestedItemStatusSodViolationContext

`func NewRequestedItemStatusSodViolationContext() *RequestedItemStatusSodViolationContext`

NewRequestedItemStatusSodViolationContext instantiates a new RequestedItemStatusSodViolationContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemStatusSodViolationContextWithDefaults

`func NewRequestedItemStatusSodViolationContextWithDefaults() *RequestedItemStatusSodViolationContext`

NewRequestedItemStatusSodViolationContextWithDefaults instantiates a new RequestedItemStatusSodViolationContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *RequestedItemStatusSodViolationContext) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *RequestedItemStatusSodViolationContext) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *RequestedItemStatusSodViolationContext) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *RequestedItemStatusSodViolationContext) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *RequestedItemStatusSodViolationContext) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *RequestedItemStatusSodViolationContext) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil
### GetUuid

`func (o *RequestedItemStatusSodViolationContext) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *RequestedItemStatusSodViolationContext) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *RequestedItemStatusSodViolationContext) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *RequestedItemStatusSodViolationContext) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *RequestedItemStatusSodViolationContext) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *RequestedItemStatusSodViolationContext) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetViolationCheckResult

`func (o *RequestedItemStatusSodViolationContext) GetViolationCheckResult() SodViolationCheckResult`

GetViolationCheckResult returns the ViolationCheckResult field if non-nil, zero value otherwise.

### GetViolationCheckResultOk

`func (o *RequestedItemStatusSodViolationContext) GetViolationCheckResultOk() (*SodViolationCheckResult, bool)`

GetViolationCheckResultOk returns a tuple with the ViolationCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationCheckResult

`func (o *RequestedItemStatusSodViolationContext) SetViolationCheckResult(v SodViolationCheckResult)`

SetViolationCheckResult sets ViolationCheckResult field to given value.

### HasViolationCheckResult

`func (o *RequestedItemStatusSodViolationContext) HasViolationCheckResult() bool`

HasViolationCheckResult returns a boolean if a field has been set.


