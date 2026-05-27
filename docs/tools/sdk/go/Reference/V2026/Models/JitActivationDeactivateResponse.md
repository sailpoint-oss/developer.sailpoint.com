---
id: v2026-jit-activation-deactivate-response
title: JitActivationDeactivateResponse
pagination_label: JitActivationDeactivateResponse
sidebar_label: JitActivationDeactivateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JitActivationDeactivateResponse', 'V2026JitActivationDeactivateResponse'] 
slug: /tools/sdk/go/v2026/models/jit-activation-deactivate-response
tags: ['SDK', 'Software Development Kit', 'JitActivationDeactivateResponse', 'V2026JitActivationDeactivateResponse']
---

# JitActivationDeactivateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Workflow or business identifier for this activation. | 
**ActivationId** | **string** | Persistent activation record identifier for this JIT activation. | 
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**Status** | [**ActivationWorkflowStatus**](activation-workflow-status) |  | 
**StartTime** | **SailPointTime** | Time associated with this deactivation request (ISO-8601). | 

## Methods

### NewJitActivationDeactivateResponse

`func NewJitActivationDeactivateResponse(id string, activationId string, connectionId string, status ActivationWorkflowStatus, startTime SailPointTime, ) *JitActivationDeactivateResponse`

NewJitActivationDeactivateResponse instantiates a new JitActivationDeactivateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitActivationDeactivateResponseWithDefaults

`func NewJitActivationDeactivateResponseWithDefaults() *JitActivationDeactivateResponse`

NewJitActivationDeactivateResponseWithDefaults instantiates a new JitActivationDeactivateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *JitActivationDeactivateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *JitActivationDeactivateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *JitActivationDeactivateResponse) SetId(v string)`

SetId sets Id field to given value.


### GetActivationId

`func (o *JitActivationDeactivateResponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *JitActivationDeactivateResponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *JitActivationDeactivateResponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### GetConnectionId

`func (o *JitActivationDeactivateResponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *JitActivationDeactivateResponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *JitActivationDeactivateResponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetStatus

`func (o *JitActivationDeactivateResponse) GetStatus() ActivationWorkflowStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JitActivationDeactivateResponse) GetStatusOk() (*ActivationWorkflowStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JitActivationDeactivateResponse) SetStatus(v ActivationWorkflowStatus)`

SetStatus sets Status field to given value.


### GetStartTime

`func (o *JitActivationDeactivateResponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *JitActivationDeactivateResponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *JitActivationDeactivateResponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.



