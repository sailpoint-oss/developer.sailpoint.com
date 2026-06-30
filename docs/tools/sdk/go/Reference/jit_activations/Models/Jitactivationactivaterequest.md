---
id: v1-jitactivationactivaterequest
title: Jitactivationactivaterequest
pagination_label: Jitactivationactivaterequest
sidebar_label: Jitactivationactivaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationactivaterequest', 'V1Jitactivationactivaterequest'] 
slug: /tools/sdk/go/jitactivations/models/jitactivationactivaterequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationactivaterequest', 'V1Jitactivationactivaterequest']
---

# Jitactivationactivaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**ActivationPeriodMins** | **int32** | Requested activation duration in minutes. | 

## Methods

### NewJitactivationactivaterequest

`func NewJitactivationactivaterequest(connectionId string, activationPeriodMins int32, ) *Jitactivationactivaterequest`

NewJitactivationactivaterequest instantiates a new Jitactivationactivaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationactivaterequestWithDefaults

`func NewJitactivationactivaterequestWithDefaults() *Jitactivationactivaterequest`

NewJitactivationactivaterequestWithDefaults instantiates a new Jitactivationactivaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *Jitactivationactivaterequest) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationactivaterequest) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationactivaterequest) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodMins

`func (o *Jitactivationactivaterequest) GetActivationPeriodMins() int32`

GetActivationPeriodMins returns the ActivationPeriodMins field if non-nil, zero value otherwise.

### GetActivationPeriodMinsOk

`func (o *Jitactivationactivaterequest) GetActivationPeriodMinsOk() (*int32, bool)`

GetActivationPeriodMinsOk returns a tuple with the ActivationPeriodMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodMins

`func (o *Jitactivationactivaterequest) SetActivationPeriodMins(v int32)`

SetActivationPeriodMins sets ActivationPeriodMins field to given value.



