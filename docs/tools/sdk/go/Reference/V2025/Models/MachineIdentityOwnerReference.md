---
id: v2025-machine-identity-owner-reference
title: MachineIdentityOwnerReference
pagination_label: MachineIdentityOwnerReference
sidebar_label: MachineIdentityOwnerReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityOwnerReference', 'V2025MachineIdentityOwnerReference'] 
slug: /tools/sdk/go/v2025/models/machine-identity-owner-reference
tags: ['SDK', 'Software Development Kit', 'MachineIdentityOwnerReference', 'V2025MachineIdentityOwnerReference']
---

# MachineIdentityOwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Owner's type. | 
**Id** | **string** | Owner ID. | 
**Name** | **string** | Owner's display name. | 
**IsPrimary** | Pointer to **bool** | Indicates if this owner is the primary owner. | [optional] [default to false]

## Methods

### NewMachineIdentityOwnerReference

`func NewMachineIdentityOwnerReference(type_ string, id string, name string, ) *MachineIdentityOwnerReference`

NewMachineIdentityOwnerReference instantiates a new MachineIdentityOwnerReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityOwnerReferenceWithDefaults

`func NewMachineIdentityOwnerReferenceWithDefaults() *MachineIdentityOwnerReference`

NewMachineIdentityOwnerReferenceWithDefaults instantiates a new MachineIdentityOwnerReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MachineIdentityOwnerReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineIdentityOwnerReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineIdentityOwnerReference) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *MachineIdentityOwnerReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityOwnerReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityOwnerReference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MachineIdentityOwnerReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityOwnerReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityOwnerReference) SetName(v string)`

SetName sets Name field to given value.


### GetIsPrimary

`func (o *MachineIdentityOwnerReference) GetIsPrimary() bool`

GetIsPrimary returns the IsPrimary field if non-nil, zero value otherwise.

### GetIsPrimaryOk

`func (o *MachineIdentityOwnerReference) GetIsPrimaryOk() (*bool, bool)`

GetIsPrimaryOk returns a tuple with the IsPrimary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPrimary

`func (o *MachineIdentityOwnerReference) SetIsPrimary(v bool)`

SetIsPrimary sets IsPrimary field to given value.

### HasIsPrimary

`func (o *MachineIdentityOwnerReference) HasIsPrimary() bool`

HasIsPrimary returns a boolean if a field has been set.


