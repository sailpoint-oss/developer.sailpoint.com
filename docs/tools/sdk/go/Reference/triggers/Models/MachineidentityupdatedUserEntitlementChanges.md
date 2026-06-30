---
id: v1-machineidentityupdated-user-entitlement-changes
title: MachineidentityupdatedUserEntitlementChanges
pagination_label: MachineidentityupdatedUserEntitlementChanges
sidebar_label: MachineidentityupdatedUserEntitlementChanges
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineidentityupdatedUserEntitlementChanges', 'V1MachineidentityupdatedUserEntitlementChanges'] 
slug: /tools/sdk/go/triggers/models/machineidentityupdated-user-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedUserEntitlementChanges', 'V1MachineidentityupdatedUserEntitlementChanges']
---

# MachineidentityupdatedUserEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | Pointer to **string** | Name of the attribute that changed. | [optional] 
**Added** | Pointer to [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | User entitlements that were added. | [optional] 
**Removed** | Pointer to [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | User entitlements that were removed. | [optional] 

## Methods

### NewMachineidentityupdatedUserEntitlementChanges

`func NewMachineidentityupdatedUserEntitlementChanges() *MachineidentityupdatedUserEntitlementChanges`

NewMachineidentityupdatedUserEntitlementChanges instantiates a new MachineidentityupdatedUserEntitlementChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityupdatedUserEntitlementChangesWithDefaults

`func NewMachineidentityupdatedUserEntitlementChangesWithDefaults() *MachineidentityupdatedUserEntitlementChanges`

NewMachineidentityupdatedUserEntitlementChangesWithDefaults instantiates a new MachineidentityupdatedUserEntitlementChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *MachineidentityupdatedUserEntitlementChanges) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *MachineidentityupdatedUserEntitlementChanges) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *MachineidentityupdatedUserEntitlementChanges) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *MachineidentityupdatedUserEntitlementChanges) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAdded

`func (o *MachineidentityupdatedUserEntitlementChanges) GetAdded() []Machineidentityuserentitlements`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *MachineidentityupdatedUserEntitlementChanges) GetAddedOk() (*[]Machineidentityuserentitlements, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *MachineidentityupdatedUserEntitlementChanges) SetAdded(v []Machineidentityuserentitlements)`

SetAdded sets Added field to given value.

### HasAdded

`func (o *MachineidentityupdatedUserEntitlementChanges) HasAdded() bool`

HasAdded returns a boolean if a field has been set.

### GetRemoved

`func (o *MachineidentityupdatedUserEntitlementChanges) GetRemoved() []Machineidentityuserentitlements`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *MachineidentityupdatedUserEntitlementChanges) GetRemovedOk() (*[]Machineidentityuserentitlements, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *MachineidentityupdatedUserEntitlementChanges) SetRemoved(v []Machineidentityuserentitlements)`

SetRemoved sets Removed field to given value.

### HasRemoved

`func (o *MachineidentityupdatedUserEntitlementChanges) HasRemoved() bool`

HasRemoved returns a boolean if a field has been set.


