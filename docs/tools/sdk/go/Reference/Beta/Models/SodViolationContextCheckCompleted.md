---
id: beta-sod-violation-context-check-completed
title: SodViolationContextCheckCompleted
pagination_label: SodViolationContextCheckCompleted
sidebar_label: SodViolationContextCheckCompleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationContextCheckCompleted', 'BetaSodViolationContextCheckCompleted'] 
slug: /tools/sdk/go/beta/models/sod-violation-context-check-completed
tags: ['SDK', 'Software Development Kit', 'SodViolationContextCheckCompleted', 'BetaSodViolationContextCheckCompleted']
---

# SodViolationContextCheckCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **NullableString** | The status of SOD violation check | [optional] 
**Uuid** | Pointer to **NullableString** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | Pointer to [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 

## Methods

### NewSodViolationContextCheckCompleted

`func NewSodViolationContextCheckCompleted() *SodViolationContextCheckCompleted`

NewSodViolationContextCheckCompleted instantiates a new SodViolationContextCheckCompleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationContextCheckCompletedWithDefaults

`func NewSodViolationContextCheckCompletedWithDefaults() *SodViolationContextCheckCompleted`

NewSodViolationContextCheckCompletedWithDefaults instantiates a new SodViolationContextCheckCompleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *SodViolationContextCheckCompleted) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SodViolationContextCheckCompleted) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SodViolationContextCheckCompleted) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SodViolationContextCheckCompleted) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *SodViolationContextCheckCompleted) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *SodViolationContextCheckCompleted) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil
### GetUuid

`func (o *SodViolationContextCheckCompleted) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *SodViolationContextCheckCompleted) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *SodViolationContextCheckCompleted) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *SodViolationContextCheckCompleted) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *SodViolationContextCheckCompleted) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *SodViolationContextCheckCompleted) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetViolationCheckResult

`func (o *SodViolationContextCheckCompleted) GetViolationCheckResult() SodViolationCheckResult`

GetViolationCheckResult returns the ViolationCheckResult field if non-nil, zero value otherwise.

### GetViolationCheckResultOk

`func (o *SodViolationContextCheckCompleted) GetViolationCheckResultOk() (*SodViolationCheckResult, bool)`

GetViolationCheckResultOk returns a tuple with the ViolationCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationCheckResult

`func (o *SodViolationContextCheckCompleted) SetViolationCheckResult(v SodViolationCheckResult)`

SetViolationCheckResult sets ViolationCheckResult field to given value.

### HasViolationCheckResult

`func (o *SodViolationContextCheckCompleted) HasViolationCheckResult() bool`

HasViolationCheckResult returns a boolean if a field has been set.


