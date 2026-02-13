---
id: v2025-machine-identity-deleted
title: MachineIdentityDeleted
pagination_label: MachineIdentityDeleted
sidebar_label: MachineIdentityDeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityDeleted', 'V2025MachineIdentityDeleted'] 
slug: /tools/sdk/go/v2025/models/machine-identity-deleted
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDeleted', 'V2025MachineIdentityDeleted']
---

# MachineIdentityDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineIdentityDeletedMachineIdentity**](machine-identity-deleted-machine-identity) |  | 

## Methods

### NewMachineIdentityDeleted

`func NewMachineIdentityDeleted(eventType string, machineIdentity MachineIdentityDeletedMachineIdentity, ) *MachineIdentityDeleted`

NewMachineIdentityDeleted instantiates a new MachineIdentityDeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityDeletedWithDefaults

`func NewMachineIdentityDeletedWithDefaults() *MachineIdentityDeleted`

NewMachineIdentityDeletedWithDefaults instantiates a new MachineIdentityDeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *MachineIdentityDeleted) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *MachineIdentityDeleted) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *MachineIdentityDeleted) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *MachineIdentityDeleted) GetMachineIdentity() MachineIdentityDeletedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *MachineIdentityDeleted) GetMachineIdentityOk() (*MachineIdentityDeletedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *MachineIdentityDeleted) SetMachineIdentity(v MachineIdentityDeletedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.



