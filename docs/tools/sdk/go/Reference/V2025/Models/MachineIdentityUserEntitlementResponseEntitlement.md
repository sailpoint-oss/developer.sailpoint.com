---
id: v2025-machine-identity-user-entitlement-response-entitlement
title: MachineIdentityUserEntitlementResponseEntitlement
pagination_label: MachineIdentityUserEntitlementResponseEntitlement
sidebar_label: MachineIdentityUserEntitlementResponseEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUserEntitlementResponseEntitlement', 'V2025MachineIdentityUserEntitlementResponseEntitlement'] 
slug: /tools/sdk/go/v2025/models/machine-identity-user-entitlement-response-entitlement
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUserEntitlementResponseEntitlement', 'V2025MachineIdentityUserEntitlementResponseEntitlement']
---

# MachineIdentityUserEntitlementResponseEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewMachineIdentityUserEntitlementResponseEntitlement

`func NewMachineIdentityUserEntitlementResponseEntitlement() *MachineIdentityUserEntitlementResponseEntitlement`

NewMachineIdentityUserEntitlementResponseEntitlement instantiates a new MachineIdentityUserEntitlementResponseEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUserEntitlementResponseEntitlementWithDefaults

`func NewMachineIdentityUserEntitlementResponseEntitlementWithDefaults() *MachineIdentityUserEntitlementResponseEntitlement`

NewMachineIdentityUserEntitlementResponseEntitlementWithDefaults instantiates a new MachineIdentityUserEntitlementResponseEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MachineIdentityUserEntitlementResponseEntitlement) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineIdentityUserEntitlementResponseEntitlement) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineIdentityUserEntitlementResponseEntitlement) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *MachineIdentityUserEntitlementResponseEntitlement) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MachineIdentityUserEntitlementResponseEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityUserEntitlementResponseEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityUserEntitlementResponseEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityUserEntitlementResponseEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineIdentityUserEntitlementResponseEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityUserEntitlementResponseEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityUserEntitlementResponseEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineIdentityUserEntitlementResponseEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.


