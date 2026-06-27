---
id: v1-jitactivationdeactivateresponse
title: Jitactivationdeactivateresponse
pagination_label: Jitactivationdeactivateresponse
sidebar_label: Jitactivationdeactivateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationdeactivateresponse', 'V1Jitactivationdeactivateresponse'] 
slug: /tools/sdk/go/jitactivations/models/jitactivationdeactivateresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationdeactivateresponse', 'V1Jitactivationdeactivateresponse']
---

# Jitactivationdeactivateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Workflow or business identifier for this activation. | 
**ActivationId** | **string** | Persistent activation record identifier for this JIT activation. | 
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**Status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | 
**StartTime** | **SailPointTime** | Time associated with this deactivation request (ISO-8601). | 

## Methods

### NewJitactivationdeactivateresponse

`func NewJitactivationdeactivateresponse(id string, activationId string, connectionId string, status Activationworkflowstatus, startTime SailPointTime, ) *Jitactivationdeactivateresponse`

NewJitactivationdeactivateresponse instantiates a new Jitactivationdeactivateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationdeactivateresponseWithDefaults

`func NewJitactivationdeactivateresponseWithDefaults() *Jitactivationdeactivateresponse`

NewJitactivationdeactivateresponseWithDefaults instantiates a new Jitactivationdeactivateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Jitactivationdeactivateresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Jitactivationdeactivateresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Jitactivationdeactivateresponse) SetId(v string)`

SetId sets Id field to given value.


### GetActivationId

`func (o *Jitactivationdeactivateresponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *Jitactivationdeactivateresponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *Jitactivationdeactivateresponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### GetConnectionId

`func (o *Jitactivationdeactivateresponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationdeactivateresponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationdeactivateresponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetStatus

`func (o *Jitactivationdeactivateresponse) GetStatus() Activationworkflowstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Jitactivationdeactivateresponse) GetStatusOk() (*Activationworkflowstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Jitactivationdeactivateresponse) SetStatus(v Activationworkflowstatus)`

SetStatus sets Status field to given value.


### GetStartTime

`func (o *Jitactivationdeactivateresponse) GetStartTime() SailPointTime`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *Jitactivationdeactivateresponse) GetStartTimeOk() (*SailPointTime, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *Jitactivationdeactivateresponse) SetStartTime(v SailPointTime)`

SetStartTime sets StartTime field to given value.



