---
id: v2025-machine-identity-created
title: MachineIdentityCreated
pagination_label: MachineIdentityCreated
sidebar_label: MachineIdentityCreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityCreated', 'V2025MachineIdentityCreated'] 
slug: /tools/sdk/go/v2025/models/machine-identity-created
tags: ['SDK', 'Software Development Kit', 'MachineIdentityCreated', 'V2025MachineIdentityCreated']
---

# MachineIdentityCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineIdentityCreatedMachineIdentity**](machine-identity-created-machine-identity) |  | 

## Methods

### NewMachineIdentityCreated

`func NewMachineIdentityCreated(eventType string, machineIdentity MachineIdentityCreatedMachineIdentity, ) *MachineIdentityCreated`

NewMachineIdentityCreated instantiates a new MachineIdentityCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityCreatedWithDefaults

`func NewMachineIdentityCreatedWithDefaults() *MachineIdentityCreated`

NewMachineIdentityCreatedWithDefaults instantiates a new MachineIdentityCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *MachineIdentityCreated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *MachineIdentityCreated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *MachineIdentityCreated) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *MachineIdentityCreated) GetMachineIdentity() MachineIdentityCreatedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *MachineIdentityCreated) GetMachineIdentityOk() (*MachineIdentityCreatedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *MachineIdentityCreated) SetMachineIdentity(v MachineIdentityCreatedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.



