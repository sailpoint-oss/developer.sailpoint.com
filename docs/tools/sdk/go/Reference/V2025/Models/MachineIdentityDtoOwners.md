---
id: v2025-machine-identity-dto-owners
title: MachineIdentityDtoOwners
pagination_label: MachineIdentityDtoOwners
sidebar_label: MachineIdentityDtoOwners
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityDtoOwners', 'V2025MachineIdentityDtoOwners'] 
slug: /tools/sdk/go/v2025/models/machine-identity-dto-owners
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDtoOwners', 'V2025MachineIdentityDtoOwners']
---

# MachineIdentityDtoOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | **map[string]interface{}** | Defines the identity which is selected as the primary owner | 
**SecondaryIdentities** | [**[]BaseReferenceDto**](base-reference-dto) | Defines the identities which are selected as secondary owners | 

## Methods

### NewMachineIdentityDtoOwners

`func NewMachineIdentityDtoOwners(primaryIdentity map[string]interface{}, secondaryIdentities []BaseReferenceDto, ) *MachineIdentityDtoOwners`

NewMachineIdentityDtoOwners instantiates a new MachineIdentityDtoOwners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityDtoOwnersWithDefaults

`func NewMachineIdentityDtoOwnersWithDefaults() *MachineIdentityDtoOwners`

NewMachineIdentityDtoOwnersWithDefaults instantiates a new MachineIdentityDtoOwners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryIdentity

`func (o *MachineIdentityDtoOwners) GetPrimaryIdentity() map[string]interface{}`

GetPrimaryIdentity returns the PrimaryIdentity field if non-nil, zero value otherwise.

### GetPrimaryIdentityOk

`func (o *MachineIdentityDtoOwners) GetPrimaryIdentityOk() (*map[string]interface{}, bool)`

GetPrimaryIdentityOk returns a tuple with the PrimaryIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryIdentity

`func (o *MachineIdentityDtoOwners) SetPrimaryIdentity(v map[string]interface{})`

SetPrimaryIdentity sets PrimaryIdentity field to given value.


### GetSecondaryIdentities

`func (o *MachineIdentityDtoOwners) GetSecondaryIdentities() []BaseReferenceDto`

GetSecondaryIdentities returns the SecondaryIdentities field if non-nil, zero value otherwise.

### GetSecondaryIdentitiesOk

`func (o *MachineIdentityDtoOwners) GetSecondaryIdentitiesOk() (*[]BaseReferenceDto, bool)`

GetSecondaryIdentitiesOk returns a tuple with the SecondaryIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryIdentities

`func (o *MachineIdentityDtoOwners) SetSecondaryIdentities(v []BaseReferenceDto)`

SetSecondaryIdentities sets SecondaryIdentities field to given value.



