---
id: v1-machineidentityupdated
title: Machineidentityupdated
pagination_label: Machineidentityupdated
sidebar_label: Machineidentityupdated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityupdated', 'V1Machineidentityupdated'] 
slug: /tools/sdk/go/triggers/models/machineidentityupdated
tags: ['SDK', 'Software Development Kit', 'Machineidentityupdated', 'V1Machineidentityupdated']
---

# Machineidentityupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineidentityupdatedMachineIdentity**](machineidentityupdated-machine-identity) |  | 
**MachineIdentityChangeTypes** | **[]string** | Types of changes that occurred to the machine identity. | 
**UserEntitlementChanges** | [**MachineidentityupdatedUserEntitlementChanges**](machineidentityupdated-user-entitlement-changes) |  | 
**OwnerChanges** | [**MachineidentityupdatedOwnerChanges**](machineidentityupdated-owner-changes) |  | 
**SingleValueAttributeChanges** | [**[]MachineidentityupdatedSingleValueAttributeChangesInner**](machineidentityupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | 

## Methods

### NewMachineidentityupdated

`func NewMachineidentityupdated(eventType string, machineIdentity MachineidentityupdatedMachineIdentity, machineIdentityChangeTypes []string, userEntitlementChanges MachineidentityupdatedUserEntitlementChanges, ownerChanges MachineidentityupdatedOwnerChanges, singleValueAttributeChanges []MachineidentityupdatedSingleValueAttributeChangesInner, ) *Machineidentityupdated`

NewMachineidentityupdated instantiates a new Machineidentityupdated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityupdatedWithDefaults

`func NewMachineidentityupdatedWithDefaults() *Machineidentityupdated`

NewMachineidentityupdatedWithDefaults instantiates a new Machineidentityupdated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *Machineidentityupdated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Machineidentityupdated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Machineidentityupdated) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *Machineidentityupdated) GetMachineIdentity() MachineidentityupdatedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *Machineidentityupdated) GetMachineIdentityOk() (*MachineidentityupdatedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *Machineidentityupdated) SetMachineIdentity(v MachineidentityupdatedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.


### GetMachineIdentityChangeTypes

`func (o *Machineidentityupdated) GetMachineIdentityChangeTypes() []string`

GetMachineIdentityChangeTypes returns the MachineIdentityChangeTypes field if non-nil, zero value otherwise.

### GetMachineIdentityChangeTypesOk

`func (o *Machineidentityupdated) GetMachineIdentityChangeTypesOk() (*[]string, bool)`

GetMachineIdentityChangeTypesOk returns a tuple with the MachineIdentityChangeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityChangeTypes

`func (o *Machineidentityupdated) SetMachineIdentityChangeTypes(v []string)`

SetMachineIdentityChangeTypes sets MachineIdentityChangeTypes field to given value.


### GetUserEntitlementChanges

`func (o *Machineidentityupdated) GetUserEntitlementChanges() MachineidentityupdatedUserEntitlementChanges`

GetUserEntitlementChanges returns the UserEntitlementChanges field if non-nil, zero value otherwise.

### GetUserEntitlementChangesOk

`func (o *Machineidentityupdated) GetUserEntitlementChangesOk() (*MachineidentityupdatedUserEntitlementChanges, bool)`

GetUserEntitlementChangesOk returns a tuple with the UserEntitlementChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlementChanges

`func (o *Machineidentityupdated) SetUserEntitlementChanges(v MachineidentityupdatedUserEntitlementChanges)`

SetUserEntitlementChanges sets UserEntitlementChanges field to given value.


### GetOwnerChanges

`func (o *Machineidentityupdated) GetOwnerChanges() MachineidentityupdatedOwnerChanges`

GetOwnerChanges returns the OwnerChanges field if non-nil, zero value otherwise.

### GetOwnerChangesOk

`func (o *Machineidentityupdated) GetOwnerChangesOk() (*MachineidentityupdatedOwnerChanges, bool)`

GetOwnerChangesOk returns a tuple with the OwnerChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerChanges

`func (o *Machineidentityupdated) SetOwnerChanges(v MachineidentityupdatedOwnerChanges)`

SetOwnerChanges sets OwnerChanges field to given value.


### GetSingleValueAttributeChanges

`func (o *Machineidentityupdated) GetSingleValueAttributeChanges() []MachineidentityupdatedSingleValueAttributeChangesInner`

GetSingleValueAttributeChanges returns the SingleValueAttributeChanges field if non-nil, zero value otherwise.

### GetSingleValueAttributeChangesOk

`func (o *Machineidentityupdated) GetSingleValueAttributeChangesOk() (*[]MachineidentityupdatedSingleValueAttributeChangesInner, bool)`

GetSingleValueAttributeChangesOk returns a tuple with the SingleValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleValueAttributeChanges

`func (o *Machineidentityupdated) SetSingleValueAttributeChanges(v []MachineidentityupdatedSingleValueAttributeChangesInner)`

SetSingleValueAttributeChanges sets SingleValueAttributeChanges field to given value.


### SetSingleValueAttributeChangesNil

`func (o *Machineidentityupdated) SetSingleValueAttributeChangesNil(b bool)`

 SetSingleValueAttributeChangesNil sets the value for SingleValueAttributeChanges to be an explicit nil

### UnsetSingleValueAttributeChanges
`func (o *Machineidentityupdated) UnsetSingleValueAttributeChanges()`

UnsetSingleValueAttributeChanges ensures that no value is present for SingleValueAttributeChanges, not even an explicit nil

