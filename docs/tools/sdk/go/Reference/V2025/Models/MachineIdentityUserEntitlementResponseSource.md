---
id: v2025-machine-identity-user-entitlement-response-source
title: MachineIdentityUserEntitlementResponseSource
pagination_label: MachineIdentityUserEntitlementResponseSource
sidebar_label: MachineIdentityUserEntitlementResponseSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUserEntitlementResponseSource', 'V2025MachineIdentityUserEntitlementResponseSource'] 
slug: /tools/sdk/go/v2025/models/machine-identity-user-entitlement-response-source
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUserEntitlementResponseSource', 'V2025MachineIdentityUserEntitlementResponseSource']
---

# MachineIdentityUserEntitlementResponseSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewMachineIdentityUserEntitlementResponseSource

`func NewMachineIdentityUserEntitlementResponseSource() *MachineIdentityUserEntitlementResponseSource`

NewMachineIdentityUserEntitlementResponseSource instantiates a new MachineIdentityUserEntitlementResponseSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUserEntitlementResponseSourceWithDefaults

`func NewMachineIdentityUserEntitlementResponseSourceWithDefaults() *MachineIdentityUserEntitlementResponseSource`

NewMachineIdentityUserEntitlementResponseSourceWithDefaults instantiates a new MachineIdentityUserEntitlementResponseSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MachineIdentityUserEntitlementResponseSource) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineIdentityUserEntitlementResponseSource) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineIdentityUserEntitlementResponseSource) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *MachineIdentityUserEntitlementResponseSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MachineIdentityUserEntitlementResponseSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityUserEntitlementResponseSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityUserEntitlementResponseSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityUserEntitlementResponseSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineIdentityUserEntitlementResponseSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityUserEntitlementResponseSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityUserEntitlementResponseSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineIdentityUserEntitlementResponseSource) HasName() bool`

HasName returns a boolean if a field has been set.


