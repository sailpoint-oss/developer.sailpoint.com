---
id: v1-requesteditemstatus-sod-violation-context
title: RequesteditemstatusSodViolationContext
pagination_label: RequesteditemstatusSodViolationContext
sidebar_label: RequesteditemstatusSodViolationContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequesteditemstatusSodViolationContext', 'V1RequesteditemstatusSodViolationContext'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemstatus-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusSodViolationContext', 'V1RequesteditemstatusSodViolationContext']
---

# RequesteditemstatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **NullableString** | The status of SOD violation check | [optional] 
**Uuid** | Pointer to **NullableString** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | Pointer to [**Sodviolationcheckresult**](sodviolationcheckresult) |  | [optional] 

## Methods

### NewRequesteditemstatusSodViolationContext

`func NewRequesteditemstatusSodViolationContext() *RequesteditemstatusSodViolationContext`

NewRequesteditemstatusSodViolationContext instantiates a new RequesteditemstatusSodViolationContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemstatusSodViolationContextWithDefaults

`func NewRequesteditemstatusSodViolationContextWithDefaults() *RequesteditemstatusSodViolationContext`

NewRequesteditemstatusSodViolationContextWithDefaults instantiates a new RequesteditemstatusSodViolationContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *RequesteditemstatusSodViolationContext) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *RequesteditemstatusSodViolationContext) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *RequesteditemstatusSodViolationContext) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *RequesteditemstatusSodViolationContext) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *RequesteditemstatusSodViolationContext) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *RequesteditemstatusSodViolationContext) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil
### GetUuid

`func (o *RequesteditemstatusSodViolationContext) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *RequesteditemstatusSodViolationContext) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *RequesteditemstatusSodViolationContext) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *RequesteditemstatusSodViolationContext) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *RequesteditemstatusSodViolationContext) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *RequesteditemstatusSodViolationContext) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetViolationCheckResult

`func (o *RequesteditemstatusSodViolationContext) GetViolationCheckResult() Sodviolationcheckresult`

GetViolationCheckResult returns the ViolationCheckResult field if non-nil, zero value otherwise.

### GetViolationCheckResultOk

`func (o *RequesteditemstatusSodViolationContext) GetViolationCheckResultOk() (*Sodviolationcheckresult, bool)`

GetViolationCheckResultOk returns a tuple with the ViolationCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationCheckResult

`func (o *RequesteditemstatusSodViolationContext) SetViolationCheckResult(v Sodviolationcheckresult)`

SetViolationCheckResult sets ViolationCheckResult field to given value.

### HasViolationCheckResult

`func (o *RequesteditemstatusSodViolationContext) HasViolationCheckResult() bool`

HasViolationCheckResult returns a boolean if a field has been set.


