---
id: v1-machineidentityupdated-owner-changes
title: MachineidentityupdatedOwnerChanges
pagination_label: MachineidentityupdatedOwnerChanges
sidebar_label: MachineidentityupdatedOwnerChanges
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineidentityupdatedOwnerChanges', 'V1MachineidentityupdatedOwnerChanges'] 
slug: /tools/sdk/go/triggers/models/machineidentityupdated-owner-changes
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedOwnerChanges', 'V1MachineidentityupdatedOwnerChanges']
---

# MachineidentityupdatedOwnerChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | Pointer to **string** | Name of the attribute that changed. | [optional] 
**Added** | Pointer to [**[]Machineidentityownerreference**](machineidentityownerreference) | Owners that were added. | [optional] 
**Removed** | Pointer to [**[]Machineidentityownerreference**](machineidentityownerreference) | Owners that were removed. | [optional] 

## Methods

### NewMachineidentityupdatedOwnerChanges

`func NewMachineidentityupdatedOwnerChanges() *MachineidentityupdatedOwnerChanges`

NewMachineidentityupdatedOwnerChanges instantiates a new MachineidentityupdatedOwnerChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityupdatedOwnerChangesWithDefaults

`func NewMachineidentityupdatedOwnerChangesWithDefaults() *MachineidentityupdatedOwnerChanges`

NewMachineidentityupdatedOwnerChangesWithDefaults instantiates a new MachineidentityupdatedOwnerChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *MachineidentityupdatedOwnerChanges) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *MachineidentityupdatedOwnerChanges) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *MachineidentityupdatedOwnerChanges) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *MachineidentityupdatedOwnerChanges) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAdded

`func (o *MachineidentityupdatedOwnerChanges) GetAdded() []Machineidentityownerreference`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *MachineidentityupdatedOwnerChanges) GetAddedOk() (*[]Machineidentityownerreference, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *MachineidentityupdatedOwnerChanges) SetAdded(v []Machineidentityownerreference)`

SetAdded sets Added field to given value.

### HasAdded

`func (o *MachineidentityupdatedOwnerChanges) HasAdded() bool`

HasAdded returns a boolean if a field has been set.

### GetRemoved

`func (o *MachineidentityupdatedOwnerChanges) GetRemoved() []Machineidentityownerreference`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *MachineidentityupdatedOwnerChanges) GetRemovedOk() (*[]Machineidentityownerreference, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *MachineidentityupdatedOwnerChanges) SetRemoved(v []Machineidentityownerreference)`

SetRemoved sets Removed field to given value.

### HasRemoved

`func (o *MachineidentityupdatedOwnerChanges) HasRemoved() bool`

HasRemoved returns a boolean if a field has been set.


