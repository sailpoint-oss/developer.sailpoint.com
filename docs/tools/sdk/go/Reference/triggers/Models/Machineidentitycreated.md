---
id: v1-machineidentitycreated
title: Machineidentitycreated
pagination_label: Machineidentitycreated
sidebar_label: Machineidentitycreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentitycreated', 'V1Machineidentitycreated'] 
slug: /tools/sdk/go/triggers/models/machineidentitycreated
tags: ['SDK', 'Software Development Kit', 'Machineidentitycreated', 'V1Machineidentitycreated']
---

# Machineidentitycreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineidentitycreatedMachineIdentity**](machineidentitycreated-machine-identity) |  | 

## Methods

### NewMachineidentitycreated

`func NewMachineidentitycreated(eventType string, machineIdentity MachineidentitycreatedMachineIdentity, ) *Machineidentitycreated`

NewMachineidentitycreated instantiates a new Machineidentitycreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentitycreatedWithDefaults

`func NewMachineidentitycreatedWithDefaults() *Machineidentitycreated`

NewMachineidentitycreatedWithDefaults instantiates a new Machineidentitycreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *Machineidentitycreated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Machineidentitycreated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Machineidentitycreated) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *Machineidentitycreated) GetMachineIdentity() MachineidentitycreatedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *Machineidentitycreated) GetMachineIdentityOk() (*MachineidentitycreatedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *Machineidentitycreated) SetMachineIdentity(v MachineidentitycreatedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.



