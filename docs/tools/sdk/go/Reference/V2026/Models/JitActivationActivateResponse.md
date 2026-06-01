---
id: v2026-jit-activation-activate-response
title: JitActivationActivateResponse
pagination_label: JitActivationActivateResponse
sidebar_label: JitActivationActivateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JitActivationActivateResponse', 'V2026JitActivationActivateResponse'] 
slug: /tools/sdk/go/v2026/models/jit-activation-activate-response
tags: ['SDK', 'Software Development Kit', 'JitActivationActivateResponse', 'V2026JitActivationActivateResponse']
---

# JitActivationActivateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Workflow or business identifier for this activation. | 
**ActivationId** | **string** | Persistent activation record identifier for this JIT activation. | 
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**ActivationPeriodMins** | **int32** | Activation duration in minutes for this workflow. | 
**Status** | [**ActivationWorkflowStatus**](activation-workflow-status) |  | 
**StartTime** | **SailPointTime** | Time when the activation workflow was started (ISO-8601). | 

## Methods

### NewJitActivationActivateResponse

`func NewJitActivationActivateResponse(id string, activationId string, connectionId string, activationPeriodMins int32, status ActivationWorkflowStatus, startTime SailPointTime, ) *JitActivationActivateResponse`

NewJitActivationActivateResponse instantiates a new JitActivationActivateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitActivationActivateResponseWithDefaults

`func NewJitActivationActivateResponseWithDefaults() *JitActivationActivateResponse`

NewJitActivationActivateResponseWithDefaults instantiates a new JitActivationActivateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *JitActivationActivateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *JitActivationActivateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *JitActivationActivateResponse) SetId(v string)`

SetId sets Id field to given value.


### GetActivationId

`func (o *JitActivationActivateResponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *JitActivationActivateResponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *JitActivationActivateResponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### GetConnectionId

`func (o *JitActivationActivateResponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *JitActivationActivateResponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *JitActivationActivateResponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodMins

`func (o *JitActivationActivateResponse) GetActivationPeriodMins() int32`

GetActivationPeriodMins returns the ActivationPeriodMins field if non-nil, zero value otherwise.

### GetActivationPeriodMinsOk

`func (o *JitActivationActivateResponse) GetActivationPeriodMinsOk() (*int32, bool)`

GetActivationPeriodMinsOk returns a tuple with the ActivationPeriodMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodMins

`func (o *JitActivationActivateResponse) SetActivationPeriodMins(v int32)`

SetActivationPeriodMins sets ActivationPeriodMins field to given value.


### GetStatus

`func (o *JitActivationActivateResponse) GetStatus() ActivationWorkflowStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JitActivationActivateResponse) GetStatusOk() (*ActivationWorkflowStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JitActivationActivateResponse) SetStatus(v ActivationWorkflowStatus)`

SetStatus sets Status field to given value.


### GetStartTime

`func (o *JitActivationActivateResponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *JitActivationActivateResponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *JitActivationActivateResponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.



