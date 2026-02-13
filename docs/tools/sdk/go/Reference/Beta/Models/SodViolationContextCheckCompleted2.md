---
id: beta-sod-violation-context-check-completed2
title: SodViolationContextCheckCompleted2
pagination_label: SodViolationContextCheckCompleted2
sidebar_label: SodViolationContextCheckCompleted2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationContextCheckCompleted2', 'BetaSodViolationContextCheckCompleted2'] 
slug: /tools/sdk/go/beta/models/sod-violation-context-check-completed2
tags: ['SDK', 'Software Development Kit', 'SodViolationContextCheckCompleted2', 'BetaSodViolationContextCheckCompleted2']
---

# SodViolationContextCheckCompleted2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** | The status of SOD violation check | [optional] 
**Uuid** | Pointer to **string** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | Pointer to [**SodViolationCheckResult2**](sod-violation-check-result2) |  | [optional] 

## Methods

### NewSodViolationContextCheckCompleted2

`func NewSodViolationContextCheckCompleted2() *SodViolationContextCheckCompleted2`

NewSodViolationContextCheckCompleted2 instantiates a new SodViolationContextCheckCompleted2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationContextCheckCompleted2WithDefaults

`func NewSodViolationContextCheckCompleted2WithDefaults() *SodViolationContextCheckCompleted2`

NewSodViolationContextCheckCompleted2WithDefaults instantiates a new SodViolationContextCheckCompleted2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *SodViolationContextCheckCompleted2) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SodViolationContextCheckCompleted2) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SodViolationContextCheckCompleted2) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SodViolationContextCheckCompleted2) HasState() bool`

HasState returns a boolean if a field has been set.

### GetUuid

`func (o *SodViolationContextCheckCompleted2) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *SodViolationContextCheckCompleted2) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *SodViolationContextCheckCompleted2) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *SodViolationContextCheckCompleted2) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetViolationCheckResult

`func (o *SodViolationContextCheckCompleted2) GetViolationCheckResult() SodViolationCheckResult2`

GetViolationCheckResult returns the ViolationCheckResult field if non-nil, zero value otherwise.

### GetViolationCheckResultOk

`func (o *SodViolationContextCheckCompleted2) GetViolationCheckResultOk() (*SodViolationCheckResult2, bool)`

GetViolationCheckResultOk returns a tuple with the ViolationCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationCheckResult

`func (o *SodViolationContextCheckCompleted2) SetViolationCheckResult(v SodViolationCheckResult2)`

SetViolationCheckResult sets ViolationCheckResult field to given value.

### HasViolationCheckResult

`func (o *SodViolationContextCheckCompleted2) HasViolationCheckResult() bool`

HasViolationCheckResult returns a boolean if a field has been set.


