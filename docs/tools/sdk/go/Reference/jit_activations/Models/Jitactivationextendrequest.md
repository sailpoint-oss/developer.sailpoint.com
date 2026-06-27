---
id: v1-jitactivationextendrequest
title: Jitactivationextendrequest
pagination_label: Jitactivationextendrequest
sidebar_label: Jitactivationextendrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationextendrequest', 'V1Jitactivationextendrequest'] 
slug: /tools/sdk/go/jitactivations/models/jitactivationextendrequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationextendrequest', 'V1Jitactivationextendrequest']
---

# Jitactivationextendrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Entitlement connection identifier for the activation to extend. | 
**ActivationPeriodExtensionMins** | **int32** | Number of minutes to extend the activation period. | 

## Methods

### NewJitactivationextendrequest

`func NewJitactivationextendrequest(connectionId string, activationPeriodExtensionMins int32, ) *Jitactivationextendrequest`

NewJitactivationextendrequest instantiates a new Jitactivationextendrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationextendrequestWithDefaults

`func NewJitactivationextendrequestWithDefaults() *Jitactivationextendrequest`

NewJitactivationextendrequestWithDefaults instantiates a new Jitactivationextendrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *Jitactivationextendrequest) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationextendrequest) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationextendrequest) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodExtensionMins

`func (o *Jitactivationextendrequest) GetActivationPeriodExtensionMins() int32`

GetActivationPeriodExtensionMins returns the ActivationPeriodExtensionMins field if non-nil, zero value otherwise.

### GetActivationPeriodExtensionMinsOk

`func (o *Jitactivationextendrequest) GetActivationPeriodExtensionMinsOk() (*int32, bool)`

GetActivationPeriodExtensionMinsOk returns a tuple with the ActivationPeriodExtensionMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodExtensionMins

`func (o *Jitactivationextendrequest) SetActivationPeriodExtensionMins(v int32)`

SetActivationPeriodExtensionMins sets ActivationPeriodExtensionMins field to given value.



