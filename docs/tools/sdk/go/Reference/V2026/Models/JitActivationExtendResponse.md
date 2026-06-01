---
id: v2026-jit-activation-extend-response
title: JitActivationExtendResponse
pagination_label: JitActivationExtendResponse
sidebar_label: JitActivationExtendResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JitActivationExtendResponse', 'V2026JitActivationExtendResponse'] 
slug: /tools/sdk/go/v2026/models/jit-activation-extend-response
tags: ['SDK', 'Software Development Kit', 'JitActivationExtendResponse', 'V2026JitActivationExtendResponse']
---

# JitActivationExtendResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Workflow or business identifier for this activation. | 
**ActivationId** | **string** | Persistent activation record identifier for this JIT activation. | 
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**ActivationPeriodExtensionMins** | **int32** | Extension applied to the activation period, in minutes. | 
**Status** | [**ActivationWorkflowStatus**](activation-workflow-status) |  | 
**StartTime** | **SailPointTime** | Time associated with this extend request (ISO-8601). | 

## Methods

### NewJitActivationExtendResponse

`func NewJitActivationExtendResponse(id string, activationId string, connectionId string, activationPeriodExtensionMins int32, status ActivationWorkflowStatus, startTime SailPointTime, ) *JitActivationExtendResponse`

NewJitActivationExtendResponse instantiates a new JitActivationExtendResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitActivationExtendResponseWithDefaults

`func NewJitActivationExtendResponseWithDefaults() *JitActivationExtendResponse`

NewJitActivationExtendResponseWithDefaults instantiates a new JitActivationExtendResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *JitActivationExtendResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *JitActivationExtendResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *JitActivationExtendResponse) SetId(v string)`

SetId sets Id field to given value.


### GetActivationId

`func (o *JitActivationExtendResponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *JitActivationExtendResponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *JitActivationExtendResponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### GetConnectionId

`func (o *JitActivationExtendResponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *JitActivationExtendResponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *JitActivationExtendResponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodExtensionMins

`func (o *JitActivationExtendResponse) GetActivationPeriodExtensionMins() int32`

GetActivationPeriodExtensionMins returns the ActivationPeriodExtensionMins field if non-nil, zero value otherwise.

### GetActivationPeriodExtensionMinsOk

`func (o *JitActivationExtendResponse) GetActivationPeriodExtensionMinsOk() (*int32, bool)`

GetActivationPeriodExtensionMinsOk returns a tuple with the ActivationPeriodExtensionMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodExtensionMins

`func (o *JitActivationExtendResponse) SetActivationPeriodExtensionMins(v int32)`

SetActivationPeriodExtensionMins sets ActivationPeriodExtensionMins field to given value.


### GetStatus

`func (o *JitActivationExtendResponse) GetStatus() ActivationWorkflowStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JitActivationExtendResponse) GetStatusOk() (*ActivationWorkflowStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JitActivationExtendResponse) SetStatus(v ActivationWorkflowStatus)`

SetStatus sets Status field to given value.


### GetStartTime

`func (o *JitActivationExtendResponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *JitActivationExtendResponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *JitActivationExtendResponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.



