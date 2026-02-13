---
id: v2025-machine-identity-source-reference
title: MachineIdentitySourceReference
pagination_label: MachineIdentitySourceReference
sidebar_label: MachineIdentitySourceReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentitySourceReference', 'V2025MachineIdentitySourceReference'] 
slug: /tools/sdk/go/v2025/models/machine-identity-source-reference
tags: ['SDK', 'Software Development Kit', 'MachineIdentitySourceReference', 'V2025MachineIdentitySourceReference']
---

# MachineIdentitySourceReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Source Type. | 
**Id** | **string** | Unique identifier. | 
**Name** | **string** | Display name. | 

## Methods

### NewMachineIdentitySourceReference

`func NewMachineIdentitySourceReference(type_ string, id string, name string, ) *MachineIdentitySourceReference`

NewMachineIdentitySourceReference instantiates a new MachineIdentitySourceReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentitySourceReferenceWithDefaults

`func NewMachineIdentitySourceReferenceWithDefaults() *MachineIdentitySourceReference`

NewMachineIdentitySourceReferenceWithDefaults instantiates a new MachineIdentitySourceReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MachineIdentitySourceReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineIdentitySourceReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineIdentitySourceReference) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *MachineIdentitySourceReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentitySourceReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentitySourceReference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MachineIdentitySourceReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentitySourceReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentitySourceReference) SetName(v string)`

SetName sets Name field to given value.



