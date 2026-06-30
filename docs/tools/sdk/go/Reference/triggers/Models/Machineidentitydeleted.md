---
id: v1-machineidentitydeleted
title: Machineidentitydeleted
pagination_label: Machineidentitydeleted
sidebar_label: Machineidentitydeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentitydeleted', 'V1Machineidentitydeleted'] 
slug: /tools/sdk/go/triggers/models/machineidentitydeleted
tags: ['SDK', 'Software Development Kit', 'Machineidentitydeleted', 'V1Machineidentitydeleted']
---

# Machineidentitydeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineidentitydeletedMachineIdentity**](machineidentitydeleted-machine-identity) |  | 

## Methods

### NewMachineidentitydeleted

`func NewMachineidentitydeleted(eventType string, machineIdentity MachineidentitydeletedMachineIdentity, ) *Machineidentitydeleted`

NewMachineidentitydeleted instantiates a new Machineidentitydeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentitydeletedWithDefaults

`func NewMachineidentitydeletedWithDefaults() *Machineidentitydeleted`

NewMachineidentitydeletedWithDefaults instantiates a new Machineidentitydeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *Machineidentitydeleted) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Machineidentitydeleted) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Machineidentitydeleted) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *Machineidentitydeleted) GetMachineIdentity() MachineidentitydeletedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *Machineidentitydeleted) GetMachineIdentityOk() (*MachineidentitydeletedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *Machineidentitydeleted) SetMachineIdentity(v MachineidentitydeletedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.



