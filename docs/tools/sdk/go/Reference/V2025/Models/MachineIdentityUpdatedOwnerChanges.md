---
id: v2025-machine-identity-updated-owner-changes
title: MachineIdentityUpdatedOwnerChanges
pagination_label: MachineIdentityUpdatedOwnerChanges
sidebar_label: MachineIdentityUpdatedOwnerChanges
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUpdatedOwnerChanges', 'V2025MachineIdentityUpdatedOwnerChanges'] 
slug: /tools/sdk/go/v2025/models/machine-identity-updated-owner-changes
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdatedOwnerChanges', 'V2025MachineIdentityUpdatedOwnerChanges']
---

# MachineIdentityUpdatedOwnerChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | Pointer to **string** | Name of the attribute that changed. | [optional] 
**Added** | Pointer to [**[]MachineIdentityOwnerReference**](machine-identity-owner-reference) | Owners that were added. | [optional] 
**Removed** | Pointer to [**[]MachineIdentityOwnerReference**](machine-identity-owner-reference) | Owners that were removed. | [optional] 

## Methods

### NewMachineIdentityUpdatedOwnerChanges

`func NewMachineIdentityUpdatedOwnerChanges() *MachineIdentityUpdatedOwnerChanges`

NewMachineIdentityUpdatedOwnerChanges instantiates a new MachineIdentityUpdatedOwnerChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUpdatedOwnerChangesWithDefaults

`func NewMachineIdentityUpdatedOwnerChangesWithDefaults() *MachineIdentityUpdatedOwnerChanges`

NewMachineIdentityUpdatedOwnerChangesWithDefaults instantiates a new MachineIdentityUpdatedOwnerChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *MachineIdentityUpdatedOwnerChanges) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *MachineIdentityUpdatedOwnerChanges) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *MachineIdentityUpdatedOwnerChanges) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *MachineIdentityUpdatedOwnerChanges) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAdded

`func (o *MachineIdentityUpdatedOwnerChanges) GetAdded() []MachineIdentityOwnerReference`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *MachineIdentityUpdatedOwnerChanges) GetAddedOk() (*[]MachineIdentityOwnerReference, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *MachineIdentityUpdatedOwnerChanges) SetAdded(v []MachineIdentityOwnerReference)`

SetAdded sets Added field to given value.

### HasAdded

`func (o *MachineIdentityUpdatedOwnerChanges) HasAdded() bool`

HasAdded returns a boolean if a field has been set.

### GetRemoved

`func (o *MachineIdentityUpdatedOwnerChanges) GetRemoved() []MachineIdentityOwnerReference`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *MachineIdentityUpdatedOwnerChanges) GetRemovedOk() (*[]MachineIdentityOwnerReference, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *MachineIdentityUpdatedOwnerChanges) SetRemoved(v []MachineIdentityOwnerReference)`

SetRemoved sets Removed field to given value.

### HasRemoved

`func (o *MachineIdentityUpdatedOwnerChanges) HasRemoved() bool`

HasRemoved returns a boolean if a field has been set.


