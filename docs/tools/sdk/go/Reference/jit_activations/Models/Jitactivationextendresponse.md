---
id: v1-jitactivationextendresponse
title: Jitactivationextendresponse
pagination_label: Jitactivationextendresponse
sidebar_label: Jitactivationextendresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationextendresponse', 'V1Jitactivationextendresponse'] 
slug: /tools/sdk/go/jitactivations/models/jitactivationextendresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationextendresponse', 'V1Jitactivationextendresponse']
---

# Jitactivationextendresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Workflow or business identifier for this activation. | 
**ActivationId** | **string** | Persistent activation record identifier for this JIT activation. | 
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**ActivationPeriodExtensionMins** | **int32** | Extension applied to the activation period, in minutes. | 
**Status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | 
**StartTime** | **SailPointTime** | Time associated with this extend request (ISO-8601). | 

## Methods

### NewJitactivationextendresponse

`func NewJitactivationextendresponse(id string, activationId string, connectionId string, activationPeriodExtensionMins int32, status Activationworkflowstatus, startTime SailPointTime, ) *Jitactivationextendresponse`

NewJitactivationextendresponse instantiates a new Jitactivationextendresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationextendresponseWithDefaults

`func NewJitactivationextendresponseWithDefaults() *Jitactivationextendresponse`

NewJitactivationextendresponseWithDefaults instantiates a new Jitactivationextendresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Jitactivationextendresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Jitactivationextendresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Jitactivationextendresponse) SetId(v string)`

SetId sets Id field to given value.


### GetActivationId

`func (o *Jitactivationextendresponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *Jitactivationextendresponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *Jitactivationextendresponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### GetConnectionId

`func (o *Jitactivationextendresponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationextendresponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationextendresponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodExtensionMins

`func (o *Jitactivationextendresponse) GetActivationPeriodExtensionMins() int32`

GetActivationPeriodExtensionMins returns the ActivationPeriodExtensionMins field if non-nil, zero value otherwise.

### GetActivationPeriodExtensionMinsOk

`func (o *Jitactivationextendresponse) GetActivationPeriodExtensionMinsOk() (*int32, bool)`

GetActivationPeriodExtensionMinsOk returns a tuple with the ActivationPeriodExtensionMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodExtensionMins

`func (o *Jitactivationextendresponse) SetActivationPeriodExtensionMins(v int32)`

SetActivationPeriodExtensionMins sets ActivationPeriodExtensionMins field to given value.


### GetStatus

`func (o *Jitactivationextendresponse) GetStatus() Activationworkflowstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Jitactivationextendresponse) GetStatusOk() (*Activationworkflowstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Jitactivationextendresponse) SetStatus(v Activationworkflowstatus)`

SetStatus sets Status field to given value.


### GetStartTime

`func (o *Jitactivationextendresponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Jitactivationextendresponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Jitactivationextendresponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.



