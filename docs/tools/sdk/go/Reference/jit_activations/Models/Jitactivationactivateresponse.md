---
id: v1-jitactivationactivateresponse
title: Jitactivationactivateresponse
pagination_label: Jitactivationactivateresponse
sidebar_label: Jitactivationactivateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationactivateresponse', 'V1Jitactivationactivateresponse'] 
slug: /tools/sdk/go/jitactivations/models/jitactivationactivateresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationactivateresponse', 'V1Jitactivationactivateresponse']
---

# Jitactivationactivateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Workflow or business identifier for this activation. | 
**ActivationId** | **string** | Persistent activation record identifier for this JIT activation. | 
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**ActivationPeriodMins** | **int32** | Activation duration in minutes for this workflow. | 
**Status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | 
**StartTime** | **SailPointTime** | Time when the activation workflow was started (ISO-8601). | 

## Methods

### NewJitactivationactivateresponse

`func NewJitactivationactivateresponse(id string, activationId string, connectionId string, activationPeriodMins int32, status Activationworkflowstatus, startTime SailPointTime, ) *Jitactivationactivateresponse`

NewJitactivationactivateresponse instantiates a new Jitactivationactivateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationactivateresponseWithDefaults

`func NewJitactivationactivateresponseWithDefaults() *Jitactivationactivateresponse`

NewJitactivationactivateresponseWithDefaults instantiates a new Jitactivationactivateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Jitactivationactivateresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Jitactivationactivateresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Jitactivationactivateresponse) SetId(v string)`

SetId sets Id field to given value.


### GetActivationId

`func (o *Jitactivationactivateresponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *Jitactivationactivateresponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *Jitactivationactivateresponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### GetConnectionId

`func (o *Jitactivationactivateresponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationactivateresponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationactivateresponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodMins

`func (o *Jitactivationactivateresponse) GetActivationPeriodMins() int32`

GetActivationPeriodMins returns the ActivationPeriodMins field if non-nil, zero value otherwise.

### GetActivationPeriodMinsOk

`func (o *Jitactivationactivateresponse) GetActivationPeriodMinsOk() (*int32, bool)`

GetActivationPeriodMinsOk returns a tuple with the ActivationPeriodMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodMins

`func (o *Jitactivationactivateresponse) SetActivationPeriodMins(v int32)`

SetActivationPeriodMins sets ActivationPeriodMins field to given value.


### GetStatus

`func (o *Jitactivationactivateresponse) GetStatus() Activationworkflowstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Jitactivationactivateresponse) GetStatusOk() (*Activationworkflowstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Jitactivationactivateresponse) SetStatus(v Activationworkflowstatus)`

SetStatus sets Status field to given value.


### GetStartTime

`func (o *Jitactivationactivateresponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Jitactivationactivateresponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Jitactivationactivateresponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.



