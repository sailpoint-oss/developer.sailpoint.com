---
id: beta-access-request-admin-item-status-sod-violation-context
title: AccessRequestAdminItemStatusSodViolationContext
pagination_label: AccessRequestAdminItemStatusSodViolationContext
sidebar_label: AccessRequestAdminItemStatusSodViolationContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestAdminItemStatusSodViolationContext', 'BetaAccessRequestAdminItemStatusSodViolationContext'] 
slug: /tools/sdk/go/beta/models/access-request-admin-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatusSodViolationContext', 'BetaAccessRequestAdminItemStatusSodViolationContext']
---

# AccessRequestAdminItemStatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **NullableString** | The status of SOD violation check | [optional] 
**Uuid** | Pointer to **NullableString** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | Pointer to [**SodViolationCheckResult1**](sod-violation-check-result1) |  | [optional] 

## Methods

### NewAccessRequestAdminItemStatusSodViolationContext

`func NewAccessRequestAdminItemStatusSodViolationContext() *AccessRequestAdminItemStatusSodViolationContext`

NewAccessRequestAdminItemStatusSodViolationContext instantiates a new AccessRequestAdminItemStatusSodViolationContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestAdminItemStatusSodViolationContextWithDefaults

`func NewAccessRequestAdminItemStatusSodViolationContextWithDefaults() *AccessRequestAdminItemStatusSodViolationContext`

NewAccessRequestAdminItemStatusSodViolationContextWithDefaults instantiates a new AccessRequestAdminItemStatusSodViolationContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *AccessRequestAdminItemStatusSodViolationContext) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AccessRequestAdminItemStatusSodViolationContext) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AccessRequestAdminItemStatusSodViolationContext) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *AccessRequestAdminItemStatusSodViolationContext) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *AccessRequestAdminItemStatusSodViolationContext) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *AccessRequestAdminItemStatusSodViolationContext) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil
### GetUuid

`func (o *AccessRequestAdminItemStatusSodViolationContext) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccessRequestAdminItemStatusSodViolationContext) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccessRequestAdminItemStatusSodViolationContext) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *AccessRequestAdminItemStatusSodViolationContext) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *AccessRequestAdminItemStatusSodViolationContext) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *AccessRequestAdminItemStatusSodViolationContext) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetViolationCheckResult

`func (o *AccessRequestAdminItemStatusSodViolationContext) GetViolationCheckResult() SodViolationCheckResult1`

GetViolationCheckResult returns the ViolationCheckResult field if non-nil, zero value otherwise.

### GetViolationCheckResultOk

`func (o *AccessRequestAdminItemStatusSodViolationContext) GetViolationCheckResultOk() (*SodViolationCheckResult1, bool)`

GetViolationCheckResultOk returns a tuple with the ViolationCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationCheckResult

`func (o *AccessRequestAdminItemStatusSodViolationContext) SetViolationCheckResult(v SodViolationCheckResult1)`

SetViolationCheckResult sets ViolationCheckResult field to given value.

### HasViolationCheckResult

`func (o *AccessRequestAdminItemStatusSodViolationContext) HasViolationCheckResult() bool`

HasViolationCheckResult returns a boolean if a field has been set.


