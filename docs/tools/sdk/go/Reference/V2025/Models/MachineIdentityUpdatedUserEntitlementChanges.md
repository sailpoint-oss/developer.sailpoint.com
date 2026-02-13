---
id: v2025-machine-identity-updated-user-entitlement-changes
title: MachineIdentityUpdatedUserEntitlementChanges
pagination_label: MachineIdentityUpdatedUserEntitlementChanges
sidebar_label: MachineIdentityUpdatedUserEntitlementChanges
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUpdatedUserEntitlementChanges', 'V2025MachineIdentityUpdatedUserEntitlementChanges'] 
slug: /tools/sdk/go/v2025/models/machine-identity-updated-user-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdatedUserEntitlementChanges', 'V2025MachineIdentityUpdatedUserEntitlementChanges']
---

# MachineIdentityUpdatedUserEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | Pointer to **string** | Name of the attribute that changed. | [optional] 
**Added** | Pointer to [**[]MachineIdentityUserEntitlements**](machine-identity-user-entitlements) | User entitlements that were added. | [optional] 
**Removed** | Pointer to [**[]MachineIdentityUserEntitlements**](machine-identity-user-entitlements) | User entitlements that were removed. | [optional] 

## Methods

### NewMachineIdentityUpdatedUserEntitlementChanges

`func NewMachineIdentityUpdatedUserEntitlementChanges() *MachineIdentityUpdatedUserEntitlementChanges`

NewMachineIdentityUpdatedUserEntitlementChanges instantiates a new MachineIdentityUpdatedUserEntitlementChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUpdatedUserEntitlementChangesWithDefaults

`func NewMachineIdentityUpdatedUserEntitlementChangesWithDefaults() *MachineIdentityUpdatedUserEntitlementChanges`

NewMachineIdentityUpdatedUserEntitlementChangesWithDefaults instantiates a new MachineIdentityUpdatedUserEntitlementChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *MachineIdentityUpdatedUserEntitlementChanges) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *MachineIdentityUpdatedUserEntitlementChanges) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *MachineIdentityUpdatedUserEntitlementChanges) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *MachineIdentityUpdatedUserEntitlementChanges) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAdded

`func (o *MachineIdentityUpdatedUserEntitlementChanges) GetAdded() []MachineIdentityUserEntitlements`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *MachineIdentityUpdatedUserEntitlementChanges) GetAddedOk() (*[]MachineIdentityUserEntitlements, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *MachineIdentityUpdatedUserEntitlementChanges) SetAdded(v []MachineIdentityUserEntitlements)`

SetAdded sets Added field to given value.

### HasAdded

`func (o *MachineIdentityUpdatedUserEntitlementChanges) HasAdded() bool`

HasAdded returns a boolean if a field has been set.

### GetRemoved

`func (o *MachineIdentityUpdatedUserEntitlementChanges) GetRemoved() []MachineIdentityUserEntitlements`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *MachineIdentityUpdatedUserEntitlementChanges) GetRemovedOk() (*[]MachineIdentityUserEntitlements, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *MachineIdentityUpdatedUserEntitlementChanges) SetRemoved(v []MachineIdentityUserEntitlements)`

SetRemoved sets Removed field to given value.

### HasRemoved

`func (o *MachineIdentityUpdatedUserEntitlementChanges) HasRemoved() bool`

HasRemoved returns a boolean if a field has been set.


