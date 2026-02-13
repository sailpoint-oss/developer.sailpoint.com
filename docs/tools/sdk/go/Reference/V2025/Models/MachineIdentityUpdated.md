---
id: v2025-machine-identity-updated
title: MachineIdentityUpdated
pagination_label: MachineIdentityUpdated
sidebar_label: MachineIdentityUpdated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUpdated', 'V2025MachineIdentityUpdated'] 
slug: /tools/sdk/go/v2025/models/machine-identity-updated
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdated', 'V2025MachineIdentityUpdated']
---

# MachineIdentityUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineIdentityUpdatedMachineIdentity**](machine-identity-updated-machine-identity) |  | 
**MachineIdentityChangeTypes** | **[]string** | Types of changes that occurred to the machine identity. | 
**UserEntitlementChanges** | [**MachineIdentityUpdatedUserEntitlementChanges**](machine-identity-updated-user-entitlement-changes) |  | 
**OwnerChanges** | [**MachineIdentityUpdatedOwnerChanges**](machine-identity-updated-owner-changes) |  | 
**SingleValueAttributeChanges** | [**[]MachineIdentityUpdatedSingleValueAttributeChangesInner**](machine-identity-updated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | 

## Methods

### NewMachineIdentityUpdated

`func NewMachineIdentityUpdated(eventType string, machineIdentity MachineIdentityUpdatedMachineIdentity, machineIdentityChangeTypes []string, userEntitlementChanges MachineIdentityUpdatedUserEntitlementChanges, ownerChanges MachineIdentityUpdatedOwnerChanges, singleValueAttributeChanges []MachineIdentityUpdatedSingleValueAttributeChangesInner, ) *MachineIdentityUpdated`

NewMachineIdentityUpdated instantiates a new MachineIdentityUpdated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUpdatedWithDefaults

`func NewMachineIdentityUpdatedWithDefaults() *MachineIdentityUpdated`

NewMachineIdentityUpdatedWithDefaults instantiates a new MachineIdentityUpdated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *MachineIdentityUpdated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *MachineIdentityUpdated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *MachineIdentityUpdated) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *MachineIdentityUpdated) GetMachineIdentity() MachineIdentityUpdatedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *MachineIdentityUpdated) GetMachineIdentityOk() (*MachineIdentityUpdatedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *MachineIdentityUpdated) SetMachineIdentity(v MachineIdentityUpdatedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.


### GetMachineIdentityChangeTypes

`func (o *MachineIdentityUpdated) GetMachineIdentityChangeTypes() []string`

GetMachineIdentityChangeTypes returns the MachineIdentityChangeTypes field if non-nil, zero value otherwise.

### GetMachineIdentityChangeTypesOk

`func (o *MachineIdentityUpdated) GetMachineIdentityChangeTypesOk() (*[]string, bool)`

GetMachineIdentityChangeTypesOk returns a tuple with the MachineIdentityChangeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityChangeTypes

`func (o *MachineIdentityUpdated) SetMachineIdentityChangeTypes(v []string)`

SetMachineIdentityChangeTypes sets MachineIdentityChangeTypes field to given value.


### GetUserEntitlementChanges

`func (o *MachineIdentityUpdated) GetUserEntitlementChanges() MachineIdentityUpdatedUserEntitlementChanges`

GetUserEntitlementChanges returns the UserEntitlementChanges field if non-nil, zero value otherwise.

### GetUserEntitlementChangesOk

`func (o *MachineIdentityUpdated) GetUserEntitlementChangesOk() (*MachineIdentityUpdatedUserEntitlementChanges, bool)`

GetUserEntitlementChangesOk returns a tuple with the UserEntitlementChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlementChanges

`func (o *MachineIdentityUpdated) SetUserEntitlementChanges(v MachineIdentityUpdatedUserEntitlementChanges)`

SetUserEntitlementChanges sets UserEntitlementChanges field to given value.


### GetOwnerChanges

`func (o *MachineIdentityUpdated) GetOwnerChanges() MachineIdentityUpdatedOwnerChanges`

GetOwnerChanges returns the OwnerChanges field if non-nil, zero value otherwise.

### GetOwnerChangesOk

`func (o *MachineIdentityUpdated) GetOwnerChangesOk() (*MachineIdentityUpdatedOwnerChanges, bool)`

GetOwnerChangesOk returns a tuple with the OwnerChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerChanges

`func (o *MachineIdentityUpdated) SetOwnerChanges(v MachineIdentityUpdatedOwnerChanges)`

SetOwnerChanges sets OwnerChanges field to given value.


### GetSingleValueAttributeChanges

`func (o *MachineIdentityUpdated) GetSingleValueAttributeChanges() []MachineIdentityUpdatedSingleValueAttributeChangesInner`

GetSingleValueAttributeChanges returns the SingleValueAttributeChanges field if non-nil, zero value otherwise.

### GetSingleValueAttributeChangesOk

`func (o *MachineIdentityUpdated) GetSingleValueAttributeChangesOk() (*[]MachineIdentityUpdatedSingleValueAttributeChangesInner, bool)`

GetSingleValueAttributeChangesOk returns a tuple with the SingleValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleValueAttributeChanges

`func (o *MachineIdentityUpdated) SetSingleValueAttributeChanges(v []MachineIdentityUpdatedSingleValueAttributeChangesInner)`

SetSingleValueAttributeChanges sets SingleValueAttributeChanges field to given value.


### SetSingleValueAttributeChangesNil

`func (o *MachineIdentityUpdated) SetSingleValueAttributeChangesNil(b bool)`

 SetSingleValueAttributeChangesNil sets the value for SingleValueAttributeChanges to be an explicit nil

### UnsetSingleValueAttributeChanges
`func (o *MachineIdentityUpdated) UnsetSingleValueAttributeChanges()`

UnsetSingleValueAttributeChanges ensures that no value is present for SingleValueAttributeChanges, not even an explicit nil

